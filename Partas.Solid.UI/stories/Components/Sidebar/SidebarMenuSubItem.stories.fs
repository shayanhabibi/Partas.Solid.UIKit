module Partas.Solid.UI.stories.Components.Sidebar.SidebarMenuSubItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarMenuSubItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


