module Partas.Solid.UI.stories.Components.NavigationMenu_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenu> {
    render (fun props ->
        NavigationMenu().spread props {
            NavigationMenuItem() {
                NavigationMenuTrigger() {
                    "Item One"
                    NavigationMenuIcon()
                }
                NavigationMenuContent() {
                    NavigationMenuLink() { "Link" }
                }
            }
        })
    args "Default" (fun props -> ())
}

