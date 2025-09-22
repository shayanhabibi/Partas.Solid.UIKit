module Partas.Solid.UI.stories.Components.Spinner_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Spinner

[<PartasStorybook>]
let private meta = storybook<Spinner> {
    args (fun props ->
        props.size <- 24
        props.color <- "var(--color-primary)")
    cases (fun props ->
        match props.variant with
        | Default -> failwith "todo"
        | Circle -> failwith "todo"
        | PinWheel -> failwith "todo"
        | CircleFilled -> failwith "todo"
        | Ellipsis -> failwith "todo"
        | Ring -> failwith "todo"
        | Bars -> failwith "todo"
        | Infinite when props.variant = Variant.Default -> failwith "todo"
        | _ -> ()
        )
    args "Default" (fun props -> ())
    args "CustomColor" (fun props ->
        props.color <- "var(--color-blue-500)")
    args "StrokeWidth" (fun props ->
        props.strokeWidth <- 3
        )
    render "Variants" (fun props ->
        div(class' = "grid grid-cols-4 gap-4") {
            For(each = [|
                Spinner.Variant.Default
                Spinner.Variant.Bars
                Spinner.Variant.Circle
                Spinner.Variant.CircleFilled
                Spinner.Variant.Ellipsis
                Spinner.Variant.Infinite
                Spinner.Variant.PinWheel
                Spinner.Variant.Ring
            |]) {yield fun item _ ->
                Spinner(variant = item).spread props
            }
        }
        )
}
