namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Partas.Solid.Polymorphism

[<Erase>]
type DropdownMenuTrigger() =
    inherit DropdownMenu.Trigger()
    interface Polymorph
    [<SolidTypeComponent>]
    member props.constructor =
       DropdownMenu.Trigger()
           .dataSlot("dropdown-menu-trigger")
           .spread props
    
[<Erase>]
type DropdownMenuPortal() =
    inherit DropdownMenu.Portal()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.Portal()
            .dataSlot("dropdown-menu-portal")
            .spread props
    
[<Erase>]
type DropdownMenuSub() =
    inherit DropdownMenu.Sub()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.Sub()
            .dataSlot("dropdown-menu-sub")
            .spread props
[<Erase>]
type DropdownMenuSubContent() =
    inherit DropdownMenu.SubContent()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.SubContent(
            class' = Lib.cn [|
                "bg-popover text-popover-foreground \
                data-[state=open]:animate-in data-[state=closed]:animate-out \
                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 \
                data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 \
                data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 \
                data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 \
                z-50 min-w-[8rem] origin-(--kb-popper-content-transform-origin) \
                overflow-hidden rounded-md border p-1 shadow-lg"
                props.class'
            |]
        )   .dataSlot("dropdown-menu-sub-content")
            .spread props
    
[<Erase>]
type DropdownMenuGroup() =
    inherit DropdownMenu.Group()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.Group()
            .dataSlot("dropdown-menu-group")
            .spread props
    
[<Erase>]
type DropdownMenuRadioGroup() =
    inherit DropdownMenu.RadioGroup()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.RadioGroup()
            .dataSlot("dropdown-menu-radio-group")
            .spread props
    
[<Erase>]
type DropdownMenu() =
    inherit Kobalte.DropdownMenu()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.DropdownMenu(gutter = 4)
            .dataSlot("dropdown-menu")
            .spread props
    
[<Erase>]
type DropdownMenuContent() =
    inherit DropdownMenu.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenuPortal() {
            DropdownMenu.Content(class' = Lib.cn [|
                "bg-popover text-popover-foreground data-[state=open]:animate-content-show \
                data-[closed]:animate-content-hide data-[closed]:fade-out-0 \
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
                data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \
                data-[side=top]:slide-in-from-bottom-2 z-50 \
                max-h-(--kb-popper-content-available-height) min-w-[8rem] \
                origin-(--kb-popper-content-transform-origin) overflow-x-hidden \
                overflow-y-auto rounded-md border p-1 shadow-md"
                props.class'
            |]) .dataSlot("dropdown-menu-content")
                .spread(props)
        }
[<Erase>]
module DropdownMenuItem =
    type Variant = ContextMenuItem.Variant
[<Erase>]
type DropdownMenuItem() =
    inherit DropdownMenu.Item()
    [<Erase>]
    member val variant: DropdownMenuItem.Variant = JS.undefined with get,set
    [<Erase>]
    member val inset: bool = JS.undefined with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.variant <- DropdownMenuItem.Variant.Default
        DropdownMenu.Item(class'= Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground \
            data-[variant=destructive]:text-destructive \
            data-[variant=destructive]:focus:bg-destructive/10 \
            dark:data-[variant=destructive]:focus:bg-destructive/20 \
            data-[variant=destructive]:focus:text-destructive \
            data-[variant=destructive]:*:[svg]:!text-destructive \
            [&_svg:not([class*='text-'])]:text-muted-foreground relative \
            flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm \
            outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .data("variant", string props.variant)
            .data("inset", unbox props.inset)
            .dataSlot("dropdown-menu-item")
            .spread(props)
[<Erase>]
type DropdownMenuShortcut() =
    inherit span()
    [<SolidTypeComponent>]
    member props.constructor =
        span(class'= Lib.cn [|
            "ml-auto text-xs tracking-widest text-muted-foreground"; props.class'
        |]) .dataSlot("dropdown-menu-shortcut")
            .spread(props)
[<Erase>]
type DropdownMenuLabel() =
    inherit div()
    [<Erase>]
    member val inset : bool = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        div(class'= Lib.cn [|
            "px-2 py-1.5 text-sm font-medium"
            "data-[inset]:pl-8"
        |]) .data("inset", unbox props.inset)
            .dataSlot("dropdown-menu-label")
            .spread(props)
[<Erase>]
type DropdownMenuSeparator() =
    inherit DropdownMenu.Separator()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.Separator(class'= Lib.cn [|
            "-mx-1 my-1 h-px bg-border"
            props.class'
        |]) .dataSlot("dropdown-menu-separator")
            .spread(props)


[<Erase>]
type DropdownMenuSubTrigger() =
    inherit DropdownMenu.SubTrigger()
    interface Polymorph
    [<Erase>]
    member val inset: bool = JS.undefined with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        DropdownMenu.SubTrigger(class' = Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground \
            data-[state=open]:bg-accent data-[state=open]:text-accent-foreground \
            [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default \
            items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden \
            select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("dropdown-menu-sub-trigger")
            .spread(props) {
            props.children
            Lucide.Lucide.ChevronRight(strokeWidth = 2, class' = "size-4 ml-auto")
        }

[<Erase>]
type DropdownMenuCheckboxItem() =
    inherit DropdownMenu.CheckboxItem()
    interface Polymorph
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        DropdownMenu.CheckboxItem(
            class' = Lib.cn [|
                "focus:bg-accent focus:text-accent-foreground relative flex \
                cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
                data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
                [&_svg:not([class*='size-'])]:size-4"
                props.class'
            |]
        )   .dataSlot("dropdown-menu-checkbox-item")
            .spread props {
            span(class' = "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                DropdownMenu.ItemIndicator() {
                    Lucide.Lucide.Check(class' = "size-4", strokeWidth = 2)
                }
            }
            props.children
        }

[<Erase>]
type DropdownMenuGroupLabel() =
    inherit DropdownMenu.GroupLabel()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.GroupLabel(class' = Lib.cn [|
            "px-2 py-1.5 text-sm font-semibold" ; props.class'
        |]) .dataSlot("dropdown-menu-group-label")
            .spread props
    

[<Erase>]
type DropdownMenuRadioItem() =
    inherit DropdownMenu.RadioItem()
    [<SolidTypeComponent>]
    member props.constructor =
        DropdownMenu.RadioItem(
            class' = Lib.cn [|
                "focus:bg-accent focus:text-accent-foreground relative flex \
                cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
                data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
                [&_svg:not([class*='size-'])]:size-4"
                props.class'
            |]) .dataSlot("dropdown-menu-radio-item")
                .spread props {
            span(class' = "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                DropdownMenu.ItemIndicator() {
                    Lucide.Lucide.Circle(class' = "size-2 fill-current", strokeWidth = 2)
                }
            }
            props.children
        }
