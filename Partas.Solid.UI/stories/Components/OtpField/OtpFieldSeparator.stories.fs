module Partas.Solid.UI.stories.Components.OtpField.OtpFieldSeparator_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<OtpFieldSeparator> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}
