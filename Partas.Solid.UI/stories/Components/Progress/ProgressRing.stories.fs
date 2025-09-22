module Partas.Solid.UI.stories.Components.ProgressRing_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Progress
open Partas.Solid.UI.progressCircle

[<PartasStorybook>]
let private meta = storybook<ProgressCircle> {
    cases (fun props ->
        match props.size with
        | Xs -> failwith "todo"
        | Sm -> failwith "todo"
        | Md -> failwith "todo"
        | Lg -> failwith "todo"
        | Xl when props.size = Xs -> failwith "todo"
        | _ -> ()
        match props.variant with
        | Default -> failwith "todo"
        | Primary -> failwith "todo"
        | Neutral -> failwith "todo"
        | Warning -> failwith "todo"
        | Error -> failwith "todo"
        | Success when props.variant = Default -> failwith "todo"
        | _ -> ()
        )
    render(fun props ->
        ProgressCircle().spread props)
    args "Default" (fun props ->
        props.value <- 75)
    args "Radius" (fun props ->
        props.radius <- 15
        props.value <- 75)
    tags [| "!autodocs" |]
}


