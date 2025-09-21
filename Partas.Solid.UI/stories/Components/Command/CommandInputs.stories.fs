module Partas.Solid.UI.stories.Components.Command.CommandInputs_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CommandInputs> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Command() { story() })
}


