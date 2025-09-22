module Partas.Solid.UI.stories.Components.Tabs.TabsIndicator_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TabsIndicator> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

