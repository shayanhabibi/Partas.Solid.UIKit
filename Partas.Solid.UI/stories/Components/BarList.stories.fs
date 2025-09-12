module Partas.Solid.UI.stories.Components.BarList_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.barList

let private data = [|
    Bar(value = 324, name = "Instagram")
    Bar(value = 174, name = "X")
    Bar(value = 1237, name = "Youtube")
|]
[<PartasStorybook>]
let private meta = storybook<BarList> {
    cases (fun props ->
        match props.sortOrder with
        | Ascending -> failwith "todo"
        | Descending -> failwith "todo"
        | None when props.sortOrder = SortOrder.Ascending -> failwith "todo"
        | _ -> ())
    render (fun props -> BarList().spread props )
    args (fun props -> props.data <- data)
    args "Default" (fun props -> ())
    args "Ascending" (fun props -> props.sortOrder <- Ascending)
    args "Descending" (fun props -> props.sortOrder <- Descending)
}

