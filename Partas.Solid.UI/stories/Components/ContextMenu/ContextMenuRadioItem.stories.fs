module Partas.Solid.UI.stories.Components.ContextMenu.ContextMenuRadioItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ContextMenuRadioItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator(fun story -> ContextMenu() { ContextMenuRadioGroup() {story() }})
}


