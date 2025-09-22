module Partas.Solid.UI.stories.Components.Pagination.PaginationEllipsis_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<PaginationEllipsis> {
    args "Default" ignore
    render (fun props -> div())
    tags [| "!autodocs" |]
}

