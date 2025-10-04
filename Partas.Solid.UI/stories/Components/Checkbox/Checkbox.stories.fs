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
    render "CheckboxCard" (fun props ->
        let value,setValue = createSignal(false)
        Label(class' = "hover:bg-accent/50 flex items-start gap-3 rounded-lg \
                border p-3 has-[[data-checked]]:border-blue-600 \
                has-[[data-checked]]:bg-blue-50 \
                dark:has-[[data-checked]]:border-blue-900 \
                dark:has-[[data-checked]]:bg-blue-950") {
            Checkbox(id = "toggle-2", defaultChecked = true,
                     class' = "data-[checked]:border-blue-600 \
                    data-[checked]:bg-blue-600 data-[checked]:text-white \
                    dark:data-[checked]:border-blue-700 \
                    dark:data-[checked]:bg-blue-700")
            div(class' = "grid gap-1.5 font-normal") {
                p(class' = "text-sm leading-none font-medium") {
                    "Enable notifications"
                }
                p(class' = "text-muted-foreground text-sm") {
                    "You can enable or disable notifications at any time."
                }
            }
        }
        )
    args "Disabled" (fun props -> props.disabled <- true)
    args "Default" (fun checkbox ->
        ())
}


