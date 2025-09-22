module Partas.Solid.UI.stories.Components.Badge_stories
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid
open Partas.Solid.UI.Badge

let inline setVariant value = fun (badge: Badge) -> badge.variant <- value
[<PartasStorybook>]
let private meta = storybook<Badge> {
    cases (fun badge ->
        match badge.variant with
        | Variant.Default -> failwith "todo"
        | Variant.Secondary -> failwith "todo"
        | Variant.Outline -> failwith "todo"
        | Variant.Success -> failwith "todo"
        | Variant.Warning -> failwith "todo"
        | Variant.Error when badge.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        )
    render (fun badge ->
        Badge().spread badge {
            "Badge"
        }
        )
    args (fun badge -> badge.variant <- Variant.Default)
    args "Default" (setVariant Variant.Default)
    args "Rounded" (fun badge -> badge.round <- true)
    render "Variants" (fun props ->
        div(class' = "flex flex-col gap-4") {
            For(each = [|
                Variant.Default
                Variant.Secondary
                Variant.Outline
                Variant.Warning
                Variant.Error
            |]) {yield fun item _ ->
                div(class' = "flex gap-2") {
                    Badge(variant = item) { item.ToString() }
                    Badge(variant = item, round = true) { "Rounded" }
                }
                }
        }
        )
}

