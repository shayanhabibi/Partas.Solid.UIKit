module Partas.Solid.UI.stories.Components.Slider.SliderTrack_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<SliderTrack> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

