module Partas.Solid.UI.stories.Components.Accordion_stories

open Fable.Core
open Partas.Solid
open Partas.Solid.Storybook
open Partas.Solid.UI

[<PartasStorybook>]
let private meta = storybook<Accordion> {
    render (fun acc ->
        Accordion().spread acc {
            For(each = [| 1;2;3;4;5;6 |]) {
                yield fun idx _ ->
                    AccordionItem(value = $"Accordion{idx}") {
                        AccordionTrigger() {
                            $"Title {idx}"
                        }
                        AccordionContent() {
                            $"Content {idx}"
                        }
                    }
            }
        }
        )
    args "Default" (fun acc ->
        ()
        )
    
}
