module Partas.Solid.UI.stories.Components.InputGroup.InputGroupButton_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<InputGroupButton> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

