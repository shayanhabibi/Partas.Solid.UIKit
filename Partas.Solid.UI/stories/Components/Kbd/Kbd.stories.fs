module Partas.Solid.UI.stories.Components.Kbd.Kbd_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Kbd> {
    render (fun props ->
        Kbd().spread props {
            "B"
            "C"
        }
        )
    args "Default" (fun props ->
        ()
        )
}

