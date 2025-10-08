import{H as r,I as k,T as D,L as V,N as O,Q as n}from"./iframe-DHSEN8D7.js";import{useMDXComponents as L}from"./index-e4aCb-2o.js";import{S as i}from"./SidebarProvider.stories-CYcPrKwG.js";import{S as o,D as B}from"./Sidebar.stories-YkBpDMxq.js";import{S as s}from"./SidebarTrigger.stories-v8ZiiZnT.js";import{S as d}from"./SidebarRail.stories-DvEITgIO.js";import{S as l}from"./SidebarInset.stories-fLVi6d9P.js";import{S as p}from"./SidebarInput.stories-C4yUpyq4.js";import{S as b}from"./SidebarHeader.stories-CKQwmjJ2.js";import{S as c}from"./SidebarFooter.stories-CVIdQ2xy.js";import{S as u}from"./SidebarSeparator.stories-Ch7HLUMg.js";import{S as m}from"./SidebarContent.stories-DdymYp5Y.js";import{S as f}from"./SidebarGroup.stories-fhmEXUNM.js";import{S as g}from"./SidebarGroupLabel.stories-ok1DyXlC.js";import{S as h}from"./SidebarGroupAction.stories-BTBTocf-.js";import{S}from"./SidebarGroupContent.stories-ChfRyOgD.js";import{S as v}from"./SidebarMenu.stories-DX2_sP9d.js";import{S as x}from"./SidebarMenuItem.stories-X30QKeYB.js";import{S as y}from"./SidebarMenuButton.stories-CD1Km89C.js";import{S as w}from"./SidebarMenuAction.stories-PQ2yhn7j.js";import{S as C}from"./SidebarMenuBadge.stories-pwvWUn5x.js";import{S as M}from"./SidebarMenuSkeleton.stories-C0UhtX0m.js";import{S as j}from"./SidebarMenuSub.stories-DctAAt-i.js";import{S as z}from"./SidebarMenuSubItem.stories-CKLk8kGO.js";import{S as T}from"./SidebarMenuSubButton.stories-aBREen4T.js";import"./preload-helper-PPVm8Dsz.js";import"./Sidebar-UqzHLnwB.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Util-DXwscfZV.js";import"./Sheet-BPa9EhMG.js";import"./Option-DlNMNgAB.js";import"./PLLNVYER-mplKr-l0.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./FN6EICGO-CNc9l087.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./combineProps-ChBwTExo.js";import"./x-DWk3N72V.js";import"./Icon-By-Qgdq5.js";import"./Button-BnulhXAt.js";import"./Text-nkWEn69A.js";import"./MKJEDDFV-EnaCE2Sw.js";import"./NGHEENNE-Dj0dKL4v.js";import"./ZZYKR3VO-sS--fHny.js";import"./Separator-DmtN1xBE.js";import"./T4C3DMHT-ByXrw0oU.js";import"./Tooltip-BEV_7GtL.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./Skeleton-Ch5SvzLi.js";import"./settings-DD2i3N_3.js";import"./circle-question-mark-doJ2-4MF.js";import"./search-DRe7ScFO.js";import"./mail-DI84t236.js";import"./DropdownMenu-CMmGjQH6.js";import"./LEK3K6R3-twSiq3D6.js";import"./N3GAC5SS-EuMAo5Zl.js";import"./QZDH5R5B-C5rmEo9L.js";import"./SOM3K36D-TiEONE0Z.js";import"./VI7QYH27-BRSBmtcb.js";import"./chevron-right-B-Xbegzb.js";import"./check-B6yQMYMS.js";import"./circle-aMw8Dqjc.js";import"./ellipsis-Bd-EXZ5z.js";import"./Avatar-BlWIAkQu.js";import"./bell-CFmUCAp-.js";const I=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Polymorphism\r
open Browser\r
open Fable.Core.JS\r
open Partas.Solid\r
open Partas.Solid.Primitives\r
open Partas.Solid.Aria\r
open Fable.Core\r
open Browser.Types\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
module Sidebar =\r
    [<Literal>]\r
    let sidebarCookieName = "sidebar:state"\r
    [<Literal>]\r
    let sidebarCookieMaxAge = 60 * 60 * 24 * 7\r
    [<Literal>]\r
    let sidebarWidth = "16rem"\r
    [<Literal>]\r
    let sidebarWidthMobile = "18rem"\r
    [<Literal>]\r
    let sidebarWidthIcon = "3rem"\r
    [<Literal>]\r
    let sidebarKeyboardShortcut = "b"\r
    \r
    [<StringEnum>]\r
    type State =\r
        | Expanded\r
        | Collapsed\r
        \r
    [<StringEnum>]\r
    type Side =\r
        | Left\r
        | Right\r
        \r
    [<StringEnum>]\r
    type Variant =\r
        | Sidebar\r
        | Floating\r
        | Inset\r
        \r
    [<StringEnum(CaseRules.LowerAll)>]\r
    type Collapsible =\r
        | OffCanvas\r
        | Icon\r
        | None\r
        \r
    [<Erase>]\r
    type SidebarContext = {|\r
            state: State Accessor\r
            open': bool Accessor\r
            setOpen: bool -> unit\r
            openMobile: bool Accessor\r
            setOpenMobile: bool -> unit\r
            isMobile: bool Accessor\r
            toggleSidebar: unit -> unit\r
        |}\r
\r
    [<Erase>]\r
    module Context =\r
        let SidebarContext = createContext<SidebarContext>()\r
        let useSidebar () =\r
            let context = useContext(SidebarContext)\r
            if not (unbox context) then failwith "useSidebar can only be used within a Sidebar"\r
            else context\r
\r
open Sidebar\r
\r
[<Erase>]\r
type SidebarProvider() =\r
    inherit div()\r
    [<DefaultValue>] val mutable defaultOpen: bool\r
    [<DefaultValue>] val mutable open': bool\r
    [<DefaultValue>] val mutable onOpenChange: bool -> unit\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let isMobile = Singletons.useIsMobile(false)\r
        let (openMobile, setOpenMobile) = createSignal(false)\r
        let (_open, _setOpen) = createSignal(props.defaultOpen)\r
        let open': Accessor<bool> = fun () -> props.open' ??= _open()\r
        let setOpen: Setter<bool> = fun value ->\r
            if unbox props.onOpenChange then\r
                props.onOpenChange(value)\r
            _setOpen (value)\r
            document.cookie <- $"{sidebarCookieName}={open'()}; path=/; max-age=\${sidebarCookieMaxAge}"\r
        let toggleSidebar = fun () ->\r
            if isMobile()() then\r
                setOpenMobile(not (open'()))\r
            else setOpen(open'() |> not)\r
        createEffect (fun () ->\r
            let handleKeyDown = fun (event: KeyboardEvent) ->\r
                if event.key = sidebarKeyboardShortcut &&= (event.metaKey || event.ctrlKey) then\r
                    event.preventDefault()\r
                    toggleSidebar()\r
            window.addEventListener("keydown", !!handleKeyDown)\r
            onCleanup(\r
                fun () -> window.removeEventListener("keydown", !!handleKeyDown)\r
            )\r
        )\r
        \r
        let state () = if open'() then Expanded else Collapsed\r
        let contextValue = {|\r
                state = state\r
                open' = open'\r
                setOpen = setOpen\r
                isMobile = isMobile\r
                openMobile = openMobile\r
                setOpenMobile = setOpenMobile\r
                toggleSidebar = toggleSidebar\r
            |}\r
        let style = mergeProps([| createObj [\r
                 "--sidebar-width" ==> sidebarWidth\r
                 "--sidebar-width-icon" ==> sidebarWidthIcon\r
             ]; props.style |])\r
        Context.SidebarContext(!!contextValue) {\r
            div(class' = Lib.cn [|\r
                "group/sidebar-wrapper flex min-h-svh w-full \\\r
                text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar"\r
                props.class'\r
            |]).style'( style )\r
                .spread props\r
                { props.children }\r
        }\r
\r
[<Erase>]\r
type Sidebar() =\r
    inherit div()\r
    [<Erase>]\r
    member val side: Sidebar.Side = unbox null with get,set\r
    [<Erase>]\r
    member val variant: Sidebar.Variant = unbox null with get,set\r
    [<Erase>]\r
    member val collapsible: Sidebar.Collapsible = unbox null with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.side <- Left\r
        props.variant <- Sidebar.Sidebar\r
        props.collapsible <- OffCanvas\r
        let ctx = Context.useSidebar()\r
        let isMobile, state, openMobile, setOpenMobile =\r
            (ctx.isMobile, ctx.state, ctx.openMobile, ctx.setOpenMobile)\r
        Switch() {\r
            Match(when' = (props.collapsible = Sidebar.None)) {\r
                div(class' = Lib.cn [|\r
                    "flex h-full w-(--sidebar-width) flex-col bg-sidebar \\\r
                    text-sidebar-foreground"\r
                    props.class'\r
                |]) .dataSlot("sidebar")\r
                    .spread props\r
                    { props.children }\r
            }\r
            Match(when' = isMobile()) {\r
                Sheet( open' = openMobile(), onOpenChange = !!setOpenMobile )\r
                    .spread props {\r
                        SheetContent(\r
                            class' = "w-(--sidebar-width) bg-sidebar \\\r
                            p-0 text-sidebar-foreground [&>button]:hidden",\r
                            position = !!props.side\r
                        )   .dataSlot("sidebar")\r
                            .data("sidebar", !!Sidebar.Sidebar)\r
                            .data("mobile", "true")\r
                            .style'(createObj [ "--sidebar-width" ==> sidebarWidthMobile ])\r
                            {\r
                                SheetHeader(class' = "sr-only") {\r
                                    SheetTitle() { "Sidebar" }\r
                                    SheetDescription() { "Displays the mobile sidebar." }\r
                                }\r
                                div(class' = "flex h-full w-full flex-col") { props.children }\r
                            }\r
                    }\r
                \r
            }\r
            Match(when' = (isMobile() |> not)) {\r
                div(\r
                    class' = "group peer hidden md:block text-sidebar-foreground"\r
                )   .data("state", !!state())\r
                    .data(\r
                        "collapsible",\r
                        if state() = Collapsed then !!props.collapsible else ""\r
                        )\r
                    .data("variant", !!props.variant)\r
                    .data("side", !!props.side)\r
                    .dataSlot("sidebar")\r
                    {\r
                        \r
                        // gap handler on desktop\r
                        div(\r
                        class' = Lib.cn [|\r
                            "duration-200 relative w-(--sidebar-width) \\\r
                            bg-transparent transition-[width] ease-linear \\\r
                            group-data-[collapsible=offcanvas]:w-0 \\\r
                            group-data-[side=right]:rotate-180"\r
                            if (props.variant = Sidebar.Floating\r
                                || props.variant = Sidebar.Inset)\r
                            then "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"\r
                            else "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"\r
                        |]\r
                        ).dataSlot("sidebar-gap")\r
                        \r
                        div(class' = Lib.cn [|\r
                            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) \\\r
                            transition-[left,right,width] duration-200 ease-linear md:flex"\r
                            if props.side = Sidebar.Left then\r
                                "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"\r
                            else "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]"\r
                            // Adjust the padding for floating and inset variants.\r
                            if props.variant = Sidebar.Floating || props.variant = Sidebar.Inset then\r
                                "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"\r
                            else "group-data-[collapsible=icon]:w-(--sidebar-width-icon) \\\r
                                group-data-[side=left]:border-r group-data-[side=right]:border-l"\r
                            props.class' \r
                        |]) .dataSlot("sidebar-container")\r
                            .spread props\r
                            {\r
                                div(\r
                                    class' = "flex h-full w-full flex-col bg-sidebar\r
                                    group-data-[variant=floating]:rounded-lg \\\r
                                    group-data-[variant=floating]:border\r
                                    group-data-[variant=floating]:border-sidebar-border\r
                                    group-data-[variant=floating]:shadow"\r
                                )   .dataSlot("sidebar-inner")\r
                                    .data("sidebar", !!Sidebar.Sidebar)\r
                                    { props.children }\r
                            }\r
                }\r
            }\r
            \r
        }\r
\r
[<Erase>]\r
type SidebarTrigger() =\r
    inherit button()\r
    interface Polymorph\r
    [<DefaultValue>] val mutable onClick: MouseEvent -> unit \r
    [<DefaultValue>] val mutable side: Sidebar.Side \r
    [<DefaultValue>] val mutable variant: Sidebar.Variant \r
    [<DefaultValue>] val mutable collapsible: Sidebar.Collapsible \r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let toggleSidebar = Context.useSidebar().toggleSidebar\r
        Button(\r
            variant = Button.Variant.Ghost,\r
            size = Button.Size.Icon,\r
            class' = Lib.cn [| "size-7"; props.class' |],\r
            onClick = (fun event ->\r
                    if !!props.onClick\r
                    then props.onClick(event)\r
                    toggleSidebar())\r
        )   .data("sidebar", "trigger")\r
            .dataSlot("sidebar-trigger")\r
            .spread(props) {\r
            Lucide.Lucide.PanelLeft(class' = "size-4", strokeWidth = 2)\r
            SrSpan() { "Toggle Sidebar" }\r
        }    \r
\r
[<Erase>]\r
type SidebarRail() =\r
    inherit button()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let toggleSidebar = Context.useSidebar().toggleSidebar\r
        button(\r
            title = "Toggle Sidebar",\r
            onClick = !!toggleSidebar,\r
            tabindex = -1,\r
            ariaLabel = "Toggle Sidebar",\r
            class' =\r
                Lib.cn [|\r
                    // shadcn impl\r
                    "hover:after:bg-sidebar-border absolute inset-y-0 z-20 \\\r
                    hidden w-4 -translate-x-1/2 transition-all ease-linear \\\r
                    group-data-[side=left]:-right-4 group-data-[side=right]:left-0 \\\r
                    after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex"\r
                    "in-data-[side=left]:cursor-w-resize \\\r
                    in-data-[side=right]:cursor-e-resize"\r
                    "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize \\\r
                    [[data-side=right][data-state=collapsed]_&]:cursor-w-resize"\r
                    "hover:group-data-[collapsible=offcanvas]:bg-sidebar \\\r
                    group-data-[collapsible=offcanvas]:translate-x-0 \\\r
                    group-data-[collapsible=offcanvas]:after:left-full"\r
                    // // solid-ui impl\r
                    // "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all\r
                    // ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px]\r
                    // hover:after:bg-sidebar-border group-data-[side=left]:-right-4\r
                    // group-data-[side=right]:left-0 sm:flex\r
                    // [[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize\r
                    // [[data-side=left][data-state=collapsed]_&]:cursor-e-resize\r
                    // [[data-side=right][data-state=collapsed]_&]:cursor-w-resize\r
                    // group-data-[collapsible=offcanvas]:translate-x-0\r
                    // group-data-[collapsible=offcanvas]:after:left-full\r
                    // group-data-[collapsible=offcanvas]:hover:bg-sidebar"\r
                    "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2\r
                    [[data-side=right][data-collapsible=offcanvas]_&]:-left-2"\r
                    props.class'\r
                |]\r
            )\r
            .dataSlot("sidebar-rail")\r
            .data("sidebar", "rail")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarInset() =\r
    inherit main()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        main(\r
            class' =\r
                Lib.cn [|\r
                    "bg-background relative flex w-full flex-1 flex-col"\r
                    "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 \\\r
                    md:peer-data-[variant=inset]:rounded-xl \\\r
                    md:peer-data-[variant=inset]:shadow-sm \\\r
                    md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2"\r
                    // "relative flex min-h-svh flex-1 flex-col bg-background\r
                    // peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))]\r
                    // md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2\r
                    // md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl\r
                    // md:peer-data-[variant=inset]:shadow"\r
                    props.class'\r
                |]\r
        )   .dataSlot("sidebar-inset")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarInput() =\r
    inherit TextFieldInput()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        TextField()\r
            {\r
                TextFieldInput( class' = Lib.cn [|\r
                    "h-8 w-full bg-background shadow-none"; props.class'\r
                |])\r
                    .dataSlot("sidebar-input")\r
                    .data("sidebar", "input")\r
                    .spread props\r
            }\r
\r
[<Erase>]\r
type SidebarHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [| "flex flex-col gap-2 p-2"; props.class' |])\r
            .dataSlot("sidebar-header")\r
            .data("sidebar", "header")\r
            .spread(props)\r
\r
[<Erase>]\r
type SidebarFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [| "flex flex-col gap-2 p-2"; props.class' |])\r
            .dataSlot("sidebar-footer")\r
            .data("sidebar", "footer")\r
            .spread(props)\r
\r
[<Erase>]\r
type SidebarSeparator() =\r
    inherit Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Separator(class' = Lib.cn [| "mx-2 w-auto bg-sidebar-border"\r
                                     props.class' |])\r
            .dataSlot("sidebar-separator")\r
            .data("sidebar", "separator")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "flex min-h-0 flex-1 flex-col gap-2 overflow-auto\r
            group-data-[collapsible=icon]:overflow-hidden"\r
            props.class'\r
        |]) .data("sidebar", "content")\r
            .dataSlot("sidebar-content")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [| "relative flex w-full min-w-0 flex-col p-2"\r
                               props.class' |])\r
            .data("sidebar", "group")\r
            .dataSlot("sidebar-group")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarGroupLabel() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(\r
            class' = Lib.cn [|\r
                "flex h-8 shrink-0 items-center rounded-md px-2 text-xs\r
                font-medium text-sidebar-foreground/70 outline-hidden ring-sidebar-ring\r
                transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2\r
                [&>svg]:size-4 [&>svg]:shrink-0"\r
                "group-data-[collapsible=icon]:-mt-8\r
                group-data-[collapsible=icon]:opacity-0"\r
                props.class'\r
            |]\r
            ).data("sidebar", "group-label")\r
            .dataSlot("sidebar-group-label")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarGroupAction() =\r
    inherit button()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        button(\r
            class' = Lib.cn [|\r
                "absolute right-3 top-3.5 flex aspect-square w-5 items-center\r
                justify-center rounded-md p-0 text-sidebar-foreground outline-none\r
                ring-sidebar-ring transition-transform hover:bg-sidebar-accent\r
                hover:text-sidebar-accent-foreground focus-visible:ring-2\r
                [&>svg]:size-4 [&>svg]:shrink-0"\r
                // Increases the hit area of the button on mobile.\r
                "after:absolute after:-inset-2 after:md:hidden"\r
                "group-data-[collapsible=icon]:hidden"\r
                props.class'\r
            |]\r
            ).data("sidebar", "group-action")\r
            .dataSlot("sidebar-group-action")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarGroupContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [| "w-full text-sm"; props.class' |])\r
            .data("sidebar", "group-content")\r
            .dataSlot("sidebar-group-content")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarMenu() =\r
    inherit ul()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        ul(class' = Lib.cn [|\r
            "flex w-full min-w-0 flex-col gap-1"\r
            props.class'\r
        |]).data("sidebar", "menu")\r
            .dataSlot("sidebar-menu")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarMenuItem() =\r
    inherit li()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        li(class' = Lib.cn [|\r
            "group/menu-item relative"\r
            props.class'\r
        |]).data("sidebar","menu-item")\r
            .dataSlot("sidebar-menu-item")\r
            .spread props\r
\r
[<Erase>]\r
module SidebarMenuButton =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Outline\r
    [<StringEnum>]\r
    type Size =\r
        | Default\r
        | Small\r
        | Large\r
    [<AutoOpen>]\r
    type ClassVariance =\r
        static member variants(?variant: Variant, ?size: Size): string =\r
            let variant = defaultArg variant Variant.Default\r
            let size = defaultArg size Size.Default\r
            //tw\r
            "peer/menu-button flex w-full items-center gap-2 overflow-hidden \\\r
            rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring \\\r
            transition-[width,height,padding] hover:bg-sidebar-accent \\\r
            hover:text-sidebar-accent-foreground focus-visible:ring-2 \\\r
            active:bg-sidebar-accent active:text-sidebar-accent-foreground \\\r
            disabled:pointer-events-none disabled:opacity-50 \\\r
            group-has-data-[sidebar=menu-action]/menu-item:pr-8 \\\r
            aria-disabled:pointer-events-none aria-disabled:opacity-50 \\\r
            data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium \\\r
            data-[active=true]:text-sidebar-accent-foreground \\\r
            data-[current=page]:bg-sidebar-accent data-[current=page]:font-medium \\\r
            data-[current=page]:text-sidebar-accent-foreground \\\r
            data-[state=open]:hover:bg-sidebar-accent \\\r
            data-[state=open]:hover:text-sidebar-accent-foreground \\\r
            group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! \\\r
            [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"\r
            + " " +\r
            // "peer/menu-button flex w-full items-center gap-2 overflow-hidden\r
            // rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring\r
            // transition-[width,height,padding] hover:bg-sidebar-accent\r
            // hover:text-sidebar-accent-foreground focus-visible:ring-2\r
            // active:bg-sidebar-accent active:text-sidebar-accent-foreground\r
            // disabled:pointer-events-none disabled:opacity-50\r
            // group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none\r
            // aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium\r
            // aria-[current=page]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent\r
            // data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8\r
            // group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate\r
            // [&>svg]:size-4 [&>svg]:shrink-0 " +\r
            match variant with\r
            | Variant.Default -> (*TW*) "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"\r
            | Variant.Outline -> (*TW*)\r
                "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] \\\r
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground \\\r
                hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"\r
            + " " +\r
            match size with\r
            | Default -> (*TW*) "h-8 text-sm"\r
            | Small -> (*TW*) "h-7 text-xs"\r
            | Large -> (*TW*) "h-12 text-sm group-data-[collapsible=icon]:p-0!"\r
[<Erase>]\r
module KobalteButton =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Destructive\r
        | Outline\r
        | Secondary\r
        | Ghost\r
        | Link\r
    [<StringEnum>]\r
    type Size =\r
        | Default\r
        | Small\r
        | Large\r
        | Icon\r
    [<Erase; AutoOpen>]\r
    type ClassVariance =\r
        static member variants(?variant: Variant, ?size: Size): string =\r
            let variant = defaultArg variant Variant.Default\r
            let size = defaultArg size Size.Default\r
            //tw\r
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium\r
            ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2\r
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\r
            [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 " +\r
            match variant with\r
            | Variant.Default -> (*TW*) "bg-primary text-primary-foreground hover:bg-primary/90"\r
            | Variant.Destructive -> (*TW*) "bg-destructive text-destructive-foreground hover:bg-destructive/90"\r
            | Variant.Outline -> (*TW*) "border border-input hover:bg-accent hover:text-accent-foreground"\r
            | Variant.Secondary -> (*TW*) "bg-secondary text-secondary-foreground hover:bg-secondary/80"\r
            | Variant.Ghost -> (*TW*) "hover:bg-accent hover:text-accent-foreground"\r
            | Variant.Link -> (*TW*) "text-primary underline-offset-4 hover:underline"\r
            + " " +\r
            match size with\r
            | Default -> (*TW*) "h-10 px-4 py-2"\r
            | Small -> (*TW*) "h-9 px-3 text-xs"\r
            | Large -> (*TW*) "h-11 px-8"\r
            | Icon -> (*TW*) "size-10"\r
\r
[<Erase>]\r
type KobalteButton() =\r
    inherit Kobalte.Button()\r
    [<Erase>]\r
    member val variant: KobalteButton.Variant = unbox null with get,set\r
    [<Erase>]\r
    member val size: KobalteButton.Size = unbox null with get,set\r
    \r
    [<SolidTypeComponent>]\r
    member props.sont =\r
        Kobalte.Button(\r
            class' = Lib.cn [|\r
                KobalteButton.ClassVariance.variants(props.variant, props.size)\r
                props.class'\r
            |]\r
            ).spread props\r
        \r
\r
[<Erase>]\r
type SidebarMenuButton() =\r
    inherit KobalteButton()\r
    interface Polymorph\r
    [<DefaultValue>] val mutable isActive: bool\r
    [<DefaultValue>] val mutable tooltip: string\r
    [<DefaultValue>] val mutable variant: SidebarMenuButton.Variant\r
    [<Erase>] member val size: SidebarMenuButton.Size = undefined with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.isActive <- false\r
        props.variant <- SidebarMenuButton.Variant.Default\r
        props.size <- SidebarMenuButton.Size.Default\r
        let ctx = Context.useSidebar()\r
        let (isMobile, state) = (ctx.isMobile, ctx.state)\r
        let bakedButton =\r
            Kobalte.Button(\r
                class' = Lib.cn [|\r
                    SidebarMenuButton.ClassVariance.variants(props.variant, props.size)\r
                    props.class'\r
                |]\r
            )   .data("sidebar", "menu-button")\r
                .data("size", !!props.size)\r
                .data("active", !!props.isActive)\r
                .spread props\r
        \r
        Show(when' = !!props.tooltip, fallback = !!bakedButton) {\r
            Tooltip(placement = Kobalte.Enums.KobaltePlacement.Right) {\r
                TooltipTrigger(class' = "w-full") { bakedButton }\r
                TooltipContent(hidden = !!(state() <> State.Collapsed || isMobile()))\r
                    { props.tooltip }\r
            }\r
        }\r
\r
[<Erase>]\r
type SidebarMenuAction() =\r
    inherit button()\r
    [<DefaultValue>] val mutable showOnHover: bool\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.showOnHover <- false\r
        \r
        button(\r
            class' = Lib.cn [|\r
                "absolute right-1 top-1.5 flex aspect-square w-5 items-center\r
                justify-center rounded-md p-0 text-sidebar-foreground\r
                outline-none ring-sidebar-ring transition-transform\r
                hover:bg-sidebar-accent hover:text-sidebar-accent-foreground\r
                focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground\r
                [&>svg]:size-4 [&>svg]:shrink-0"\r
                // Increases the hit area of the button on mobile.\r
                "after:absolute after:-inset-2 after:md:hidden"\r
                "peer-data-[size=sm]/menu-button:top-1"\r
                "peer-data-[size=default]/menu-button:top-1.5"\r
                "peer-data-[size=lg]/menu-button:top-2.5"\r
                "group-data-[collapsible=icon]:hidden"\r
                props.showOnHover\r
                &&= "group-focus-within/menu-item:opacity-100 \\\r
                    group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 \\\r
                    peer-aria-[current=page]/menu-button:text-sidebar-accent-foreground \\\r
                    md:opacity-0"\r
                props.class'\r
            |]\r
            ).data("sidebar", "menu-action")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarMenuBadge() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(\r
            class' = Lib.cn [|\r
                "pointer-events-none absolute right-1 flex h-5 \\\r
                min-w-5 select-none items-center justify-center \\\r
                rounded-md px-1 text-xs font-medium tabular-nums \\\r
                text-sidebar-foreground"\r
                "peer-hover/menu-button:text-sidebar-accent-foreground \\\r
                peer-aria-[current=page]/menu-button:text-sidebar-accent-foreground"\r
                "peer-data-[size=sm]/menu-button:top-1"\r
                "peer-data-[size=default]/menu-button:top-1.5"\r
                "peer-data-[size=lg]/menu-button:top-2.5"\r
                "group-data-[collapsible=icon]:hidden"\r
                props.class'\r
            |]\r
            ).data("sidebar", "menu-badge")\r
            .spread props\r
            \r
[<Erase>]\r
type SidebarMenuSkeleton() =\r
    inherit div()\r
    [<DefaultValue>] val mutable showIcon: bool\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let width =\r
            createMemo( fun () -> $"{Math.floor( Math.random() * 40. ) + 50.}%%")\r
        \r
        div(class' = Lib.cn [| "flex h-8 items-center gap-2 rounded-md px-2"\r
                               props.class' |])\r
            .data("sidebar", "menu-skeleton")\r
            .spread props\r
            {\r
                props.showIcon\r
                &&= Skeleton(class' = "size-4 rounded-md").data("sidebar", "menu-skeleton-icon")\r
                Skeleton(\r
                    class' = "h-4 max-w-[--skeleton-width] flex-1"\r
                    ).data("sidebar", "menu-skeleton-text")\r
                    .style'(createObj ["--skeleton-width", width()])\r
            }\r
\r
[<Erase>]\r
type SidebarMenuSub() =\r
    inherit ul()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        ul(class' = Lib.cn [|\r
            "mx-3.5 flex min-w-0 translate-x-px flex-col \\\r
            gap-1 border-l border-sidebar-border px-2.5 py-0.5"\r
            "group-data-[collapsible=icon]:hidden"\r
            props.class'\r
        |]) .data("sidebar", "menu-sub")\r
            .spread props\r
\r
[<Erase>]\r
type SidebarMenuSubItem() =\r
    inherit li()\r
    [<SolidTypeComponent>]\r
    member props.constructor = li().spread props\r
\r
[<Erase>]\r
module sidebarMenuSubButton =\r
    [<Erase>]\r
    type Size =\r
        | [<CompiledName("sm")>] Small\r
        | [<CompiledName("md")>] Medium\r
\r
open sidebarMenuSubButton\r
\r
[<Erase>]\r
type SidebarMenuSubButton() =\r
    inherit a()\r
    [<DefaultValue>] val mutable size: Size\r
    [<DefaultValue>] val mutable isActive: bool\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.size <- Medium\r
        a(\r
            class' = Lib.cn [|\r
                "flex h-7 min-w-0 -translate-x-px items-center gap-2\r
                overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none\r
                ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground\r
                focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground\r
                disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none\r
                aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4\r
                [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground"\r
                "aria-[current=page]:bg-sidebar-accent\r
                aria-[current=page]:text-sidebar-accent-foreground"\r
                props.size = Small &&= "text-xs"\r
                props.size = Medium &&= "text-sm"\r
                "group-data-[collapsible=icon]:hidden"\r
                props.class'\r
            |]            \r
        )   .data("sidebar", "menu-sub-button")\r
            .data("size", !!props.size)\r
            .data("active", !!props.isActive)\r
            .spread props\r
`;function E(t){const e={h2:"h2",h3:"h3",...L(),...t.components},{SourceCode:a}=e;return a||A("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(k,{of:o}),`
`,r.jsx(D,{}),`
`,r.jsx(V,{of:B,layout:"full",sourceState:"none",withToolbar:!0}),`
`,r.jsx(O,{}),`
`,r.jsx(a,{code:I}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"sidebar",children:"Sidebar"}),`
`,r.jsx(n,{of:o}),`
`,r.jsx(e.h3,{id:"sidebarprovider",children:"SidebarProvider"}),`
`,r.jsx(n,{of:i,meta:i}),`
`,r.jsx(e.h3,{id:"sidebartrigger",children:"SidebarTrigger"}),`
`,r.jsx(n,{of:s,meta:s}),`
`,r.jsx(e.h3,{id:"sidebarrail",children:"SidebarRail"}),`
`,r.jsx(n,{of:d,meta:d}),`
`,r.jsx(e.h3,{id:"sidebarinset",children:"SidebarInset"}),`
`,r.jsx(n,{of:l,meta:l}),`
`,r.jsx(e.h3,{id:"sidebarinput",children:"SidebarInput"}),`
`,r.jsx(n,{of:p,meta:p}),`
`,r.jsx(e.h3,{id:"sidebarheader",children:"SidebarHeader"}),`
`,r.jsx(n,{of:b,meta:b}),`
`,r.jsx(e.h3,{id:"sidebarfooter",children:"SidebarFooter"}),`
`,r.jsx(n,{of:c,meta:c}),`
`,r.jsx(e.h3,{id:"sidebarseparator",children:"SidebarSeparator"}),`
`,r.jsx(n,{of:u,meta:u}),`
`,r.jsx(e.h3,{id:"sidebarcontent",children:"SidebarContent"}),`
`,r.jsx(n,{of:m,meta:m}),`
`,r.jsx(e.h3,{id:"sidebargroup",children:"SidebarGroup"}),`
`,r.jsx(n,{of:f,meta:f}),`
`,r.jsx(e.h3,{id:"sidebargrouplabel",children:"SidebarGroupLabel"}),`
`,r.jsx(n,{of:g,meta:g}),`
`,r.jsx(e.h3,{id:"sidebargroupaction",children:"SidebarGroupAction"}),`
`,r.jsx(n,{of:h,meta:h}),`
`,r.jsx(e.h3,{id:"sidebargroupcontent",children:"SidebarGroupContent"}),`
`,r.jsx(n,{of:S,meta:S}),`
`,r.jsx(e.h3,{id:"sidebarmenu",children:"SidebarMenu"}),`
`,r.jsx(n,{of:v,meta:v}),`
`,r.jsx(e.h3,{id:"sidebarmenuitem",children:"SidebarMenuItem"}),`
`,r.jsx(n,{of:x,meta:x}),`
`,r.jsx(e.h3,{id:"sidebarmenubutton",children:"SidebarMenuButton"}),`
`,r.jsx(n,{of:y,meta:y}),`
`,r.jsx(e.h3,{id:"sidebarmenuaction",children:"SidebarMenuAction"}),`
`,r.jsx(n,{of:w,meta:w}),`
`,r.jsx(e.h3,{id:"sidebarmenubadge",children:"SidebarMenuBadge"}),`
`,r.jsx(n,{of:C,meta:C}),`
`,r.jsx(e.h3,{id:"sidebarmenuskeleton",children:"SidebarMenuSkeleton"}),`
`,r.jsx(n,{of:M,meta:M}),`
`,r.jsx(e.h3,{id:"sidebarmenusubbutton",children:"SidebarMenuSubButton"}),`
`,r.jsx(n,{of:T,meta:T}),`
`,r.jsx(e.h3,{id:"sidebarmenusub",children:"SidebarMenuSub"}),`
`,r.jsx(n,{of:j,meta:j}),`
`,r.jsx(e.h3,{id:"sidebarmenusubitem",children:"SidebarMenuSubItem"}),`
`,r.jsx(n,{of:z,meta:z})]})}function le(t={}){const{wrapper:e}={...L(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(E,{...t})}):E(t)}function A(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{le as default};
