module Partas.Solid.UI.stories.Components.Sidebar.SidebarGroupAction_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarGroupAction> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


