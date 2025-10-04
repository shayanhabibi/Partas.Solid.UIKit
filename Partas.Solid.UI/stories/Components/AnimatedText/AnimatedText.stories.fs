module Partas.Solid.UI.stories.Components.AnimatedText.AnimatedText_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.AnimatedText

[<PartasStorybook>]
let private meta = storybook<AnimatedText> {
    cases (fun props ->
        match props.variant with
        | GradualSpacing -> failwith "todo"
        | FlipText -> failwith "todo"
        | WordFadeIn -> failwith "todo"
        | WordPullUp when props.variant = GradualSpacing -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        AnimatedText(class' = "text-6xl").spread props
        )
    args (fun props ->
        props.variant <- GradualSpacing
        props.text <- "Animated Text"
        )
    args "Default" ignore
}

