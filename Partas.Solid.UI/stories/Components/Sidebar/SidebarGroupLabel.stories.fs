module Partas.Solid.UI.stories.Components.Sidebar.SidebarGroupLabel_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarGroupLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

