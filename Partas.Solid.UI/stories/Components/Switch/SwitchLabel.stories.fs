module Partas.Solid.UI.stories.Components.Switch.SwitchLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SwitchLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

