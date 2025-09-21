module Partas.Solid.UI.stories.Components.DropdownMenu.DropdownMenuRadioItem_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DropdownMenuRadioItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> DropdownMenu() { })
}
