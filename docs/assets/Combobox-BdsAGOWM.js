import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DysMKXKv.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-J5siV4uj.js";import{M as j,D as u}from"./Combobox.stories-BLT7j0pj.js";import{I as i}from"./ComboboxItem.stories-Ju7G2_JR.js";import{I as n}from"./ComboboxItemLabel.stories-sczJ5_t3.js";import{I as e}from"./ComboboxItemIndicator.stories-Bl-asL9u.js";import{S as s}from"./ComboboxSection.stories-BA5zkq7f.js";import{C as p}from"./ComboboxControl.stories-DZYrHyRN.js";import{I as a}from"./ComboboxInput.stories-C6RnzauE.js";import{T as b}from"./ComboboxTrigger.stories-CgqKyjge.js";import{C as x}from"./ComboboxContent.stories-bdy39ahl.js";import"./iframe-Clet01EE.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-tmUIlYsa.js";import"./2I3Q5YLM-DowSRlkb.js";import"./QZDH5R5B-PBS_kkPt.js";import"./index-CNxaL1Ec.js";import"./index-xPNqmJU7.js";import"./LR7LBJN3-qrjvAUg4.js";import"./FN6EICGO-C03Mjb-S.js";import"./eventListener-D3LYkR5K.js";import"./ZZYKR3VO-BgHOJ8It.js";import"./OYES4GOP-B6Aa_edP.js";import"./FLVHQV4A-BgLTf8G_.js";import"./index-BgurTJCO.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-wWDK6RCs.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-DyOk4EnN.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-Bn1VjxOg.js";import"./FBCYWU27-CO4xBNMq.js";import"./3VFJM5NZ-wQTIoC1l.js";import"./JHMNWOLY-B85oOwU1.js";import"./E53DB7BS-EmVpB0gT.js";import"./NGHEENNE-Dh3ZS6zm.js";import"./index-D60S8ox6.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-CPkKRnTR.js";import"./UKTBL2JL-XTYDUvYT.js";import"./Utils-cFOJcEDI.js";import"./check-CU5kgQI-.js";import"./Icon-Bfk8cl3A.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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
