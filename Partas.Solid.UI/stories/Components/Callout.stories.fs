module Partas.Solid.UI.stories.Components.Callout_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Callout

[<PartasStorybook>]
let private meta = storybook<Callout> {
    cases (fun callout ->
        match callout.variant with
        | Variant.Default -> failwith "todo"
        | Variant.Success -> failwith "todo"
        | Variant.Warning -> failwith "todo"
        | Variant.Error when callout.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        )
    render (fun callout ->
        Callout().spread callout {
            CalloutContent() {
                CalloutTitle() {
                    "Callout title"
                }
                "Callout description?"
            }
        })
    args "Default" (fun callout ->
        callout.variant <- Variant.Default)
}

