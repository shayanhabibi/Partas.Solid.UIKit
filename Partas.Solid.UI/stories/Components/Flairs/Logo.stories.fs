module Partas.Solid.UI.stories.Components.Flairs.Logo_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Logo> {
    render (fun props ->
        Logo(class' = "size-10").spread props)
    args "Default" ignore
}
