module Partas.Solid.UI.stories.Components.Drawer.DrawerPortal_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DrawerPortal> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Drawer() { story() })
}

