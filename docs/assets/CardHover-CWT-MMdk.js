import{H as e,I as i,T as d,L as p,N as u,Q as n}from"./iframe-DHSEN8D7.js";import{useMDXComponents as l}from"./index-e4aCb-2o.js";import{C as a,D as c}from"./CardHover.stories-Bw5zrVxN.js";import{C as m}from"./CardHoverBody.stories-CDVGU94T.js";import{C as f}from"./CardHoverItem.stories-C9D5I3lW.js";import"./preload-helper-PPVm8Dsz.js";import"./CardHoverEffect-DvUM6aiW.js";import"./Util-DXwscfZV.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./common-DDqHJuLx.js";const C=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Partas.Solid.Experimental\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Browser.Types\r
open Partas.Solid.Primitives\r
open Browser\r
\r
[<Erase>]\r
module ZHoverCardContext =\r
    [<JS.Pojo>]\r
    type T(accessor: Accessor<bool>, setter: Setter<bool>) =\r
        member val accessor = accessor with get,set\r
        member val setter = setter with get,set\r
    let HoverCardContext = createContext<T>()\r
    let useMouseEntered () =\r
        let context = useContext(HoverCardContext)\r
        if !!context = JS.undefined then\r
            failwith "useMouseEntered must be used within a ZHoverCardContainer"\r
        context\r
\r
\r
[<Erase>]\r
type ZHoverCardContainer() =\r
    interface RegularNode\r
    [<DV>] val mutable containerClassName: string\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let mouseInside, setMouseInside = createSignal false\r
        let (container,setContainer): Signal<HTMLDivElement> = createSignal null\r
        effect {\r
            let mutable mouseListenDestroyer = fun () -> ()\r
            if mouseInside() |> not then\r
                mouseListenDestroyer()\r
                if !!container() then\r
                    container()\r
                        .style\r
                        .transform <- "rotateY(0deg) rotateX(0deg)"\r
            else\r
                let handleMouse = fun (e: MousePosition) ->\r
                    let rect = container().getBoundingClientRect()\r
                    let left = rect.left\r
                    let top = rect.top\r
                    let width = rect.width\r
                    let height = rect.height\r
                    let x = (float e.x - left - width / 2.) / 25.\r
                    let y = (float e.y - top - height / 2.) / 25.\r
                    container()\r
                        .style\r
                        .transform <- $"rotateY({x}deg) rotateX({y}deg)"\r
                mouseListenDestroyer <- makeMousePositionListener(!^container(), handleMouse, followTouch = true)\r
                \r
        }\r
        let contextValue = ZHoverCardContext.T(mouseInside,setMouseInside)\r
        ignore contextValue\r
        ZHoverCardContext.HoverCardContext(contextValue) {\r
            div(\r
                class' = Lib.cn [|\r
                    "py-20 flex items-center justify-center"\r
                    props.containerClassName\r
                |]\r
                ).style'([\r
                Style.perspective "1000px"\r
            ]) {\r
                div(\r
                    onMouseEnter = fun _ -> true |> setMouseInside\r
                    ,onMouseLeave = fun _ -> false |> setMouseInside\r
                    ,class' = Lib.cn [|\r
                        "flex items-center justify-center relative transition-all duration-200 ease-linear"\r
                        props.class'\r
                    |]\r
                ).ref(setContainer).style'([\r
                    Style.transformStyle "preserve-3d"\r
                ]) { props.children }\r
            }\r
        }\r
    \r
[<Erase>]\r
type ZHoverCardBody() =\r
    interface RegularNode\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]"\r
            props.class'\r
        |]).spread(props)\r
\r
[<Erase>]\r
type ZHoverCardItem() =\r
    interface RegularNode\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable translateX: float\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable translateY: float\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable translateZ: float\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable rotateX: float\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable rotateY: float\r
    /// <defaultValue>0</defaultValue>\r
    [<DV>] val mutable rotateZ: float\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.translateX <- 0\r
        props.translateY <- 0\r
        props.translateZ <- 0\r
        props.rotateX <- 0\r
        props.rotateY <- 0\r
        props.rotateZ <- 0\r
        let contextValue = ZHoverCardContext.useMouseEntered()\r
        let container,setContainer = createSignal<HTMLDivElement>(null)\r
        effect {\r
            if !!container() then\r
                if contextValue.accessor() then\r
                    let value = $"translateX({props.translateX}px) translateY({props.translateY}px) translateZ({props.translateZ}px) rotateX({props.rotateX}deg) rotateY({props.rotateY}deg) rotateZ({props.rotateZ}deg)"\r
                    ignore value\r
                    container().style.transform <- value\r
                else\r
                    let value = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"\r
                    ignore value\r
                    container().style.transform <- value\r
        }\r
        div(class' = Lib.cn [|\r
            //tw\r
            "w-fit transition duration-200 ease-linear"\r
            props.class'\r
        |]).ref(setContainer).spread(props)\r
`;function s(t){const r={h2:"h2",h3:"h3",...l(),...t.components},{SourceCode:o}=r;return o||x("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(d,{}),`
`,e.jsx(p,{of:c,sourceState:"none",withToolbar:!0}),`
`,e.jsx(u,{}),`
`,e.jsx(o,{code:C}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"cardhover",children:"CardHover"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(r.h3,{id:"cardhoverbody",children:"CardHoverBody"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h3,{id:"cardhoveritem",children:"CardHoverItem"}),`
`,e.jsx(n,{of:f})]})}function Z(t={}){const{wrapper:r}={...l(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(s,{...t})}):s(t)}function x(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Z as default};
