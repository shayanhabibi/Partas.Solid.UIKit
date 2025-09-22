module Partas.Solid.UI.stories.Components.Sheet.SheetContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

