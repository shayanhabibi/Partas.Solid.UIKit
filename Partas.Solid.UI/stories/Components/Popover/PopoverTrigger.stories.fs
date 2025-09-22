module Partas.Solid.UI.stories.Components.Popover.PopoverTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<PopoverTrigger> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

