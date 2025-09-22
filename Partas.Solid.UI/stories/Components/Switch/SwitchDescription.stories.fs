module Partas.Solid.UI.stories.Components.Switch.SwitchDescription_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SwitchDescription> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

