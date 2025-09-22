module Partas.Solid.UI.stories.Components.Popover_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Popover> {
    cases (fun props ->
        match props.placement with
        | Popover.Placement.Top -> failwith "todo"
        | Popover.Placement.Bottom -> failwith "todo"
        | Popover.Placement.Left -> failwith "todo"
        | Popover.Placement.Right -> failwith "todo"
        | Popover.Placement.TopStart -> failwith "todo"
        | Popover.Placement.BottomStart -> failwith "todo"
        | Popover.Placement.LeftStart -> failwith "todo"
        | Popover.Placement.RightStart -> failwith "todo"
        | Popover.Placement.TopEnd -> failwith "todo"
        | Popover.Placement.BottomEnd -> failwith "todo"
        | Popover.Placement.LeftEnd -> failwith "todo"
        | Popover.Placement.RightEnd when props.placement = Popover.Placement.Top -> failwith "todo"
        | _ -> ()
        )
    render(fun props ->
        Popover().spread props {
            PopoverTrigger() { "Click me" }
            PopoverContent() { "Popover content" }
        }
        )
    args "Default" (fun props -> ())
}

