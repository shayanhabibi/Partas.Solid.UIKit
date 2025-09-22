module Partas.Solid.UI.stories.Components.Select.SelectHiddenSelect_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SelectHiddenSelect> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

