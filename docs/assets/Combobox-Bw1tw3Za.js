import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BbwtnS3T.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-BWgEJxN5.js";import{M as j,D as u}from"./Combobox.stories-DM_imnP4.js";import{I as i}from"./ComboboxItem.stories-6Iw0co1m.js";import{I as n}from"./ComboboxItemLabel.stories-C_ZmsvmI.js";import{I as e}from"./ComboboxItemIndicator.stories-g1VZmluT.js";import{S as s}from"./ComboboxSection.stories-DzcfRY-8.js";import{C as p}from"./ComboboxControl.stories-DIFkRqut.js";import{I as a}from"./ComboboxInput.stories-CzTp8vSI.js";import{T as b}from"./ComboboxTrigger.stories-BOCKg0Ep.js";import{C as x}from"./ComboboxContent.stories-_U_M-fWg.js";import"./iframe-CxGoIJAb.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-BmMIp8eT.js";import"./2I3Q5YLM-3oSBakSw.js";import"./QZDH5R5B-Qkec8v-Q.js";import"./index-DQYZI0kA.js";import"./index-BmLeoKbC.js";import"./LR7LBJN3-kBELrHTO.js";import"./FN6EICGO-lOlungVQ.js";import"./eventListener-kVsKM4ni.js";import"./ZZYKR3VO-BhF5XW0P.js";import"./OYES4GOP-CkYGfI9k.js";import"./FLVHQV4A-CBdIuREj.js";import"./index-Dg1yJhWd.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-DzppKbBE.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-CHEA7d3E.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-uLaRYQYT.js";import"./FBCYWU27-vfj_3iis.js";import"./3VFJM5NZ-BluivHlh.js";import"./JHMNWOLY-BsaNL2h9.js";import"./E53DB7BS-BNvrQJoi.js";import"./NGHEENNE-wo5LYtNh.js";import"./index-DsOiINGQ.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-C8veUlZR.js";import"./index-D2aTQ-Yz.js";import"./UKTBL2JL-wUtxpG-t.js";import"./Utils-C5KSfAah.js";import"./check-BMUYh2yQ.js";import"./Icon-CqHicZQ1.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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
