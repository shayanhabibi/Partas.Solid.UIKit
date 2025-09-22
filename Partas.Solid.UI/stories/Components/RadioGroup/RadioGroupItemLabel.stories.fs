module Partas.Solid.UI.stories.Components.RadioGroup.RadioGroupItemLabel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<RadioGroupItemLabel> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

