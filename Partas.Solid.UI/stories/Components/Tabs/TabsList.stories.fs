module Partas.Solid.UI.stories.Components.Tabs.TabsList_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TabsList> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

