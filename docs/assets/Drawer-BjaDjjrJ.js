import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-w4y-2JRw.js";import{M as a,T as d,b as l,c,A as o}from"./blocks-BfNHLvBY.js";import{D as n,a as h}from"./Drawer.stories-CklLkKZE.js";import"./iframe-CQhh2Qu5.js";import"./preload-helper-PPVm8Dsz.js";import"./Drawer-B7CPFmD1.js";import"./GZJAOTUE-C8veUlZR.js";import"./size-BvIj0Gnb.js";import"./U42ECMND-BDjyePcW.js";import"./index-DNbZ_U_3.js";import"./index-DW9tDSAV.js";import"./Utils-CX15CBuI.js";import"./Button-BlX5k0od.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";import"./UKTBL2JL-DWXUg-P2.js";import"./OYES4GOP-DTqiBsTD.js";import"./index-sxjzjzXW.js";import"./FLVHQV4A-C8oehw7Q.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-DFznmYTA.js";function i(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{of:n}),`
`,r.jsx(d,{}),`
`,r.jsx(e.h2,{id:"minimal-example",children:"Minimal Example"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`Drawer().spread props {\r
    DrawerTrigger() {\r
        Button() {\r
            "Click me"\r
        }\r
    }\r
    DrawerContent() {\r
        DrawerHeader() {\r
            DrawerTitle() {\r
                "Are you absolutely sure?"\r
            }\r
            DrawerDescription() { "This action cannot be undone." }\r
        }\r
        DrawerFooter() {\r
            Button() { "Submit" }\r
            DrawerClose() {\r
                Button(variant = Button.Variant.Outline, class'="w-full") {\r
                    "Cancel"\r
                }\r
            }\r
        }\r
    }\r
}
`})}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsx(e.p,{children:`Note, there appears to be some odd behaviour when using the 'side' prop, but\r
I don't remember if this is the case in environments outside of storybook.\r
I would normally reach for the sheet component when rendering from the side anyway.`}),`
`]}),`
`,r.jsx(l,{of:h,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,r.jsx(c,{}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"drawer",children:"Drawer"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawertrigger",children:"DrawerTrigger"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawerportal",children:"DrawerPortal"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawerclose",children:"DrawerClose"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"draweroverlay",children:"DrawerOverlay"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawercontent",children:"DrawerContent"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawerheader",children:"DrawerHeader"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawerfooter",children:"DrawerFooter"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawertitle",children:"DrawerTitle"}),`
`,r.jsx(o,{of:n}),`
`,r.jsx(e.h3,{id:"drawerdescription",children:"DrawerDescription"}),`
`,r.jsx(o,{of:n})]})}function E(t={}){const{wrapper:e}={...s(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(i,{...t})}):i(t)}export{E as default};
