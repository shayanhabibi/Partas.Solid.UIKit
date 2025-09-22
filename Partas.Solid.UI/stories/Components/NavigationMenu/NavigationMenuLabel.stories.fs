module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuLabel> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

