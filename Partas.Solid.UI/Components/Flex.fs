namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop

[<Erase>]
module Flex =
    [<StringEnum>]
    type JustifyContent =
        | [<CompiledName("justify-start")>] Start
        | [<CompiledName("justify-end")>] End
        | [<CompiledName("justify-center")>] Center
        | [<CompiledName("justify-between")>] Between
        | [<CompiledName("justify-around")>] Around
        | [<CompiledName("justify-evenly")>] Evenly
    [<StringEnum>]
    type AlignItems =
        | [<CompiledName("items-start")>] Start
        | [<CompiledName("items-end")>] End
        | [<CompiledName("items-center")>] Center
        | [<CompiledName("items-baseline")>] Baseline
        | [<CompiledName("items-stretch")>] Stretch
    [<StringEnum>]
    type Direction =
        | [<CompiledName("flex-row")>] Row
        | [<CompiledName("flex-col")>] Column
        | [<CompiledName("flex-row-reverse")>] ReverseRow
        | [<CompiledName("flex-col-reverse")>] ReverseColumn

[<Erase>]
type Flex() =
    inherit div()
    [<DefaultValue>]
    val mutable flexDirection: Flex.Direction
    [<DefaultValue>]
    val mutable justifyContent: Flex.JustifyContent
    [<DefaultValue>]
    val mutable alignItems: Flex.AlignItems
    [<SolidTypeComponent>]
    member props.__ =
        props.flexDirection <- Flex.Row
        props.justifyContent <- Flex.Between
        props.alignItems <- Flex.AlignItems.Center
        div(class' = Lib.cn [|
            "flex w-full"
            !!props.flexDirection
            !!props.justifyContent
            !!props.alignItems
            props.class'
        |]).spread props
    

