module Partas.Solid.UI.stories.Components.Pagination_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Pagination> {
    render (fun props ->
        div(class' = "flex") {
            Pagination(
                itemComponent = fun prop -> PaginationItem(page = prop.page) { prop.page }
                ,ellipsisComponent = fun () -> PaginationEllipsis()
                ).spread props {
                    PaginationPrevious()
                    PaginationItems()
                    PaginationNext()
                }
             })
    args "Default" (fun props ->
        props.count <- 10)
}

