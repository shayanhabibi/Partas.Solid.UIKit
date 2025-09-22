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
        div(class' = "flex flex-row place-items-center gap-2") {
            Checkbox().spread checkbox
            Label() { "Checkbox Text" }
        })
    render "ConnectedLabel" (fun props ->
        div(class' = "flex flex-row place-items-center gap-2") {
            Checkbox(id = "checkbox1").spread props
            Label(for' = "checkbox1-input") { "Click me!" }
        })
    render "Validation" (fun props ->
        let value,setValue = createSignal(false)
        div(class' = "flex flex-row place-items-center gap-2") {
            Checkbox(id = "checkbox2",
                     onChange = fun value -> value |> unbox |> setValue
                     ,checked' = value()
                     ,validationState =
                         if value() then ValidationState.Invalid
                         else ValidationState.Valid)
            Label(for' = "checkbox2-input") { "Don't want to be checked!" }
        }
        )
    args "Default" (fun checkbox ->
        ())
}


