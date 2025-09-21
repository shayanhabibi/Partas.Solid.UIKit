module Partas.Solid.UI.stories.Components.ContextMenu.ContextMenuGroup_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ContextMenuGroup> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator(fun story -> ContextMenu() { story() })
}

