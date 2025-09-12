module Partas.Solid.UI.stories.Components.Toggle_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Toggle

[<PartasStorybook>]
let private meta = storybook<Toggle> {
    cases (fun props ->
        match props.variant with
        | Toggle.Variant.Default -> failwith "todo"
        | Outline when props.variant = Toggle.Variant.Default -> failwith "todo"
        | _ -> ()
        match props.size with
        | Default -> failwith "todo"
        | Small -> failwith "todo"
        | Large when props.size = Default -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Toggle().spread props {
            yield fun state ->
                Show(when' = (state.pressed()), fallback = unbox "I") {
                    "C"
                }
        })
    args "Default" (fun props -> ())
}


