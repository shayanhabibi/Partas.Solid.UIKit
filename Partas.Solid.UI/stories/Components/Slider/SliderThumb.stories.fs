module Partas.Solid.UI.stories.Components.Slider.SliderThumb_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SliderThumb> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

