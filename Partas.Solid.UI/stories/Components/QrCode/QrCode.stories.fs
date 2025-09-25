module Partas.Solid.UI.stories.Components.QrCode.QrCode_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.UI.QrCodeImage
open Partas.Solid.Lucide

[<PartasStorybook>]
let private meta = storybook<QrCodeImage> {
    cases (fun props ->
        match props.variant with
        | QrCodeImage.Variant.Default -> failwith "todo"
        | _ -> ()
        match props.size with
        | Small -> failwith "todo"
        | Default -> failwith "todo"
        | Large when props.size = Small -> failwith "todo"
        | _ -> ()
        )
    args (fun props ->
        props.value <- "somethingcool"
        )
    args "Default" ignore
    render "Children" (fun props ->
        QrCodeImage().spread props {
            Baby()
        }
        )
    
}

