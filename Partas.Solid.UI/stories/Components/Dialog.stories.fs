module Partas.Solid.UI.stories.Components.Dialog_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Dialog> {
    render (fun dialog ->
        Dialog().spread dialog {
            DialogTrigger() {
                "Click me!"
            }
            DialogContent() {
                DialogHeader() {
                    DialogTitle() {
                        "Title"
                    }
                    "Other header content"
                }
                DialogDescription() {
                    "Description"
                }
                DialogFooter() {
                    "Dialog footer"
                }
            }
        })
    args "Default" (fun props -> ())
}
