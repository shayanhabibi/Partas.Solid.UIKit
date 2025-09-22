module Partas.Solid.UI.stories.Components.DatePicker.DatePickerTable_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerTable> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

