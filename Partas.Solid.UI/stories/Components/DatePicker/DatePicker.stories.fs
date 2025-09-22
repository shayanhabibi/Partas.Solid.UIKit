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
        match props.maxView with
        | Day -> failwith "todo"
        | Week -> failwith "todo"
        | Month -> failwith "todo"
        | Year when props.maxView = Day -> failwith "todo"
        | _ -> ()
        match props.minView with
        | Day -> failwith "todo"
        | Week -> failwith "todo"
        | Month -> failwith "todo"
        | Year when props.minView = Day -> failwith "todo"
        | _ -> ()
        match props.defaultView with
        | Day -> failwith "todo"
        | Week -> failwith "todo"
        | Month -> failwith "todo"
        | Year when props.defaultView = Day -> failwith "todo"
        | _ -> ()
        match props.view with
        | Day -> failwith "todo"
        | Week -> failwith "todo"
        | Month -> failwith "todo"
        | Year when props.view = Day -> failwith "todo"
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
        props.selectionMode <- SelectionMode.Single
        props.closeOnSelect <- false
        )
}

