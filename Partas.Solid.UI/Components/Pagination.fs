namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Partas.Solid.Aria
open Fable.Core.JS
open Fable.Core.JsInterop


[<Erase>]
type PaginationItems() =
    inherit Pagination.Items()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Pagination.Items()
            .dataSlot("pagination-items")
            .spread props
    
[<Erase>]
type Pagination() =
    inherit Kobalte.Pagination()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Pagination(class' = Lib.cn [|
            "[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1"
            props.class'
        |]) .dataSlot("pagination")
            .spread(props)
[<Erase>]
type PaginationItem() =
    inherit Pagination.Item()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Pagination.Item(class' = Lib.cn [|
            Button.variants(Button.Variant.Ghost)
            "size-10 data-[current]:border"
            props.class'
        |]) .dataSlot("pagination-item")
            .spread(props)
[<Erase>]
type PaginationEllipsis() =
    inherit Pagination.Ellipsis()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Pagination.Ellipsis(class'= Lib.cn [|
            "flex size-10 items-center justify-center"
            props.class'
        |]) .dataSlot("pagination-ellipsis")
            .spread(props) {
            Lucide.Lucide.Ellipsis(class'="size-4",strokeWidth = 2)
            span(class'="sr-only") {"More pages"}
        }
[<Erase>]
type PaginationPrevious() =
    inherit Pagination.Previous()
    [<SolidTypeComponent>]
    member props.constructor =
        let children,hasChildren = Lib.createChildrenResolver(props.children)
        Kobalte.Pagination.Previous(class' = Lib.cn [|
            Button.variants(Button.Variant.Ghost)
            "gap-1 pl-2.5"
            props.class'
        |]) .dataSlot("pagination-previous")
            .spread(props) {
            Show(when' = (hasChildren()),
                 fallback = Fragment() {
                     Lucide.Lucide.ChevronLeft(class'="size-4", strokeWidth = 2)
                     span() { "Previous" }
                 }) {
                children()
            }
        }
[<Erase>]
type PaginationNext() =
    inherit Pagination.Next()
    [<SolidTypeComponent>]
    member props.constructor =
        let children, hasChildren = Lib.createChildrenResolver(props.children)
        Kobalte.Pagination.Next(class' = Lib.cn [|
            Button.variants(Button.Variant.Ghost)
            "gap-1 pl-2.5"
            props.class'
        |]) .dataSlot("pagination-next")
            .spread(props) {
            if hasChildren() then
                children()
            else 
                Fragment() {
                    span() {"Next"}
                    Lucide.Lucide.ChevronRight(class'="size-4", strokeWidth = 2)
                }
        }


