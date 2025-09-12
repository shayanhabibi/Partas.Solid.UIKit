module Partas.Solid.UI.stories.Components.Separator_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Separator> {
    cases (fun props ->
        match props.orientation with
        | Horizontal -> failwith "todo"
        | Vertical when props.orientation = Horizontal -> failwith "todo"
        | _ -> ())
    render (fun props ->
        div() {
            div(class' = "space-y-1") {
                h4(class' = "text-sm font-medium leading-none") { "Kobalte Primitives" }
                p(class' = "text-sm text-muted-foreground") { "Open source UI Component library." }
            }
            Separator(class' = "my-4").spread props
            div(class' = "flex h-5 items-center space-x-4 text-sm") {
                div() { "Blog" }
                Separator(orientation = Kobalte.Enums.Orientation.Vertical).spread props
                div() { "Docs" }
                Separator(orientation = Kobalte.Enums.Orientation.Vertical).spread props
                div() { "Source" }
            }
        })
    args "Default" (fun props -> ())
}
