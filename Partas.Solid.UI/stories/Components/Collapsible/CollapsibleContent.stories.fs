module Partas.Solid.UI.stories.Components.Collapsible.CollapsibleContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<CollapsibleContent> {
    tags [| "!autodocs" |]
    args "Default" ignore
    decorator (fun story -> Collapsible() { story() })
}

