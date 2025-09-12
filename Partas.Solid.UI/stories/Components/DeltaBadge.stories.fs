module Partas.Solid.UI.stories.Components.DeltaBadge_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Badge
open Partas.Solid.UI.BadgeDelta

[<PartasStorybook>]
let private meta = storybook<BadgeDelta> {
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
    cases (fun badge ->
        match badge.deltaType with
        | Type.Increase -> failwith "todo"
        | Type.ModerateIncrease -> failwith "todo"
        | Type.Unchanged -> failwith "todo"
        | Type.ModerateDecrease -> failwith "todo"
        | Type.Decrease when badge.deltaType = Type.Increase -> failwith "todo"
        | _ -> ()
        )
    render (fun badge ->
        BadgeDelta().spread badge {
            "Delta"
        }
        )
    args (fun badge ->
        badge.variant <- Variant.Default
        badge.deltaType <- Type.Unchanged
        badge.round <- false)
    args "Default" (fun badge ->
        badge.variant <- Variant.Default
        badge.deltaType <- Type.Unchanged
        badge.round <- false)
}

