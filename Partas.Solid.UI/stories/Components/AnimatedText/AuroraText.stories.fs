module Partas.Solid.UI.stories.Components.AnimatedText.AuroraText_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AuroraText> {
    render (fun props ->
        AuroraText(class' = "text-6xl font-bold").spread props {
            "Aurora Text"
        })
    args "Default" ignore
    tags [| "!autodocs" |]
}

