module Partas.Solid.UI.stories.Components.ContextMenu_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ContextMenu> {
    render (fun props ->
        ContextMenu().spread props {
            ContextMenuTrigger(
                class' = "flex h-[150px] w-[300px] items-center justify-center rounded-md\
                            border border-dashed text-sm"
                ) {
                "Right Click Here"
            }
            ContextMenuPortal() {
                ContextMenuContent() {
                    ContextMenuItem() {
                        "Item"
                    }
                }
            }
        }
        )
    cases (fun props ->
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
        )
    args "Default" (fun props ->
        ())
}

