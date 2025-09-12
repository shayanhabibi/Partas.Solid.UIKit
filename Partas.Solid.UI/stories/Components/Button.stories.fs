module Partas.Solid.UI.stories.Components.Button_stories


open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Button

[<PartasStorybook>]
let private meta = storybook<Button> {
    cases (fun btn ->
        match btn.variant with
        | Variant.Default -> failwith "todo"
        | Variant.Outline -> failwith "todo"
        | Variant.Ghost -> failwith "todo"
        | Variant.Link -> failwith "todo"
        | Variant.Destructive -> failwith "todo"
        | Variant.Secondary when btn.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        )
    cases(fun btn ->
        match btn.size with
        | Size.Large -> failwith "todo"
        | Size.Small -> failwith "Todo"
        | Size.Default -> failwith "todo"
        | Size.Icon when btn.size = Size.Large -> failwith "todo"
        | _ -> ()
        )
    args (fun btn ->
        btn.disabled <- false
        )
    args "Default" (fun btn ->
        btn.variant <- Variant.Default
        btn.size <- Size.Default
        )
    args "Destructive" (fun btn ->
        btn.variant <- Variant.Destructive)
    render (fun btn ->
        Button().spread btn {
            "Button"
        }
        )
}
