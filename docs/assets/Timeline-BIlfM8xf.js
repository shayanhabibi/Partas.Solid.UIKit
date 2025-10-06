import{G as e,H as o,T as m,K as p,L as a,O as u}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as s}from"./index--e61kTGT.js";import{T as i,D as b}from"./Timeline.stories-DFGVuFMg.js";import"./preload-helper-PPVm8Dsz.js";import"./Utils-Bv7TLaDt.js";import"./index-axew2xP3.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
\r
open System\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Partas.Solid.Aria\r
open Fable.Core\r
\r
[<Erase>]\r
type private TimelineItemBullet() =\r
    interface RegularNode\r
    [<Erase>]\r
    member val isActive: bool = unbox null with get,set\r
    [<Erase>]\r
    member val bulletSize: int = unbox null with get,set\r
    [<Erase>]\r
    member val lineSize: int = unbox null with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        let bulletSize () = props.bulletSize\r
        let lineSize () = props.lineSize\r
        div(class' = Lib.cn [|\r
            "absolute top-0 flex items-center justify-center rounded-full border bg-background"\r
            props.isActive &&= "border-primary"\r
            props.class'\r
        |], ariaHidden = true\r
        )   .style'([\r
            Style.width $"{bulletSize()}px"\r
            Style.height $"{bulletSize()}px"\r
            Style.left $"{-bulletSize() / 2 - lineSize() / 2}px"\r
            "border-width", $"{lineSize()}px"\r
        ])  .dataSlot("timeline-item-bullet")\r
            .spread props\r
\r
[<Erase>]\r
type private TimelineItemTitle() =\r
    interface RegularNode\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        div(class' = "mb-1 text-base font-semibold leading-none")\r
            .dataSlot("timeline-item-title")\r
            { props.children }\r
\r
[<Erase>]\r
type private TimelineItemDescription() =\r
    inherit p()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        p(class' = Lib.cn [| "text-sm text-muted-foreground" ; props.class' |])\r
            .dataSlot("timeline-item-description")\r
            .spread props\r
            { props.children }\r
\r
[<Erase>]\r
type private TimelineItem() =\r
    interface RegularNode\r
    [<Erase>]\r
    member val title: HtmlElement = unbox null with get,set\r
    [<Erase>]\r
    member val description: HtmlElement = unbox null with get,set\r
    [<Erase>]\r
    member val bullet: HtmlElement = unbox null with get,set\r
    [<Erase>]\r
    member val isLast: bool = unbox null with get,set\r
    [<Erase>]\r
    member val isActive: bool = unbox null with get,set\r
    [<Erase>]\r
    member val isActiveBullet: bool = unbox null with get,set\r
    [<Erase>]\r
    member val bulletSize: int = unbox null with get,set\r
    [<Erase>]\r
    member val lineSize: int = unbox null with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        let lineSize = props.lineSize\r
        li(class' = Lib.cn [|\r
          "relative border-l pb-8 pl-8"\r
          props.isLast &&= "border-l-transparent pb-0"\r
          props.isActive &&= not(props.isLast) &&= "border-l-primary"\r
          props.class' |]\r
        )   .dataSlot("timeline-item")\r
            .style'([Style.borderLeftWidth $"{lineSize}px"]).spread props\r
            {\r
                TimelineItemBullet(\r
                        lineSize = props.lineSize,\r
                        bulletSize = props.bulletSize,\r
                        isActive = props.isActiveBullet\r
                    ) { props.bullet }\r
                TimelineItemTitle()\r
                    { props.title }\r
                if unbox props.description then\r
                    TimelineItemDescription() { props.description }\r
                else ()\r
            }\r
\r
open Fable.Core.JS\r
\r
[<Erase>]\r
module Timeline =\r
    [<Pojo; Global>]\r
    type Item\r
        (\r
            title: HtmlElement,\r
            ?description: HtmlElement,\r
            ?bullet: HtmlElement,\r
            ?class': string,\r
            ?bulletSize: int\r
        ) =\r
        member val title: HtmlElement = unbox null with get,set\r
        member val description: HtmlElement = unbox null with get,set\r
        member val bullet: HtmlElement = unbox null with get,set\r
        member val class': string = unbox null with get,set\r
        member val bulletSize: int = unbox null with get,set\r
\r
[<Erase>]\r
type Timeline() =\r
    interface VoidNode\r
    [<Erase>]\r
    member val activeItem: int = unbox null with get,set\r
    [<Erase>]\r
    member val bulletSize: int = unbox null with get,set\r
    [<Erase>]\r
    member val lineSize: int = unbox null with get,set\r
    [<Erase>]\r
    member val items: Timeline.Item[] = unbox null with get,set\r
    static member calcPadding num =\r
        num / 2\r
        |> fun x -> $"{x}px"\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.bulletSize <- 16\r
        props.lineSize <- 2\r
        let checkIsLast (index: Accessor<int>) =\r
            let length =\r
                props.items\r
                |> _.Length\r
            length - 1\r
            |> (=) (index())\r
        ul().style'([Style.paddingLeft (Timeline.calcPadding props.bulletSize)])\r
            {\r
            For(each = props.items) {\r
                yield fun item index ->\r
                    TimelineItem(\r
                        title = item.title,\r
                        description = item.description,\r
                        bullet = item.bullet,\r
                        isLast = (checkIsLast index),\r
                        isActive =\r
                            if props.activeItem = -1 then false\r
                            else props.activeItem >= index() + 1\r
                        ,isActiveBullet =\r
                            if props.activeItem = -1 then false\r
                            else props.activeItem >= index()\r
                        ,bulletSize = props.bulletSize,\r
                        lineSize = props.lineSize\r
                    )\r
            }\r
        }\r
`;function l(r){const n={h2:"h2",h3:"h3",...s(),...r.components},{SourceCode:t}=n;return t||d("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i}),`
`,e.jsx(m,{}),`
`,e.jsx(p,{of:b,sourceState:"none",withToolbar:!0}),`
`,e.jsx(a,{}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.h3,{id:"timeline",children:"Timeline"}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(n.h2,{id:"objects",children:"Objects"}),`
`,e.jsx(n.h3,{id:"timeline-items",children:"Timeline Items"})]})}function E(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}function d(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};
