module Partas.Solid.UI.stories.Components.Combobox.ComboboxTrigger_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxTrigger> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
        ) {
            ComboboxControl() { yield fun _ -> Fragment() {
                story()
            } }
        })
    args "Default" ignore
}

