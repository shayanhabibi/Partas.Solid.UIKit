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
    type ToggleGroupsContext = {| Size: Size; Variant: Variant |}
    [<Erase>]
    module Context =
        let ToggleGroupContext = createContext<ToggleGroupsContext>({| Size = Size.Default; Variant = Variant.Default |})

[<Erase>]
type ToggleGroup() =
    inherit Kobalte.ToggleGroup()
    member val size: ToggleGroup.Size = unbox null with get,set
    member val variant: ToggleGroup.Variant = unbox null with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ToggleGroup(
            class' = Lib.cn [|
                //tw
                "flex items-center justify-center gap-1"
                props.class'
            |]
            ).spread props
            {
                ToggleGroup.Context.ToggleGroupContext({| Size = props.size; Variant = props.variant |}) {
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
        let context = useContext(ToggleGroup.Context.ToggleGroupContext)
        ToggleGroup.Item(
            class' = Lib.cn [|
                Toggle.variants(
                    variant = (props.variant &&= context.Variant),
                    size = (props.size &&= context.Size)
                    )
                "hover:bg-muted hover:text-muted-foreground
                data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"
                props.class'
            |]
            ).spread props
