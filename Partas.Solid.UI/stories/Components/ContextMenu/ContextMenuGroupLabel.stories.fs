module Partas.Solid.UI.stories.Components.ContextMenu.ContextMenuGroupLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ContextMenuGroupLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator(fun story -> ContextMenu() { ContextMenuGroup() {story()} })
}


