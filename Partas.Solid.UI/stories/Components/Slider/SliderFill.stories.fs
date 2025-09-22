module Partas.Solid.UI.stories.Components.Slider.SliderFill_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SliderFill> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

