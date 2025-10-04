module Partas.Solid.UI.stories.Components.Sidebar.SidebarContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


