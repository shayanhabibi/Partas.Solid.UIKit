module Partas.Solid.UI.stories.Components.HoverCard.HoverCardContent_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<HoverCardContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun props -> HoverCard())
}
