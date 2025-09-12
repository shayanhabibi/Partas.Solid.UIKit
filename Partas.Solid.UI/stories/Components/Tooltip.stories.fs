module Partas.Solid.UI.stories.Components.Tooltip_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook

[<PartasStorybook>]
let private meta = storybook<Tooltip> {
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
    render (fun props ->
        Tooltip().spread props {
            TooltipTrigger() { "Hover me" }
            TooltipContent() {
                "Place content for the Tooltip here."
            }
        })
    args "Default" (fun props -> ())
}

