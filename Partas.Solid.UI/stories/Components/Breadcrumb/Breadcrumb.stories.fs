module Partas.Solid.UI.stories.Components.Breadcrumb_stories

open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<BreadcrumbLink> {
    render (fun bcumb ->
        BreadcrumbList().spread bcumb {
            Breadcrumb() {
                "Prev"
            }
            Breadcrumb() {
                "Home"
            }
            Breadcrumb() {
                "Next"
            }
        }
        )
    args "Default" (fun breadcrumb -> ())
    
}
