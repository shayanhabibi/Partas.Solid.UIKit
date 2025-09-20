module Partas.Solid.UI.stories.Components.Avatar.AvatarFallback_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AvatarFallback> {
    decorator(fun story -> Avatar() { story() })
    args "Default" ignore
    tags [| "!autodocs" |]
}

