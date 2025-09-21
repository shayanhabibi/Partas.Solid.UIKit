import{d as v}from"./Option-BhX2R0kg.js";import{s,c as a,m as o,d as c}from"./iframe-CxGoIJAb.js";import{a as x,T as _}from"./MKJEDDFV-BsBByKur.js";import{d as T,e as S}from"./ZZYKR3VO-BhF5XW0P.js";import{L as i}from"./Utils-C5KSfAah.js";import"./Util-E2-mHI_n.js";import"./preload-helper-PPVm8Dsz.js";import"./NGHEENNE-wo5LYtNh.js";import"./index-DQYZI0kA.js";import"./index-BmLeoKbC.js";import"./FN6EICGO-lOlungVQ.js";import"./FLVHQV4A-CBdIuREj.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Dg1yJhWd.js";import"./OYES4GOP-CkYGfI9k.js";import"./JNCCF6MP-4sxnBYeu.js";function g(e){const t=v(e,"label");return"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-disabled:opacity-70 group-disabled:cursor-not-allowed "+(t==="description"?"font-normal text-muted-foreground":t==="error"?"text-xs text-destructive":"data-[invalid]:text-destructive")}function d(e){const[t,r]=s(e,["class"]);return a(x,o({get class(){return i(["group flex flex-col gap-1",t.class])}},r,{"bool:n$":!1}))}function f(e){e=o({type:"text"},e);const[t,r]=s(e,["class","type"]);return a(_,o({get class(){return i([`flex h-10 w-full rounded-md border border-input\r
            bg-transparent px-3 py-2 text-sm ring-offset-background\r
            file:border-0 file:bg-transparent file:text-sm file:font-medium\r
            placeholder:text-muted-foreground focus-visible:outline-none\r
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2\r
            disabled:cursor-not-allowed disabled:opacity-50\r
            data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground`,t.class])},get type(){return t.type}},r,{"bool:n$":!1}))}function A(e){const[t,r]=s(e,["class"]);return a(T,o({get class(){return i([g("label"),t.class])}},r,{"bool:n$":!1}))}function R(e){const[t,r]=s(e,["class"]);return a(S,o({get class(){return i([g("error"),t.class])}},r,{"bool:n$":!1}))}const{fn:m}=__STORYBOOK_MODULE_TEST__,N={args:{onChange:m(),onBlur:m()},argTypes:{value:{control:{type:"text"},table:{type:{summary:"string"}}},defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},onChange:{control:{type:!1},table:{type:{summary:"function"}}},onBlur:{control:{type:!1},table:{type:{summary:"function"}}},name:{control:{type:"text"},table:{type:{summary:"string"}}},validationState:{control:{type:"text"},table:{type:{summary:"string"}}},required:{control:{type:"boolean"},table:{type:{summary:"bool"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"bool"}}},readOnly:{control:{type:"boolean"},table:{type:{summary:"bool"}}}},render:e=>a(d,o(e,{"bool:n$":!1,get children(){return a(f,{})}})),component:d},n={args:{}},l={render:e=>{const t=c(void 0),r=t[1],u=c(""),p=u[0];return a(d,{get validationState(){return t[0]()},get value(){return p()},onChange:b=>{(y=>{u[1](y),p()==="valid"?r("valid"):r("invalid")})(b)},get children(){return[a(A,{children:"Input"}),a(f,{placeholder:"Enter 'valid'"}),a(R,{children:"Input should be 'valid'"})]}})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const k=["Default","Validation"];export{n as Default,l as Validation,k as __namedExportsOrder,N as default};
