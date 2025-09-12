module Partas.Solid.UI.stories.Components.Drawer_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Drawer> {
    render (fun props ->
        Drawer().spread props {
            DrawerTrigger() {
                "Click me"
            }
            DrawerContent() {
                DrawerHeader() {
                    DrawerTitle() {
                        "Are you absolutely sure?"
                    }
                    DrawerDescription() { "This action cannot be undone." }
                }
                DrawerFooter() {
                    Button() { "Submit" }
                    DrawerClose() {
                        Button(variant = Button.Variant.Outline) {
                            "Cancel"
                        }
                    }
                }
            }
            
        })
    args "Default" (fun props -> ())
    
}

