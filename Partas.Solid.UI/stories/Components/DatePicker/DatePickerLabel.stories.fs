module Partas.Solid.UI.stories.Components.DatePicker.DatePickerLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

