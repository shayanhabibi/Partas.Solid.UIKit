module Partas.Solid.UI.stories.Components.DropdownMenu.DropdownMenuRadioGroup_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DropdownMenuRadioGroup> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> DropdownMenu() { })
}

