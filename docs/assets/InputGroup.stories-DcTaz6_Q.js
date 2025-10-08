import{c as e,m as G,ac as K,ad as X,i as c,ae as Z,q as ee,s as re,t as T,a as j,d as ne}from"./iframe-DHSEN8D7.js";import{c as s,b as m,I as o,a as I,d as _,e as V}from"./InputGroup-BfwLSD-G.js";import{b as h}from"./Text-nkWEn69A.js";import{s as W}from"./search-DRe7ScFO.js";import{m as te}from"./mail-DI84t236.js";import{c as le,a as H}from"./circle-question-mark-doJ2-4MF.js";import{I as $}from"./Icon-By-Qgdq5.js";import{c as oe}from"./check-B6yQMYMS.js";import{P as ae,a as ue,b as ie}from"./Popover-CB59b4Rz.js";import{T as O,a as z,b as N}from"./Tooltip-BEV_7GtL.js";import{r as pe}from"./refresh-ccw-HYpN1e5R.js";import{S as F}from"./Spinner-CE2O51dA.js";var se=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],de=l=>e($,G(l,{iconNode:se,name:"star"})),q=de,ce=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],he=l=>e($,G(l,{iconNode:ce,name:"info"})),U=he,ge=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],me=l=>e($,G(l,{iconNode:ge,name:"copy"})),J=me,fe=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],Ie=l=>e($,G(l,{iconNode:fe,name:"corner-down-left"})),xe=Ie;/**
 * @license @tabler/icons-solidjs v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}},D=Symbol("hyper-element");function _e(l){function n(){let r=[].slice.call(arguments),a,f=[],A=!1;for(;Array.isArray(r[0]);)r=r[0];r[0][D]&&r.unshift(n.Fragment),typeof r[0]=="string"&&B(r);const d=()=>{for(;r.length;)L(r.shift());return a instanceof Element&&f.length&&a.classList.add(...f),a};return d[D]=!0,d;function L(t){const p=typeof t;if(t!=null){if(p==="string")a?a.appendChild(document.createTextNode(t)):P(t);else if(p==="number"||p==="boolean"||p==="bigint"||p==="symbol"||t instanceof Date||t instanceof RegExp)a.appendChild(document.createTextNode(t.toString()));else if(Array.isArray(t))for(let u=0;u<t.length;u++)L(t[u]);else if(t instanceof Element)l.insert(a,t,A?null:void 0);else if(p==="object"){let u=!1;const i=Object.getOwnPropertyDescriptors(t);for(const g in i){if(g==="class"&&f.length!==0){const x=f.join(" "),v=typeof i.class.value=="function"?()=>x+" "+i.class.value():x+" "+t.class;Object.defineProperty(t,"class",{...i[g],value:v}),f=[]}g!=="ref"&&g.slice(0,2)!=="on"&&typeof i[g].value=="function"?(l.dynamicProperty(t,g),u=!0):i[g].get&&(u=!0)}u?l.spread(a,t,a instanceof SVGElement,!!r.length):l.assign(a,t,a instanceof SVGElement,!!r.length)}else if(p==="function")if(a){for(;t[D];)t=t();l.insert(a,t,A?null:void 0)}else{let u,i=r[0];(i==null||typeof i=="object"&&!Array.isArray(i)&&!(i instanceof Element))&&(u=r.shift()),u||(u={}),r.length&&(u.children=r.length>1?r:r[0]);const g=Object.getOwnPropertyDescriptors(u);for(const x in g)if(Array.isArray(g[x].value)){const v=g[x].value;u[x]=()=>{for(let S=0;S<v.length;S++)for(;v[S][D];)v[S]=v[S]();return v},l.dynamicProperty(u,x)}else typeof g[x].value=="function"&&!g[x].value.length&&l.dynamicProperty(u,x);a=l.createComponent(t,u),r=[]}}}function P(t){const p=t.split(/([\.#]?[^\s#.]+)/);/^\.|#/.test(p[1])&&(a=document.createElement("div"));for(let u=0;u<p.length;u++){const i=p[u],g=i.substring(1,i.length);i&&(a?i[0]==="."?f.push(g):i[0]==="#"&&a.setAttribute("id",g):a=l.SVGElements.has(i)?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i))}}function B(t){for(let p=1;p<t.length;p++)if(typeof t[p]=="function"){A=!0;return}else Array.isArray(t[p])&&B(t[p])}}return n.Fragment=r=>r.children,n}const Y=_e({spread:ee,assign:Z,insert:c,createComponent:e,dynamicProperty:X,SVGElements:K});/**
 * @license @tabler/icons-solidjs v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=(l,n,r,a)=>{const f=A=>{const[d,L]=re(A,["color","size","stroke","title","children","class"]),P=Ge[l],B={...P,width:()=>d.size!=null?d.size:P.width,height:()=>d.size!=null?d.size:P.height,title:()=>d.title!=null?d.title:void 0,stroke:()=>d.color!=null?d.color:"currentColor","stroke-width":()=>d.stroke!=null?d.stroke:P["stroke-width"],class:()=>`tabler-icon tabler-icon-${n} ${d.class!=null?d.class:""}`};return Y("svg",[B,L],[d.title&&Y("title",{},d.title),...a.map(([t,p])=>Y(t,p)),d.children])};return f.displayName=`${r}`,f};/**
 * @license @tabler/icons-solidjs v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ae=Te("outline","brand-javascript","BrandJavascript",[["path",{d:"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"}],["path",{d:"M7.5 8h3v8l-2 -1"}],["path",{d:"M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"}]]),M=T('<div class="grid w-full max-w-sm gap-6">'),ve=T("<p class=font-medium>Your connection is not secure."),Pe=T("<p>You should not enter any sensitive information on this site."),Se=T("<p>Password must be at least 8 characters"),ye=T("<p>We'll use this to send you notifications"),Re=T("<p>Click for help with API keys"),Q=T('<div class="grid w-full max-w-sm gap-4">'),Ee=T('<div class="grid w-full max-w-md gap-4">');const be={args:{},argTypes:{},tags:["!autodocs"],component:s},y={render:l=>e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Search..."})}}),e(o,{get children(){return e(W,{})}}),e(o,{align:"inline-end",get children(){return e(I,{children:"Search"})}})]}})},R={render:l=>(()=>{var n=M();return c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Search..."})}}),e(o,{get children(){return e(W,{})}})]}}),null),c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{type:"email",placeholder:"Enter your email"})}}),e(o,{get children(){return e(te,{})}})]}}),null),c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Card number"})}}),e(o,{get children(){return e(le,{})}}),e(o,{align:"inline-end",get children(){return[e(q,{}),e(U,{})]}})]}}),null),n})()},E={render:l=>(()=>{var n=M();return c(n,e(s,{get children(){return[e(o,{get children(){return e(_,{children:"$"})}}),e(h,{class:"flex-1",get children(){return e(m,{placeholder:"0.00"})}}),e(o,{align:"inline-end",get children(){return e(_,{children:"USD"})}})]}}),null),c(n,e(s,{get children(){return[e(o,{get children(){return e(_,{children:"https://"})}}),e(h,{class:"flex-1",get children(){return e(m,{placeholder:"example.com",class:"!pl-0.5"})}}),e(o,{align:"inline-end",get children(){return e(_,{children:"@company.com"})}})]}}),null),c(n,e(h,{as:r=>e(s,G(r,{"on:n$":!1})),get children(){return[e(V,{placeholder:"Enter your message"}),e(o,{align:"block-end",get children(){return e(_,{class:"text-muted-foreground text-xs",children:"120 characters left"})}})]}}),null),n})()},b={render:l=>{const n=j(!1),r=j(!1);return(()=>{var a=M();return c(a,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"https://x.com/shadcn",readonly:!0})}}),e(o,{align:"inline-end",get children(){return e(I,{ariaLabel:"Copy",title:"Copy",size:"icon-extra-small",onClick:f=>{n[1](!0)},get children(){return ne(()=>!!n[0]())()?e(oe,{}):e(J,{})}})}})]}}),null),c(a,e(s,{class:"[--radius:9999px]",get children(){return[e(ae,{placement:"left-start",get children(){return[e(ue,{as:f=>e(o,G(f,{"on:n$":!1})),get children(){return e(I,{variant:"secondary",size:"icon-extra-small",get children(){return e(U,{})}})}}),e(ie,{class:"flex flex-col gap-1 rounded-xl text-sm",get children(){return[ve(),Pe()]}})]}}),e(o,{class:"text-muted-foreground pl-1.5",children:"https://"}),e(h,{class:"flex-1",get children(){return e(m,{id:"input-secure-19"})}}),e(o,{align:"inline-end",get children(){return e(I,{size:"icon-extra-small",onClick:f=>{r[1](A=>!A)},get children(){return e(q,{class:"data-[favorite=true]:fill-blue-600 data-[favourite=true]:stroke-blue-600",get"data-favorite"(){return r[0]()}})}})}})]}}),null),c(a,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Type to search..."})}}),e(o,{align:"inline-end",get children(){return e(I,{variant:"secondary",children:"Search"})}})]}}),null),a})()}},w={render:l=>(()=>{var n=Q();return c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Enter password",type:"password"})}}),e(o,{align:"inline-end",get children(){return e(O,{get children(){return[e(z,{as:r=>e(I,G(r,{"on:n$":!1,variant:"ghost",ariaLabel:"Info",size:"icon-extra-small"})),get children(){return e(U,{})}}),e(N,{get children(){return Se()}})]}})}})]}}),null),c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Your email address"})}}),e(o,{align:"inline-end",get children(){return e(O,{get children(){return[e(z,{as:r=>e(I,G(r,{"on:n$":!1,variant:"ghost",ariaLabel:"Help",size:"extra-small"})),get children(){return e(H,{})}}),e(N,{get children(){return ye()}})]}})}})]}}),null),c(n,e(s,{get children(){return[e(h,{class:"flex-1",get children(){return e(m,{placeholder:"Enter API key"})}}),e(O,{placement:"left",get children(){return[e(z,{as:r=>e(o,G(r,{"on:n$":!1})),get children(){return e(I,{variant:"ghost",ariaLabel:"Help",size:"icon-extra-small",get children(){return e(H,{})}})}}),e(N,{get children(){return Re()}})]}})]}}),null),n})()},C={render:l=>(()=>{var n=Ee();return c(n,e(h,{as:r=>e(s,G(r,{"on:n$":!1})),get children(){return[e(V,{placeholder:"System.Console.WriteLine('Hello, world!')",class:"min-h-[200px]"}),e(o,{class:"border-t",align:"block-end",get children(){return[e(_,{children:"Line 1, Column 1"}),e(I,{size:"small",class:"ml-auto",variant:"default",get children(){return["Run ",e(xe,{})]}})]}}),e(o,{align:"block-start",class:"border-b",get children(){return[e(_,{class:"font-mono font-medium",get children(){return[e(Ae,{}),"script.js"]}}),e(I,{class:"ml-auto",size:"icon-extra-small",get children(){return e(pe,{})}}),e(I,{variant:"ghost",size:"icon-extra-small",get children(){return e(J,{})}})]}})]}})),n})()},k={render:l=>(()=>{var n=Q();return c(n,e(s,{"data-disabled":!0,get children(){return[e(h,{class:"flex-1",disabled:!0,get children(){return e(m,{placeholder:"Searching..."})}}),e(o,{align:"inline-end",get children(){return e(F,{})}})]}}),null),c(n,e(s,{"data-disabled":!0,get children(){return[e(h,{class:"flex-1",disabled:!0,get children(){return e(m,{placeholder:"Processing..."})}}),e(o,{get children(){return e(F,{})}})]}}),null),c(n,e(s,{"data-disabled":!0,get children(){return[e(h,{class:"flex-1",disabled:!0,get children(){return e(m,{placeholder:"Saving changes..."})}}),e(o,{align:"inline-end",get children(){return[e(_,{children:"Saving..."}),e(F,{})]}})]}}),null),c(n,e(s,{"data-disabled":!0,get children(){return[e(h,{class:"flex-1",disabled:!0,get children(){return e(m,{placeholder:"Refreshing data..."})}}),e(o,{get children(){return e(F,{variant:"default"})}}),e(o,{align:"inline-end",get children(){return e(_,{class:"text-muted-foreground",children:"Please wait..."})}})]}}),null),n})()};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <InputGroup_1>\r
            <TextField class="flex-1">\r
                <InputGroupInput placeholder="Search..." />\r
            </TextField>\r
            <InputGroupAddon>\r
                <Search />\r
            </InputGroupAddon>\r
            <InputGroupAddon align="inline-end">\r
                <InputGroupButton>\r
                    Search\r
                </InputGroupButton>\r
            </InputGroupAddon>\r
        </InputGroup_1>
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => <div class="grid w-full max-w-sm gap-6">\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="Search..." />\r
                </TextField>\r
                <InputGroupAddon>\r
                    <Search />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput type="email" placeholder="Enter your email" />\r
                </TextField>\r
                <InputGroupAddon>\r
                    <Mail />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="Card number" />\r
                </TextField>\r
                <InputGroupAddon>\r
                    <CreditCard />\r
                </InputGroupAddon>\r
                <InputGroupAddon align="inline-end">\r
                    <Star />\r
                    <Info />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
        </div>
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_3 => <div class="grid w-full max-w-sm gap-6">\r
            <InputGroup_1>\r
                <InputGroupAddon>\r
                    <InputGroupText>\r
                        $\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="0.00" />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <InputGroupText>\r
                        USD\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1>\r
                <InputGroupAddon>\r
                    <InputGroupText>\r
                        https://\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="example.com" class="!pl-0.5" />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <InputGroupText>\r
                        @company.com\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <TextField as={PARTAS_POLYPROPS => <InputGroup_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                <InputGroupTextArea placeholder="Enter your message" />\r
                <InputGroupAddon align="block-end">\r
                    <InputGroupText class="text-muted-foreground text-xs">\r
                        120 characters left\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
            </TextField>\r
        </div>
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_4 => {
    const patternInput = createSignal(false);
    const patternInput_1 = createSignal(false);
    return <div class="grid w-full max-w-sm gap-6">\r
                <InputGroup_1>\r
                    <TextField class="flex-1">\r
                        <InputGroupInput placeholder="https://x.com/shadcn" readonly={true} />\r
                    </TextField>\r
                    <InputGroupAddon align="inline-end">\r
                        <InputGroupButton ariaLabel="Copy" title="Copy" size="icon-extra-small" onClick={_arg_1 => {
            patternInput[1](true);
          }}>\r
                            {patternInput[0]() ? <Check /> : <Copy />}\r
                        </InputGroupButton>\r
                    </InputGroupAddon>\r
                </InputGroup_1>\r
                <InputGroup_1 class="[--radius:9999px]">\r
                    <Popover placement="left-start">\r
                        <PopoverTrigger as={PARTAS_POLYPROPS => <InputGroupAddon {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                            <InputGroupButton variant="secondary" size="icon-extra-small">\r
                                <Info />\r
                            </InputGroupButton>\r
                        </PopoverTrigger>\r
                        <PopoverContent class="flex flex-col gap-1 rounded-xl text-sm">\r
                            <p class="font-medium">\r
                                Your connection is not secure.\r
                            </p>\r
                            <p>\r
                                You should not enter any sensitive information on this site.\r
                            </p>\r
                        </PopoverContent>\r
                    </Popover>\r
                    <InputGroupAddon class="text-muted-foreground pl-1.5">\r
                        https://\r
                    </InputGroupAddon>\r
                    <TextField class="flex-1">\r
                        <InputGroupInput id="input-secure-19" />\r
                    </TextField>\r
                    <InputGroupAddon align="inline-end">\r
                        <InputGroupButton size="icon-extra-small" onClick={_arg_1_1 => {
            patternInput_1[1](value_1_1 => !value_1_1);
          }}>\r
                            <Star class="data-[favorite=true]:fill-blue-600 data-[favourite=true]:stroke-blue-600" data-favorite={patternInput_1[0]()} />\r
                        </InputGroupButton>\r
                    </InputGroupAddon>\r
                </InputGroup_1>\r
                <InputGroup_1>\r
                    <TextField class="flex-1">\r
                        <InputGroupInput placeholder="Type to search..." />\r
                    </TextField>\r
                    <InputGroupAddon align="inline-end">\r
                        <InputGroupButton variant="secondary">\r
                            Search\r
                        </InputGroupButton>\r
                    </InputGroupAddon>\r
                </InputGroup_1>\r
            </div>;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_5 => <div class="grid w-full max-w-sm gap-4">\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="Enter password" type="password" />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <Tooltip>\r
                        <TooltipTrigger as={PARTAS_POLYPROPS => <InputGroupButton {...PARTAS_POLYPROPS} on:n$={false} variant="ghost" ariaLabel="Info" size="icon-extra-small" />}>\r
                            <Info />\r
                        </TooltipTrigger>\r
                        <TooltipContent>\r
                            <p>\r
                                Password must be at least 8 characters\r
                            </p>\r
                        </TooltipContent>\r
                    </Tooltip>\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="Your email address" />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <Tooltip>\r
                        <TooltipTrigger as={PARTAS_POLYPROPS => <InputGroupButton {...PARTAS_POLYPROPS} on:n$={false} variant="ghost" ariaLabel="Help" size="extra-small" />}>\r
                            <CircleQuestionMark />\r
                        </TooltipTrigger>\r
                        <TooltipContent>\r
                            <p>\r
                                We'll use this to send you notifications\r
                            </p>\r
                        </TooltipContent>\r
                    </Tooltip>\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1>\r
                <TextField class="flex-1">\r
                    <InputGroupInput placeholder="Enter API key" />\r
                </TextField>\r
                <Tooltip placement="left">\r
                    <TooltipTrigger as={PARTAS_POLYPROPS => <InputGroupAddon {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                        <InputGroupButton variant="ghost" ariaLabel="Help" size="icon-extra-small">\r
                            <CircleQuestionMark />\r
                        </InputGroupButton>\r
                    </TooltipTrigger>\r
                    <TooltipContent>\r
                        <p>\r
                            Click for help with API keys\r
                        </p>\r
                    </TooltipContent>\r
                </Tooltip>\r
            </InputGroup_1>\r
        </div>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_6 => <div class="grid w-full max-w-md gap-4">\r
            <TextField as={PARTAS_POLYPROPS => <InputGroup_1 {...PARTAS_POLYPROPS} on:n$={false} />}>\r
                <InputGroupTextArea placeholder="System.Console.WriteLine('Hello, world!')" class="min-h-[200px]" />\r
                <InputGroupAddon class="border-t" align="block-end">\r
                    <InputGroupText>\r
                        Line 1, Column 1\r
                    </InputGroupText>\r
                    <InputGroupButton size="small" class="ml-auto" variant="default">\r
                        Run \r
                        <CornerDownLeft />\r
                    </InputGroupButton>\r
                </InputGroupAddon>\r
                <InputGroupAddon align="block-start" class="border-b">\r
                    <InputGroupText class="font-mono font-medium">\r
                        <IconBrandJavascript />\r
                        script.js\r
                    </InputGroupText>\r
                    <InputGroupButton class="ml-auto" size="icon-extra-small">\r
                        <RefreshCcw />\r
                    </InputGroupButton>\r
                    <InputGroupButton variant="ghost" size="icon-extra-small">\r
                        <Copy />\r
                    </InputGroupButton>\r
                </InputGroupAddon>\r
            </TextField>\r
        </div>
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_7 => <div class="grid w-full max-w-sm gap-4">\r
            <InputGroup_1 data-disabled={true}>\r
                <TextField class="flex-1" disabled={true}>\r
                    <InputGroupInput placeholder="Searching..." />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <Spinner />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1 data-disabled={true}>\r
                <TextField class="flex-1" disabled={true}>\r
                    <InputGroupInput placeholder="Processing..." />\r
                </TextField>\r
                <InputGroupAddon>\r
                    <Spinner />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1 data-disabled={true}>\r
                <TextField class="flex-1" disabled={true}>\r
                    <InputGroupInput placeholder="Saving changes..." />\r
                </TextField>\r
                <InputGroupAddon align="inline-end">\r
                    <InputGroupText>\r
                        Saving...\r
                    </InputGroupText>\r
                    <Spinner />\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
            <InputGroup_1 data-disabled={true}>\r
                <TextField class="flex-1" disabled={true}>\r
                    <InputGroupInput placeholder="Refreshing data..." />\r
                </TextField>\r
                <InputGroupAddon>\r
                    <Spinner variant="default" />\r
                </InputGroupAddon>\r
                <InputGroupAddon align="inline-end">\r
                    <InputGroupText class="text-muted-foreground">\r
                        Please wait...\r
                    </InputGroupText>\r
                </InputGroupAddon>\r
            </InputGroup_1>\r
        </div>
}`,...k.parameters?.docs?.source}}};const we=["Example","IconExample","TextExample","ButtonExample","TooltipExample","TextAreaExample","SpinnerExample"],Me=Object.freeze(Object.defineProperty({__proto__:null,ButtonExample:b,Example:y,IconExample:R,SpinnerExample:k,TextAreaExample:C,TextExample:E,TooltipExample:w,__namedExportsOrder:we,default:be},Symbol.toStringTag,{value:"Module"}));export{Me as S};
