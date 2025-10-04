namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Experimental
open Partas.Solid.Style
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Browser.Types
open Partas.AnimeJs.Core
open Partas.AnimeJs.Style
open Partas.AnimeJs.Core.Operators
open Partas.AnimeJs.Bindings

[<Erase>]
type AnimationTest() =
    interface VoidNode
    [<SolidTypeComponent>]
    member props.__ =
        createEffect(fun () ->
            let paths = Svg.createDrawable(!^"#drawPaths path")
            (animate {
                style.draw { too "0 0" "0 1" }
                delay (stagger(100) {
                    staggerFrom.center
                } )
                duration 1000
            }) { Utils.shuffle paths }
            |> ignore
            (animate {
                style.rotate { fun _ _ _ -> !+= 210 }
                // style.rotate { too (fun o i l ->
                //     match i,l with
                //     | Some index, Some length ->
                //         float index - float length / 2.
                //         |> (*) (0.1)
                //         |> (!+=)
                //     | _, _ -> !+= 0
                //     )}
                style.transformOrigin { too "center" "center" }
                onLoop (fun a -> a.refresh() |> ignore)
                // Eases.linearBuiltIn
                Eases.spring.default'
                duration 500
                delay (stagger(10.).asFunctionValue)
                loop
            }) { Selector "#drawPaths path" |> _.find }
            |> ignore
            )
        // Shapes.A(id = "drawPaths")
        Shapes.B(id = "drawPaths")
        // createEffect(fun () ->
        //     (animate {
        //         loop
        //         style.rotateZ { too (fun _ _ _ -> (Utils.random(-90,90))) }
        //         duration 1200
        //         onLoop(fun a ->
        //                 a.refresh()
        //                 |> ignore
        //             )
        //     }) { Utils.``$`` "#boxy" }
        //     |> ignore
        //     (animate {
        //         loop
        //         style.translateX { too (FunctionValue(fun _ _ _ -> Utils.random(0, 300))) }
        //         duration 800
        //         onLoop(fun a ->
        //                 a.refresh()
        //                 |> ignore
        //             )
        //     }) { Utils.``$`` "#boxy" }
        //     |> ignore
        //     (animate {
        //         loop
        //         duration 500
        //         style.translateY { too (FunctionValue(fun _ _ _ -> Utils.random(0, 300))) }
        //         onLoop(fun a ->
        //                 a.refresh()
        //                 |> ignore
        //             )
        //     }) { Utils.``$`` "#boxy" }
        //     |> ignore
        //     (animate {
        //         loop
        //         duration 1000
        //         style.scale { too (FunctionValue(fun _ _ _ -> Utils.random(0.5, 1.5, 1))) }
        //         onLoop(fun a ->
        //                 a.refresh()
        //                 |> ignore
        //             )
        //     }) { Utils.``$`` "#boxy" }
        //     |> ignore
        //     )
        // div(class' = "size-full").style' [
        //     Style.padding !^"24px"
        // ] {
        //     div(id = "boxy", class' = "h-10 w-10 max-w-10 bg-primary").style' [
        //         Style.width !^"94px"
        //         Style.height !^"94px"
        //         Style.transformOrigin !^TransformOrigin.Initial
        //     ]
        // }
