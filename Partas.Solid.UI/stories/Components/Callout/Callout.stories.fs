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
            CalloutTitle() {
                "Callout title"
            }
            CalloutContent() {
                "Callout description"
            }
        })
    render "Variants" (fun props ->
        div(class' = "max-w-md flex flex-col gap-4") { 
            For(each = [|
                Variant.Default
                Variant.Success
                Variant.Warning
                Variant.Error
            |]) {
                yield fun variant _ ->
                    Callout(variant = variant) {
                        CalloutTitle() {
                            "Callout title"
                        }
                        CalloutContent() {
                            unbox variant
                        }
                    }
            }
        }
        )
    args "Default" (fun callout ->
        callout.variant <- Variant.Default)
}

