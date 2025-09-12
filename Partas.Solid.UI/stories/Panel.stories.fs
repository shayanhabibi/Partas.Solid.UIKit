module Partas.Solid.UI.stories.Panel_stories

open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.Storybook.ComputationExpression
open Partas.Solid.UI
open Partas.Solid.UI.Button

[<Global>]
let button = Button()
[<SolidComponent>]
let private metaBuilder =
    meta<Button> {
        component' Button
        "args" ==> {| children = "Bollocks" |}
        argTypes {
            nameof button.variant, argType<Button.Variant> {
                options [|
                    Variant.Default
                    Variant.Destructive
                |]
            }
        }
        render (fun o -> Button().spread o )
    }
[<ExportDefault; SolidComponent>]
let private meta = build metaBuilder

[<SolidComponent>]
let Default = {| args = {| children = "bollocks" |} |}
