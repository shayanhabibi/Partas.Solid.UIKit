module Partas.Solid.UI.stories.Components.NumberField.NumberFieldGroup_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NumberFieldGroup> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

