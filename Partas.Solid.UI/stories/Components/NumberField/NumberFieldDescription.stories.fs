module Partas.Solid.UI.stories.Components.NumberField.NumberFieldDescription_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NumberFieldDescription> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}
