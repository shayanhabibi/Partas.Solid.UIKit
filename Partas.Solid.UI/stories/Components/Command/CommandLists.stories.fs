module Partas.Solid.UI.stories.Components.Command.CommandLists_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CommandLists> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Command() { story() })
}

