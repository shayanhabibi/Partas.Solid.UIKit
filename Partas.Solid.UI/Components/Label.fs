namespace Partas.Solid.UI

open Partas.Solid
open Fable.Core

[<Erase>]
type Label() =
    inherit label()
    [<SolidTypeComponent>]
    member props.constructor =
        label(class'= Lib.cn [|
            "text-sm font-medium leading-none peer-[data-disabled]:cursor-not-allowed \
            peer-[data-disabled]:opacity-70 peer-disabled:cursor-not-allowed \
            peer-disabled:opacity-70"
            props.class'
        |]).spread(props)
