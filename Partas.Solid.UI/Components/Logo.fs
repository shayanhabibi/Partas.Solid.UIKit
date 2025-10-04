namespace Partas.Solid.UI
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.AnimeJs.Bindings.Enums
open Partas.AnimeJs.Core
open Partas.AnimeJs.Style
open Partas.AnimeJs.Core.Operators
open Partas.Solid
open System

[<Erase>]
type Logo() =
    interface HtmlTag
    interface SvgSVGAttributes
    [<SolidTypeComponent>]
    member props.__ =
        createEffect(fun () ->
            let maskPaths = Utils.``$`` "#drawPaths path"
            let anim = animate {
                style.opacity { 0, 1 }
                style.translateX { from (stagger(100,-100).asFunctionValue) }
                style.translateY { from (stagger(100,-100).asFunctionValue) }
                delay (stagger(100,-100).asFunctionValue)
                ease Eases.spring.default'
            }
            let activeAnim = anim { maskPaths }
            onCleanup (fun () -> activeAnim.revert() |> ignore)
                
            )
        let paths = [|
            "m372.095 220.63 29.06 29.08-10.79 10.73c-2.23-2.48-4.719-5.08-7.45-7.81l-5.53-5.53-.03-.04h-.01l-15.84-15.84-18.52-18.53-15.88 15.88-10.58-10.58 13.22-13.23h.01c1.83-1.84 3.931-3.2 6.181-4.11 2.25-.91 4.639-1.37 7.029-1.37h.01c2.4 0 4.8.46 7.05 1.37 2.25.91 4.35 2.27 6.19 4.11l15.88 15.87Z"
            "m358.858 260.328 15.879 15.879 10.587-10.586-13.234-13.231a18.604 18.604 0 0 0-6.209-4.114 18.965 18.965 0 0 0-7.081-1.366 18.557 18.557 0 0 0-13.17 5.482l-1.096 1.096h-.001l-12.136 12.133 10.586 10.586 15.875-15.879Z"
            "m353.567 233.867-10.584-10.586-15.879 15.878-15.875-15.878-10.585 10.586 13.231 13.231a18.687 18.687 0 0 0 6.169 4.108 18.591 18.591 0 0 0 7.01 1.373c2.411 0 4.819-.456 7.077-1.368a18.6 18.6 0 0 0 6.207-4.112l13.229-13.232Z"
            "m369.445 281.5-13.24 13.24c-.33.33-.69.66-1.059.98l-.011.01c-.239.21-.47.4-.71.58h-.01a18.1 18.1 0 0 1-6.53 3.25l-.02.01-.03.01c-.11.03-.23.06-.35.09h-.02l-.029.01c-1.461.35-2.951.53-4.441.53-.73 0-1.46-.04-2.19-.13h-.02c-.11-.01-.34-.05-.65-.09h-.01l-.01-.01c-.12-.01-.219-.03-.28-.03l-.06-.01-.02-.01h-.01l-.05-.01c-.35-.06-.71-.13-1.049-.22l.009.01-.03-.01h-.01l-.04-.01c-.2-.05-.389-.1-.58-.15h-.01l-.04-.01c-.17-.05-.32-.09-.46-.14l-.03-.01h-.01l-.02-.01c-.32-.09-.64-.2-.97-.33h-.019c-.141-.06-.311-.12-.5-.2a18.23 18.23 0 0 1-4.011-2.24c-.27-.2-.51-.39-.739-.57l-.011-.01c-.48-.4-.96-.83-1.42-1.28v-.01l-15.88-15.88-29.04-29.21 10.601-10.73 47.549 47.88 15.87-15.88 10.59 10.59Z"
        |]
        let inline colorGrads () =
            toElement <| JSX.jsx """
            <linearGradient id="grad0" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 2.904 386.274) scale(47.6)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>
              <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>
              <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>
            </linearGradient>
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 331.111 -37.983) scale(74.04102)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>
              <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>
              <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>
            </linearGradient>
            <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 -20.087 372.137) scale(47.6)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>
              <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>
              <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>
            </linearGradient>
            <linearGradient id="grad3" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 314.677 -22.138) scale(74.04162)" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>
              <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>
              <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>
            </linearGradient>"""
        
        Svg.svg(id = "svglogo", viewBox = "284.835 199.28 116.32 101.14") {
            Svg.defs(id = "linearGrads") {
                colorGrads()
                // Svg.mask(id = "drawMask") {
                //     Svg.path(d = "m 15 180 L 243 405 L 385 275 L 305 215 L 220 300", strokeWidth = "70", stroke = "white", strokeLinejoin = "round", fill= "none")
                //     Svg.path(d = "m 15 180 L 243 405 L 385 275 L 305 215 L 220 300", strokeWidth = "70", stroke = "white", strokeLinejoin = "round", fill= "none", transform = "rotate(-180) translate(-485 -420)")
                // }
            }
            Svg.g(id = "drawPaths") {
                For(each = paths) { yield fun path i ->
                    Svg.path(d = path, style = $"fill:url(#grad{i()})") }
            }
        }
(*
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="284.835 199.28 116.32 101.14">
  <path d="m372.095 220.63 29.06 29.08-10.79 10.73c-2.23-2.48-4.719-5.08-7.45-7.81l-5.53-5.53-.03-.04h-.01l-15.84-15.84-18.52-18.53-15.88 15.88-10.58-10.58 13.22-13.23h.01c1.83-1.84 3.931-3.2 6.181-4.11 2.25-.91 4.639-1.37 7.029-1.37h.01c2.4 0 4.8.46 7.05 1.37 2.25.91 4.35 2.27 6.19 4.11l15.88 15.87Z" style="fill:url(#a)"/>
  <path d="m358.858 260.328 15.879 15.879 10.587-10.586-13.234-13.231a18.604 18.604 0 0 0-6.209-4.114 18.965 18.965 0 0 0-7.081-1.366 18.557 18.557 0 0 0-13.17 5.482l-1.096 1.096h-.001l-12.136 12.133 10.586 10.586 15.875-15.879Z" style="fill:url(#b)"/>
  <path d="m353.567 233.867-10.584-10.586-15.879 15.878-15.875-15.878-10.585 10.586 13.231 13.231a18.687 18.687 0 0 0 6.169 4.108 18.591 18.591 0 0 0 7.01 1.373c2.411 0 4.819-.456 7.077-1.368a18.6 18.6 0 0 0 6.207-4.112l13.229-13.232Z" style="fill:url(#c)"/>
  <path d="m369.445 281.5-13.24 13.24c-.33.33-.69.66-1.059.98l-.011.01c-.239.21-.47.4-.71.58h-.01a18.1 18.1 0 0 1-6.53 3.25l-.02.01-.03.01c-.11.03-.23.06-.35.09h-.02l-.029.01c-1.461.35-2.951.53-4.441.53-.73 0-1.46-.04-2.19-.13h-.02c-.11-.01-.34-.05-.65-.09h-.01l-.01-.01c-.12-.01-.219-.03-.28-.03l-.06-.01-.02-.01h-.01l-.05-.01c-.35-.06-.71-.13-1.049-.22l.009.01-.03-.01h-.01l-.04-.01c-.2-.05-.389-.1-.58-.15h-.01l-.04-.01c-.17-.05-.32-.09-.46-.14l-.03-.01h-.01l-.02-.01c-.32-.09-.64-.2-.97-.33h-.019c-.141-.06-.311-.12-.5-.2a18.23 18.23 0 0 1-4.011-2.24c-.27-.2-.51-.39-.739-.57l-.011-.01c-.48-.4-.96-.83-1.42-1.28v-.01l-15.88-15.88-29.04-29.21 10.601-10.73 47.549 47.88 15.87-15.88 10.59 10.59Z" style="fill:url(#d)"/>
  <defs>
    <linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 2.904 386.274) scale(47.6)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>
      <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>
      <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="b" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 331.111 -37.983) scale(74.04102)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>
      <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>
      <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="c" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 -20.087 372.137) scale(47.6)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>
      <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>
      <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="d" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 314.677 -22.138) scale(74.04162)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>
      <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>
      <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>
    </linearGradient>
  </defs>
</svg>
*)
