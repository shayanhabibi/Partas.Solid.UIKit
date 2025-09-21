import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-w4y-2JRw.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-BfNHLvBY.js";import{M as j,D as u}from"./Combobox.stories-BEU30sck.js";import{I as i}from"./ComboboxItem.stories-QDleaTcp.js";import{I as n}from"./ComboboxItemLabel.stories-BDI1e-gm.js";import{I as e}from"./ComboboxItemIndicator.stories-DFx_rSd4.js";import{S as s}from"./ComboboxSection.stories-CA3RJuCW.js";import{C as p}from"./ComboboxControl.stories-CHCIAhaT.js";import{I as a}from"./ComboboxInput.stories-C3szuWpF.js";import{T as b}from"./ComboboxTrigger.stories-D-No5Q_6.js";import{C as x}from"./ComboboxContent.stories-cMHDIYhG.js";import"./iframe-CQhh2Qu5.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-DLcUqqkZ.js";import"./2I3Q5YLM-DMzgUhnU.js";import"./QZDH5R5B-C0TQ2bTZ.js";import"./index-sxjzjzXW.js";import"./index-DW9tDSAV.js";import"./LR7LBJN3-BEwATGKl.js";import"./FN6EICGO-B6Cr9H-k.js";import"./eventListener-K9Lba18Q.js";import"./ZZYKR3VO-TYWTtIT_.js";import"./OYES4GOP-DTqiBsTD.js";import"./FLVHQV4A-C8oehw7Q.js";import"./index-DFznmYTA.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-C-OnqaN9.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-D8UquEmR.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-BDGDEaHG.js";import"./FBCYWU27-ClUBcuEn.js";import"./3VFJM5NZ-BZdkV51Z.js";import"./JHMNWOLY-CrfHPxcN.js";import"./E53DB7BS-CVyxcjvy.js";import"./NGHEENNE-dvvJAkSQ.js";import"./index-DNbZ_U_3.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-C8veUlZR.js";import"./index-BeAt9i6J.js";import"./UKTBL2JL-DWXUg-P2.js";import"./Utils-CX15CBuI.js";import"./check-BIsC9o7Y.js";import"./Icon-BiJbdnQ6.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
`,o.jsx(h,{}),`
`,o.jsx(t.p,{children:`The usage of a combobox is a bit more involved; however, it is a powerful construct\r
that is quick to get going when you get the hang of its composition.`}),`
`,o.jsx(t.h4,{id:"minimal-example",children:"Minimal Example"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-fsharp",children:`Combobox<string>(\r
    itemComponent = ( fun (itemProps: Kobalte.ItemComponentProps<string>) ->\r
        ComboboxItem(item = itemProps.item) {\r
            ComboboxItemLabel() {\r
                itemProps.item.rawValue\r
            }\r
            ComboboxItemIndicator()\r
        }\r
        )\r
    ).spread props {\r
    ComboboxControl() { yield fun _ -> Fragment() {\r
        ComboboxInput()\r
        ComboboxTrigger()\r
    } }\r
    ComboboxContent()\r
}
`})}),`
`,o.jsx(f,{of:u,layout:"center",sourceState:"none",withToolbar:!0}),`
`,o.jsx(C,{}),`
`,o.jsx(t.h3,{id:"comboboxitem",children:"ComboboxItem"}),`
`,o.jsx(r,{of:i,meta:i}),`
`,o.jsx(t.h3,{id:"comboboxitemlabel",children:"ComboboxItemLabel"}),`
`,o.jsx(r,{of:n,meta:n}),`
`,o.jsx(t.h3,{id:"comboboxitemindicator",children:"ComboboxItemIndicator"}),`
`,o.jsx(r,{of:e,meta:e}),`
`,o.jsx(t.h3,{id:"comboboxsection",children:"ComboboxSection"}),`
`,o.jsx(r,{of:s,meta:s}),`
`,o.jsx(t.h3,{id:"comboboxcontrol",children:"ComboboxControl"}),`
`,o.jsx(r,{of:p,meta:p}),`
`,o.jsx(t.h3,{id:"comboboxinput",children:"ComboboxInput"}),`
`,o.jsx(r,{of:a,meta:a}),`
`,o.jsx(t.h3,{id:"comboboxtrigger",children:"ComboboxTrigger"}),`
`,o.jsx(r,{of:b,meta:b}),`
`,o.jsx(t.h3,{id:"comboboxcontent",children:"ComboboxContent"}),`
`,o.jsx(r,{of:x,meta:x})]})}function xo(m={}){const{wrapper:t}={...l(),...m.components};return t?o.jsx(t,{...m,children:o.jsx(c,{...m})}):c(m)}export{xo as default};
