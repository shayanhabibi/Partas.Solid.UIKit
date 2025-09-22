module Partas.Solid.UI.stories.Components.Progress_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.Progress

[<PartasStorybook>]
let private meta = storybook<Progress> {
    cases (fun props ->
        match props.variant with
        | Default -> failwith "todo"
        | Primary -> failwith "todo"
        | Neutral -> failwith "todo"
        | Warning -> failwith "todo"
        | Error -> failwith "todo"
        | Success when props.variant = Progress.Default -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Progress(class' = "w-[300px] space-y-1", getValueLabel = fun value -> $"{value.value} of {value.max} tasks completed.").spread props {
            div(class' = "flex justify-between") {
                ProgressLabel() { "Processing..." }
                ProgressValueLabel()
            }
        }
        )
    // todo - indeterminate animation
    args (fun props ->
        props.maxValue <- 10
        props.minValue <- 0
        props.value <- 3)
    args "Default" (fun props -> props.value <- 4)
    args "Indeterminate" (fun props ->
        props.value <- 3
        props.indeterminate <- true
        )
}


