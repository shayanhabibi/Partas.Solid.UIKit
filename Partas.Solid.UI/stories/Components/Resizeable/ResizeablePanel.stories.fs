module Partas.Solid.UI.stories.Components.Resizeable.ResizeablePanel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ResizeablePanel> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

