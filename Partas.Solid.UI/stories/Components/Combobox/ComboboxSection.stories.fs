module Partas.Solid.UI.stories.Components.Combobox.ComboboxSection_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxSection> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
            ,sectionComponent = (fun (itemProps) ->
                story())
        ))
    args "Default" ignore
}

