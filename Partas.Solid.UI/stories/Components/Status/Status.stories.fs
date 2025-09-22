module Partas.Solid.UI.stories.Components.Status_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Badge
open Partas.Solid.UI.Status

[<PartasStorybook>]
let private meta = storybook<Status> {
    cases (fun props ->
        match props.kind with
        | Online -> failwith "todo"
        | Offline -> failwith "todo"
        | Maintenance -> failwith "todo"
        | Degraded when props.kind = Online -> failwith "todo"
        | _ -> ()
        match props.variant with
        | Variant.Default -> failwith "todo"
        | Variant.Secondary -> failwith "todo"
        | Variant.Outline -> failwith "todo"
        | Variant.Success -> failwith "todo"
        | Variant.Warning -> failwith "todo"
        | Variant.Error when props.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        
        )
    render (fun props ->
        div(class' = "flex gap-2") {
            Status().spread props {
                StatusIndicator()
                StatusLabel()
            }
        })
    args "Default" (fun props -> ())
}

