import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BtM1hK2q.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-CMsyRgwU.js";import{M as j,D as u}from"./Combobox.stories-DVl6-OpT.js";import{I as i}from"./ComboboxItem.stories-DjSPLzSv.js";import{I as n}from"./ComboboxItemLabel.stories-CQoTgPbz.js";import{I as e}from"./ComboboxItemIndicator.stories-wtUiRAEQ.js";import{S as s}from"./ComboboxSection.stories-DDUCQ-Ur.js";import{C as p}from"./ComboboxControl.stories-CHUf0BJE.js";import{I as a}from"./ComboboxInput.stories-wDb6AtgB.js";import{T as b}from"./ComboboxTrigger.stories-BtVzcldx.js";import{C as x}from"./ComboboxContent.stories-CPgZl3-J.js";import"./iframe-rVoFtZu9.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-BhQ-AgaD.js";import"./2I3Q5YLM-CM7UYOo-.js";import"./QZDH5R5B-BbgjLotW.js";import"./index-kLgwDL5l.js";import"./index-Riw0p3ms.js";import"./LR7LBJN3-Cn4krSpU.js";import"./FN6EICGO-g7b9VqP4.js";import"./eventListener-1Z1e74AA.js";import"./ZZYKR3VO-NDDEU6Nn.js";import"./OYES4GOP-BdaYfyQY.js";import"./FLVHQV4A-Gi-kDcar.js";import"./index-TjBUJP2H.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-C-lFNpaU.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-CSCl13rC.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-CsPhi8Vl.js";import"./FBCYWU27-BYVai17-.js";import"./3VFJM5NZ-yJJf6KC2.js";import"./JHMNWOLY-CA4xM7tJ.js";import"./E53DB7BS-COn9pcus.js";import"./NGHEENNE-CgvBP-lB.js";import"./index-BzeBVIIH.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-Dla5E_GO.js";import"./UKTBL2JL-CAvLOfBE.js";import"./Utils-DvLkKxqJ.js";import"./check-DCPDolhG.js";import"./Icon-b_5I2J3_.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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
