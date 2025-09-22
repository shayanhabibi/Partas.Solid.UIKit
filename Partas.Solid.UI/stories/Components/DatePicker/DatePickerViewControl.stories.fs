module Partas.Solid.UI.stories.Components.DatePicker.DatePickerViewControl_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerViewControl> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

