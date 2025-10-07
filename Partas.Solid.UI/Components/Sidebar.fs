namespace Partas.Solid.UI

open Partas.Solid.Polymorphism
open Browser
open Fable.Core.JS
open Partas.Solid
open Partas.Solid.Primitives
open Partas.Solid.Aria
open Fable.Core
open Browser.Types
open Fable.Core.JsInterop

[<Erase>]
module Sidebar =
    [<Literal>]
    let sidebarCookieName = "sidebar:state"
    [<Literal>]
    let sidebarCookieMaxAge = 60 * 60 * 24 * 7
    [<Literal>]
    let sidebarWidth = "16rem"
    [<Literal>]
    let sidebarWidthMobile = "18rem"
    [<Literal>]
    let sidebarWidthIcon = "3rem"
    [<Literal>]
    let sidebarKeyboardShortcut = "b"
    
    [<StringEnum>]
    type State =
        | Expanded
        | Collapsed
        
    [<StringEnum>]
    type Side =
        | Left
        | Right
        
    [<StringEnum>]
    type Variant =
        | Sidebar
        | Floating
        | Inset
        
    [<StringEnum(CaseRules.LowerAll)>]
    type Collapsible =
        | OffCanvas
        | Icon
        | None
        
    [<Erase>]
    type SidebarContext = {|
            state: State Accessor
            open': bool Accessor
            setOpen: bool -> unit
            openMobile: bool Accessor
            setOpenMobile: bool -> unit
            isMobile: bool Accessor
            toggleSidebar: unit -> unit
        |}

    [<Erase>]
    module Context =
        let SidebarContext = createContext<SidebarContext>()
        let useSidebar () =
            let context = useContext(SidebarContext)
            if not (unbox context) then failwith "useSidebar can only be used within a Sidebar"
            else context

open Sidebar

[<Erase>]
type SidebarProvider() =
    inherit div()
    [<DefaultValue>] val mutable defaultOpen: bool
    [<DefaultValue>] val mutable open': bool
    [<DefaultValue>] val mutable onOpenChange: bool -> unit
    [<SolidTypeComponent>]
    member props.constructor =
        let isMobile = Singletons.useIsMobile(false)
        let (openMobile, setOpenMobile) = createSignal(false)
        let (_open, _setOpen) = createSignal(props.defaultOpen)
        let open': Accessor<bool> = fun () -> props.open' ??= _open()
        let setOpen: Setter<bool> = fun value ->
            if unbox props.onOpenChange then
                props.onOpenChange(value)
            _setOpen (value)
            document.cookie <- $"{sidebarCookieName}={open'()}; path=/; max-age=${sidebarCookieMaxAge}"
        let toggleSidebar = fun () ->
            if isMobile()() then
                setOpenMobile(not (open'()))
            else setOpen(open'() |> not)
        createEffect (fun () ->
            let handleKeyDown = fun (event: KeyboardEvent) ->
                if event.key = sidebarKeyboardShortcut &&= (event.metaKey || event.ctrlKey) then
                    event.preventDefault()
                    toggleSidebar()
            window.addEventListener("keydown", !!handleKeyDown)
            onCleanup(
                fun () -> window.removeEventListener("keydown", !!handleKeyDown)
            )
        )
        
        let state () = if open'() then Expanded else Collapsed
        let contextValue = {|
                state = state
                open' = open'
                setOpen = setOpen
                isMobile = isMobile
                openMobile = openMobile
                setOpenMobile = setOpenMobile
                toggleSidebar = toggleSidebar
            |}
        let style = mergeProps([| createObj [
                 "--sidebar-width" ==> sidebarWidth
                 "--sidebar-width-icon" ==> sidebarWidthIcon
             ]; props.style |])
        Context.SidebarContext(!!contextValue) {
            div(class' = Lib.cn [|
                "group/sidebar-wrapper flex min-h-svh w-full \
                text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar"
                props.class'
            |]).style'( style )
                .spread props
                { props.children }
        }

[<Erase>]
type Sidebar() =
    inherit div()
    [<Erase>]
    member val side: Sidebar.Side = unbox null with get,set
    [<Erase>]
    member val variant: Sidebar.Variant = unbox null with get,set
    [<Erase>]
    member val collapsible: Sidebar.Collapsible = unbox null with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.side <- Left
        props.variant <- Sidebar.Sidebar
        props.collapsible <- OffCanvas
        let ctx = Context.useSidebar()
        let isMobile, state, openMobile, setOpenMobile =
            (ctx.isMobile, ctx.state, ctx.openMobile, ctx.setOpenMobile)
        Switch() {
            Match(when' = (props.collapsible = Sidebar.None)) {
                div(class' = Lib.cn [|
                    "flex h-full w-(--sidebar-width) flex-col bg-sidebar \
                    text-sidebar-foreground"
                    props.class'
                |]) .dataSlot("sidebar")
                    .spread props
                    { props.children }
            }
            Match(when' = isMobile()) {
                Sheet( open' = openMobile(), onOpenChange = !!setOpenMobile )
                    .spread props {
                        SheetContent(
                            class' = "w-(--sidebar-width) bg-sidebar \
                            p-0 text-sidebar-foreground [&>button]:hidden",
                            position = !!props.side
                        )   .dataSlot("sidebar")
                            .data("sidebar", !!Sidebar.Sidebar)
                            .data("mobile", "true")
                            .style'(createObj [ "--sidebar-width" ==> sidebarWidthMobile ])
                            {
                                SheetHeader(class' = "sr-only") {
                                    SheetTitle() { "Sidebar" }
                                    SheetDescription() { "Displays the mobile sidebar." }
                                }
                                div(class' = "flex h-full w-full flex-col") { props.children }
                            }
                    }
                
            }
            Match(when' = (isMobile() |> not)) {
                div(
                    class' = "group peer hidden md:block text-sidebar-foreground"
                )   .data("state", !!state())
                    .data(
                        "collapsible",
                        if state() = Collapsed then !!props.collapsible else ""
                        )
                    .data("variant", !!props.variant)
                    .data("side", !!props.side)
                    .dataSlot("sidebar")
                    {
                        
                        // gap handler on desktop
                        div(
                        class' = Lib.cn [|
                            "duration-200 relative w-(--sidebar-width) \
                            bg-transparent transition-[width] ease-linear \
                            group-data-[collapsible=offcanvas]:w-0 \
                            group-data-[side=right]:rotate-180"
                            if (props.variant = Sidebar.Floating
                                || props.variant = Sidebar.Inset)
                            then "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                            else "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
                        |]
                        ).dataSlot("sidebar-gap")
                        
                        div(class' = Lib.cn [|
                            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) \
                            transition-[left,right,width] duration-200 ease-linear md:flex"
                            if props.side = Sidebar.Left then
                                "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                            else "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]"
                            // Adjust the padding for floating and inset variants.
                            if props.variant = Sidebar.Floating || props.variant = Sidebar.Inset then
                                "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                            else "group-data-[collapsible=icon]:w-(--sidebar-width-icon) \
                                group-data-[side=left]:border-r group-data-[side=right]:border-l"
                            props.class' 
                        |]) .dataSlot("sidebar-container")
                            .spread props
                            {
                                div(
                                    class' = "flex h-full w-full flex-col bg-sidebar
                                    group-data-[variant=floating]:rounded-lg \
                                    group-data-[variant=floating]:border
                                    group-data-[variant=floating]:border-sidebar-border
                                    group-data-[variant=floating]:shadow"
                                )   .dataSlot("sidebar-inner")
                                    .data("sidebar", !!Sidebar.Sidebar)
                                    { props.children }
                            }
                }
            }
            
        }

[<Erase>]
type SidebarTrigger() =
    inherit button()
    interface Polymorph
    [<DefaultValue>] val mutable onClick: MouseEvent -> unit 
    [<DefaultValue>] val mutable side: Sidebar.Side 
    [<DefaultValue>] val mutable variant: Sidebar.Variant 
    [<DefaultValue>] val mutable collapsible: Sidebar.Collapsible 
    [<SolidTypeComponent>]
    member props.constructor =
        let toggleSidebar = Context.useSidebar().toggleSidebar
        Button(
            variant = Button.Variant.Ghost,
            size = Button.Size.Icon,
            class' = Lib.cn [| "size-7"; props.class' |],
            onClick = (fun event ->
                    if !!props.onClick
                    then props.onClick(event)
                    toggleSidebar())
        )   .data("sidebar", "trigger")
            .dataSlot("sidebar-trigger")
            .spread(props) {
            Lucide.Lucide.PanelLeft(class' = "size-4", strokeWidth = 2)
            SrSpan() { "Toggle Sidebar" }
        }    

[<Erase>]
type SidebarRail() =
    inherit button()
    [<SolidTypeComponent>]
    member props.constructor =
        let toggleSidebar = Context.useSidebar().toggleSidebar
        button(
            title = "Toggle Sidebar",
            onClick = !!toggleSidebar,
            tabindex = -1,
            ariaLabel = "Toggle Sidebar",
            class' =
                Lib.cn [|
                    // shadcn impl
                    "hover:after:bg-sidebar-border absolute inset-y-0 z-20 \
                    hidden w-4 -translate-x-1/2 transition-all ease-linear \
                    group-data-[side=left]:-right-4 group-data-[side=right]:left-0 \
                    after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex"
                    "in-data-[side=left]:cursor-w-resize \
                    in-data-[side=right]:cursor-e-resize"
                    "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize \
                    [[data-side=right][data-state=collapsed]_&]:cursor-w-resize"
                    "hover:group-data-[collapsible=offcanvas]:bg-sidebar \
                    group-data-[collapsible=offcanvas]:translate-x-0 \
                    group-data-[collapsible=offcanvas]:after:left-full"
                    // // solid-ui impl
                    // "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all
                    // ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px]
                    // hover:after:bg-sidebar-border group-data-[side=left]:-right-4
                    // group-data-[side=right]:left-0 sm:flex
                    // [[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize
                    // [[data-side=left][data-state=collapsed]_&]:cursor-e-resize
                    // [[data-side=right][data-state=collapsed]_&]:cursor-w-resize
                    // group-data-[collapsible=offcanvas]:translate-x-0
                    // group-data-[collapsible=offcanvas]:after:left-full
                    // group-data-[collapsible=offcanvas]:hover:bg-sidebar"
                    "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2
                    [[data-side=right][data-collapsible=offcanvas]_&]:-left-2"
                    props.class'
                |]
            )
            .dataSlot("sidebar-rail")
            .data("sidebar", "rail")
            .spread props

[<Erase>]
type SidebarInset() =
    inherit main()
    [<SolidTypeComponent>]
    member props.constructor =
        main(
            class' =
                Lib.cn [|
                    "bg-background relative flex w-full flex-1 flex-col"
                    "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 \
                    md:peer-data-[variant=inset]:rounded-xl \
                    md:peer-data-[variant=inset]:shadow-sm \
                    md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2"
                    // "relative flex min-h-svh flex-1 flex-col bg-background
                    // peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]
                    // md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2
                    // md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl
                    // md:peer-data-[variant=inset]:shadow"
                    props.class'
                |]
        )   .dataSlot("sidebar-inset")
            .spread props

[<Erase>]
type SidebarInput() =
    inherit TextFieldInput()
    [<SolidTypeComponent>]
    member props.constructor =
        TextField()
            {
                TextFieldInput( class' = Lib.cn [|
                    "h-8 w-full bg-background shadow-none"; props.class'
                |])
                    .dataSlot("sidebar-input")
                    .data("sidebar", "input")
                    .spread props
            }

[<Erase>]
type SidebarHeader() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [| "flex flex-col gap-2 p-2"; props.class' |])
            .dataSlot("sidebar-header")
            .data("sidebar", "header")
            .spread(props)

[<Erase>]
type SidebarFooter() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [| "flex flex-col gap-2 p-2"; props.class' |])
            .dataSlot("sidebar-footer")
            .data("sidebar", "footer")
            .spread(props)

[<Erase>]
type SidebarSeparator() =
    inherit Separator()
    [<SolidTypeComponent>]
    member props.constructor =
        Separator(class' = Lib.cn [| "mx-2 w-auto bg-sidebar-border"
                                     props.class' |])
            .dataSlot("sidebar-separator")
            .data("sidebar", "separator")
            .spread props

[<Erase>]
type SidebarContent() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [|
            "flex min-h-0 flex-1 flex-col gap-2 overflow-auto
            group-data-[collapsible=icon]:overflow-hidden"
            props.class'
        |]) .data("sidebar", "content")
            .dataSlot("sidebar-content")
            .spread props

[<Erase>]
type SidebarGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [| "relative flex w-full min-w-0 flex-col p-2"
                               props.class' |])
            .data("sidebar", "group")
            .dataSlot("sidebar-group")
            .spread props

[<Erase>]
type SidebarGroupLabel() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(
            class' = Lib.cn [|
                "flex h-8 shrink-0 items-center rounded-md px-2 text-xs
                font-medium text-sidebar-foreground/70 outline-hidden ring-sidebar-ring
                transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2
                [&>svg]:size-4 [&>svg]:shrink-0"
                "group-data-[collapsible=icon]:-mt-8
                group-data-[collapsible=icon]:opacity-0"
                props.class'
            |]
            ).data("sidebar", "group-label")
            .dataSlot("sidebar-group-label")
            .spread props

[<Erase>]
type SidebarGroupAction() =
    inherit button()
    [<SolidTypeComponent>]
    member props.constructor =
        button(
            class' = Lib.cn [|
                "absolute right-3 top-3.5 flex aspect-square w-5 items-center
                justify-center rounded-md p-0 text-sidebar-foreground outline-none
                ring-sidebar-ring transition-transform hover:bg-sidebar-accent
                hover:text-sidebar-accent-foreground focus-visible:ring-2
                [&>svg]:size-4 [&>svg]:shrink-0"
                // Increases the hit area of the button on mobile.
                "after:absolute after:-inset-2 after:md:hidden"
                "group-data-[collapsible=icon]:hidden"
                props.class'
            |]
            ).data("sidebar", "group-action")
            .dataSlot("sidebar-group-action")
            .spread props

[<Erase>]
type SidebarGroupContent() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [| "w-full text-sm"; props.class' |])
            .data("sidebar", "group-content")
            .dataSlot("sidebar-group-content")
            .spread props

[<Erase>]
type SidebarMenu() =
    inherit ul()
    [<SolidTypeComponent>]
    member props.constructor =
        ul(class' = Lib.cn [|
            "flex w-full min-w-0 flex-col gap-1"
            props.class'
        |]).data("sidebar", "menu")
            .dataSlot("sidebar-menu")
            .spread props

[<Erase>]
type SidebarMenuItem() =
    inherit li()
    [<SolidTypeComponent>]
    member props.constructor =
        li(class' = Lib.cn [|
            "group/menu-item relative"
            props.class'
        |]).data("sidebar","menu-item")
            .dataSlot("sidebar-menu-item")
            .spread props

[<Erase>]
module SidebarMenuButton =
    [<StringEnum>]
    type Variant =
        | Default
        | Outline
    [<StringEnum>]
    type Size =
        | Default
        | Small
        | Large
    [<AutoOpen>]
    type ClassVariance =
        static member variants(?variant: Variant, ?size: Size): string =
            let variant = defaultArg variant Variant.Default
            let size = defaultArg size Size.Default
            //tw
            "peer/menu-button flex w-full items-center gap-2 overflow-hidden \
            rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring \
            transition-[width,height,padding] hover:bg-sidebar-accent \
            hover:text-sidebar-accent-foreground focus-visible:ring-2 \
            active:bg-sidebar-accent active:text-sidebar-accent-foreground \
            disabled:pointer-events-none disabled:opacity-50 \
            group-has-data-[sidebar=menu-action]/menu-item:pr-8 \
            aria-disabled:pointer-events-none aria-disabled:opacity-50 \
            data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium \
            data-[active=true]:text-sidebar-accent-foreground \
            data-[current=page]:bg-sidebar-accent data-[current=page]:font-medium \
            data-[current=page]:text-sidebar-accent-foreground \
            data-[state=open]:hover:bg-sidebar-accent \
            data-[state=open]:hover:text-sidebar-accent-foreground \
            group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! \
            [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
            + " " +
            // "peer/menu-button flex w-full items-center gap-2 overflow-hidden
            // rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring
            // transition-[width,height,padding] hover:bg-sidebar-accent
            // hover:text-sidebar-accent-foreground focus-visible:ring-2
            // active:bg-sidebar-accent active:text-sidebar-accent-foreground
            // disabled:pointer-events-none disabled:opacity-50
            // group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none
            // aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium
            // aria-[current=page]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent
            // data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8
            // group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate
            // [&>svg]:size-4 [&>svg]:shrink-0 " +
            match variant with
            | Variant.Default -> (*TW*) "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            | Variant.Outline -> (*TW*)
                "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] \
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground \
                hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
            + " " +
            match size with
            | Default -> (*TW*) "h-8 text-sm"
            | Small -> (*TW*) "h-7 text-xs"
            | Large -> (*TW*) "h-12 text-sm group-data-[collapsible=icon]:p-0!"
[<Erase>]
module KobalteButton =
    [<StringEnum>]
    type Variant =
        | Default
        | Destructive
        | Outline
        | Secondary
        | Ghost
        | Link
    [<StringEnum>]
    type Size =
        | Default
        | Small
        | Large
        | Icon
    [<Erase; AutoOpen>]
    type ClassVariance =
        static member variants(?variant: Variant, ?size: Size): string =
            let variant = defaultArg variant Variant.Default
            let size = defaultArg size Size.Default
            //tw
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium
            ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +
            match variant with
            | Variant.Default -> (*TW*) "bg-primary text-primary-foreground hover:bg-primary/90"
            | Variant.Destructive -> (*TW*) "bg-destructive text-destructive-foreground hover:bg-destructive/90"
            | Variant.Outline -> (*TW*) "border border-input hover:bg-accent hover:text-accent-foreground"
            | Variant.Secondary -> (*TW*) "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            | Variant.Ghost -> (*TW*) "hover:bg-accent hover:text-accent-foreground"
            | Variant.Link -> (*TW*) "text-primary underline-offset-4 hover:underline"
            + " " +
            match size with
            | Default -> (*TW*) "h-10 px-4 py-2"
            | Small -> (*TW*) "h-9 px-3 text-xs"
            | Large -> (*TW*) "h-11 px-8"
            | Icon -> (*TW*) "size-10"

[<Erase>]
type KobalteButton() =
    inherit Kobalte.Button()
    [<Erase>]
    member val variant: KobalteButton.Variant = unbox null with get,set
    [<Erase>]
    member val size: KobalteButton.Size = unbox null with get,set
    
    [<SolidTypeComponent>]
    member props.sont =
        Kobalte.Button(
            class' = Lib.cn [|
                KobalteButton.ClassVariance.variants(props.variant, props.size)
                props.class'
            |]
            ).spread props
        

[<Erase>]
type SidebarMenuButton() =
    inherit KobalteButton()
    interface Polymorph
    [<DefaultValue>] val mutable isActive: bool
    [<DefaultValue>] val mutable tooltip: string
    [<DefaultValue>] val mutable variant: SidebarMenuButton.Variant
    [<Erase>] member val size: SidebarMenuButton.Size = undefined with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.isActive <- false
        props.variant <- SidebarMenuButton.Variant.Default
        props.size <- SidebarMenuButton.Size.Default
        let ctx = Context.useSidebar()
        let (isMobile, state) = (ctx.isMobile, ctx.state)
        let bakedButton =
            Kobalte.Button(
                class' = Lib.cn [|
                    SidebarMenuButton.ClassVariance.variants(props.variant, props.size)
                    props.class'
                |]
            )   .data("sidebar", "menu-button")
                .data("size", !!props.size)
                .data("active", !!props.isActive)
                .spread props
        
        Show(when' = !!props.tooltip, fallback = !!bakedButton) {
            Tooltip(placement = Kobalte.Enums.KobaltePlacement.Right) {
                TooltipTrigger(class' = "w-full") { bakedButton }
                TooltipContent(hidden = !!(state() <> State.Collapsed || isMobile()))
                    { props.tooltip }
            }
        }

[<Erase>]
type SidebarMenuAction() =
    inherit button()
    [<DefaultValue>] val mutable showOnHover: bool
    [<SolidTypeComponent>]
    member props.constructor =
        props.showOnHover <- false
        
        button(
            class' = Lib.cn [|
                "absolute right-1 top-1.5 flex aspect-square w-5 items-center
                justify-center rounded-md p-0 text-sidebar-foreground
                outline-none ring-sidebar-ring transition-transform
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground
                [&>svg]:size-4 [&>svg]:shrink-0"
                // Increases the hit area of the button on mobile.
                "after:absolute after:-inset-2 after:md:hidden"
                "peer-data-[size=sm]/menu-button:top-1"
                "peer-data-[size=default]/menu-button:top-1.5"
                "peer-data-[size=lg]/menu-button:top-2.5"
                "group-data-[collapsible=icon]:hidden"
                props.showOnHover
                &&= "group-focus-within/menu-item:opacity-100 \
                    group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 \
                    peer-aria-[current=page]/menu-button:text-sidebar-accent-foreground \
                    md:opacity-0"
                props.class'
            |]
            ).data("sidebar", "menu-action")
            .spread props

[<Erase>]
type SidebarMenuBadge() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(
            class' = Lib.cn [|
                "pointer-events-none absolute right-1 flex h-5 \
                min-w-5 select-none items-center justify-center \
                rounded-md px-1 text-xs font-medium tabular-nums \
                text-sidebar-foreground"
                "peer-hover/menu-button:text-sidebar-accent-foreground \
                peer-aria-[current=page]/menu-button:text-sidebar-accent-foreground"
                "peer-data-[size=sm]/menu-button:top-1"
                "peer-data-[size=default]/menu-button:top-1.5"
                "peer-data-[size=lg]/menu-button:top-2.5"
                "group-data-[collapsible=icon]:hidden"
                props.class'
            |]
            ).data("sidebar", "menu-badge")
            .spread props
            
[<Erase>]
type SidebarMenuSkeleton() =
    inherit div()
    [<DefaultValue>] val mutable showIcon: bool
    [<SolidTypeComponent>]
    member props.constructor =
        let width =
            createMemo( fun () -> $"{Math.floor( Math.random() * 40. ) + 50.}%%")
        
        div(class' = Lib.cn [| "flex h-8 items-center gap-2 rounded-md px-2"
                               props.class' |])
            .data("sidebar", "menu-skeleton")
            .spread props
            {
                props.showIcon
                &&= Skeleton(class' = "size-4 rounded-md").data("sidebar", "menu-skeleton-icon")
                Skeleton(
                    class' = "h-4 max-w-[--skeleton-width] flex-1"
                    ).data("sidebar", "menu-skeleton-text")
                    .style'(createObj ["--skeleton-width", width()])
            }

[<Erase>]
type SidebarMenuSub() =
    inherit ul()
    [<SolidTypeComponent>]
    member props.constructor =
        ul(class' = Lib.cn [|
            "mx-3.5 flex min-w-0 translate-x-px flex-col \
            gap-1 border-l border-sidebar-border px-2.5 py-0.5"
            "group-data-[collapsible=icon]:hidden"
            props.class'
        |]) .data("sidebar", "menu-sub")
            .spread props

[<Erase>]
type SidebarMenuSubItem() =
    inherit li()
    [<SolidTypeComponent>]
    member props.constructor = li().spread props

[<Erase>]
module sidebarMenuSubButton =
    [<Erase>]
    type Size =
        | [<CompiledName("sm")>] Small
        | [<CompiledName("md")>] Medium

open sidebarMenuSubButton

[<Erase>]
type SidebarMenuSubButton() =
    inherit a()
    [<DefaultValue>] val mutable size: Size
    [<DefaultValue>] val mutable isActive: bool
    [<SolidTypeComponent>]
    member props.constructor =
        props.size <- Medium
        a(
            class' = Lib.cn [|
                "flex h-7 min-w-0 -translate-x-px items-center gap-2
                overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none
                ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground
                disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none
                aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4
                [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground"
                "aria-[current=page]:bg-sidebar-accent
                aria-[current=page]:text-sidebar-accent-foreground"
                props.size = Small &&= "text-xs"
                props.size = Medium &&= "text-sm"
                "group-data-[collapsible=icon]:hidden"
                props.class'
            |]            
        )   .data("sidebar", "menu-sub-button")
            .data("size", !!props.size)
            .data("active", !!props.isActive)
            .spread props
