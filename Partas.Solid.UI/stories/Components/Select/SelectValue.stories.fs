module Partas.Solid.UI.stories.Components.Select.SelectValue_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SelectValue> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

