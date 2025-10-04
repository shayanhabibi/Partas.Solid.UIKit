namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Primitives
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Polymorphism
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS

[<Erase>]
module AdvButton =
    [<StringEnum; RequireQualifiedAccess>]
    type Position =
        | Left
        | Right

[<Erase>]
type AdvButton() =
    inherit Button()
    [<Erase>]
    member val shortcut: string = undefined with get,set
    [<Erase>]
    member val shortcutAction: (unit -> unit) = undefined with get,set
    [<Erase>]
    member val tooltip: string = undefined with get,set
    [<Erase>]
    member val icon: HtmlElement = undefined with get,set
    [<Erase>]
    member val iconPosition: AdvButton.Position = undefined with get,set
    [<Erase>]
    member val label: string = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.iconPosition <- AdvButton.Position.Left
        Keyboard.createShortcut(
            [| "Alt"; props.shortcut |]
            ,props.shortcutAction
        )
        let labelText =
            if !!props.label then
                props.label.Replace(props.shortcut, !!(span(class' = "underline") { props.shortcut }))
            else
                ""
        let labelSpan = span() { labelText }
        Button().spread props {
            Show(when' = props.iconPosition.IsRight, fallback = props.icon) {
                labelSpan
                props.children
            }
            Show(when' = props.iconPosition.IsLeft, fallback = props.icon) {
                labelSpan
                props.children
                
            }
        }
