import{j as r,M as s,T as m,d,e as l,A as o}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as a}from"./index-B7Otj1x9.js";import{D as t,a as p}from"./Drawer.stories-BG5zO0Qx.js";import{D as c}from"./DrawerTrigger.stories-4L5GSnjH.js";import{D as h}from"./DrawerPortal.stories-6guR_Kum.js";import{D as w}from"./DrawerClose.stories-HBmznbq8.js";import{D}from"./DrawerOverlay.stories-DFBLaHqJ.js";import{D as x}from"./DrawerContent.stories-sv3tn2TB.js";import{D as f}from"./DrawerHeader.stories-CMurAYOq.js";import{D as j}from"./DrawerFooter.stories-sD4nFpnp.js";import{D as u}from"./DrawerTitle.stories-CBAVp0kq.js";import{D as g}from"./DrawerDescription.stories-mRPVC-q2.js";import"./preload-helper-PPVm8Dsz.js";import"./Drawer-DOvgmSzo.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./size--PbItc1M.js";import"./U42ECMND-BDjyePcW.js";import"./index-BorqGR4b.js";import"./index-D4JJ8pSH.js";import"./Utils-CYryE0IK.js";import"./Button-Bx7G9YYq.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-CJMXQYms.js";import"./OYES4GOP-kZMWaLji.js";import"./index-DaBFbvzD.js";import"./FLVHQV4A-DzmScvHC.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-ncGqb3xy.js";function i(n){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
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
`,r.jsx(o,{of:g})]})}function W(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}export{W as default};
