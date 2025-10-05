module Partas.Solid.UI.stories.Components.Alert_storybook

open Partas.Solid
open Fable.Core
open Partas.Solid.Storybook
open Partas.Solid.UI
open Partas.Solid.UI.Alert

let inline setVariant value = fun (alert: Alert) -> alert.variant <- value
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
    args "Primary" (setVariant Variant.Default)
    args "Default" (setVariant Variant.Default)
    args "Destructive" (setVariant Variant.Destructive)
    args "Success" (setVariant Variant.Success)
    render "Loading" (fun props ->
        Alert().spread props {
            Spinner()
            AlertTitle() {
                "Loading"
            }
            AlertDescription() {
                "Working on something good"
                br()
                "We'll let you know when it's done!"
            }
        })
    
}
