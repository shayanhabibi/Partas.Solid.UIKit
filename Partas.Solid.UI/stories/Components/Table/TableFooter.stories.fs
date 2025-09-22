module Partas.Solid.UI.stories.Components.Table.TableFooter_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TableFooter> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

