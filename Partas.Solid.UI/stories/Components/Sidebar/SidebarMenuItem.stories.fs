module Partas.Solid.UI.stories.Components.Sidebar.SidebarMenuItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarMenuItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


