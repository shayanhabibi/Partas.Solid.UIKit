import{t as A,i as o,c as e,m as d}from"./iframe-DHSEN8D7.js";import{a as n,b as m,c as l,d as a,e as D,f as y,g as p,h as w,F as O}from"./Field-BueAk--A.js";import{R as C,a as x}from"./RadioGroup-CSYlL7Q4.js";import{c as $,d as I,a as Y,b as z,S as G}from"./Switch-DYPQRrop.js";import{C as h}from"./Checkbox-BtMIJhYF.js";import{b as u,c as v,T,a as V}from"./Text-nkWEn69A.js";import{S as U,a as N,b as B,c as M,d as j,e as k}from"./Slider-BEihyFjD.js";import{S as H,a as K,b as q,c as W,d as J}from"./Select-DMBgPApH.js";var c=A('<div class="w-full max-w-md">'),Q=A('<div class="grid grid-cols-2 gap-4">'),X=A('<div class="w-full max-w-md space-y-6">'),Z=A("<span>Choose department"),ee=A("<span>");const re={args:{},argTypes:{orientation:{control:{type:"text"},table:{type:{summary:"string"}}}},tags:["!autodocs"],component:n},f={render:s=>(()=>{var r=c();return o(r,e(p,{get children(){return e(m,{get children(){return[e(l,{for:"compute-environment-p8w",children:"Compute Environment"}),e(a,{children:"Select the compute environment for your cluster."}),e(C,{defaultValue:"kubernetes",get children(){return[e(l,{for:"kubernetes-input",get children(){return e(n,{orientation:"horizontal",get children(){return[e(D,{get children(){return[e(y,{children:"Kubernetes"}),e(a,{children:"Run GPU workloads on a K8s configured cluster."})]}}),e(x,{id:"kubernetes",value:"kubernetes"})]}})}}),e(l,{for:"vm-input",get children(){return e(n,{orientation:"horizontal",get children(){return[e(D,{get children(){return[e(y,{children:"Virtual Machine"}),e(a,{children:"Access a VM configured cluster to run GPU workloads."})]}}),e(x,{id:"vm",value:"vm"})]}})}})]}})]}})}})),r})()},F={render:s=>(()=>{var r=c();return o(r,e(G,{as:t=>e(n,d(t,{"on:n$":!1,orientation:"horizontal"})),get children(){return[e(D,{get children(){return[e($,{as:t=>e(l,d(t,{"on:n$":!1})),children:"Multi-factor authentication"}),e(I,{as:t=>e(a,d(t,{"on:n$":!1})),children:"Enable multi-factor authentication. If you do not have a two factor device, you can use a one-time code sent to your email."})]}}),e(Y,{get children(){return e(z,{})}})]}})),r})()},S={render:s=>(()=>{var r=c();return o(r,e(m,{get children(){return[e(l,{children:"Subscription Plan"}),e(a,{children:"Yearly and lifetime plans offer significant savings."}),e(C,{defaultValue:"monthly",get children(){return[e(n,{orientation:"horizontal",get children(){return[e(x,{value:"monthly",id:"plan-monthly"}),e(l,{for:"plan-monthly-input",class:"font-normal",children:"Monthly ($9.99/month)"})]}}),e(n,{orientation:"horizontal",get children(){return[e(x,{value:"yearly",id:"plan-yearly"}),e(l,{for:"plan-yearly-input",class:"font-normal",children:"Yearly ($99.99/month)"})]}}),e(n,{orientation:"horizontal",get children(){return[e(x,{value:"lifetime",id:"plan-lifetime"}),e(l,{for:"plan-lifetime-input",class:"font-normal",children:"Lifetime ($299.99/month)"})]}})]}})]}})),r})()},R={render:s=>(()=>{var r=c();return o(r,e(p,{get children(){return[e(m,{get children(){return[e(w,{variant:"label",children:"Show these items on the desktop"}),e(a,{children:"Select the items you want to show on the desktop."}),e(p,{class:"gap-3",get children(){return[e(n,{orientation:"horizontal",get children(){return[e(h,{id:"finder-pref-9k2-hard-disks-ljj",defaultChecked:!0}),e(l,{for:"finder-pref-9k2-hard-disks-ljj-input",class:"font-normal",children:"Hard Disks"})]}}),e(n,{orientation:"horizontal",get children(){return[e(h,{id:"finder-pref-9k2-external-disks-1yg",defaultChecked:!1}),e(l,{for:"finder-pref-9k2-external-disks-1yg-input",class:"font-normal",children:"External Disks"})]}}),e(n,{orientation:"horizontal",get children(){return[e(h,{id:"finder-pref-9l2-cds-dvds-fzt",defaultChecked:!1}),e(l,{for:"finder-pref-9l2-cds-dvds-fzt-input",class:"font-normal",children:"CDs, DVDs, and iPods"})]}}),e(n,{orientation:"horizontal",get children(){return[e(h,{id:"finder-pref-9k2-connected-servers-6l2",defaultChecked:!1}),e(l,{for:"finder-pref-9k2-connected-servers-6l2-input",class:"font-normal",children:"Connected Servers"})]}})]}})]}}),e(O,{}),e(n,{orientation:"horizontal",get children(){return[e(h,{id:"finder-pref-9l2-sync-folders-nep",defaultChecked:!0}),e(D,{get children(){return[e(l,{for:"finder-pref-9l2-sync-folders-nep-input",children:"Sync Desktop & Documents folders"}),e(a,{children:"Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices."})]}})]}})]}})),r})()},_={render:s=>(()=>{var r=X();return o(r,e(m,{get children(){return[e(w,{children:"Address Information"}),e(a,{children:"We need your address to deliver your order"}),e(p,{get children(){return[e(u,{as:t=>e(n,d(t,{"on:n$":!1})),get children(){return[e(v,{as:t=>e(l,d(t,{"on:n$":!1,for:"street"})),children:"Street Address"}),e(T,{id:"street",type:"text",placeholder:"123 Main St"})]}}),(()=>{var t=Q();return o(t,e(u,{as:i=>e(n,d(i,{"on:n$":!1})),get children(){return[e(v,{for:"city",as:i=>e(l,d(i,{"on:n$":!1})),children:"City"}),e(T,{id:"city",type:"text",placeholder:"New York"})]}}),null),o(t,e(u,{as:i=>e(n,d(i,{"on:n$":!1})),get children(){return[e(v,{for:"zip",as:i=>e(l,d(i,{"on:n$":!1})),children:"Postal Code"}),e(T,{type:"text",placeholder:"90502"})]}}),null),t})()]}})]}})),r})()},g={render:s=>(()=>{var r=c();return o(r,e(n,{get children(){return e(U,{maxValue:1e3,minValue:0,step:10,defaultValue:[200,400],as:t=>e(n,d(t,{"on:n$":!1})),get children(){return[e(N,{as:t=>e(y,d(t,{"on:n$":!1})),children:"Price Range"}),e(a,{class:"flex",get children(){return["Set your budget range $",e(B,{})]}}),e(M,{class:"mt-2 w-full",get children(){return[e(j,{}),e(k,{}),e(k,{})]}})]}})}})),r})()},P={render:s=>{const r=[["engineering","Engineering"],["design","Design"],["marketing","Marketing"],["sales","Sales"],["support","Customer Support"],["hr","Human Resources"],["finance","Finance"],["operations","Operations"]];return(()=>{var t=c();return o(t,e(n,{get children(){return[e(l,{children:"Department"}),e(H,{options:r,get placeholder(){return Z()},optionTextValue:i=>i[1],optionValue:i=>i[0],itemComponent:i=>e(J,{get item(){return i.item},get children(){return i.item.textValue}}),get children(){return[e(K,{get children(){return e(q,{children:i=>(()=>{var E=ee();return o(E,()=>i.selectedOption()[1]),E})()})}}),e(W,{})]}}),e(a,{children:"Select your department or area of work."})]}})),t})()}},b={render:s=>(()=>{var r=c();return o(r,e(m,{get children(){return e(p,{get children(){return e(n,{get children(){return[e(l,{for:"feedback",children:"Feedback"}),e(u,{get children(){return[e(V,{id:"feedback",placeholder:"You feedback helps us improve...",rows:4}),e(a,{children:"Share your thoughts about our service"})]}})]}})}})}})),r})()},L={render:s=>(()=>{var r=c();return o(r,e(m,{get children(){return e(p,{get children(){return[e(n,{get children(){return[e(l,{for:"username",children:"Username"}),e(u,{get children(){return e(T,{id:"username",type:"text",placeholder:"Max Leiter"})}}),e(a,{children:"Choose a unique username for your account."})]}}),e(n,{get children(){return[e(l,{for:"password",children:"Password"}),e(a,{children:"Must be at least 8 characters long."}),e(u,{get children(){return e(T,{id:"password",type:"password",placeholder:"********"})}})]}})]}})}})),r})()};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_9 => <div class="w-full max-w-md">\r
            <FieldGroup>\r
                <FieldSet>\r
                    <FieldLabel for="compute-environment-p8w">\r
                        Compute Environment\r
                    </FieldLabel>\r
                    <FieldDescription>\r
                        Select the compute environment for your cluster.\r
                    </FieldDescription>\r
                    <RadioGroup defaultValue="kubernetes">\r
                        <FieldLabel for="kubernetes-input">\r
                            <Field_1 orientation="horizontal">\r
                                <FieldContent>\r
                                    <FieldTitle>\r
                                        Kubernetes\r
                                    </FieldTitle>\r
                                    <FieldDescription>\r
                                        Run GPU workloads on a K8s configured cluster.\r
                                    </FieldDescription>\r
                                </FieldContent>\r
                                <RadioGroupItem id="kubernetes" value="kubernetes" />\r
                            </Field_1>\r
                        </FieldLabel>\r
                        <FieldLabel for="vm-input">\r
                            <Field_1 orientation="horizontal">\r
                                <FieldContent>\r
                                    <FieldTitle>\r
                                        Virtual Machine\r
                                    </FieldTitle>\r
                                    <FieldDescription>\r
                                        Access a VM configured cluster to run GPU workloads.\r
                                    </FieldDescription>\r
                                </FieldContent>\r
                                <RadioGroupItem id="vm" value="vm" />\r
                            </Field_1>\r
                        </FieldLabel>\r
                    </RadioGroup>\r
                </FieldSet>\r
            </FieldGroup>\r
        </div>
}`,...f.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_8 => <div class="w-full max-w-md">\r
            <Switch as={PARTAS_POLYPROPS => <Field_1 {...PARTAS_POLYPROPS} on:n$={false} orientation="horizontal" />}>\r
                <FieldContent>\r
                    <SwitchLabel as={PARTAS_POLYPROPS => <FieldLabel {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                        Multi-factor authentication\r
                    </SwitchLabel>\r
                    <SwitchDescription as={PARTAS_POLYPROPS => <FieldDescription {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                        Enable multi-factor authentication. If you do not have a two factor device, you can use a one-time code sent to your email.\r
                    </SwitchDescription>\r
                </FieldContent>\r
                <SwitchControl>\r
                    <SwitchThumb />\r
                </SwitchControl>\r
            </Switch>\r
        </div>
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_7 => <div class="w-full max-w-md">\r
            <FieldSet>\r
                <FieldLabel>\r
                    Subscription Plan\r
                </FieldLabel>\r
                <FieldDescription>\r
                    Yearly and lifetime plans offer significant savings.\r
                </FieldDescription>\r
                <RadioGroup defaultValue="monthly">\r
                    <Field_1 orientation="horizontal">\r
                        <RadioGroupItem value="monthly" id="plan-monthly" />\r
                        <FieldLabel for="plan-monthly-input" class="font-normal">\r
                            Monthly ($9.99/month)\r
                        </FieldLabel>\r
                    </Field_1>\r
                    <Field_1 orientation="horizontal">\r
                        <RadioGroupItem value="yearly" id="plan-yearly" />\r
                        <FieldLabel for="plan-yearly-input" class="font-normal">\r
                            Yearly ($99.99/month)\r
                        </FieldLabel>\r
                    </Field_1>\r
                    <Field_1 orientation="horizontal">\r
                        <RadioGroupItem value="lifetime" id="plan-lifetime" />\r
                        <FieldLabel for="plan-lifetime-input" class="font-normal">\r
                            Lifetime ($299.99/month)\r
                        </FieldLabel>\r
                    </Field_1>\r
                </RadioGroup>\r
            </FieldSet>\r
        </div>
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_6 => <div class="w-full max-w-md">\r
            <FieldGroup>\r
                <FieldSet>\r
                    <FieldLegend variant="label">\r
                        Show these items on the desktop\r
                    </FieldLegend>\r
                    <FieldDescription>\r
                        Select the items you want to show on the desktop.\r
                    </FieldDescription>\r
                    <FieldGroup class="gap-3">\r
                        <Field_1 orientation="horizontal">\r
                            <Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked={true} />\r
                            <FieldLabel for="finder-pref-9k2-hard-disks-ljj-input" class="font-normal">\r
                                Hard Disks\r
                            </FieldLabel>\r
                        </Field_1>\r
                        <Field_1 orientation="horizontal">\r
                            <Checkbox id="finder-pref-9k2-external-disks-1yg" defaultChecked={false} />\r
                            <FieldLabel for="finder-pref-9k2-external-disks-1yg-input" class="font-normal">\r
                                External Disks\r
                            </FieldLabel>\r
                        </Field_1>\r
                        <Field_1 orientation="horizontal">\r
                            <Checkbox id="finder-pref-9l2-cds-dvds-fzt" defaultChecked={false} />\r
                            <FieldLabel for="finder-pref-9l2-cds-dvds-fzt-input" class="font-normal">\r
                                CDs, DVDs, and iPods\r
                            </FieldLabel>\r
                        </Field_1>\r
                        <Field_1 orientation="horizontal">\r
                            <Checkbox id="finder-pref-9k2-connected-servers-6l2" defaultChecked={false} />\r
                            <FieldLabel for="finder-pref-9k2-connected-servers-6l2-input" class="font-normal">\r
                                Connected Servers\r
                            </FieldLabel>\r
                        </Field_1>\r
                    </FieldGroup>\r
                </FieldSet>\r
                <FieldSeparator />\r
                <Field_1 orientation="horizontal">\r
                    <Checkbox id="finder-pref-9l2-sync-folders-nep" defaultChecked={true} />\r
                    <FieldContent>\r
                        <FieldLabel for="finder-pref-9l2-sync-folders-nep-input">\r
                            Sync Desktop & Documents folders\r
                        </FieldLabel>\r
                        <FieldDescription>\r
                            Your Desktop & Documents folders are being synced with iCloud Drive.\r
                            You can access them from other devices.\r
                        </FieldDescription>\r
                    </FieldContent>\r
                </Field_1>\r
            </FieldGroup>\r
        </div>
}`,...R.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_5 => <div class="w-full max-w-md space-y-6">\r
            <FieldSet>\r
                <FieldLegend>\r
                    Address Information\r
                </FieldLegend>\r
                <FieldDescription>\r
                    We need your address to deliver your order\r
                </FieldDescription>\r
                <FieldGroup>\r
                    <TextField as={PARTAS_POLYPROPS => <Field_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                        <TextFieldLabel as={PARTAS_POLYPROPS => <FieldLabel {...PARTAS_POLYPROPS} on:n$={false} for="street" />}>\r
                            Street Address\r
                        </TextFieldLabel>\r
                        <TextFieldInput id="street" type="text" placeholder="123 Main St" />\r
                    </TextField>\r
                    <div class="grid grid-cols-2 gap-4">\r
                        <TextField as={PARTAS_POLYPROPS => <Field_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                            <TextFieldLabel for="city" as={PARTAS_POLYPROPS => <FieldLabel {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                                City\r
                            </TextFieldLabel>\r
                            <TextFieldInput id="city" type="text" placeholder="New York" />\r
                        </TextField>\r
                        <TextField as={PARTAS_POLYPROPS => <Field_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                            <TextFieldLabel for="zip" as={PARTAS_POLYPROPS => <FieldLabel {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                                Postal Code\r
                            </TextFieldLabel>\r
                            <TextFieldInput type="text" placeholder="90502" />\r
                        </TextField>\r
                    </div>\r
                </FieldGroup>\r
            </FieldSet>\r
        </div>
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_4 => <div class="w-full max-w-md">\r
            <Field_1>\r
                <Slider maxValue={1000} minValue={0} step={10} defaultValue={[200, 400]} as={PARTAS_POLYPROPS => <Field_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                    <SliderLabel as={PARTAS_POLYPROPS => <FieldTitle {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                        Price Range\r
                    </SliderLabel>\r
                    <FieldDescription class="flex">\r
                        Set your budget range $\r
                        <SliderValueLabel />\r
                    </FieldDescription>\r
                    <SliderControl class="mt-2 w-full">\r
                        <SliderTrack />\r
                        <SliderThumb />\r
                        <SliderThumb />\r
                    </SliderControl>\r
                </Slider>\r
            </Field_1>\r
        </div>
}`,...g.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_3 => {
    const items = [["engineering", "Engineering"], ["design", "Design"], ["marketing", "Marketing"], ["sales", "Sales"], ["support", "Customer Support"], ["hr", "Human Resources"], ["finance", "Finance"], ["operations", "Operations"]];
    return <div class="w-full max-w-md">\r
                <Field_1>\r
                    <FieldLabel>\r
                        Department\r
                    </FieldLabel>\r
                    <Select options={items} placeholder={<span>\r
                            Choose department\r
                        </span>} optionTextValue={tuple_1 => tuple_1[1]} optionValue={arg => arg[0]} itemComponent={props => <SelectItem item={props.item}>\r
                            {props.item.textValue}\r
                        </SelectItem>}>\r
                        <SelectTrigger>\r
                            <SelectValue>\r
                                {state => <span>\r
                                    {state.selectedOption()[1]}\r
                                </span>}\r
                            </SelectValue>\r
                        </SelectTrigger>\r
                        <SelectContent />\r
                    </Select>\r
                    <FieldDescription>\r
                        Select your department or area of work.\r
                    </FieldDescription>\r
                </Field_1>\r
            </div>;
  }
}`,...P.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => <div class="w-full max-w-md">\r
            <FieldSet>\r
                <FieldGroup>\r
                    <Field_1>\r
                        <FieldLabel for="feedback">\r
                            Feedback\r
                        </FieldLabel>\r
                        <TextField>\r
                            <TextFieldTextArea id="feedback" placeholder="You feedback helps us improve..." rows={4} />\r
                            <FieldDescription>\r
                                Share your thoughts about our service\r
                            </FieldDescription>\r
                        </TextField>\r
                    </Field_1>\r
                </FieldGroup>\r
            </FieldSet>\r
        </div>
}`,...b.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="w-full max-w-md">\r
            <FieldSet>\r
                <FieldGroup>\r
                    <Field_1>\r
                        <FieldLabel for="username">\r
                            Username\r
                        </FieldLabel>\r
                        <TextField>\r
                            <TextFieldInput id="username" type="text" placeholder="Max Leiter" />\r
                        </TextField>\r
                        <FieldDescription>\r
                            Choose a unique username for your account.\r
                        </FieldDescription>\r
                    </Field_1>\r
                    <Field_1>\r
                        <FieldLabel for="password">\r
                            Password\r
                        </FieldLabel>\r
                        <FieldDescription>\r
                            Must be at least 8 characters long.\r
                        </FieldDescription>\r
                        <TextField>\r
                            <TextFieldInput id="password" type="password" placeholder="********" />\r
                        </TextField>\r
                    </Field_1>\r
                </FieldGroup>\r
            </FieldSet>\r
        </div>
}`,...L.parameters?.docs?.source}}};const ne=["ChoiceCardExample","SwitchExample","RadioExample","CheckboxExample","FieldSetExample","SliderExample","SelectExample","TextAreaExample","InputExample"],ue=Object.freeze(Object.defineProperty({__proto__:null,CheckboxExample:R,ChoiceCardExample:f,FieldSetExample:_,InputExample:L,RadioExample:S,SelectExample:P,SliderExample:g,SwitchExample:F,TextAreaExample:b,__namedExportsOrder:ne,default:re},Symbol.toStringTag,{value:"Module"}));export{ue as S};
