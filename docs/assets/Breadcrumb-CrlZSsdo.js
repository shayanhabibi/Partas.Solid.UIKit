import{G as r,H as s,T as a,K as p,L as i}from"./iframe-BHVPMPJn.js";import{useMDXComponents as t}from"./index-CB5oDCs8.js";import{S as c,D as d}from"./Breadcrumb.stories-J90sAoEi.js";import"./preload-helper-PPVm8Dsz.js";import"./3JA5IX2L-DpOzWl1o.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./Utils-CAhjhIiz.js";const l=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Breadcrumb() =\r
    inherit Kobalte.Breadcrumbs()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Breadcrumbs().dataSlot("breadcrumb").spread props\r
\r
[<Erase>]\r
type BreadcrumbList() =\r
    inherit ol()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        ol(\r
            class' = Lib.cn [|\r
                "flex flex-wrap items-center gap-1.5 break-words\r
                text-sm text-muted-foreground sm:gap-2.5"\r
                props.class'\r
            |]\r
        )   .dataSlot("breadcrumb-list")\r
            .spread props\r
\r
[<Erase>]\r
type BreadcrumbItem() =\r
    inherit li()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        li( class' = Lib.cn [| "inline-flex items-center gap-1.5" ; props.class' |])\r
            .dataSlot("breadcrumb-item")\r
            .spread props\r
\r
[<Erase>]\r
type BreadcrumbLink() =\r
    inherit Breadcrumbs.Link()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Breadcrumbs.Link(\r
            class' = Lib.cn [|\r
                "transition-colors hover:text-foreground\r
                data-[current]:font-normal data-[current]:text-foreground"\r
                props.class'\r
            |]) .dataSlot("breadcrumb-link")\r
                .spread props\r
\r
[<Erase>]\r
type BreadcrumbSeparator() =\r
    inherit Breadcrumbs.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let children,hasChildren = Lib.createChildrenResolver(props.children)\r
        Breadcrumbs.Separator(class' = Lib.cn [|"[&>svg]:size-3.5"; props.class'|])\r
            .dataSlot("breadcrumb-separator")\r
            .spread(props) {\r
            if hasChildren() then children() else Lucide.Slash(strokeWidth = 2)\r
        }\r
\r
open Partas.Solid.Aria\r
[<Erase>]\r
type BreadcrumbEllipsis() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        span(class' = Lib.cn [|\r
                "flex size-9 items-center justify-center"\r
                props.class'\r
            |],\r
        role = "presentation",\r
        ariaHidden = true\r
        )   .dataSlot("breadcrumb-ellipsis")\r
            .spread(props)\r
            {\r
                Lucide.Ellipsis( strokeWidth = 2, class' = "size-4")\r
                span(class' = "sr-only") { "More" }\r
            }\r
`;function o(n){const{SourceCode:e}={...t(),...n.components};return e||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c}),`
`,r.jsx(a,{}),`
`,r.jsx(p,{of:d}),`
`,r.jsx(i,{}),`
`,r.jsx(e,{code:l})]})}function j(n={}){const{wrapper:e}={...t(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}function m(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default};
