module Partas.Solid.UI.stories.Components.Table.TableCell_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TableCell> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

