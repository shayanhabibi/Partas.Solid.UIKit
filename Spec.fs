module Build.Spec

open EasyBuild.FileSystemProvider

type Files = AbsoluteFileSystem<__SOURCE_DIRECTORY__>

[<Literal>]
let Prelude = "prelude"
[<Literal>]
let Clean = "clean"
[<Literal>]
let GitNet = "gitnet"
[<Literal>]
let Build = "build"
[<Literal>]
let Pack = "pack"
[<Literal>]
let GitPush = "GitPush"
[<Literal>]
let Publish = "publish"

module Args =
    let mutable apiKey: string option = None
    let mutable local: bool = false
    let mutable parallelise: bool = false
    let setArgs args =
        let containsArg arg =
            args |> Array.contains arg
        let getArgValue arg =
            args
            |> Array.tryFindIndex ((=) arg)
            |> Option.map ((+) 1)
            |> Option.bind(fun idx -> Array.tryItem idx args)
        parallelise <- containsArg "--parallel"
        apiKey <- getArgValue "--nuget-api-key"
        local <- containsArg "--local"

open Fake.IO.Globbing.Operators
let sourceFiles =
    !! "**/*.fs"
    -- "packages/**/*.*"
    -- ".fake/**/*.*"
    -- "**/obj/**/*.*"
    -- "**/AssemblyInfo.fs"

[<Literal>]
let GitHubUsername = "GitHub Action"
[<Literal>]
let GitHubEmail = "41898282+github-actions[bot]@users.noreply.github.com"
