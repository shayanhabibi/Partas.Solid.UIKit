module Partas.Solid.UI.stories.Components.Checkbox_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Checkbox> {
    cases (fun props ->
        match props.validationState with
        | Valid -> failwith "todo"
        | Invalid when props.validationState = Valid -> failwith "todo"
        | _ -> ()
        )
    render (fun checkbox ->
        div(class' = "flex flex-row") {
            Checkbox().spread checkbox
            "Checkbox text"
        })
    args "Default" (fun checkbox ->
        ())
}


