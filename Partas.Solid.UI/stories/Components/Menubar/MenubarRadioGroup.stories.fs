module Partas.Solid.UI.stories.Components.Menubar.MenubarRadioGroup_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<MenubarRadioGroup> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

