import{A as r,a as l,b as i,c as a,d as s}from"./AlertDialog-C-c72nU-.js";import{B as p}from"./Button-Di0Pgs7I.js";import{c as e,m as d}from"./iframe-rVoFtZu9.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,m={args:{onOpenChange:g()},argTypes:{defaultOpen:{control:{type:"boolean"},description:"The default open state when initially rendered. Useful when you do not need to control the open state.",table:{type:{summary:"bool"}}},forceMount:{control:{type:"boolean"},description:`Used to force mounting the dialog (portal, overlay and content) when more control is needed. Useful when
 controlling animation with SolidJS animation libraries.`,table:{type:{summary:"bool"}}},id:{control:{type:"text"},description:`A unique identifier for the component. The id is used to generate id attributes for nested components.
 If no id prop is provided, a generated id will be used.`,table:{type:{summary:"string"}}},modal:{control:{type:"boolean"},description:`Whether the dialog should be the only visible content for screen readers.
 When \`true\`:
 * interaction with outside elements will be disabled.
 * scroll will be locked
 * focus will be locked inside the dialog content
 * elements outside the dialog content will not be visible for screen readers`,table:{type:{summary:"bool"}}},onOpenChange:{control:{type:!1},description:"Event handler called when the open state of the dialog changes.",table:{type:{summary:"function"}}},open:{control:{type:"boolean"},description:"The controlled open state of the dialog",table:{type:{summary:"bool"}}},preventScroll:{control:{type:"boolean"},description:"Whether the scroll should be locked even if the alert dialog is not modal.",table:{type:{summary:"bool"}}}},render:n=>e(r,d(n,{"bool:n$":!1,get children(){return[e(l,{children:"Click me"}),e(i,{get children(){return[e(a,{children:"Alert dialog title"}),e(s,{children:"Alert dialog description"})]}})]}})),component:r},t={args:{}},o={render:n=>e(r,{get children(){return[e(l,{as:c=>e(p,d(c,{"on:n$":!1,variant:"secondary"})),children:"Click me"}),e(i,{get children(){return[e(a,{children:"Alert dialog title"}),e(s,{children:"Alert dialog description"})]}})]}})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["Default","AsButton"],f=Object.freeze(Object.defineProperty({__proto__:null,AsButton:o,Default:t,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{f as A,t as D,o as a};
