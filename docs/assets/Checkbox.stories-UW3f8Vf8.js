import{t as p,i as t,c as a,m,a as k}from"./iframe-DHSEN8D7.js";import{C as d}from"./Checkbox-BtMIJhYF.js";import{L as i}from"./Label-BvFM7TJT.js";var h=p('<div class="flex flex-row place-items-center gap-2">'),f=p('<div class="grid gap-1.5 font-normal"><p class="text-sm leading-none font-medium">Enable notifications</p><p class="text-muted-foreground text-sm">You can enable or disable notifications at any time.');const{fn:x}=__STORYBOOK_MODULE_TEST__,y={args:{onChange:x()},argTypes:{checked:{control:{type:"boolean"},description:"The controlled checked state of the checkbox.",table:{type:{summary:"bool"}}},defaultChecked:{control:{type:"boolean"},description:"The default checked state when initially rendered. Useful when you do not need to control the checked state.",table:{type:{summary:"bool"}}},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled",table:{type:{summary:"bool"}}},indeterminate:{control:{type:"boolean"},description:"Whether the checkbox is in an indeterminate state.",table:{type:{summary:"bool"}}},name:{control:{type:"text"},description:"The name of the checkbox, used when submitting an HTML form.",table:{type:{summary:"string"}}},onChange:{control:{type:!1},description:"Event handler called when the checked state of the checkbox changes.",table:{type:{summary:"function"}}},readOnly:{control:{type:"boolean"},description:"Whether the checkbox can be checked but not changed by the user.",table:{type:{summary:"bool"}}},required:{control:{type:"boolean"},description:"Whether the user must check the checkbox before the owning form can be submitted.",table:{type:{summary:"bool"}}},validationState:{control:{type:"radio"},description:'Whether the checkbox should display its "valid" or "invalid" visual styling.',options:["invalid","valid"],table:{type:{summary:"[<StringEnum>]"}}},value:{control:{type:"text"},description:"The value of the checkbox, used when submitting an HTML form.",table:{type:{summary:"string"}}}},render:r=>(()=>{var e=h();return t(e,a(d,m(r,{"bool:n$":!1})),null),t(e,a(i,{children:"Checkbox Text"}),null),e})(),component:d},o={args:{disabled:!0}},n={args:{}},c={render:r=>(()=>{var e=h();return t(e,a(d,m({id:"checkbox1"},r,{"bool:n$":!1})),null),t(e,a(i,{for:"checkbox1-input",children:"Click me!"}),null),e})()},l={render:r=>{const e=k(!1),u=e[0];return(()=>{var b=h();return t(b,a(d,{id:"checkbox2",onChange:g=>{e[1](g)},get checked(){return u()},get validationState(){return u()?"invalid":"valid"}}),null),t(b,a(i,{for:"checkbox2-input",children:"Don't want to be checked!"}),null),b})()}},s={render:r=>(k(!1),a(i,{class:"hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[data-checked]]:border-blue-600 has-[[data-checked]]:bg-blue-50 dark:has-[[data-checked]]:border-blue-900 dark:has-[[data-checked]]:bg-blue-950",get children(){return[a(d,{id:"toggle-2",defaultChecked:!0,class:"data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-700"}),f()]}}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="flex flex-row place-items-center gap-2">\r
            <Checkbox id="checkbox1" {...PARTAS_RENDER_BUILDER} bool:n$={false} />\r
            <Label for="checkbox1-input">\r
                Click me!\r
            </Label>\r
        </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => {
    const patternInput = createSignal(false);
    const value_2 = patternInput[0];
    return <div class="flex flex-row place-items-center gap-2">\r
                <Checkbox id="checkbox2" onChange={value_3 => {
        patternInput[1](value_3);
      }} checked={value_2()} validationState={value_2() ? "invalid" : "valid"} />\r
                <Label for="checkbox2-input">\r
                    Don't want to be checked!\r
                </Label>\r
            </div>;
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_3 => {
    const patternInput_1 = createSignal(false);
    return <Label class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[data-checked]]:border-blue-600 has-[[data-checked]]:bg-blue-50 dark:has-[[data-checked]]:border-blue-900 dark:has-[[data-checked]]:bg-blue-950">\r
                <Checkbox id="toggle-2" defaultChecked={true} class="data-[checked]:border-blue-600 data-[checked]:bg-blue-600 data-[checked]:text-white dark:data-[checked]:border-blue-700 dark:data-[checked]:bg-blue-700" />\r
                <div class="grid gap-1.5 font-normal">\r
                    <p class="text-sm leading-none font-medium">\r
                        Enable notifications\r
                    </p>\r
                    <p class="text-muted-foreground text-sm">\r
                        You can enable or disable notifications at any time.\r
                    </p>\r
                </div>\r
            </Label>;
  }
}`,...s.parameters?.docs?.source}}};const _=["Disabled","Default","ConnectedLabel","Validation","CheckboxCard"],C=Object.freeze(Object.defineProperty({__proto__:null,CheckboxCard:s,ConnectedLabel:c,Default:n,Disabled:o,Validation:l,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{C,n as D,l as V,s as a,c as b};
