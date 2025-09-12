module Partas.Solid.UI.stories.Components.Label_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Label> {
    render (fun props ->
        Fragment() {
            Button(variant = Button.Variant.Ghost, size = Button.Size.Icon) { "I" }
            Label().spread props { "A Label using the Label Component" }
        } )
    args "Default" (fun props -> ())
    render "Disabled" (fun props ->
        div() {
            Button(variant = Button.Variant.Ghost, size = Button.Size.Icon, disabled = true) { "I" }
            Label().spread props { "A Label using the Label Component" }
        })
}

