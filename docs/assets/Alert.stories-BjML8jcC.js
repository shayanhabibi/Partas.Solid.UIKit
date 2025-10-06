import{c as t,m as s,s as p,t as g,q as v}from"./iframe-BLvaHOrW.js";import{d as S}from"./Option-B9lMbA8r.js";import{P as R}from"./FLVHQV4A-ByRBKILc.js";import{_ as b}from"./5WXHJDCZ-DghNgBBa.js";import{L as m}from"./Utils-BEjpZvS7.js";import{S as x}from"./Spinner-ClmF4B0A.js";var y={};b(y,{Alert:()=>D,Root:()=>f});function f(r){return t(R,s({as:"div",role:"alert"},r))}var D=f,T=g("<div data-slot=alert-title>"),h=g("<div data-slot=alert-description>");function P(r){const e=S(r,"default");return"relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current "+(e==="destructive"?"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90":e==="success"?"border-success-foreground/30 text-success-foreground dark:border-success-foreground [&>svg]:text-current bg-success/20":"bg-card text-card-foreground")}function u(r){const[e,a]=p(r,["variant","class"]);return t(f,s({get class(){return m([P(e.variant),e.class])},"data-slot":"alert"},a,{"bool:n$":!1}))}function A(r){const[e,a]=p(r,["class"]);return(()=>{var n=T();return v(n,s({get class(){return m(["col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",e.class])}},a),!1,!1),n})()}function _(r){const[e,a]=p(r,["class"]);return(()=>{var n=h();return v(n,s({get class(){return m(["text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",e.class])}},a),!1,!1),n})()}var L=g("<br>");const E={args:{},argTypes:{variant:{control:{type:"radio"},description:"Style variant of the alert.",options:["success","destructive","default"],table:{defaultValue:{summary:"Alert.Variant.Default"},type:{summary:"[<StringEnum>]"}}}},render:r=>t(u,s(r,{"bool:n$":!1,get children(){return[t(A,{children:"Title"}),t(_,{children:"Alert description"})]}})),component:u},o={args:{variant:"default"}},c={args:{variant:"default"}},l={args:{variant:"destructive"}},i={args:{variant:"success"}},d={render:r=>t(u,s(r,{"bool:n$":!1,get children(){return[t(x,{}),t(A,{children:"Loading"}),t(_,{get children(){return["Working on something good",L(),"We'll let you know when it's done!"]}})]}}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <Alert {...PARTAS_RENDER_BUILDER} bool:n$={false}>\r
            <Spinner />\r
            <AlertTitle>\r
                Loading\r
            </AlertTitle>\r
            <AlertDescription>\r
                Working on something good\r
                <br />\r
                We'll let you know when it's done!\r
            </AlertDescription>\r
        </Alert>
}`,...d.parameters?.docs?.source}}};const $=["Primary","Default","Destructive","Success","Loading"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Destructive:l,Loading:d,Primary:o,Success:i,__namedExportsOrder:$,default:E},Symbol.toStringTag,{value:"Module"}));export{H as A};
