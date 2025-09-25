import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Bpxy8yXn.js";import{M as s,T as m,b as d,c as l,A as o}from"./blocks-Deqp30Cn.js";import{D as t,a as p}from"./Drawer.stories-hV5-woC8.js";import{D as c}from"./DrawerTrigger.stories-C1pENLCD.js";import{D as h}from"./DrawerPortal.stories-OXzu4QKe.js";import{D as w}from"./DrawerClose.stories-BdvCVvb4.js";import{D}from"./DrawerOverlay.stories-B3Il3ryk.js";import{D as x}from"./DrawerContent.stories-DoZzZWnL.js";import{D as f}from"./DrawerHeader.stories-DiRTQ-FU.js";import{D as j}from"./DrawerFooter.stories-CdFwEsT1.js";import{D as u}from"./DrawerTitle.stories-BzL2ELvf.js";import{D as g}from"./DrawerDescription.stories-Bw1YbTwv.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./Drawer-Cao1IpGY.js";import"./GZJAOTUE-B_WfTB_e.js";import"./size-Dg0yVF-U.js";import"./U42ECMND-BDjyePcW.js";import"./index-Z-x0zc1J.js";import"./index-_wS-z7e_.js";import"./Utils-zL6guu6T.js";import"./Button-Can5pglF.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";import"./UKTBL2JL-BSclCzBH.js";import"./OYES4GOP-mVubA_43.js";import"./index-CNJVeY88.js";import"./FLVHQV4A-DrEHBAB-.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-aQTIg_kX.js";function i(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
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
