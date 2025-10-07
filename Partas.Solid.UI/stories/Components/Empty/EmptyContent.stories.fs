module Partas.Solid.UI.stories.Components.Empty.EmptyContent_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<EmptyContent> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

