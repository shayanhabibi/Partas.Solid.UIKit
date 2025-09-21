module Partas.Solid.UI.stories.Components.Drawer_stories
open Partas.Solid
open Partas.Solid.Corvu
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Drawer> {
    cases (fun props ->
        match props.side with
        | Bottom -> failwith "todo"
        | Top -> failwith "todo"
        | Left -> failwith "todo"
        | Right when props.side = Bottom -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Drawer().spread props {
            DrawerTrigger() {
                Button() {
                    "Click me"
                }
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
                        Button(variant = Button.Variant.Outline, class'="w-full") {
                            "Cancel"
                        }
                    }
                }
            }
            
        })
    args "Default" (fun props -> ())
    
}

