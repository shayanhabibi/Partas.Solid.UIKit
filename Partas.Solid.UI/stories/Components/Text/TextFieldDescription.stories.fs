module Partas.Solid.UI.stories.Components.Text.TextFieldDescription_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TextFieldDescription> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

