module Partas.Solid.UI.stories.Components.Sheet.SheetTitle_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SheetTitle> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

