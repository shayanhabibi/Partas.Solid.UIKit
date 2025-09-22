module Partas.Solid.UI.stories.Components.Text.TextFieldLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TextFieldLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

