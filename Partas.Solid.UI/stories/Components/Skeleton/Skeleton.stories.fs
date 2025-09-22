module Partas.Solid.UI.stories.Components.Skeleton_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Skeleton> {
    render (fun props ->
        Skeleton().spread props)
    args "Default" (fun props ->
        props.height <- 16
        props.width <- 200
        props.radius <- 10)
}

