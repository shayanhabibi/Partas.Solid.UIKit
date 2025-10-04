module Partas.Solid.UI.stories.Components.Sidebar.SidebarMenuSub_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarMenuSub> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

