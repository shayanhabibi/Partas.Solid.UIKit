module Partas.Solid.UI.stories.Components.Tabs_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Tabs> {
    cases (fun props ->
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ()
        match props.activationMode with
        | Automatic -> failwith "todo"
        | Manual when props.activationMode = Automatic -> failwith "todo"
        | _ -> ()
        )
    render ( fun props ->
        Tabs().spread props {
            TabsList(class' = "grid w-full grid-cols-2") {
                TabsTrigger(value = "account") { "Account" }
                TabsTrigger(value = "password") { "Password" }
            }
            TabsContent(value="account") { "Account Tab" }
            TabsContent(value = "password") { "Password tab" }
        }
        )
    args "Default" (fun props -> ())
}

