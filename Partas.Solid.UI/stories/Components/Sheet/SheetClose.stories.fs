module Partas.Solid.UI.stories.Components.Sheet.SheetClose_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetClose> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

