module Partas.Solid.UI.stories.Components.Marquee_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Marquee> {
    render (fun props ->
        Marquee() {
            Button() { "Button 1" }
            Button() { "Button 2" }
            Button() { "Button 3" }
            Button() { "Button 4" }
            Button() { "Button 5" }
            Button() { "Button 6" }
        }
        )
    args "Default" (fun props -> ())
}

