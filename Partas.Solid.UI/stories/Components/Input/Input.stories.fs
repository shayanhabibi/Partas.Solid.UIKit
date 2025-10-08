module Partas.Solid.UI.stories.Components.Input.Input_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<Input> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

