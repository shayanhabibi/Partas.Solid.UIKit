module Partas.Solid.UI.stories.Components.RadioGroup_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<RadioGroup> {
    cases (fun props ->
        match props.validationState with
        | Valid -> failwith "todo"
        | Invalid when props.validationState = Valid -> failwith "todo"
        | _ -> ()
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        RadioGroup().spread props {
            For(each = [| "Apple"; "Orange"; "Watermelon" |]) {
                yield fun item _ ->
                    RadioGroupItem(value = item) {
                        RadioGroupItemLabel() {
                            item
                        }
                    }
            }
        })
    args "Default" (fun props -> ())
}

