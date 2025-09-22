module Partas.Solid.UI.stories.Components.Text_stories
open Partas.Solid.Kobalte
open Fable.Core
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TextField> {
    render (fun props ->
        TextField().spread props {
            TextFieldInput()
        })
    args "Default" (fun props -> ())
    render "Validation" (fun props ->
        let validationStatus, setValidationStatus = createSignal<ValidationState>(JS.undefined)
        let value,setValue = createSignal<string>("")
        let validateInput () =
            if value() = "valid" then
                setValidationStatus ValidationState.Valid
            else
                setValidationStatus ValidationState.Invalid
        let handleInput = fun value ->
            setValue value
            validateInput()
        TextField(validationState = validationStatus(),
                  value=value(),
                  onChange = unbox handleInput) {
            TextFieldLabel() { "Input" }
            TextFieldInput(placeholder = "Enter 'valid'")
            TextFieldErrorMessage() {
                "Input should be 'valid'"
            }
        }
        )
        
}

