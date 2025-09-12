module Partas.Solid.UI.stories.Components.Alert_storybook

open Partas.Solid
open Fable.Core
open Partas.Solid.Storybook
open Partas.Solid.UI
open Partas.Solid.UI.Alert


[<PartasStorybook>]
let private meta = storybook<Alert> {
    cases (fun alert ->
        match alert.variant with
        | Variant.Default -> failwith "todo"
        | Variant.Success -> failwith ""
        | Variant.Destructive when alert.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        )
    render (fun alert ->
        Alert().spread alert {
            AlertTitle() {
                "Title"
            }
            AlertDescription() {
                "Alert description"
            }
        }
        )
    args "Default" (fun alert -> ())
}
