module Partas.Solid.UI.stories.Components.Menubar.MenubarGroupLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<MenubarGroupLabel> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

