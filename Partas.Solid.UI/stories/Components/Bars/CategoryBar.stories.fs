module Partas.Solid.UI.stories.Components.CategoryBar_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CategoryBar> {
    render (fun props ->
        CategoryBar(class' = "mx-auto max-w-sm").spread props
        )
    args "Default" (fun props ->
        props.values <- [| 10.; 10.; 20. |]
        props.marker <- 17.
        props.tooltip <- "68"
        props.showAnimation <- true
        )
}

