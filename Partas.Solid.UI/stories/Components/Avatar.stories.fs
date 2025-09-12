module Partas.Solid.UI.stories.Components.Avatar_stories


open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Fable.Core

[<PartasStorybook>]
let private meta = storybook<Avatar> {
    render(fun avatar ->
        Avatar().spread avatar {
            AvatarImage()
            AvatarFallback() {
                "SH"
            }
        }
        )
    args "Default" (fun avatar ->
        avatar.onLoadingStatusChange <- unbox(Storybook.fn())
        )
}
