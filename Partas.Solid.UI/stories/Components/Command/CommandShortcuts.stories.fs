module Partas.Solid.UI.stories.Components.Command.CommandShortcuts_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CommandShortcuts> {
    args "Default" ignore
    tags [| "!autodocs" |]
    decorator (fun story -> Command() { story() })
}


