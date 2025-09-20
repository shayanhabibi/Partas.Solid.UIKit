module Partas.Solid.UI.stories.Components.Avatar.AvatarImage_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AvatarImage> {
    decorator (fun story ->
        Avatar() {
            story()
        })
    args "Default" ignore
    tags [| "!autodocs" |]
}
