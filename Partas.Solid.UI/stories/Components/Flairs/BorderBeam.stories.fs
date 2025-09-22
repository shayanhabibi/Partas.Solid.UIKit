module Partas.Solid.UI.stories.Components.BorderBeam_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<BorderBeam> {
    args (fun props ->
        props.anchor <- 90
        props.borderWidth <- 1.5
        props.colorFrom <- "#ffaa40"
        props.colorTo <- "#9c40ff"
        props.delay <- 0
        props.duration <- 15
        props.size <- 200
        )
    render (fun props ->
        div(class' = "relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg shadow-lg") {
            span(class' = "text-4xl md:text-6xl font-bold") { "Border Beam" }
            BorderBeam().spread props
        }
        )
    args "Default" (fun props -> ())
}
