namespace Partas.Solid.UI

open System
open System.Runtime.CompilerServices
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
module ToggleGroup =
    type Variant = Toggle.Variant
    type Size = Toggle.Size
    [<Erase>]
    type ToggleGroupsContext = {| Size: unit -> Size; Variant: unit -> Variant |}
    [<Erase>]
    module Context =
        let ToggleGroupContext = createContext<ToggleGroupsContext>({| Size = (fun () -> Size.Default); Variant = (fun () -> Variant.Default) |})
        let useToggleGroupContext = fun () ->
            let context = useContext(ToggleGroupContext)
            if unbox context then
                context
            else failwith "ToggleGroupContext must be used within a togglegroup"

[<Erase>]
type ToggleGroup() =
    inherit Kobalte.ToggleGroup()
    [<Erase>]
    member val size: ToggleGroup.Size = unbox null with get,set
    [<Erase>]
    member val variant: ToggleGroup.Variant = unbox null with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        let size,setSize = createSignal ToggleGroup.Size.Default
        let variant,setVariant = createSignal ToggleGroup.Variant.Default
        createEffect(fun () -> setSize props.size )
        createEffect(fun () -> setVariant props.variant )
        Kobalte.ToggleGroup(
            class' = Lib.cn [|
                //tw
                "flex items-center justify-center gap-1"
                props.class'
            |]
            ).spread props
            {
                ToggleGroup.Context.ToggleGroupContext({| Size = size; Variant = variant |}) {
                    props.children
                }
            }

[<Erase>]
type ToggleGroupItem() =
    inherit ToggleGroup.Item()
    member val size: ToggleGroup.Size = unbox null with get,set
    member val variant: ToggleGroup.Variant = unbox null with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        let context = ToggleGroup.Context.useToggleGroupContext()
        ToggleGroup.Item(
            class' = Lib.cn [|
                Toggle.variants(
                    variant = (props.variant &&= context.Variant()),
                    size = (props.size &&= context.Size())
                    )
                "hover:bg-muted hover:text-muted-foreground
                data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
                props.class'
            |]
            ).spread props
