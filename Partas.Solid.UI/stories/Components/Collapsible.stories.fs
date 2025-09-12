module Partas.Solid.UI.stories.Components.Collapsible_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Collapsible> {
    render (fun collapsible ->
        Collapsible().spread collapsible {
            CollapsibleTrigger() {
                "Click me"
            }
            CollapsibleContent() {
                "Content"
            }
        })
    args "Default" (fun props -> ())
}

