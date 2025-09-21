module Partas.Solid.UI.stories.Components.Combobox.ComboboxItemLabel_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ComboboxItemLabel> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Combobox<string>(
            options = [| "Item1" |]
            ,itemComponent = (fun (itemProps) ->
                ComboboxItem() { story() })
        ))
    args "Default" ignore
}


