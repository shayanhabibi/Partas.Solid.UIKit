import{c as e,a as h,m as s}from"./iframe-BLvaHOrW.js";import{A as l,a as c,b as d,c as g,d as p,e as u,f as m,g as A,h as b,i as f}from"./AlertDialog-DZ490t2_.js";import{B as D}from"./Button-CjiiobU-.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,_={args:{onOpenChange:y()},argTypes:{defaultOpen:{control:{type:"boolean"},description:"The default open state when initially rendered. Useful when you do not need to control the open state.",table:{type:{summary:"bool"}}},forceMount:{control:{type:"boolean"},description:`Used to force mounting the dialog (portal, overlay and content) when more control is needed. Useful when
 controlling animation with SolidJS animation libraries.`,table:{type:{summary:"bool"}}},id:{control:{type:"text"},description:`A unique identifier for the component. The id is used to generate id attributes for nested components.
 If no id prop is provided, a generated id will be used.`,table:{type:{summary:"string"}}},modal:{control:{type:"boolean"},description:`Whether the dialog should be the only visible content for screen readers.
 When \`true\`:
 * interaction with outside elements will be disabled.
 * scroll will be locked
 * focus will be locked inside the dialog content
 * elements outside the dialog content will not be visible for screen readers`,table:{type:{summary:"bool"}}},onOpenChange:{control:{type:!1},description:"Event handler called when the open state of the dialog changes.",table:{type:{summary:"function"}}},open:{control:{type:"boolean"},description:"The controlled open state of the dialog",table:{type:{summary:"bool"}}},preventScroll:{control:{type:"boolean"},description:"Whether the scroll should be locked even if the alert dialog is not modal.",table:{type:{summary:"bool"}}}},render:a=>{const r=h(!1),n=r[1];return e(l,s({get open(){return r[0]()},onOpenChange:n},a,{"bool:n$":!1,get children(){return[e(c,{onClick:i=>{n(!0)},children:"Click me"}),e(d,{get children(){return[e(g,{}),e(m,{get children(){return e(p,{children:"Alert dialog title"})}}),e(u,{children:"Alert dialog description"}),e(A,{get children(){return[e(b,{onClick:i=>{n(!1)},children:"Do something!"}),e(f,{onClick:i=>{n(!1)},children:"Cancel"})]}})]}})]}}))},component:l},t={args:{}},o={render:a=>e(l,{get children(){return[e(c,{as:r=>e(D,s(r,{"on:n$":!1,variant:"secondary"})),children:"Click me"}),e(d,{get children(){return[e(g,{}),e(p,{children:"Alert dialog title"}),e(u,{children:"Alert dialog description"})]}})]}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <AlertDialog>\r
            <AlertDialogTrigger as={PARTAS_POLYPROPS => <Button {...PARTAS_POLYPROPS} on:n$={false} variant="secondary" />}>\r
                Click me\r
            </AlertDialogTrigger>\r
            <AlertDialogContent>\r
                <AlertDialogX />\r
                <AlertDialogTitle>\r
                    Alert dialog title\r
                </AlertDialogTitle>\r
                <AlertDialogDescription>\r
                    Alert dialog description\r
                </AlertDialogDescription>\r
            </AlertDialogContent>\r
        </AlertDialog>
}`,...o.parameters?.docs?.source}}};const T=["Default","AsButton"],R=Object.freeze(Object.defineProperty({__proto__:null,AsButton:o,Default:t,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{R as A,t as D,o as a};
