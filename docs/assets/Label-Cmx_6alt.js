import{G as e,H as i,T as p,Q as l}from"./iframe-BHVPMPJn.js";import{useMDXComponents as a}from"./index-CB5oDCs8.js";import{L as o}from"./Label.stories-CMRiE6xO.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DF4RW6v0.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./Utils-CAhjhIiz.js";import"./Label-Cxm7srSC.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
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
