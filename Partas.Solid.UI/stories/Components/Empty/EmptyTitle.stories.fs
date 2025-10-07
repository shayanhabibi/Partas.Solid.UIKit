module Partas.Solid.UI.stories.Components.Empty.EmptyTitle_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<EmptyTitle> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

