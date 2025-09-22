module Partas.Solid.UI.stories.Components.Sheet.SheetFooter_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetFooter> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

