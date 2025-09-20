module Partas.Solid.UI.stories.Components.AlertDialog.AlertDialogContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AlertDialogContent> {
    decorator (fun story ->
        AlertDialog() {
            story()
        })
    tags [| "!autodocs" |]
    args "Default" ignore
}

