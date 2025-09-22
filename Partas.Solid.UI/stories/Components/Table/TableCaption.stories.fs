module Partas.Solid.UI.stories.Components.Table.TableCaption_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<TableCaption> {
    args "Default" ignore
    tags [| "!autodocs" |]
    render (fun _ -> div())
}

