module Partas.Solid.UI.stories.Components.Menubar_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Menubar> {
    render (fun props ->
        Menubar().spread props {
            MenubarMenu() {
                MenubarTrigger() { "File" }
                MenubarContent() {
                    MenubarItem() {
                        "New Tab"
                        System.Char.empty
                        MenubarShortcut() { "Ctrl + T" }
                    }
                    MenubarItem() { "New Window" }
                    MenubarSeparator()
                    MenubarItem() { "Share" }
                    MenubarSeparator()
                    MenubarItem() { "Print" }
                }
            }
        })
    args "Default" (fun props -> ())
}
