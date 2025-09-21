module Partas.Solid.UI.stories.Components.Combobox.ComboboxItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxItem<string>> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
            ,itemComponent = (fun (itemProps) ->
                story())
        ))
    args "Default" ignore
}

