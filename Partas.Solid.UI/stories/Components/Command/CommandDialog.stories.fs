module Partas.Solid.UI.stories.Components.Command.CommandDialog_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CommandDialog> {
    args "Default" ignore
    tags [| "!autodocs" |]
}

