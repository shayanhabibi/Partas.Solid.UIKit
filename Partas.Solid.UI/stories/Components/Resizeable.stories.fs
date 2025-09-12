module Partas.Solid.UI.stories.Components.Resizeable_stories
open Partas.Solid
open Partas.Solid.Corvu
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Resizeable> {
    cases (fun props ->
        match props.orientation with
        | Vertical -> failwith "todo"
        | Horizontal when props.orientation = Vertical -> failwith "todo"
        | _ -> ()
        )
    render (fun props -> Resizeable().spread props {
        ResizeablePanel() { "One" }
        ResizeableHandle()
        ResizeablePanel() { "Two" }
    })
    args "Default" (fun props ->
        props.orientation <- Corvu.Orientation.Horizontal
        )
}

