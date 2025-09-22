module Partas.Solid.UI.stories.Components.DeltaBar_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DeltaBar> {
    render (fun props ->
        DeltaBar(class' = "w-[400px]").spread props
        )
    // todo, if extremely negative then marker gets tiny.
    // args (fun props -> props.class' <- "w-[400px]")
    args "Default" (fun props -> ())
    args "Increase" (fun props -> props.value <- 40)
}

