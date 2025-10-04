namespace Partas.Solid.UI
open Browser
open Partas.Solid
open Partas.Solid.TanStack.Table
open Partas.Solid.UI
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid.Primitives
open Browser.Types

[<Erase>]
type TableInputFilter<'Data, 'Value>() =
    inherit TextFieldInput()
    [<Erase>]
    member val column: Column<'Data, 'Value> = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let column () = props.column
        TextField(
            value = ((props.column &&= !!column().getFilterValue()) ??= "")
            ,onChange = fun value -> props.column &&= column().setFilterValue(!^value)
            ) {
            TextFieldInput().spread props
        }
