import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-w4y-2JRw.js";import{M as s,T as a,b as l,c as p,A as r}from"./blocks-BfNHLvBY.js";import{D as d,a as m}from"./Dialog.stories-B4DlwN07.js";import{T as c}from"./DialogTrigger.stories-eCiY4ygq.js";import{C as h}from"./DialogContent.stories-SJa4IiQH.js";import{H as g}from"./DialogHeader.stories-aM4x1AKo.js";import{T as f}from"./DialogTitle.stories--khzDuED.js";import{D as x}from"./DialogDescription.stories-BBr85Jcs.js";import{F as j}from"./DialogFooter.stories-DKc8vVnW.js";import"./iframe-CQhh2Qu5.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-mFEOMWz3.js";import"./x-Bqaq2qsr.js";import"./FBCYWU27-ClUBcuEn.js";import"./3VFJM5NZ-BZdkV51Z.js";import"./index-sxjzjzXW.js";import"./index-DW9tDSAV.js";import"./FLVHQV4A-C8oehw7Q.js";import"./index-DFznmYTA.js";import"./JHMNWOLY-CrfHPxcN.js";import"./E53DB7BS-CVyxcjvy.js";import"./FN6EICGO-B6Cr9H-k.js";import"./UKTBL2JL-DWXUg-P2.js";import"./OYES4GOP-DTqiBsTD.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-DNbZ_U_3.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-C8veUlZR.js";import"./index-BeAt9i6J.js";import"./combineProps-BDGDEaHG.js";import"./Icon-BiJbdnQ6.js";import"./Utils-CX15CBuI.js";function n(e){const t={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
