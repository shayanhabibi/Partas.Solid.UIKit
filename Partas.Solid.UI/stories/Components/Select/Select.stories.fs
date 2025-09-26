module Partas.Solid.UI.stories.Components.Select.Selectstories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Select> {
    cases (fun props ->
        match props.validationState with
        | Valid -> failwith "todo"
        | Invalid when props.validationState = Valid -> failwith "todo"
        | _ -> ()
        match props.placement with
        | KobaltePlacement.Top -> failwith "todo"
        | KobaltePlacement.TopLeft -> failwith "todo"
        | KobaltePlacement.TopRight -> failwith "todo"
        | KobaltePlacement.Bottom -> failwith "todo"
        | KobaltePlacement.BottomLeft -> failwith "todo"
        | KobaltePlacement.BottomRight -> failwith "todo"
        | KobaltePlacement.Left -> failwith "todo"
        | KobaltePlacement.Right when props.placement = KobaltePlacement.Top -> failwith "todo"
        | _ -> ()
        match props.selectionBehavior with
        | Toggle -> failwith "todo"
        | Replace when props.selectionBehavior = SelectionBehavior.Toggle -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Select(
            itemComponent = fun props -> SelectItem(item = props.item) { unbox<string> props.item.rawValue }
            ).spread props {
            SelectTrigger(class' = "w-[180px]") {
                SelectValue<string>() {
                    yield fun state ->
                        span() { state.selectedOption() }
                }
            }
            SelectContent()
        })
    args "Default" (fun props ->
        props.placeholder <- unbox "Select a fruit..."
        props.options <- [| "Apple"; "Banana"; "Blueberry"; "Grapes"; "Pineapple" |])
        
}
