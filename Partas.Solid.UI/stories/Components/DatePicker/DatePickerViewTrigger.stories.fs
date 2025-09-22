module Partas.Solid.UI.stories.Components.DatePicker.DatePickerViewTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerViewTrigger> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

