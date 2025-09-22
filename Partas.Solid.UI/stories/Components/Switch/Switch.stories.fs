module Partas.Solid.UI.stories.Components.Switch_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Switch> {
    render (fun props ->
            Switch(class' = "flex items-center space-x-2").spread props {
                SwitchControl() {
                    SwitchThumb()
                }
                SwitchLabel() { "Airplane Mode" }
            } )
    args "Default" (fun props -> ())
}

