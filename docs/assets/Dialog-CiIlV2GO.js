import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Bpxy8yXn.js";import{M as s,T as a,b as l,c as p,A as r}from"./blocks-Deqp30Cn.js";import{D as d,a as m}from"./Dialog.stories-DHDz_38M.js";import{T as c}from"./DialogTrigger.stories-DT4eV3S1.js";import{C as h}from"./DialogContent.stories-C_n7xOPV.js";import{H as g}from"./DialogHeader.stories-CEY2FYTV.js";import{T as f}from"./DialogTitle.stories-CuW6e7A8.js";import{D as x}from"./DialogDescription.stories-Bgy7HIt6.js";import{F as j}from"./DialogFooter.stories-Dts_6Thv.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-DYMzWPmZ.js";import"./PLLNVYER-c4YP7_G1.js";import"./FBCYWU27-CTp0ggIZ.js";import"./3VFJM5NZ-mcdoqugV.js";import"./index-CNJVeY88.js";import"./index-_wS-z7e_.js";import"./FLVHQV4A-DrEHBAB-.js";import"./index-aQTIg_kX.js";import"./JHMNWOLY-C-_W0a1e.js";import"./E53DB7BS-Ct6W5Aep.js";import"./FN6EICGO-CSkRKGds.js";import"./UKTBL2JL-BSclCzBH.js";import"./OYES4GOP-mVubA_43.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-Z-x0zc1J.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-bM4TQhDa.js";import"./combineProps-C6tzB3Qj.js";import"./Utils-zL6guu6T.js";import"./x-CPabT-du.js";import"./Icon-DTwW8kzS.js";function n(e){const t={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:d}),`
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
`,o.jsx(r,{of:j})]})}function $(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{$ as default};
