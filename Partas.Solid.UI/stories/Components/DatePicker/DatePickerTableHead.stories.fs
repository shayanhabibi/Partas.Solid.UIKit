module Partas.Solid.UI.stories.Components.DatePicker.DatePickerTableHead_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerTableHead> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

