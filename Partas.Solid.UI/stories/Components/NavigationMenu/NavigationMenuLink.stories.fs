module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuLink_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuLink> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

