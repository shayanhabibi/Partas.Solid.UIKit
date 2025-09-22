module Partas.Solid.UI.stories.Components.Text.TextFieldInput_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TextFieldInput> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}
