module Partas.Solid.UI.stories.Components.Dialog.DialogTitle_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DialogTitle> {
    decorator (fun story ->
        Dialog() { story() })
    args "Default" ignore
    tags [| "!autodocs" |]
}

