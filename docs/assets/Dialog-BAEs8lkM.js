import{j as o,M as s,T as a,d as l,e as d,A as r}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as i}from"./index-B7Otj1x9.js";import{D as p,a as m}from"./Dialog.stories-CQ2d-ks8.js";import{T as c}from"./DialogTrigger.stories-fsHzjwLU.js";import{C as h}from"./DialogContent.stories-DLBiwfWS.js";import{H as g}from"./DialogHeader.stories-CClXgUZ3.js";import{T as x}from"./DialogTitle.stories-Cr9ky0Ia.js";import{D as f}from"./DialogDescription.stories-CvhUBt0m.js";import{F as j}from"./DialogFooter.stories-B9-BT5OY.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-C2GAPjTL.js";import"./PLLNVYER-DyPZvRFP.js";import"./FBCYWU27-DahZvSGj.js";import"./3VFJM5NZ-onnisp7d.js";import"./index-DaBFbvzD.js";import"./index-D4JJ8pSH.js";import"./FLVHQV4A-DzmScvHC.js";import"./index-ncGqb3xy.js";import"./JHMNWOLY-DQaPMaMc.js";import"./E53DB7BS-D596icfy.js";import"./FN6EICGO-DRMqXH9r.js";import"./UKTBL2JL-CJMXQYms.js";import"./OYES4GOP-kZMWaLji.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-BorqGR4b.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-QgBfygXE.js";import"./combineProps-D0kUtwZR.js";import"./Utils-CYryE0IK.js";import"./x-Dn9xlIOr.js";import"./Icon-CONeZlkT.js";function n(e){const t={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(a,{}),`
`,o.jsx(t.p,{children:"A simple dialog contains two key components, the trigger and the content."}),`
`,o.jsx(t.p,{children:"The content is further divided into 3 'rows'. The top - header; middle; bottom - footer."}),`
`,o.jsx(t.p,{children:"For the header and content, we have styled text components ready."}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:`Unlike components such as the 'Card' components, the root dialog component\r
houses both the trigger and the flyout.`}),`
`,o.jsx(t.p,{children:`For this reason, you see the 'DialogContent' referring to the whole flyout,\r
and it also wraps the header and title etc.\r
In the 'Card' components, the 'Card' component wraps the contents, and the\r
Content component refers to the body content area.`}),`
`]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-fsharp",children:`Dialog() {\r
    DialogTrigger() {\r
        "Click me!"\r
    }\r
    DialogContent() {\r
        DialogHeader() {\r
            DialogTitle() {\r
                "Title"\r
            }\r
            "Other header content"\r
        }\r
        DialogDescription() {\r
            "Description"\r
        }\r
        DialogFooter() {\r
            "Dialog footer"\r
        }\r
    }\r
}
`})}),`
`,o.jsx(t.p,{children:"Typically, the footer would be used for buttons and actions."}),`
`,o.jsx(l,{of:m,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,o.jsx(d,{}),`
`,o.jsx(t.h3,{id:"dialogtrigger",children:"DialogTrigger"}),`
`,o.jsx(r,{of:c}),`
`,o.jsx(t.h3,{id:"dialogcontent",children:"DialogContent"}),`
`,o.jsx(r,{of:h}),`
`,o.jsx(t.h3,{id:"dialogheader",children:"DialogHeader"}),`
`,o.jsx(r,{of:g}),`
`,o.jsx(t.h3,{id:"dialogtitle",children:"DialogTitle"}),`
`,o.jsx(r,{of:x}),`
`,o.jsx(t.h3,{id:"dialogdescription",children:"DialogDescription"}),`
`,o.jsx(r,{of:f}),`
`,o.jsx(t.h3,{id:"dialogfooter",children:"DialogFooter"}),`
`,o.jsx(r,{of:j})]})}function Y(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{Y as default};
