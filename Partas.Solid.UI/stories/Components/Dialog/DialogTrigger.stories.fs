module Partas.Solid.UI.stories.Components.Dialog.DialogTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DialogTrigger> {
    decorator (fun story ->
        Dialog() { story() })
    args "Default" ignore
    tags [| "!autodocs" |]
}


