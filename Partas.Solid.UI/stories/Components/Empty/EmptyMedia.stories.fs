module Partas.Solid.UI.stories.Components.Empty.EmptyMedia_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.EmptyMedia

[<PartasStorybook>]
let private meta = storybook<EmptyMedia> {
    cases (fun props ->
        match props.variant with
        | Default -> failwith "todo"
        | Icon when props.variant = Default -> failwith "todo"
        | _ -> ()
        )
    args "Default" ignore
    tags [| "!autodocs" |]
}

