module Partas.Solid.UI.stories.Components.Badge_stories
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid
open Partas.Solid.UI.Badge

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
    args "Default" (fun badge -> ())
    args "Rounded" (fun badge -> badge.round <- true)
}

