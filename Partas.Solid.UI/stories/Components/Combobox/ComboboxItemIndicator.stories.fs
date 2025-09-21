module Partas.Solid.UI.stories.Components.Combobox.ComboboxItemIndicator_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxItemIndicator> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
            ,itemComponent = (fun (itemProps) ->
                ComboboxItem() { story() })
        ))
    args "Default" ignore
}


