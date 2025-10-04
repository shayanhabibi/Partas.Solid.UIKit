module Partas.Solid.UI.stories.Components.AlertDialog_stories
open Partas.Solid
open Fable.Core
open Partas.Solid.Storybook
open Partas.Solid.UI

[<PartasStorybook>]
let private meta = storybook<AlertDialog> {
    render (fun alertDialog ->
        let isOpen,setOpen = createSignal false
        AlertDialog(open' = isOpen(), onOpenChange = setOpen).spread alertDialog {
            AlertDialogTrigger(onClick = fun _ -> setOpen true) {
                "Click me"
            }
            AlertDialogContent() {
                AlertDialogX()
                AlertDialogHeader() {
                    AlertDialogTitle() {
                        "Alert dialog title"
                    }
                }
                AlertDialogDescription() {
                    "Alert dialog description"
                }
                AlertDialogFooter() {
                    AlertDialogAction(onClick = fun _ -> setOpen false) { "Do something!" }
                    AlertDialogCancel(onClick = fun _ -> setOpen false) { "Cancel" }
                }
            }
        }
        )
    render "AsButton" (fun props ->
        AlertDialog() {
            AlertDialogTrigger().as'(Button(variant = Button.Variant.Secondary)) {
                "Click me"
            }
            AlertDialogContent() {
                AlertDialogX()
                AlertDialogTitle() {
                    "Alert dialog title"
                }
                AlertDialogDescription() {
                    "Alert dialog description"
                }
            }
        })
    args "Default" (fun alertDialog ->
        ())
}

