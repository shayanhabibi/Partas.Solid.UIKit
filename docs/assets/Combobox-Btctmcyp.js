import{j as o,M as d,T as h,d as f,e as C,A as r}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as l}from"./index-B7Otj1x9.js";import{M as j,D as u}from"./Combobox.stories-B-U6Lj0l.js";import{I as e}from"./ComboboxItem.stories-0-KjcJsb.js";import{I as n}from"./ComboboxItemLabel.stories-DtE4hgTD.js";import{I as i}from"./ComboboxItemIndicator.stories-DPmRB5kJ.js";import{S as s}from"./ComboboxSection.stories-DZcrP87U.js";import{C as p}from"./ComboboxControl.stories-FwG5rOUn.js";import{I as a}from"./ComboboxInput.stories-BnKC1sLA.js";import{T as x}from"./ComboboxTrigger.stories-DvffuzNY.js";import{C as b}from"./ComboboxContent.stories-DDPSTMBn.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-CmmxN4Rg.js";import"./2I3Q5YLM-BqyeLxJ_.js";import"./QZDH5R5B-V0vxofr3.js";import"./index-DaBFbvzD.js";import"./index-D4JJ8pSH.js";import"./LR7LBJN3-CEDhmev5.js";import"./FN6EICGO-DRMqXH9r.js";import"./Utils-CYryE0IK.js";import"./ZZYKR3VO-X8UR8vLU.js";import"./OYES4GOP-kZMWaLji.js";import"./FLVHQV4A-DzmScvHC.js";import"./index-ncGqb3xy.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-CbGPk0SO.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-Bz4Kyx6Y.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-D0kUtwZR.js";import"./FBCYWU27-DahZvSGj.js";import"./3VFJM5NZ-onnisp7d.js";import"./JHMNWOLY-DQaPMaMc.js";import"./E53DB7BS-D596icfy.js";import"./NGHEENNE-BuHkgYPT.js";import"./index-BorqGR4b.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-QgBfygXE.js";import"./UKTBL2JL-CJMXQYms.js";import"./check-zuZDMFDm.js";import"./Icon-CONeZlkT.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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
`,o.jsx(r,{of:e,meta:e}),`
`,o.jsx(t.h3,{id:"comboboxitemlabel",children:"ComboboxItemLabel"}),`
`,o.jsx(r,{of:n,meta:n}),`
`,o.jsx(t.h3,{id:"comboboxitemindicator",children:"ComboboxItemIndicator"}),`
`,o.jsx(r,{of:i,meta:i}),`
`,o.jsx(t.h3,{id:"comboboxsection",children:"ComboboxSection"}),`
`,o.jsx(r,{of:s,meta:s}),`
`,o.jsx(t.h3,{id:"comboboxcontrol",children:"ComboboxControl"}),`
`,o.jsx(r,{of:p,meta:p}),`
`,o.jsx(t.h3,{id:"comboboxinput",children:"ComboboxInput"}),`
`,o.jsx(r,{of:a,meta:a}),`
`,o.jsx(t.h3,{id:"comboboxtrigger",children:"ComboboxTrigger"}),`
`,o.jsx(r,{of:x,meta:x}),`
`,o.jsx(t.h3,{id:"comboboxcontent",children:"ComboboxContent"}),`
`,o.jsx(r,{of:b,meta:b})]})}function po(m={}){const{wrapper:t}={...l(),...m.components};return t?o.jsx(t,{...m,children:o.jsx(c,{...m})}):c(m)}export{po as default};
