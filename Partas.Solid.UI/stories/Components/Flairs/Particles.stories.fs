module Partas.Solid.UI.stories.Components.Flairs.Particles_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<Particles> {
    tags [| "!autodocs" |]
    render (fun props ->
        Particles().spread props)
    args "Default" (fun props -> props.refresh <- true)
}


