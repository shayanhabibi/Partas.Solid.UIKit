module Partas.Solid.UI.stories.Components.Sheet_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Sheet> {
    render (fun props ->
        Sheet().spread props {
            SheetTrigger() { "Open" }
            SheetContent() {
                SheetHeader() {
                    SheetTitle() { "Are you absolutely sure?" }
                    SheetDescription() {
                        "This action cannot be undone. This will permanently delete your account."
                    }
                }
            }
        })
    args "Default" (fun props -> ())
}

