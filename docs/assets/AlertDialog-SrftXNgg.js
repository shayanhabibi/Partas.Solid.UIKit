import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DD6hQIwJ.js";import{M as a,b as e,c as s,A as m}from"./blocks-Cb4awOOM.js";import{A as p,D as n,a as c}from"./AlertDialog.stories-BXEFDLXd.js";import{A as d}from"./AlertDialogContent.stories-DGFpRXsC.js";import"./iframe-CSkHCzVC.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertDialog-CqphsOhy.js";import"./PLLNVYER-BW6sZbic.js";import"./FBCYWU27-Duvn9742.js";import"./3VFJM5NZ-Cpt1Stcw.js";import"./index-BtT_u8Hx.js";import"./index-BqxmMzY1.js";import"./FLVHQV4A-Dza2M8WJ.js";import"./index-Bs2ALodi.js";import"./JHMNWOLY-BqZJcmiH.js";import"./E53DB7BS-V5IT78uP.js";import"./FN6EICGO-DxliCwKo.js";import"./UKTBL2JL-dEE4KpjY.js";import"./OYES4GOP-DI3jAQSI.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-DRsflZo7.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-DLcXBA1H.js";import"./combineProps-DXHHMuGc.js";import"./Utils-Bukfxs-o.js";import"./x-koxqBYgy.js";import"./Icon-CbvvIQH_.js";import"./Button-CukqsTBC.js";import"./Option-C1D3-SyF.js";import"./Util-CLBO94nE.js";function i(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(t.h1,{id:"alert-dialog",children:"Alert Dialog"}),`
`,r.jsx(a,{of:p}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-fsharp",children:`AlertDialog() {\r
    AlertDialogTrigger() {\r
        "Click me"\r
    }\r
    AlertDialogContent() {\r
        AlertDialogX()\r
        AlertDialogHeader() {\r
            AlertDialogTitle() {\r
                "Alert dialog title"\r
            }\r
        }\r
        AlertDialogDescription() {\r
            "Alert dialog description"\r
        }\r
        AlertDialogFooter() {\r
            AlertDialogAction() { "Do something!" }\r
            AlertDialogCancel() { "Cancel" }\r
        }\r
    }
`})}),`
`,r.jsx(t.p,{children:"By default, the alert dialog has modal set to true, and disables interactions outside the content."}),`
`,r.jsx(e,{of:n}),`
`,r.jsx(t.h3,{id:"alertdialog",children:"AlertDialog"}),`
`,r.jsx(s,{of:n}),`
`,r.jsx(t.h3,{id:"alertdialogcontent",children:"AlertDialogContent"}),`
`,r.jsx(m,{of:d}),`
`,r.jsx(t.h3,{id:"polymorphism",children:"Polymorphism"}),`
`,r.jsx(t.p,{children:"Like all components, you can use inherent kobalte polymorphism to change the rendered element for a component."}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-fsharp",children:`AlertDialog() {\r
    AlertDialogTrigger().as'(Button(variant = Button.Variant.Secondary)) {\r
        "Click me"\r
    }\r
    AlertDialogContent() {\r
        AlertDialogX()\r
        AlertDialogTitle() {\r
            "Alert dialog title"\r
        }\r
        AlertDialogDescription() {\r
            "Alert dialog description"\r
        }\r
    }\r
}
`})}),`
`,r.jsx(e,{of:c,layout:"centered",withToolbar:!0,sourceStatus:"none"})]})}function K(o={}){const{wrapper:t}={...l(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(i,{...o})}):i(o)}export{K as default};
