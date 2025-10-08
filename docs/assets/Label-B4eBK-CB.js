import{H as e,I as i,T as p,R as l}from"./iframe-DHSEN8D7.js";import{useMDXComponents as a}from"./index-e4aCb-2o.js";import{L as o}from"./Label.stories-CzhCiLab.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BnulhXAt.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./index-SvhdUoxj.js";import"./Utils-CzREY3kc.js";import"./Label-BvFM7TJT.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
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
