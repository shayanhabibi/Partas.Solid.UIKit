module Partas.Solid.UI.stories.Components.Menubar.MenubarItemLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<MenubarItemLabel> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

