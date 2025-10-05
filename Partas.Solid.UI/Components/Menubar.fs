namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type MenubarGroup() =
    inherit Menubar.Group()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Group()
            .dataSlot("menubar-group")
            .spread props
    
[<Erase>]
type MenubarPortal() =
    inherit Menubar.Portal()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Portal()
            .dataSlot("menubar-portal")
            .spread props
    
[<Erase>]
type MenubarSub() =
    inherit Menubar.Sub()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Sub()
            .dataSlot("menubar-sub")
            .spread props
    
[<Erase>]
type MenubarRadioGroup() =
    inherit Menubar.RadioGroup()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.RadioGroup()
            .dataSlot("menubar-radio-group")
            .spread props
    
[<Erase>]
type Menubar() =
    inherit Kobalte.Menubar()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Menubar(class'= Lib.cn [|
            "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs"
            props.class'
        |]) .dataSlot("menubar")
            .spread props

[<Erase>]
type MenubarMenu() =
    inherit Kobalte.Menubar.Menu()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Menu(gutter = 8)
            .dataSlot("menubar-menu")
            .spread props

[<Erase>]
type MenubarTrigger() =
    inherit Menubar.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Trigger(class' = Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground \
            data-[expanded]:bg-accent data-[expanded]:text-accent-foreground \
            flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden \
            select-none"
            props.class'
        |]) .dataSlot("menubar-trigger")
            .spread props
[<Erase>]
type MenubarContent() =
    inherit Menubar.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        MenubarPortal() {
            Menubar.Content(class' = Lib.cn [|
                "bg-popover text-popover-foreground data-[expanded]:animate-content-show \
                data-[closed]:fade-out-0 data-[expanded]:fade-in-0 \
                data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 \
                data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 \
                data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 \
                z-50 min-w-[12rem] origin-(--kb-popper-content-transform-origin) \
                overflow-hidden rounded-md border p-1 shadow-md"
                // "z-50 min-w-48 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide
                // overflow-hidden rounded-md border bg-popover
                // p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show"
                props.class'
            |]) .dataSlot("menubar-content")
                .spread props
        }
[<Erase>]
type MenubarSubTrigger() =
    inherit Menubar.SubTrigger()
    [<Erase>]
    member val inset: bool = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.SubTrigger(class'=Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground data-[expanded]:bg-accent \
            data-[expanded]:text-accent-foreground flex cursor-default items-center \
            rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8"
            props.class'
        |]) .data("inset", unbox props.inset)
            .dataSlot("menubar-sub-trigger")
            .spread(props) {
            props.children
            Lucide.Lucide.ChevronRight(class' = "ml-auto size-4", strokeWidth = 2)
        }
[<Erase>]
type MenubarSubContent() =
    inherit Menubar.SubContent()
    [<SolidTypeComponent>]
    member props.constructor =
        MenubarPortal() {
            Menubar.SubContent(class' = Lib.cn [|
                "bg-popover text-popover-foreground data-[expanded]:animate-in \
                data-[closed]:animate-out data-[closed]:fade-out-0 \
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
                data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \
                data-[side=left]:slide-in-from-right-2 \
                data-[side=right]:slide-in-from-left-2 \
                data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] \
                origin-(--kb-popper-content-transform-origin) overflow-hidden \
                rounded-md border p-1 shadow-lg"
                props.class'
            |]) .dataSlot("menubar-sub-content")
                .spread(props)
        }
[<Erase>]
module MenubarItem =
    type Variant = ContextMenuItem.Variant
[<Erase>]
type MenubarItem() =
    inherit Menubar.Item()
    [<Erase>]
    member val variant: MenubarItem.Variant = JS.undefined with get,set
    [<Erase>]
    member val inset: bool = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.variant <- MenubarItem.Variant.Default
        Menubar.Item(class' = Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive \
            data-[variant=destructive]:focus:bg-destructive/10 \
            dark:data-[variant=destructive]:focus:bg-destructive/20 \
            data-[variant=destructive]:focus:text-destructive \
            data-[variant=destructive]:*:[svg]:!text-destructive \
            [&_svg:not([class*='text-'])]:text-muted-foreground relative flex \
            cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm \
            outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .data("inset", unbox props.inset)
            .data("variant", string props.variant)
            .dataSlot("menubar-item")
            .spread(props)
[<Erase>]
type MenubarCheckboxItem() =
    inherit Menubar.CheckboxItem()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.CheckboxItem(class'= Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground relative flex \
            cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 \
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("menubar-checkbox-item")
            .spread(props) {
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                Menubar.ItemIndicator() {
                    Lucide.Lucide.Check(class'="size-4",strokeWidth = 2)
                }
            }
            props.children
        }
[<Erase>]
type MenubarRadioItem() =
    inherit Menubar.RadioItem()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.RadioItem(class' = Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default \
            items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden \
            select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 \
            [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("menubar-radio-item")
            .spread(props) {
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {
                Lucide.Lucide.Circle(class'="size-2 fill-current", strokeWidth=2)
            }
            props.children
        }
[<Erase>]
type MenubarItemLabel() =
    inherit Menubar.ItemLabel()
    [<Erase>]
    member val inset: bool = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.ItemLabel(class'=Lib.cn [|
            "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"
            props.class'
        |]) .data("inset", unbox props.inset)
            .dataSlot("menubar-item-label")
            .spread(props)
[<Erase>]
type MenubarGroupLabel() =
    inherit Menubar.GroupLabel()
    [<Erase>]
    member val inset: bool = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.GroupLabel(class' = Lib.cn [|
            "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"
            props.class'
        |]) .data("inset", unbox props.inset)
            .dataSlot("menubar-group-label")
            .spread(props)
[<Erase>]
type MenubarSeparator() =
    inherit Menubar.Separator()
    [<SolidTypeComponent>]
    member props.constructor =
        Menubar.Separator(class' = Lib.cn [|
            "-mx-1 my-1 h-px bg-border"; props.class'
        |]) .dataSlot("menubar-separator")
            .spread(props)
[<Erase>]
type MenubarShortcut() =
    inherit span()
    [<SolidTypeComponent>]
    member props.constructor =
        span(class' = Lib.cn [|
            "ml-auto text-xs tracking-widest text-muted-foreground"
            props.class'
        |]) .dataSlot("menubar-shortcut")
            .spread props

