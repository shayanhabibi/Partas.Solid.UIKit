module Partas.Solid.UI.stories.Components.Table.TableBody_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TableBody> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

