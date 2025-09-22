module Partas.Solid.UI.stories.Components.Menubar.MenubarItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<MenubarItem> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

