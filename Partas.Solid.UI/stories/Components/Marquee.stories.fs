module Partas.Solid.UI.stories.Components.Marquee_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Marquee> {
    cases (fun props ->
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        )
    args (fun props ->
        props.orientation <- Horizontal
        props.reverse <- false
        props.pauseOnHover <- false
        )
    render (fun props ->
        Marquee().spread props {
            Button() { "Button 1" }
            Button() { "Button 2" }
            Button() { "Button 3" }
            Button() { "Button 4" }
            Button() { "Button 5" }
            Button() { "Button 6" }
        }
        )
    args "Default" (fun props -> ())
}

