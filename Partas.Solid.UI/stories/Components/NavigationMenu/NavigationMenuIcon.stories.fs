module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuIcon
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuIcon> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

