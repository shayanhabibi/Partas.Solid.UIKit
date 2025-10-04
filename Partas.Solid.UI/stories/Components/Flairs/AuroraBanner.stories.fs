module Partas.Solid.UI.stories.Components.AuroraBanner_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AuroraBanner> {
    args "Default" (fun props -> ())
    tags [| "autodocs" |]
}

