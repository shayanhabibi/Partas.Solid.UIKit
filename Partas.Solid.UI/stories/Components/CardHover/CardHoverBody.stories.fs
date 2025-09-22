module Partas.Solid.UI.stories.Components.CardHover.CardHoverBody_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ZHoverCardBody> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}
