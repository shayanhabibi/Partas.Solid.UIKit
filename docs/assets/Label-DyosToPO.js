import{G as e,H as i,T as p,Q as l}from"./iframe-BLvaHOrW.js";import{useMDXComponents as a}from"./index-DMt2PYli.js";import{L as o}from"./Label.stories-MXR2psb-.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CjiiobU-.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./Utils-BEjpZvS7.js";import"./Label-CT7n78zp.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Fable.Core\r
\r
[<Erase>]\r
type Label() =\r
    inherit label()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        label(class'= Lib.cn [|\r
            "flex items-center gap-2 text-sm leading-none font-medium select-none\r
            group-data-[disabled=true]:pointer-events-none\r
            group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed \\\r
            peer-disabled:opacity-50"\r
            props.class'\r
        |]) .dataSlot("label")\r
            .spread(props)\r
`;function s(t){const r={code:"code",p:"p",pre:"pre",...a(),...t.components},{SourceCode:n}=r;return n||c("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(p,{}),`
`,e.jsx(r.p,{children:"The label is a stylised implementation of the 'label' native tag."}),`
`,e.jsx(r.p,{children:`It mirrors the disabled state of peers; so, to enable this, the attached control\r
must have the 'peer' class.`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`div() {\r
    Button(disabled=true) { "Button" }\r
    Label() { "Not correct" }\r
}
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`div() {\r
    Button(class' = "peer", disabled=true) { "Button" }\r
    Label() { "Correct" }\r
}
`})}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n,{code:d})]})}function E(t={}){const{wrapper:r}={...a(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(s,{...t})}):s(t)}function c(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};
