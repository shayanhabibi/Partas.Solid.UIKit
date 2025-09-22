import{A as o,a,b as n,c as i,d as s}from"./AlertDialog-D1w26Ska.js";import{B as p}from"./Button-Cjsk4tww.js";import{c as e,m as c}from"./iframe-Clet01EE.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={args:{onOpenChange:d()},argTypes:{open:{control:{type:"boolean"},table:{type:{summary:"bool"}}},defaultOpen:{control:{type:"boolean"},table:{type:{summary:"bool"}}},onOpenChange:{control:{type:!1},table:{type:{summary:"function"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},modal:{control:{type:"boolean"},table:{type:{summary:"bool"}}},preventScroll:{control:{type:"boolean"},table:{type:{summary:"bool"}}},forceMount:{control:{type:"boolean"},table:{type:{summary:"bool"}}}},render:l=>e(o,c(l,{"bool:n$":!1,get children(){return[e(a,{children:"Click me"}),e(n,{get children(){return[e(i,{children:"Alert dialog title"}),e(s,{children:"Alert dialog description"})]}})]}})),component:o},r={args:{}},t={render:l=>e(o,{get children(){return[e(a,{as:g=>e(p,c(g,{"on:n$":!1,variant:"secondary"})),children:"Click me"}),e(n,{get children(){return[e(i,{children:"Alert dialog title"}),e(s,{children:"Alert dialog description"})]}})]}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <AlertDialog>\r
            <AlertDialogTrigger as={PARTAS_POLYPROPS => <Button {...PARTAS_POLYPROPS} on:n$={false} variant="secondary" />}>\r
                Click me\r
            </AlertDialogTrigger>\r
            <AlertDialogContent>\r
                <AlertDialogTitle>\r
                    Alert dialog title\r
                </AlertDialogTitle>\r
                <AlertDialogDescription>\r
                    Alert dialog description\r
                </AlertDialogDescription>\r
            </AlertDialogContent>\r
        </AlertDialog>
}`,...t.parameters?.docs?.source}}};const A=["Default","AsButton"],b=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:r,__namedExportsOrder:A,default:m},Symbol.toStringTag,{value:"Module"}));export{b as A,r as D,t as a};
