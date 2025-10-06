import{G as r,H as a,T as p,K as d,L as l,O as t}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as c}from"./index--e61kTGT.js";import{S as i,D as h}from"./Switch.stories-DZF7fKdK.js";import{S as m}from"./SwitchDescription.stories-DM9Fe0FB.js";import{S}from"./SwitchErrorMessage.stories-1LKREqR8.js";import{S as b}from"./SwitchControl.stories-CqMkdW-G.js";import{S as u}from"./SwitchThumb.stories-BDiJLhwk.js";import{S as w}from"./SwitchLabel.stories-7v3bYKRT.js";import"./preload-helper-PPVm8Dsz.js";import"./Switch-CH9qWKFP.js";import"./VI7QYH27-eJSdAdpK.js";import"./FN6EICGO-DOeDID0N.js";import"./index-axew2xP3.js";import"./NGHEENNE-CpMefcT9.js";import"./ZZYKR3VO-B31dcm3B.js";import"./OYES4GOP-BvTDlBrO.js";import"./index-DsOqkTmx.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-Da4i2tMy.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./combineProps-Dc0BZltT.js";import"./Utils-Bv7TLaDt.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Switch()=\r
    inherit Kobalte.Switch()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Switch()\r
            .dataSlot("switch")\r
            .spread props\r
        \r
[<Erase>]\r
type SwitchDescription() =\r
    inherit Switch.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Switch.Description()\r
            .dataSlot("switch-description")\r
            .spread props\r
        \r
[<Erase>]\r
type SwitchErrorMessage() =\r
    inherit Switch.ErrorMessage()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Switch.ErrorMessage()\r
            .dataSlot("switch-error-message")\r
            .spread props\r
        \r
[<Erase>]\r
type SwitchControl()=\r
    inherit Switch.Control()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Fragment() {\r
            Switch.Input( class' = Lib.cn [|\r
                    "[&:focus-visible+div]:rounded-full \\\r
                    [&:focus-visible+div]:ring-[3px] \\\r
                    [&:focus-visible+div]:border-ring \\\r
                    [&:focus-visible+div]:ring-ring/50 \\\r
                    [&:focus-visible+div]:border \\\r
                    [&:focus-visible+div]:transition-[color,box-shadow] \\\r
                    [&:focus-visible+div]:border-input"\r
                    props.class' |] )\r
                .dataSlot("switch-input")\r
            Switch.Control(class' = Lib.cn [|\r
                "peer data-[checked]:bg-primary not-data-[checked]:bg-input \\\r
                focus-visible:border-ring focus-visible:ring-ring/50 \\\r
                dark:not-data-[checked]:bg-input/80 inline-flex h-[1.10rem] \\\r
                w-8 shrink-0 items-center rounded-full border border-transparent \\\r
                shadow-xs transition-all outline-none focus-visible:ring-[3px] \\\r
                data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"\r
                props.class'\r
            |]) .dataSlot("switch-control")\r
                .spread(props) { props.children }\r
        }\r
\r
[<Erase>]\r
type SwitchThumb() =\r
    inherit Switch.Thumb()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Switch.Thumb(class' = Lib.cn [|\r
            "bg-background dark:not([data-[checked]]):bg-foreground \\\r
            dark:data-[checked]:bg-primary-foreground pointer-events-none block size-4 \\\r
            rounded-full ring-0 transition-transform \\\r
            data-[checked]:translate-x-[calc(100%-2px)] not-data-[checked]:translate-x-0"\r
            props.class'\r
        |]) .dataSlot("switch-thumb")\r
            .spread props\r
\r
[<Erase>]\r
type SwitchLabel() =\r
    inherit Switch.Label()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Switch.Label(class' = Lib.cn [|\r
            "text-sm font-medium leading-none\r
            data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70"\r
            props.class'\r
        |]) .dataSlot("switch-label")\r
            .spread props\r
\r
`;function s(o){const n={h2:"h2",h3:"h3",...c(),...o.components},{SourceCode:e}=n;return e||x("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:i}),`
`,r.jsx(p,{}),`
`,r.jsx(d,{of:h,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(l,{}),`
`,r.jsx(e,{code:f}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,r.jsx(t,{of:i}),`
`,r.jsx(n.h3,{id:"switchdescription",children:"SwitchDescription"}),`
`,r.jsx(t,{of:m}),`
`,r.jsx(n.h3,{id:"switcherrormessage",children:"SwitchErrorMessage"}),`
`,r.jsx(t,{of:S}),`
`,r.jsx(n.h3,{id:"switchcontrol",children:"SwitchControl"}),`
`,r.jsx(t,{of:b}),`
`,r.jsx(n.h3,{id:"switchthumb",children:"SwitchThumb"}),`
`,r.jsx(t,{of:u}),`
`,r.jsx(n.h3,{id:"switchlabel",children:"SwitchLabel"}),`
`,r.jsx(t,{of:w})]})}function U(o={}){const{wrapper:n}={...c(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(s,{...o})}):s(o)}function x(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{U as default};
