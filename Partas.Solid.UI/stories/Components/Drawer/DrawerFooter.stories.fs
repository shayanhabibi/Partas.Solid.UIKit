module Partas.Solid.UI.stories.Components.Drawer.DrawerFooter_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DrawerFooter> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Drawer() { story() })
}

