module Partas.Solid.UI.stories.Components.NumberField_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Fable.Core.JsInterop
[<PartasStorybook>]
let private meta = storybook<NumberField> {
    render (fun props ->
        NumberField(class' = "w-36").spread props {
            NumberFieldGroup() {
                NumberFieldInput()
                NumberFieldIncrementTrigger()
                NumberFieldDecrementTrigger()
            }
        })
    args "Default" (fun props ->
        props.defaultValue <- !!30)
}

