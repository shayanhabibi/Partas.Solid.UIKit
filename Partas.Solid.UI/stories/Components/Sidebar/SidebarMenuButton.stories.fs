module Partas.Solid.UI.stories.Components.Sidebar.SidebarMenuButton_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarMenuButton> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


