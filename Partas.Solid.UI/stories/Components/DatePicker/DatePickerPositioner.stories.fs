module Partas.Solid.UI.stories.Components.DatePicker.DatePickerPositioner_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerPositioner> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

