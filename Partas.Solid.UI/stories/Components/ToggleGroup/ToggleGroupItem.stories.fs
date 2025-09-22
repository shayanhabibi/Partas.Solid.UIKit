module Partas.Solid.UI.stories.Components.ToggleGroup.ToggleGroupItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ToggleGroupItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

