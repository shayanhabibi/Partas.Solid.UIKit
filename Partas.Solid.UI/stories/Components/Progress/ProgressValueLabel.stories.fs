module Partas.Solid.UI.stories.Components.Progress.ProgressValueLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ProgressValueLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

