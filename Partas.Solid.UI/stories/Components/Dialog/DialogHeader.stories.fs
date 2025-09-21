module Partas.Solid.UI.stories.Components.Dialog.DialogHeader_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DialogHeader> {
    decorator (fun story ->
        Dialog() { story() })
    args "Default" ignore
    tags [| "!autodocs" |]
}

