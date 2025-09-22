module Partas.Solid.UI.stories.Components.Pagination.PaginationItem_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<PaginationItem> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

