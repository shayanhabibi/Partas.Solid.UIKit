module Partas.Solid.UI.stories.Components.Button_stories


open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Button
open Partas.Solid.Lucide

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
        btn.onClick <- !!Storybook.fn()
        )
    args "Default" (fun btn ->
        btn.variant <- Variant.Default
        btn.size <- Size.Default
        )
    render (fun btn ->
        Button().spread btn {
            "Button"
        }
        )
    render "Variants" (fun btn ->
        div(class' = "flex justify-between gap-4") {
            For(each = [|
                Size.Icon
                Size.Small
                Size.Default
                Size.Large
            |]) {yield fun size _ ->
                div(class' = "flex flex-col gap-2 items-center") {
                    Label() { !!size }
                    Separator()
                    For(each = [|
                        Variant.Default
                        Variant.Secondary
                        Variant.Outline
                        Variant.Destructive
                        Variant.Ghost
                        Variant.Link
                    |]) {
                        yield fun variant _ ->
                            Button(size = size, variant = variant) {
                                if size = Size.Icon then
                                    Lucide.Aperture()
                                else
                                    !!variant
                            }
                    }
                }
            }
        }
        )
}
