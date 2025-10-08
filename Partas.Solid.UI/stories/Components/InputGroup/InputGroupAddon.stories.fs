module Partas.Solid.UI.stories.Components.InputGroup.InputGroupAddon_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<InputGroupAddon> {
    args "Default" ignore
    tags [| "!autodocs" |]
}
