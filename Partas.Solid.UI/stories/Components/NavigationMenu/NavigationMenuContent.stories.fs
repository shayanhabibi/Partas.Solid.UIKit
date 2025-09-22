module Partas.Solid.UI.stories.Components.NavigationMenu.NavigationMenuContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenuContent> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

