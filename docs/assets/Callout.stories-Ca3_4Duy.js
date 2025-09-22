import{s as c,t as i,p as d,m as l,c as n,i as _,F as C}from"./iframe-Clet01EE.js";import{d as v}from"./Option-BhX2R0kg.js";import{L as f}from"./Utils-cFOJcEDI.js";var g=i("<div>"),A=i("<h3>");function R(e){const r=v(e,"default");return"rounded-md border-l-4 p-2 pl-4 "+(r==="success"?"border-success-foreground bg-success text-success-foreground":r==="warning"?"border-warning-foreground bg-warning text-warning-foreground":r==="error"?"border-error-foreground bg-error text-error-foreground":"border-info-foreground bg-info text-info-foreground")}function u(e){const[r,a]=c(e,["variant","class"]);return(()=>{var t=g();return d(t,l({get class(){return f([R(r.variant),r.class])}},a),!1,!1),t})()}function m(e){const[r,a]=c(e,["class"]);return(()=>{var t=A();return d(t,l({get class(){return f(["font-semibold",r.class])}},a),!1,!1),t})()}function p(e){const[r,a]=c(e,["class"]);return(()=>{var t=g();return d(t,l({get class(){return f(["mt-2",r.class])}},a),!1,!1),t})()}var S=i('<div class="max-w-md flex flex-col gap-4">');const b={args:{},argTypes:{variant:{control:{type:"radio"},description:"Component style",options:["success","warning","error","default"],table:{defaultValue:{summary:"Callout.Variant.Default"},type:{summary:"[<StringEnum>]"}}}},render:e=>n(u,l(e,{"bool:n$":!1,get children(){return[n(m,{children:"Callout title"}),n(p,{children:"Callout description"})]}})),component:u},o={args:{variant:"default"}},s={render:e=>(()=>{var r=S();return _(r,n(C,{each:["default","success","warning","error"],children:(a,t)=>n(u,{variant:a,get children(){return[n(m,{children:"Callout title"}),n(p,{children:a})]}})})),r})()};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="max-w-md flex flex-col gap-4">\r
            <For each={["default", "success", "warning", "error"]}>\r
                {(variant, _arg_1) => <Callout variant={variant}>\r
                    <CalloutTitle>\r
                        Callout title\r
                    </CalloutTitle>\r
                    <CalloutContent>\r
                        {variant}\r
                    </CalloutContent>\r
                </Callout>}\r
            </For>\r
        </div>
}`,...s.parameters?.docs?.source}}};const T=["Default","Variants"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:s,__namedExportsOrder:T,default:b},Symbol.toStringTag,{value:"Module"}));export{P as C,o as D};
