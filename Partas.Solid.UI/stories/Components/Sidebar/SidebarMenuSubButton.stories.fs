module Partas.Solid.UI.stories.Components.Sidebar.SidebarMenuSubButton_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarMenuSubButton> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

