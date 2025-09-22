module Partas.Solid.UI.stories.Components.Menubar.MenubarMenu_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<MenubarMenu> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

