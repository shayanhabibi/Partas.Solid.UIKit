module Partas.Solid.UI.stories.Components.DatePicker_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.ArkUI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DatePickerRoot> {
    cases (fun props ->
        match props.selectionMode with
        | Single when props.selectionMode <> Single -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        DatePickerRoot().spread props {
            DatePickerContent(class' = "shadow-none") {
                DatePickerDayView()
                DatePickerMonthView()
                DatePickerYearView()
            }
        })
    args "Default" (fun props ->
        props.defaultOpen <- true
        props.selectionMode <- SelectionMode.Single)
}

