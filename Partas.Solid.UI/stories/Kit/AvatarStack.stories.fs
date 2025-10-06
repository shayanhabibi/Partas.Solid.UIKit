module Partas.Solid.UI.stories.Kit.AvatarStack_stories
open Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<AvatarStack<IAvatarStackItem>> {
    render (fun props ->
        let make initial src =
            {
                new IAvatarStackItem with
                    member this.avatar = src
                    member this.initials = initial
            }
            
        AvatarStack<_>(items = [|
            make "SH" "https://github.com/shayanhabibi.png"
            make "SH" "https://github.com/shayanhabibi.png"
            make "SH" "https://github.com/shayanhabibi.png"
            make "SH" "https://github.com/shayanhabibi.png"
        |]).spread props
        )
    
    args "Default" (fun props ->
        props.animate <- true
        props.size <- 32)
}

