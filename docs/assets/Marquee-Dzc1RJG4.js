import{G as r,H as s,T as i,K as l,L as m,O as u}from"./iframe-BHVPMPJn.js";import{useMDXComponents as p}from"./index-CB5oDCs8.js";import{M as t,D as c}from"./Marquee.stories-DZsc-Bac.js";import"./preload-helper-PPVm8Dsz.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./Array-CbDDtYGA.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Button-DF4RW6v0.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Aria\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Partas.Solid.Kobalte\r
\r
[<Erase>]\r
type Marquee() =\r
    inherit div()\r
    [<DefaultValue>]\r
    val mutable pauseOnHover: bool\r
    [<Erase>]\r
    member val repeat = 4 with get,set\r
    [<DefaultValue>]\r
    val mutable reverse: bool\r
    [<DefaultValue>]\r
    val mutable orientation: Enums.Orientation\r
    [<Erase>]\r
    member val duration = 40 with get,set\r
    [<Erase>]\r
    member val gap = "1rem" with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.reverse <- false\r
        props.pauseOnHover <- false\r
        props.orientation <- Orientation.Horizontal\r
        props.repeat <- 4\r
        props.duration <- 40\r
        props.gap <- "1rem"\r
        let repeat,setRepeat = createSignal(0)\r
        createEffect(fun () ->\r
            setRepeat props.repeat\r
            )\r
        \r
        div(class' = Lib.cn [|\r
            "group flex overflow-hidden p-2 [gap:var(--gap)]"\r
            match props.orientation with\r
            | Horizontal -> "flex-row"\r
            | Vertical -> "flex-col"\r
            props.class'\r
        |]).style'({|\r
            \`\`--duration\`\` = $"{props.duration}s"\r
            \`\`--gap\`\` = props.gap\r
        |}).spread props {\r
            For(each = Array.create (repeat()) 0) {\r
                yield fun _ _ ->\r
                    div(class' = Lib.cn [|\r
                        "flex shrink-0 justify-around [gap:var(--gap)]"\r
                        match props.orientation with\r
                        | Horizontal -> \r
                            "animate-marquee flex-row"\r
                        | Vertical -> \r
                            "animate-marquee-vertical flex-col"\r
                        if props.pauseOnHover then "group-hover:paused"\r
                        if props.reverse then "direction-reverse"\r
                    |]) { props.children }\r
            }\r
        }\r
`;function a(e){const n={h2:"h2",h3:"h3",...p(),...e.components},{SourceCode:o}=n;return o||f("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
`,r.jsx(i,{}),`
`,r.jsx(l,{of:c,sourceState:"none",withToolbar:!0}),`
`,r.jsx(m,{}),`
`,r.jsx(o,{code:d}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"marquee",children:"Marquee"}),`
`,r.jsx(u,{of:t})]})}function O(e={}){const{wrapper:n}={...p(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(a,{...e})}):a(e)}function f(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{O as default};
