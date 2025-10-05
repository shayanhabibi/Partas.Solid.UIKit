namespace Partas.Solid.UI

open Partas.Solid
open Fable.Core

[<Erase>]
type Label() =
    inherit label()
    [<SolidTypeComponent>]
    member props.constructor =
        label(class'= Lib.cn [|
            "flex items-center gap-2 text-sm leading-none font-medium select-none
            group-data-[disabled=true]:pointer-events-none
            group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed \
            peer-disabled:opacity-50"
            props.class'
        |]) .dataSlot("label")
            .spread(props)
