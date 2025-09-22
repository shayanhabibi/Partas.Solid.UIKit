module Partas.Solid.UI.stories.Components.Select.SelectDescription_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SelectDescription> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

