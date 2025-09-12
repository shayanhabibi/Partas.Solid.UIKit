module Partas.Solid.UI.stories.Components.DropdownMenu_stories

open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<DropdownMenu> {
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
        DropdownMenu().spread props {
            DropdownMenuTrigger() {
                "Open"
            }
            DropdownMenuContent() {
                DropdownMenuLabel() {
                    "My Account"
                }
                DropdownMenuSeparator()
                DropdownMenuItem() { "Profile" }
                DropdownMenuItem() { "Billing" }
                DropdownMenuItem() { "Team" }
                DropdownMenuItem() { "Subscription" }
            }
        })
    args "Default" (fun props -> ())
}
