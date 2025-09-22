module Partas.Solid.UI.stories.Components.RadioGroup.RadioGroupItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<RadioGroupItem> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

