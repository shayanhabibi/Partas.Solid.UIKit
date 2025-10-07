module Partas.Solid.UI.stories.Components.Empty.EmptyHeader_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<EmptyHeader> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

