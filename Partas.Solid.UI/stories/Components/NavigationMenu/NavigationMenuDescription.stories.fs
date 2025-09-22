module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuDescription_Stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuDescription> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

