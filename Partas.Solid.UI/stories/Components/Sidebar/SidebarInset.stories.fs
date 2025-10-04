module Partas.Solid.UI.stories.Components.Sidebar.SidebarInset_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<SidebarInset> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}


