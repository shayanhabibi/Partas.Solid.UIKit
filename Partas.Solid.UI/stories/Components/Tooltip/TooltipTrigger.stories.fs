module Partas.Solid.UI.stories.Components.Tooltip.TooltipTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TooltipTrigger> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

