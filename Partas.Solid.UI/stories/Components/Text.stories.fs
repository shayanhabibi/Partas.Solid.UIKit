module Partas.Solid.UI.stories.Components.Text_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TextField> {
    render (fun props ->
        TextField().spread props {
            TextFieldInput()
        })
    args "Default" (fun props -> ())
}

