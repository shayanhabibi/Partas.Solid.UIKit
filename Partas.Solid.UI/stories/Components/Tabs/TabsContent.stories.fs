module Partas.Solid.UI.stories.Components.Tabs.TabsContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TabsContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

