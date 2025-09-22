module Partas.Solid.UI.stories.Components.DatePicker.DatePickerPrevTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerPrevTrigger> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

