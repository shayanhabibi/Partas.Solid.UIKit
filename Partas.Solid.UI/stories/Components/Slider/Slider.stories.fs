module Partas.Solid.UI.stories.Components.Slider_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Slider> {
    cases (fun props ->
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        match props.validationState with
        | Valid -> failwith "todo"
        | Invalid when props.validationState  = Valid -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Slider(getValueLabel = fun props -> $"${props.values[0]} - ${props.values[1]}"
               ,class' = "data-[orientation=horizontal]:w-[300px] space-y-3 \
                          data-[orientation=vertical]:h-[300px]").spread props {
            div(class' = "flex w-full justify-between") {
                SliderLabel() { "Money" }
                SliderValueLabel()
            }
            SliderControl() {
                SliderTrack()
                SliderThumb()
                SliderThumb()
            }
        })
    args "Default" (fun props ->
        props.minValue <- 10
        props.maxValue <- 2000
        props.defaultValue <- [|20;500|])
}

