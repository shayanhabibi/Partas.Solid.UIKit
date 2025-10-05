namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type ContextMenu() =
    inherit Kobalte.ContextMenu()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu(gutter = 4).dataSlot("context-menu").spread props
    
[<Erase>]
type ContextMenuTrigger() =
    inherit ContextMenu.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        ContextMenu.Trigger().dataSlot("context-menu-trigger").spread props
[<Erase>]
type ContextMenuPortal() =
    inherit ContextMenu.Portal()
    [<SolidTypeComponent>]
    member props.constructor = ContextMenu.Portal().dataSlot("context-menu-portal").spread props
    
[<Erase>]
type ContextMenuSub() =
    inherit ContextMenu.Sub()
    [<SolidTypeComponent>]
    member props.constructor = ContextMenu.Sub().dataSlot("context-menu-sub").spread props
    
[<Erase>]
type ContextMenuGroup() =
    inherit ContextMenu.Group()
    [<SolidTypeComponent>]
    member props.constructor = ContextMenu.Group().dataSlot("context-menu-group").spread props
    
[<Erase>]
type ContextMenuRadioGroup() =
    inherit ContextMenu.RadioGroup()
    [<SolidTypeComponent>]
    member props.constructor = ContextMenu.RadioGroup().dataSlot("context-menu-radio-group").spread props
    
[<Erase>]
type ContextMenuContent() =
    inherit ContextMenu.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.Portal() {
            Kobalte.ContextMenu.Content(class'= Lib.cn [|
                "bg-popover text-popover-foreground data-[expanded]:animate-in \
                data-[closed]:animate-out data-[closed]:fade-out-0 \
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
                data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \
                data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--kb-popper-content-available-height) \
                min-w-[8rem] origin-(--kb-popper-content-transform-origin) \
                overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"
                // "[not(has-data-[inset])]:pl-1"
                props.class'
            |]).dataSlot("context-menu-content").spread(props)
            }
[<Erase>]
module ContextMenuItem =
    [<StringEnum>]
    type Variant =
        | Default
        | Destructive
[<Erase>]
type ContextMenuItem() =
    inherit ContextMenu.Item()
    [<Erase>]
    member val variant: ContextMenuItem.Variant = JS.undefined with get,set
    [<Erase>]
    member val inset: bool = JS.undefined with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.variant <- ContextMenuItem.Variant.Default
        props.inset <- true
        Kobalte.ContextMenu.Item(
            class' = Lib.cn [|
                "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive \
                data-[variant=destructive]:focus:bg-destructive/10 \
                dark:data-[variant=destructive]:focus:bg-destructive/20 \
                data-[variant=destructive]:focus:text-destructive \
                data-[variant=destructive]:*:[svg]:!text-destructive \
                [&_svg:not([class*='text-'])]:text-muted-foreground relative \
                flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 \
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
                data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \
                [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                props.class'
            |]) .data("inset", unbox props.inset)
                .data("variant", string props.variant)
                .dataSlot("context-menu-item")
                .spread(props)
[<Erase>]
type ContextMenuShortcut() =
    inherit span()
    [<SolidTypeComponent>]
    member props.constructor =
        span(class'= Lib.cn [| "ml-auto text-xs tracking-widest text-muted-foreground"; props.class' |])
            .dataSlot("context-menu-shortcut")
            .spread(props)
[<Erase>]
type ContextMenuSeparator() =
    inherit ContextMenu.Separator()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.Separator(
            class' = Lib.cn [|
                "-mx-1 my-1 h-px bg-border"
                props.class'
            |]
        )   .dataSlot("context-menu-separator")
            .spread(props)
[<Erase>]
type ContextMenuSubTrigger() =
    inherit ContextMenu.SubTrigger()
    [<Erase>]
    member val inset: bool = JS.undefined with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.inset <- true
        Kobalte.ContextMenu.SubTrigger(class'= Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground data-[expanded]:bg-accent \
            data-[expanded]:text-accent-foreground \
            [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default \
            items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none \
            data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .data("inset", unbox props.inset)
            .dataSlot("context-menu-sub-trigger")
            .spread(props) {
            props.children
            Lucide.Lucide.ChevronRight(class'="ml-auto", strokeWidth = 2)
        }
[<Erase>]
type ContextMenuSubContent() =
    inherit ContextMenu.SubContent()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.SubContent(class'= Lib.cn [|
            "bg-popover text-popover-foreground data-[expanded]:animate-in \
            data-[closed]:animate-out data-[closed]:fade-out-0 \
            data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
            data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \
            data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \
            data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] \
            origin-(--kb-popper-content-transform-origin) overflow-hidden \
            rounded-md border p-1 shadow-lg"
            props.class'
        |]) .dataSlot("context-menu-sub-content")
            .spread(props)
[<Erase>]
type ContextMenuCheckboxItem() =
    inherit ContextMenu.CheckboxItem()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.CheckboxItem(class'= Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground relative flex \
            cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("context-menu-checkbox-item")
            .spread(props) {
            span(class'= "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                Kobalte.ContextMenu.ItemIndicator() {
                    Lucide.Lucide.Check(class'="size-4", strokeWidth = 2)
                }
            }
            props.children
        }
[<Erase>]
type ContextMenuGroupLabel() =
    inherit ContextMenu.GroupLabel()
    [<Erase>]
    member val inset: bool = JS.undefined with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.GroupLabel(class' = Lib.cn [|
            "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"; props.class'
        |]) .data("inset", unbox props.inset)
            .dataSlot("context-menu-group-label")
            .spread(props)
[<Erase>]
type ContextMenuRadioItem() =
    inherit ContextMenu.RadioItem()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.ContextMenu.RadioItem(class'= Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground relative flex \
            cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("context-menu-radio-item")
            .spread(props) {
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                Kobalte.ContextMenu.ItemIndicator() {
                    Lucide.Lucide.Circle(class'="size-2 fill-current", strokeWidth = 2)
                }
            }
            props.children
        }


