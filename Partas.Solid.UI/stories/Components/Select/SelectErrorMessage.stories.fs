module Partas.Solid.UI.stories.Components.Select.SelectErrorMessage_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SelectErrorMessage> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

