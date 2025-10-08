module Partas.Solid.UI.stories.Components.InputGroup.InputGroupInput
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<InputGroupInput> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

