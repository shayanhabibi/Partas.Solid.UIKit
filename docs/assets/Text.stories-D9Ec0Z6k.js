import{T as r,a as y,b as p,d as g}from"./Text-SWQBqced.js";import{c as e,m as b,a as u}from"./iframe-BHVPMPJn.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,_={args:{onBlur:d(),onChange:d()},argTypes:{defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"bool"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},onBlur:{control:{type:!1},table:{type:{summary:"function"}}},onChange:{control:{type:!1},table:{type:{summary:"function"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"bool"}}},required:{control:{type:"boolean"},table:{type:{summary:"bool"}}},validationState:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}}},render:n=>e(r,b(n,{"bool:n$":!1,get children(){return e(p,{})}})),component:r},t={args:{}},a={render:n=>{const o=u(void 0),l=o[1],s=u(""),i=s[0];return e(r,{get validationState(){return o[0]()},get value(){return i()},onChange:c=>{(m=>{s[1](m),i()==="valid"?l("valid"):l("invalid")})(c)},get children(){return[e(y,{children:"Input"}),e(p,{placeholder:"Enter 'valid'"}),e(g,{children:"Input should be 'valid'"})]}})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => {
    const patternInput = createSignal(void 0);
    const setValidationStatus = patternInput[1];
    const patternInput_1 = createSignal("");
    const value_2 = patternInput_1[0];
    return <TextField validationState={patternInput[0]()} value={value_2()} onChange={arg => {
      (value_3 => {
        patternInput_1[1](value_3);
        if (value_2() === "valid") {
          setValidationStatus("valid");
        } else {
          setValidationStatus("invalid");
        }
      })(arg);
    }}>\r
                <TextFieldLabel>\r
                    Input\r
                </TextFieldLabel>\r
                <TextFieldInput placeholder="Enter 'valid'" />\r
                <TextFieldErrorMessage>\r
                    Input should be 'valid'\r
                </TextFieldErrorMessage>\r
            </TextField>;
  }
}`,...a.parameters?.docs?.source}}};const v=["Default","Validation"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Validation:a,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{t as D,x as T};
