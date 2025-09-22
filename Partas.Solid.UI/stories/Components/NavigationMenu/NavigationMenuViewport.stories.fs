module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuViewport
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuViewport> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

