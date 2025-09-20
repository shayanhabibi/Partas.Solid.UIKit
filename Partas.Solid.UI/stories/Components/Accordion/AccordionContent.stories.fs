module Partas.Solid.UI.stories.Components.Accordion.AccordionContent_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AccordionContent> {
    decorator (fun story ->
        Accordion() {
            AccordionItem() {
                story()
            }
        })
    tags [| "!autodocs" |]
    args "Default" (fun props -> ())
}

