namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
module Grid =
    [<StringEnum;RequireQualifiedAccess>]
    type Cols =
        | [<CompiledName("grid-cols-none")>] ``0``
        | [<CompiledName("grid-cols-1")>] ``1``
        | [<CompiledName("grid-cols-2")>] ``2``
        | [<CompiledName("grid-cols-3")>] ``3``
        | [<CompiledName("grid-cols-4")>] ``4``
        | [<CompiledName("grid-cols-5")>] ``5``
        | [<CompiledName("grid-cols-6")>] ``6``
        | [<CompiledName("grid-cols-7")>] ``7``
        | [<CompiledName("grid-cols-8")>] ``8``
        | [<CompiledName("grid-cols-9")>] ``9``
        | [<CompiledName("grid-cols-10")>] ``10``
        | [<CompiledName("grid-cols-11")>] ``11``
        | [<CompiledName("grid-cols-12")>] ``12``
    [<StringEnum;RequireQualifiedAccess>]
    type Span =
        | [<CompiledName("col-span-1")>]``1``
        | [<CompiledName("col-span-2")>]``2``
        | [<CompiledName("col-span-3")>]``3``
        | [<CompiledName("col-span-4")>]``4``
        | [<CompiledName("col-span-5")>]``5``
        | [<CompiledName("col-span-6")>]``6``
        | [<CompiledName("col-span-7")>]``7``
        | [<CompiledName("col-span-8")>]``8``
        | [<CompiledName("col-span-9")>]``9``
        | [<CompiledName("col-span-10")>]``10``
        | [<CompiledName("col-span-11")>]``11``
        | [<CompiledName("col-span-12")>]``12``
[<Erase>]
type Grid() =
    inherit div()
    [<DefaultValue>]
    val mutable cols: Grid.Cols
    [<DefaultValue>]
    val mutable smCols: Grid.Cols
    [<DefaultValue>]
    val mutable mdCols: Grid.Cols
    [<DefaultValue>]
    val mutable lgCols: Grid.Cols
    [<SolidTypeComponent>]
    member props.__ =
        props.cols <- Grid.Cols.``1``
        div(class' = Lib.cn [|
            "grid"
            !!props.cols
            props.smCols &&= $"sm:{props.smCols}"
            props.mdCols &&= $"md:{props.mdCols}"
            props.lgCols &&= $"lg:{props.lgCols}"
            props.class'
        |]).spread props
    
[<Erase>]
type Col() =
    inherit div()
    [<DefaultValue>]
    val mutable span: Grid.Span
    [<DefaultValue>]
    val mutable smSpan: Grid.Span
    [<DefaultValue>]
    val mutable mdSpan: Grid.Span
    [<DefaultValue>]
    val mutable lgSpan: Grid.Span
    [<SolidTypeComponent>]
    member props.__ =
        props.span <- Grid.Span.``1``
        div(class' = Lib.cn [|
            "grid"
            !!props.span
            props.smSpan &&= $"sm:{props.smSpan}"
            props.mdSpan &&= $"md:{props.mdSpan}"
            props.lgSpan &&= $"lg:{props.lgSpan}"
            props.class'
        |]).spread props
    
