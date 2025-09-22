module Partas.Solid.UI.stories.Components.Sheet.SheetDescription_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetDescription> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

