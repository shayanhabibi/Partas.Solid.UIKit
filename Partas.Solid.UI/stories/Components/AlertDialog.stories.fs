module Partas.Solid.UI.stories.Components.AlertDialog_stories
open Partas.Solid
open Fable.Core
open Partas.Solid.Storybook
open Partas.Solid.UI

/// Docs
[<PartasStorybook>]
let private meta = storybook<AlertDialog> {
    render (fun alertDialog ->
        AlertDialog().spread alertDialog {
            AlertDialogTrigger() {
                "Click me"
            }
            AlertDialogContent() {
                AlertDialogTitle() {
                    "Alert dialog title"
                }
                AlertDialogDescription() {
                    "Alert dialog description"
                }
            }
        }
        )
    args "Default" (fun alertDialog ->
        ())
}

