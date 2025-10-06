import{c as e,m,t as p,i as v}from"./iframe-Ss2HFUgg.js";import{h as s,N as u,b as c,c as d,d as g,e as t,f as o,g as l}from"./NavigationMenu-B9p45DOO.js";import{I as f}from"./Icon-DzzAe45T.js";var h=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],N=n=>e(f,m(n,{iconNode:h,name:"activity"})),M=N,b=p('<div class="flex flex-col items-center space-y-4">');const{fn:y}=__STORYBOOK_MODULE_TEST__,w={args:{onValueChange:y()},argTypes:{defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onValueChange:{control:{type:!1},table:{type:{summary:"function"}}},loop:{control:{type:"boolean"},table:{type:{summary:"bool"}}},delayDuration:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},skipDelayDuration:{control:{type:"boolean"},table:{type:{summary:"bool"}}},focusOnAlt:{control:{type:"boolean"},table:{type:{summary:"bool"}}},forceMount:{control:{type:"boolean"},table:{type:{summary:"bool"}}},gutter:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}}},decorators:[n=>(()=>{var a=b();return v(a,n),a})()],render:n=>e(s,m(n,{"bool:n$":!1,get children(){return e(u,{get children(){return[e(c,{get children(){return["Item One",e(d,{})]}}),e(g,{get children(){return e(t,{children:"Link"})}})]}})}})),component:s},r={args:{}},i={render:n=>e(s,{get children(){return[e(u,{get children(){return[e(c,{get children(){return["Getting Started",e(d,{})]}}),e(g,{class:"grid w-[90vw] grid-rows-3 gap-3 sm:w-[500px] sm:grid-cols-2 md:w-[500px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] [&>li:first-child]:row-span-3",onPointerLeave:a=>{a.preventDefault()},get children(){return[e(t,{class:"box-border flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline focus:shadow-md",closeOnSelect:!1,get children(){return[e(M,{class:"size-6"}),e(o,{class:"mb-2 mt-4 text-lg font-medium",children:"SolidUI"}),e(l,{class:"text-sm leading-tight text-muted-foreground",children:"Beautifully designed components. Built with Kobalte & Corvu. Styled with Tailwind CSS"})]}}),e(t,{href:"/docs",closeOnSelect:!1,get children(){return[e(o,{children:"Introduction"}),e(l,{children:"Re-usable components. Built with Kobalte & Corvu. Styled with Tailwind CSS"})]}}),e(t,{href:"/docs/installation",get children(){return[e(o,{children:"Installation"}),e(l,{children:"How to install dependencies and structure your app."})]}})]}})]}}),e(u,{get children(){return[e(c,{get children(){return["Overview",e(d,{})]}}),e(g,{class:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",get children(){return e(t,{href:"https://kobalte.dev/docs/core",get children(){return[e(o,{children:"Introduction"}),e(l,{children:"Build high quality"})]}})}})]}})]}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <NavigationMenu>\r
            <NavigationMenuItem>\r
                <NavigationMenuTrigger>\r
                    Getting Started\r
                    <NavigationMenuIcon />\r
                </NavigationMenuTrigger>\r
                <NavigationMenuContent class="grid w-[90vw] grid-rows-3 gap-3 sm:w-[500px] sm:grid-cols-2 md:w-[500px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] [&>li:first-child]:row-span-3" onPointerLeave={e => {
        e.preventDefault();
      }}>\r
                    <NavigationMenuLink class="box-border flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline focus:shadow-md" closeOnSelect={false}>\r
                        <Activity class="size-6" />\r
                        <NavigationMenuLabel class="mb-2 mt-4 text-lg font-medium">\r
                            SolidUI\r
                        </NavigationMenuLabel>\r
                        <NavigationMenuDescription class="text-sm leading-tight text-muted-foreground">\r
                            Beautifully designed components. Built with Kobalte & Corvu. Styled with Tailwind CSS\r
                        </NavigationMenuDescription>\r
                    </NavigationMenuLink>\r
                    <NavigationMenuLink href="/docs" closeOnSelect={false}>\r
                        <NavigationMenuLabel>\r
                            Introduction\r
                        </NavigationMenuLabel>\r
                        <NavigationMenuDescription>\r
                            Re-usable components. Built with Kobalte & Corvu. Styled with Tailwind CSS\r
                        </NavigationMenuDescription>\r
                    </NavigationMenuLink>\r
                    <NavigationMenuLink href="/docs/installation">\r
                        <NavigationMenuLabel>\r
                            Installation\r
                        </NavigationMenuLabel>\r
                        <NavigationMenuDescription>\r
                            How to install dependencies and structure your app.\r
                        </NavigationMenuDescription>\r
                    </NavigationMenuLink>\r
                </NavigationMenuContent>\r
            </NavigationMenuItem>\r
            <NavigationMenuItem>\r
                <NavigationMenuTrigger>\r
                    Overview\r
                    <NavigationMenuIcon />\r
                </NavigationMenuTrigger>\r
                <NavigationMenuContent class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">\r
                    <NavigationMenuLink href="https://kobalte.dev/docs/core">\r
                        <NavigationMenuLabel>\r
                            Introduction\r
                        </NavigationMenuLabel>\r
                        <NavigationMenuDescription>\r
                            Build high quality\r
                        </NavigationMenuDescription>\r
                    </NavigationMenuLink>\r
                </NavigationMenuContent>\r
            </NavigationMenuItem>\r
        </NavigationMenu>
}`,...i.parameters?.docs?.source}}};const x=["Default","SolidUI"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,SolidUI:i,__namedExportsOrder:x,default:w},Symbol.toStringTag,{value:"Module"}));export{r as D,D as N};
