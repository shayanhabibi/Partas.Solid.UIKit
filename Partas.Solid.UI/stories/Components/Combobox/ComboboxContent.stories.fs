module Partas.Solid.UI.stories.Components.Combobox.ComboboxContent_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxContent> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
        ) {
            story()
        })
    args "Default" ignore
}

