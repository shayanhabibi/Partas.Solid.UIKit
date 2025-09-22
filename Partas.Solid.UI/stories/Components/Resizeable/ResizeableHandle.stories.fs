module Partas.Solid.UI.stories.Components.Resizeable.ResizeableHandle
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ResizeableHandle> {
    args "Default" ignore
    render (fun _ -> div())
    tags [| "!autodocs" |]
}

