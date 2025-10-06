import{G as n,H as p,T as m,K as d,L as l,O as o}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as s}from"./index--e61kTGT.js";import{N as i,D as u}from"./NavigationMenu.stories-0_2Eb284.js";import{N as c}from"./NavigationMenuItem.stories-C1NGuLCT.js";import{N as g}from"./NavigationMenuViewport.stories-DPCCXJbM.js";import{N as v}from"./NavigationMenuTrigger.stories-B6-gkrp8.js";import{N as f}from"./NavigationMenuIcon.stories-DQ1BZZXP.js";import{N as b}from"./NavigationMenuContent.stories-e3Y_Vo9l.js";import{N as x}from"./NavigationMenuLink.stories-7E4pYU6z.js";import{N as h}from"./NavigationMenuLabel.stories-DHGFvD0N.js";import{N}from"./NavigationMenuDescription.stories-P7jPHA1e.js";import"./preload-helper-PPVm8Dsz.js";import"./NavigationMenu-B9p45DOO.js";import"./BOXQKWL5-CWP_9nyA.js";import"./LEK3K6R3-CGlCZOjW.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./LR7LBJN3-RceSjpmp.js";import"./index-axew2xP3.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-DsOqkTmx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";import"./N3GAC5SS-Cpp7-odw.js";import"./QZDH5R5B-BWDH-QCD.js";import"./FN6EICGO-DOeDID0N.js";import"./Utils-Bv7TLaDt.js";import"./SOM3K36D-DE1P6_or.js";import"./FBCYWU27-CflOAPjT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./JHMNWOLY-GWqRWAK3.js";import"./E53DB7BS-B46G7qd5.js";import"./UKTBL2JL-DisnMsyh.js";import"./OYES4GOP-BvTDlBrO.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-eJSdAdpK.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D8XsDJNg.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-Dwv4USTq.js";import"./T4C3DMHT-BxeliJxY.js";import"./chevron-down-DaUcgHSq.js";import"./Icon-DzzAe45T.js";const M=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Aria\r
open Fable.Core\r
\r
\r
[<Erase>]\r
type NavigationMenuItem() =\r
    inherit NavigationMenu.Menu()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        NavigationMenu.Menu()\r
            .dataSlot("navigation-menu-item")\r
            .spread props\r
\r
[<Erase>]\r
type NavigationMenuViewport() =\r
    inherit NavigationMenu.Viewport()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.Viewport(\r
            class' = Lib.cn [|\r
                // base settings\r
                "pointer-events-none z-[1000] flex h-[var(--kb-navigation-menu-viewport-height)]\r
                w-[var(--kb-navigation-menu-viewport-width)] origin-[var(--kb-menu-content-transform-origin)]\r
                items-center justify-center overflow-x-clip overflow-y-visible\r
                rounded-md border bg-popover opacity-0 shadow-lg\r
                data-[expanded]:pointer-events-auto data-[orientation=vertical]:overflow-y-clip\r
                data-[orientation=vertical]:overflow-x-visible data-[expanded]:rounded-md"\r
                // animation\r
                "animate-content-hide transition-[width,height]\r
                duration-200 ease-in data-[expanded]:animate-content-show\r
                data-[expanded]:opacity-100 data-[expanded]:ease-out"\r
                props.class'\r
            |]).spread props\r
        \r
[<Erase>]\r
type NavigationMenu() =\r
    inherit Kobalte.NavigationMenu()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu(gutter=6, class'= Lib.cn [|\r
            "group/navigation-menu relative flex max-w-max flex-1 \\\r
            items-center justify-center"\r
            // "group/menu flex w-max flex-1 list-none items-center\r
            //  justify-center data-[orientation=vertical]:flex-col [&>li]:w-full"\r
            props.class'\r
        |]) .dataSlot("navigation-menu")\r
            .spread(props) {\r
            props.children\r
            NavigationMenuViewport()\r
        }\r
    \r
[<Erase>]\r
type NavigationMenuTrigger() =\r
    inherit NavigationMenu.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.Trigger(class'= Lib.cn [|\r
            "group/trigger inline-flex h-10 w-full items-center justify-center whitespace-nowrap\r
            rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent\r
            hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground\r
            focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50\r
            data-[expanded]:bg-accent/50"\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type NavigationMenuIcon() =\r
    inherit NavigationMenu.Icon()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.Icon(ariaHidden=true) {\r
            Lucide.Lucide.ChevronDown(\r
                class' = "relative top-px ml-1 size-3 transition duration-200\r
                group-data-[expanded]/trigger:rotate-180 group-data-[orientation=vertical]/menu:-rotate-90\r
                group-data-[orientation=vertical]/menu:group-data-[expanded]/trigger:rotate-90"\r
                , strokeWidth = 2\r
            )\r
        }\r
\r
[<Erase>]\r
type NavigationMenuContent() =\r
    inherit NavigationMenu.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.Portal() {\r
            Kobalte.NavigationMenu.Content(class' = Lib.cn [|\r
                // base settings\r
                "pointer-events-none absolute left-0 top-0 box-border p-4\r
                focus:outline-none data-[expanded]:pointer-events-auto"\r
                // base animation settings\r
                "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out\r
                data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out"\r
                // left to right\r
                "data-[orientation=horizontal]:data-[motion=from-start]:slide-in-from-left-52\r
                data-[orientation=horizontal]:data-[motion=to-end]:slide-out-to-right-52"\r
                // right to left\r
                "data-[orientation=horizontal]:data-[motion=from-end]:slide-in-from-right-52\r
                data-[orientation=horizontal]:data-[motion=to-start]:slide-out-to-left-52"\r
                // top to bottom\r
                "data-[orientation=vertical]:data-[motion=from-start]:slide-in-from-top-52\r
                data-[orientation=vertical]:data-[motion=to-end]:slide-out-to-bottom-52"\r
                //bottom to top\r
                "data-[orientation=vertical]:data-[motion=from-end]:slide-in-from-bottom-52\r
                data-[orientation=vertical]:data-[motion=to-start]:slide-out-to-bottom-52"\r
                props.class'\r
            |]).spread(props)\r
        }\r
\r
[<Erase>]\r
type NavigationMenuLink() =\r
    inherit NavigationMenu.Item()\r
    [<DefaultValue>] val mutable href: string\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.Item(class' = Lib.cn [|\r
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline\r
            outline-none transition-colors  hover:text-accent-foreground\r
            focus:bg-accent focus:text-accent-foreground"\r
            props.class'\r
        |]) .dataSlot("navigation-menu-link")\r
            .spread(props)\r
\r
[<Erase>]\r
type NavigationMenuLabel() =\r
    inherit NavigationMenu.ItemLabel()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.ItemLabel( class' = Lib.cn [|\r
            "text-sm font-medium leading-none"\r
            props.class'\r
        |]) .dataSlot("navigation-menu-label")\r
            .spread(props)\r
\r
[<Erase>]\r
type NavigationMenuDescription() =\r
    inherit NavigationMenu.ItemDescription()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NavigationMenu.ItemDescription(class'= Lib.cn [|\r
            "text-sm leading-snug text-muted-foreground"\r
            props.class'\r
        |]) .dataSlot("navigation-menu-description")\r
            .spread props\r
\r
\r
`;function a(r){const t={h2:"h2",h3:"h3",...s(),...r.components},{SourceCode:e}=t;return e||y("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(p,{of:i}),`
`,n.jsx(m,{}),`
`,n.jsx(d,{of:u,sourceState:"none",withToolbar:!0}),`
`,n.jsx(l,{}),`
`,n.jsx(e,{code:M}),`
`,n.jsx(t.h2,{id:"components",children:"Components"}),`
`,n.jsx(t.h3,{id:"navigationmenu",children:"NavigationMenu"}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(t.h3,{id:"navigationmenuitem",children:"NavigationMenuItem"}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(t.h3,{id:"navigationmenuviewport",children:"NavigationMenuViewport"}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(t.h3,{id:"navigationmenutrigger",children:"NavigationMenuTrigger"}),`
`,n.jsx(o,{of:v}),`
`,n.jsx(t.h3,{id:"navigationmenuicon",children:"NavigationMenuIcon"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx(t.h3,{id:"navigationmenucontent",children:"NavigationMenuContent"}),`
`,n.jsx(o,{of:b}),`
`,n.jsx(t.h3,{id:"navigationmenulink",children:"NavigationMenuLink"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(t.h3,{id:"navigationmenulabel",children:"NavigationMenuLabel"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(t.h3,{id:"navigationmenudescription",children:"NavigationMenuDescription"}),`
`,n.jsx(o,{of:N})]})}function gn(r={}){const{wrapper:t}={...s(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(a,{...r})}):a(r)}function y(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{gn as default};
