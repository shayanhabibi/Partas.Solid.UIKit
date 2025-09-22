module Partas.Solid.UI.stories.Components.NumberField.NumberFieldInput_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NumberFieldInput> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

