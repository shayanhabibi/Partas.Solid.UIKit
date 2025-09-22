import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DysMKXKv.js";import{M as s,T as m,b as d,c as l,A as o}from"./blocks-J5siV4uj.js";import{D as t,a as p}from"./Drawer.stories-DWFmqjiY.js";import{D as c}from"./DrawerTrigger.stories-BDKtwBKv.js";import{D as h}from"./DrawerPortal.stories-pNFGZYdQ.js";import{D as w}from"./DrawerClose.stories-BXShdT2H.js";import{D}from"./DrawerOverlay.stories-CAtqhkHm.js";import{D as x}from"./DrawerContent.stories-RGu_ev42.js";import{D as f}from"./DrawerHeader.stories-CLgFU4oG.js";import{D as j}from"./DrawerFooter.stories-BsuIu2z2.js";import{D as u}from"./DrawerTitle.stories-DFwhQpYk.js";import{D as g}from"./DrawerDescription.stories-CNPk7mIo.js";import"./iframe-Clet01EE.js";import"./preload-helper-PPVm8Dsz.js";import"./Drawer-BIrwVndI.js";import"./GZJAOTUE-B_WfTB_e.js";import"./size-0oqgXFOD.js";import"./U42ECMND-BDjyePcW.js";import"./index-D60S8ox6.js";import"./index-xPNqmJU7.js";import"./Utils-cFOJcEDI.js";import"./Button-Cjsk4tww.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";import"./UKTBL2JL-XTYDUvYT.js";import"./OYES4GOP-B6Aa_edP.js";import"./index-CNxaL1Ec.js";import"./FLVHQV4A-BgLTf8G_.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BgurTJCO.js";function i(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
`,r.jsx(m,{}),`
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
`,r.jsx(d,{of:p,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,r.jsx(l,{}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"drawer",children:"Drawer"}),`
`,r.jsx(o,{of:t}),`
`,r.jsx(e.h3,{id:"drawertrigger",children:"DrawerTrigger"}),`
`,r.jsx(o,{of:c}),`
`,r.jsx(e.h3,{id:"drawerportal",children:"DrawerPortal"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(e.h3,{id:"drawerclose",children:"DrawerClose"}),`
`,r.jsx(o,{of:w}),`
`,r.jsx(e.h3,{id:"draweroverlay",children:"DrawerOverlay"}),`
`,r.jsx(o,{of:D}),`
`,r.jsx(e.h3,{id:"drawercontent",children:"DrawerContent"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"drawerheader",children:"DrawerHeader"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"drawerfooter",children:"DrawerFooter"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h3,{id:"drawertitle",children:"DrawerTitle"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"drawerdescription",children:"DrawerDescription"}),`
`,r.jsx(o,{of:g})]})}function Z(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}export{Z as default};
