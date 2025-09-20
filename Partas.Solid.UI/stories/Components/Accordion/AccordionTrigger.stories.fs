module Partas.Solid.UI.stories.Components.Accordion.AccordionTrigger_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AccordionTrigger> {
    decorator (fun story ->
        Accordion() {
            AccordionItem() {
                story()
            }
        }
        )
    args "Default" (fun props -> ())
    tags [| "!autodocs" |]
}

