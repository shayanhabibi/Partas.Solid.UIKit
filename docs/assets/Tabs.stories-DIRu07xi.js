import{T as s,a as l,b as n,c as t,d as c,e as u}from"./Tabs-CS0Xunib.js";import{c as r,m as i}from"./iframe-BHVPMPJn.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,b={args:{onChange:d()},argTypes:{activationMode:{control:{type:"radio"},options:["manual","automatic"],table:{type:{summary:"[<StringEnum>]"}}},defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"bool"}}},onChange:{control:{type:!1},table:{type:{summary:"function"}}},orientation:{control:{type:"radio"},options:["vertical","horizontal"],table:{type:{summary:"[<StringEnum>]"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}}},render:o=>r(s,i(o,{"bool:n$":!1,get children(){return[r(l,{class:"grid w-full grid-cols-2",get children(){return[r(n,{value:"account",children:"Account"}),r(n,{value:"password",children:"Password"})]}}),r(t,{value:"account",children:"Account Tab"}),r(t,{value:"password",children:"Password tab"})]}})),component:s},a={args:{}},e={render:o=>r(s,i(o,{"bool:n$":!1,get children(){return[r(l,{class:"grid w-full grid-cols-2",get children(){return[r(c,{value:"account",children:"Account"}),r(c,{value:"password",children:"Password"}),r(u,{class:"bg-primary"})]}}),r(t,{value:"account",children:"Account Tab"}),r(t,{value:"password",children:"Password tab"})]}}))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <Tabs {...PARTAS_RENDER_BUILDER} bool:n$={false}>\r
            <TabsList class="grid w-full grid-cols-2">\r
                <Trigger value="account">\r
                    Account\r
                </Trigger>\r
                <Trigger value="password">\r
                    Password\r
                </Trigger>\r
                <TabsIndicator class="bg-primary" />\r
            </TabsList>\r
            <TabsContent value="account">\r
                Account Tab\r
            </TabsContent>\r
            <TabsContent value="password">\r
                Password tab\r
            </TabsContent>\r
        </Tabs>
}`,...e.parameters?.docs?.source}}};const p=["Default","Indicator"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Indicator:e,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{a as D,T};
