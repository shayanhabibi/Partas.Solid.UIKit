module Partas.Solid.UI.stories.Components.SignaturePad.SignaturePad_stories
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Glutinum.ZagJs.SignaturePad
open Fable.Core.JS
open Fable.Core.JsInterop

[<PartasStorybook>]
let private meta = storybook<SignatureField> {
    render (fun props ->
            SignatureField()
        )
    args "Default" (fun props ->
        props.label <- "Label"
        )
}

