import{s as i,t as s,q as d,m as u,c as n,i as p,F as _}from"./iframe-BLvaHOrW.js";import{d as C}from"./Option-B9lMbA8r.js";import{L as f}from"./Utils-BEjpZvS7.js";var v=s("<div data-slot=callout>"),A=s("<h3 data-slot=callout-title>"),R=s("<div data-slot=callout-content>");function S(e){const r=C(e,"default");return"rounded-md border-l-4 p-2 pl-4 "+(r==="success"?"border-success-foreground bg-success text-success-foreground":r==="warning"?"border-warning-foreground bg-warning text-warning-foreground":r==="error"?"border-error-foreground bg-error text-error-foreground":"border-info-foreground bg-info text-info-foreground")}function c(e){const[r,a]=i(e,["variant","class"]);return(()=>{var t=v();return d(t,u({get class(){return f([S(r.variant),r.class])}},a),!1,!1),t})()}function g(e){const[r,a]=i(e,["class"]);return(()=>{var t=A();return d(t,u({get class(){return f(["font-semibold",r.class])}},a),!1,!1),t})()}function m(e){const[r,a]=i(e,["class"]);return(()=>{var t=R();return d(t,u({get class(){return f(["mt-2",r.class])}},a),!1,!1),t})()}var b=s('<div class="max-w-md flex flex-col gap-4">');const T={args:{},argTypes:{variant:{control:{type:"radio"},description:"Component style",options:["success","warning","error","default"],table:{defaultValue:{summary:"Callout.Variant.Default"},type:{summary:"[<StringEnum>]"}}}},render:e=>n(c,u(e,{"bool:n$":!1,get children(){return[n(g,{children:"Callout title"}),n(m,{children:"Callout description"})]}})),component:c},o={args:{variant:"default"}},l={render:e=>(()=>{var r=b();return p(r,n(_,{each:["default","success","warning","error"],children:(a,t)=>n(c,{variant:a,get children(){return[n(g,{children:"Callout title"}),n(m,{children:a})]}})})),r})()};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const D=["Default","Variants"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Variants:l,__namedExportsOrder:D,default:T},Symbol.toStringTag,{value:"Module"}));export{h as C,o as D};
