module Partas.Solid.UI.stories.Components.OtpField_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<OtpField> {
    render (fun props ->
        OtpField().spread props {
            OtpFieldInput()
            OtpFieldGroup() {
                OtpFieldSlot(index = 0)
                OtpFieldSlot(index = 1)
                OtpFieldSlot(index = 2)
            }
            OtpFieldSeparator()
            OtpFieldGroup() {
                OtpFieldSlot(index = 3)
                OtpFieldSlot(index = 4)
                OtpFieldSlot(index = 5)
            }
        })
    args "Default" (fun props ->
        props.maxLength <- 6)
}

