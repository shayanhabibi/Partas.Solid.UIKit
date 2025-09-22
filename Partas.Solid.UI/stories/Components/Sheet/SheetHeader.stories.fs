module Partas.Solid.UI.stories.Components.Sheet.SheetHeader_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetHeader> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

