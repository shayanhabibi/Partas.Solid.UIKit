module Partas.Solid.UI.stories.Components.ColorSwatch_stories
open Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Storybook
open Partas.Solid.UI.ColorSwatch

[<PartasStorybook>]
let private meta = storybook<ColorSwatch> {
    cases (fun props ->
        match props.size with
        | Small -> failwith "todo"
        | Diamond -> failwith ""
        | Default -> failwith "todo"
        | Large when props.size = Small -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        ColorSwatch().spread props
        )
    args (fun props ->
        props.parseCssVar <- "--primary"
        props.size <- ColorSwatch.Size.Default)
    args "Default" (fun props -> ( ))
    render "WithLabel" (fun props ->
        div() {
            "The color"
            ColorSwatch().spread props
            "Text is here to save the day"
        }
        )
    args "WithLabel" (fun props ->
        props.size <- ColorSwatch.Size.Small
        )
}

