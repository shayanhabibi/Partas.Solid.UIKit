module Partas.Solid.UI.stories.Components.ButtonGroup.ButtonGroup_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ButtonGroup> {
    cases (fun props ->
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        )
    args "Default" ignore
    render (fun props ->
        ButtonGroup().spread props {
            Button() { "Button 1" }
            ButtonGroupSeparator()
            Button() { "Button 2" }
        }
        )
}
