namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

[<Erase>]
type Segmented() =
    inherit SegmentedControl()
    [<SolidTypeComponent>]
    member props.__ =
        SegmentedControl().spread props

[<Erase; RequireQualifiedAccess>]
module Segmented =
    [<Erase; CompiledName("SegmentedLabel")>]
    type Label() =
        inherit SegmentedControl.Label()
        [<SolidTypeComponent>]
        member props.__ =
            SegmentedControl.Label().spread props
    
    [<Erase; CompiledName("SegmentedIndicator")>]
    type Indicator() =
        inherit SegmentedControl.Indicator()
        [<SolidTypeComponent>]
        member props.__ =
            SegmentedControl.Indicator().spread props
    
    [<Erase; CompiledName("SegmentedItem")>]
    type Item() =
        inherit SegmentedControl.Item()
        [<SolidTypeComponent>]
        member props.__ =
            SegmentedControl.Item().spread props
    
    [<Erase>]
    module Item =
        [<Erase; CompiledName("SegmentedItemInput")>]
        type Input() =
            inherit SegmentedControl.ItemInput()
            [<SolidTypeComponent>]
            member props.__ =
                SegmentedControl.ItemInput().spread props
        
        [<Erase; CompiledName("SegmentedItemLabel")>]
        type Label() =
            inherit SegmentedControl.ItemLabel()
            [<SolidTypeComponent>]
            member props.__ =
                SegmentedControl.ItemLabel().spread props
