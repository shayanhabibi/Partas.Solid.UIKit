module Partas.Solid.UI.stories.Components.Collapsible.CollapsibleTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CollapsibleTrigger> {
    tags [| "!autodocs" |]
    args "Default" ignore
    decorator (fun props ->
        Collapsible() {
            props()
        })
}

