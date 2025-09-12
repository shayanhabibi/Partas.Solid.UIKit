module Partas.Solid.UI.stories.Components.Segmented_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Segmented> {
    render (fun props ->
        Segmented().spread props {
            Segmented.Label() { "Label" }
            Segmented.Indicator()
            Segmented.Item(value = "item1") {
                Segmented.Item.Label() { "Item" }
                Segmented.Item.Input()
            }
            Segmented.Item(value = "item2") {
                Segmented.Item.Label() { "Item 2" }
                Segmented.Item.Input()
            }
            Segmented.Item(value = "item3") {
                Segmented.Item.Label() { "Item 3" }
                Segmented.Item.Input()
            }
        })
    args "Default" (fun props ->
        ())
}


