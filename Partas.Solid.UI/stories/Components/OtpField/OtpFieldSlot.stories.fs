module Partas.Solid.UI.stories.Components.OtpField.OtpFieldSlot_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<OtpFieldSlot> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

