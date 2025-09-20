module Partas.Solid.UI.stories.Components.Accordion.AccordionItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AccordionItem> {
    tags [| "!autodocs" |]
    decorator (fun story ->
        Accordion() { story() })
    args "Default" (fun props -> ())
}


