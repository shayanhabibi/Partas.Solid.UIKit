module Partas.Solid.UI.stories.Components.Drawer.DrawerTitle_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DrawerTitle> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Drawer() { story() })
}

