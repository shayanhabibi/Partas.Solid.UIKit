module Partas.Solid.UI.stories.Components.ToggleGroup_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Toggle

[<PartasStorybook>]
let private meta = storybook<ToggleGroup> {
    cases (fun toggleGroup ->
        match toggleGroup.selectionMode with
        | Kobalte.Enums.SelectionMode.None -> failwith "todo"
        | Kobalte.Enums.SelectionMode.Single -> failwith "todo"
        | Kobalte.Enums.SelectionMode.Multiple when toggleGroup.selectionMode = SelectionMode.None -> failwith "todo"
        | _ -> ()
        match toggleGroup.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when toggleGroup.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        match toggleGroup.variant with
        | ToggleGroup.Variant.Default -> failwith "todo"
        | Outline when toggleGroup.variant = ToggleGroup.Variant.Default -> failwith "todo"
        | _ -> ()
        match toggleGroup.size with
        | Default -> failwith "todo"
        | Small -> failwith "todo"
        | Large when toggleGroup.size  = Default -> failwith "todo"
        | _ -> ()
        )
    args "Default" (fun props ->
        props.selectionMode <- Kobalte.Enums.SelectionMode.Single )
    render (fun props ->
        Partas.Solid.UI.ToggleGroup().spread props {
            ToggleGroupItem(value = "a") { "A" }
            ToggleGroupItem(value = "b") { "B" }
            ToggleGroupItem(value = "c") { "C" }
        })
}
// TODO - bug with variant/size to do with context?

