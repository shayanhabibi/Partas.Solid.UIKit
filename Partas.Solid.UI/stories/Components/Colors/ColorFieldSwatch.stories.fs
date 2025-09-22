module Partas.Solid.UI.stories.Components.ColorFieldSwatch_stories

open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.ColorFieldSwatch

[<PartasStorybook>]
let private meta = storybook<ColorFieldSwatch> {
    cases (fun props ->
        match props.swatchType with
        | SwatchType.Left -> failwith "todo"
        | SwatchType.Right -> failwith "todo"
        | SwatchType.None when props.swatchType = SwatchType.Left -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        div() {
            ColorFieldSwatch().spread props
        })
    args "Default" (fun props ->
        props.label <- "Default")
}

