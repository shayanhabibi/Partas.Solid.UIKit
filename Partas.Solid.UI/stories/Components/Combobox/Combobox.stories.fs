module Partas.Solid.UI.stories.Components.Combobox_stories

open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Combobox<string>> {
    cases (fun combobox ->
        match combobox.placement with
        | KobaltePlacement.Top -> failwith "todo"
        | KobaltePlacement.TopLeft -> failwith "todo"
        | KobaltePlacement.TopRight -> failwith "todo"
        | KobaltePlacement.Bottom -> failwith "todo"
        | KobaltePlacement.BottomLeft -> failwith "todo"
        | KobaltePlacement.BottomRight -> failwith "todo"
        | KobaltePlacement.Left -> failwith "todo"
        | KobaltePlacement.Right when combobox.placement = KobaltePlacement.Top -> failwith "todo"
        | _ -> ()
        match combobox.triggerMode with
        | TriggerMode.Input -> failwith "todo"
        | TriggerMode.Focus -> failwith "todo"
        | TriggerMode.Manual when combobox.triggerMode = Input -> failwith "todo"
        | _ -> ()
        match combobox.validationState with
        | ValidationState.Valid -> failwith "todo"
        | ValidationState.Invalid when combobox.validationState = Valid -> failwith "todo"
        | _ -> ()
        match combobox.selectionBehavior with
        | Replace -> failwith ""
        | Toggle when combobox.selectionBehavior = Replace -> failwith ""
        | _ -> ()
        )
    args (fun props ->
        props.options <- [| "Item 1"; "Item 2" |])
    render (fun props ->
        Combobox<string>(
            itemComponent = ( fun (itemProps: Kobalte.ItemComponentProps<string>) ->
                ComboboxItem(item = itemProps.item) {
                    ComboboxItemLabel() {
                        itemProps.item.rawValue
                    }
                    ComboboxItemIndicator()
                }
                )
            ).spread props {
            ComboboxControl() { yield fun _ -> Fragment() {
                ComboboxInput()
                ComboboxTrigger()
            } }
            ComboboxContent()
        })
    args "Default" (fun props -> ())
}
