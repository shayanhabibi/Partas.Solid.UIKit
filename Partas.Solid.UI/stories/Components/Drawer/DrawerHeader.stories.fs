module Partas.Solid.UI.stories.Components.Drawer.DrawerHeader_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DrawerHeader> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Drawer() { story() })
}

