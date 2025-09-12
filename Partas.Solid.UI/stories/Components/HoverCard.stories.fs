module Partas.Solid.UI.stories.Components.HoverCard_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<HoverCard> {
    cases (fun props ->
        match props.placement with
        | KobaltePlacement.Top -> failwith "todo"
        | KobaltePlacement.Bottom -> failwith "todo"
        | KobaltePlacement.Left -> failwith "todo"
        | KobaltePlacement.Right when props.placement = KobaltePlacement.Top -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        HoverCard().spread props {
            HoverCardTrigger() { "Hover" }
            HoverCardContent() { "Partas.Solid - DX for Fable front end" }
        })
    args "Default" (fun props -> ())
}

