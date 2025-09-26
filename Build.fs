module Build.Build
open System.IO
open Build.Spec
open Fake.Core
open Partas.GitNet
open Partas.GitNet.RepoCracker

Helpers.initializeContext()
let gitnetConfig =
    let ignorePath = fun (str: string) -> Path.GetFileNameWithoutExtension(str)
    {
        GitNetConfig.initFSharp with
            RepositoryPath = __SOURCE_DIRECTORY__
            Output.Ignore = Defaults.ignoreCommits @ [
                IgnoreCommit.SkipCi
            ]
            Bump.DefaultBumpStrategy = ForceBumpStrategy.All
            ProjectType =
                {
                    ProjectFSharpConfig.init with
                        IgnoredProjects = List.map ignorePath [
                            Files.``Build.fsproj``
                        ]
                }
                |> Some
                |> ProjectType.FSharp
    }
let runtime =
    lazy
    new GitNetRuntime(gitnetConfig)
let projects =
    lazy
    runtime.Value
    |> _.CrackRepo
    |> Seq.choose (CrackedProject.getFSharp >> ValueOption.toOption)
    |> Seq.toList

open Fake.Tools
Target.create Prelude <| fun args ->
    // Hot start cracking
    task {
        projects.Value
        |> ignore
    } |> ignore
    let isLocal =
        Args.local
    if not isLocal then
        [
            $"config --local user.email \"{GitHubEmail}\""
            $"config --local user.name \"{GitHubUsername}\""
        ]
        |> List.iter (Git.CommandHelper.directRunGitCommandAndFail Files.``.``)

open Fake.IO.Globbing.Operators
open Fake.IO
//cleanup dirs
Target.create Clean <| fun _ ->
    !! "**/**/bin"
    -- "bin"
    ++ "temp/"
    |> Shell.cleanDirs

Target.create GitNet <| fun args ->
    let runtime = runtime.Value
    if Args.local then
        let bumps,content = runtime.DryRun()
        bumps
        |> Seq.map (fun keyVal ->
            (keyVal.Key, keyVal.Value.SemVer.ToString(), keyVal.Value.ToString())
            |||> sprintf "Scope: %s | Next: %s | SepochSemver: %s")
        |> Trace.logItems "GitNet"
        runtime.WriteToOutput content
        |> ignore
    else
        runtime.Run(GitHubUsername, GitHubEmail)
        |> ignore

open Fake.DotNet

Target.create Build <| fun _ ->
    projects.Value
    |> List.iter (fun project ->
        DotNet.build
            (fun p ->
                {
                    p with
                        Configuration = DotNet.BuildConfiguration.Release
                        DotNet.BuildOptions.MSBuildParams.DisableInternalBinLog = true
                })
            project.ProjectFileName
        )

Target.create Pack <| fun _ ->
    projects.Value
    |> List.toArray
    |> (if Args.parallelise
        then Array.Parallel.iter
        else Array.iter) (fun project ->
        project.ProjectFileName
        |> DotNet.pack (fun p ->
            {
                p with
                    NoRestore = true
                    OutputPath = Some "bin"
                    DotNet.PackOptions.MSBuildParams.DisableInternalBinLog = true
            }
            )
        )
    
Target.create GitPush <| fun _ ->
    Git.Branches.push Files.``.``
    Git.CommandHelper.directRunGitCommandAndFail Files.``.`` "push --tags origin"

Target.create Publish <| fun _ ->
    !!"bin/*.nupkg"
    |> Seq.toArray
    |> (if Args.parallelise
        then Array.Parallel.iter
        else Array.iter) (fun path ->
        path
        |> DotNet.nugetPush ( fun p ->
            {
                p with
                    DotNet.NuGetPushOptions.PushParams.Source = Some "https://api.nuget.org/v3/index.json"
                    DotNet.NuGetPushOptions.Common.CustomParams = Some "--skip-duplicate"
                    DotNet.NuGetPushOptions.PushParams.ApiKey = Args.apiKey
            }
            )
        )

open Fake.Core.TargetOperators

let dependencies = [
    Prelude
    ==> Clean
    ==> GitNet
    ==> Build
    ==> Pack
    ==> GitPush
    ==> Publish
]

[<EntryPoint>]
let main args =
    args |> Args.setArgs
    try
        args[0] |> Target.runOrDefaultWithArguments
        0
    with e ->
        printfn $"%A{e}"
        1
