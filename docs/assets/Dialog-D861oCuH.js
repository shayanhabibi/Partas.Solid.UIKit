import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DysMKXKv.js";import{M as s,T as a,b as l,c as p,A as r}from"./blocks-J5siV4uj.js";import{D as d,a as m}from"./Dialog.stories-BT5VRf5K.js";import{T as c}from"./DialogTrigger.stories-D_R_JkMu.js";import{C as h}from"./DialogContent.stories-C71gG_H3.js";import{H as g}from"./DialogHeader.stories-DU6ET63W.js";import{T as f}from"./DialogTitle.stories-CZQ_HTAc.js";import{D as x}from"./DialogDescription.stories-0OmcBduj.js";import{F as j}from"./DialogFooter.stories-Dvhx63Ik.js";import"./iframe-Clet01EE.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-Dd6PC3tF.js";import"./x-YVQRnUDF.js";import"./FBCYWU27-CO4xBNMq.js";import"./3VFJM5NZ-wQTIoC1l.js";import"./index-CNxaL1Ec.js";import"./index-xPNqmJU7.js";import"./FLVHQV4A-BgLTf8G_.js";import"./index-BgurTJCO.js";import"./JHMNWOLY-B85oOwU1.js";import"./E53DB7BS-EmVpB0gT.js";import"./FN6EICGO-C03Mjb-S.js";import"./UKTBL2JL-XTYDUvYT.js";import"./OYES4GOP-B6Aa_edP.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D60S8ox6.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-CPkKRnTR.js";import"./combineProps-Bn1VjxOg.js";import"./Icon-Bfk8cl3A.js";import"./Utils-cFOJcEDI.js";function n(e){const t={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(p,{}),`
`,o.jsx(t.h3,{id:"dialogtrigger",children:"DialogTrigger"}),`
`,o.jsx(r,{of:c}),`
`,o.jsx(t.h3,{id:"dialogcontent",children:"DialogContent"}),`
`,o.jsx(r,{of:h}),`
`,o.jsx(t.h3,{id:"dialogheader",children:"DialogHeader"}),`
`,o.jsx(r,{of:g}),`
`,o.jsx(t.h3,{id:"dialogtitle",children:"DialogTitle"}),`
`,o.jsx(r,{of:f}),`
`,o.jsx(t.h3,{id:"dialogdescription",children:"DialogDescription"}),`
`,o.jsx(r,{of:x}),`
`,o.jsx(t.h3,{id:"dialogfooter",children:"DialogFooter"}),`
`,o.jsx(r,{of:j})]})}function Z(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{Z as default};
