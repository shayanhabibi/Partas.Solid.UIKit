module Partas.Solid.UI.stories.Components.Sidebar.SidebarRail_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarRail> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


