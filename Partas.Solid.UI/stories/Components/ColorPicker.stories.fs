module Partas.Solid.UI.stories.Components.ColorPicker_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ColorPicker> {
    render (fun props ->
        div(class' = "max-w-sm h-[320px]") {
            ColorPicker().spread props
        })
    args (fun props ->
        props.slots <- ColorPicker.Slots(null,null,null,null,null)
        )
    args "Default" (fun props -> ())
}
