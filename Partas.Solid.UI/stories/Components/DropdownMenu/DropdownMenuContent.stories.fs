module Partas.Solid.UI.stories.Components.DropdownMenu.DropdownMenuContent_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DropdownMenuContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> DropdownMenu() { })
}
