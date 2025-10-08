import{c as r,m as g,d as _,t as f}from"./iframe-DHSEN8D7.js";import{d as a,E as c,a as u,b as m,e as t,c as d}from"./Empty-8w79TWEN.js";import{I as b}from"./Icon-By-Qgdq5.js";import{B as h}from"./Button-BnulhXAt.js";import{b as v}from"./bell-CFmUCAp-.js";import{r as A}from"./refresh-ccw-HYpN1e5R.js";import{A as R,a as D,b as S}from"./Avatar-BlWIAkQu.js";import{A as T}from"./AvatarStack-B3au3mLt.js";import{p as I}from"./plus-BFX-n6c_.js";import{c as B,b as C,I as E}from"./InputGroup-BfwLSD-G.js";import{b as N}from"./Text-nkWEn69A.js";import{s as M}from"./search-DRe7ScFO.js";import{K as k}from"./Kbd-D-w_mQ7U.js";import{S as x}from"./Utils-CzREY3kc.js";var H=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],U=e=>r(b,g(e,{iconNode:H,name:"cloud"})),w=U,G=f("<a href=#>Contact support");const P={args:{},argTypes:{},tags:["!autodocs"],component:a},n={args:{}},o={render:e=>r(a,{class:"border border-dashed",get children(){return[r(c,{get children(){return[r(u,{variant:"icon",get children(){return r(w,{})}}),r(m,{children:"Cloud Storage Empty"}),r(t,{children:"Upload files to your cload storage to access them anywhere."})]}}),r(d,{get children(){return r(h,{variant:"outline",size:"small",children:"Upload Files"})}})]}})},s={render:e=>r(a,{class:"from-muted/50 to-background h-full bg-gradient-to-b from-30%",get children(){return[r(c,{get children(){return[r(u,{variant:"icon",get children(){return r(v,{})}}),r(m,{children:"No Notifications"}),r(t,{children:"You're all caught up. New notifications will appear here."})]}}),r(d,{get children(){return r(h,{variant:"outline",size:"small",get children(){return[r(A,{}),"Refresh"]}})}})]}})},i={render:e=>r(a,{get children(){return[r(c,{get children(){return[r(u,{variant:"default",get children(){return r(R,{class:"size-12",get children(){return[r(D,{src:"https://github.com/shayanhabibi.png",class:"grayscale"}),r(S,{children:"SH"})]}})}}),r(m,{children:"User Offline"}),r(t,{children:"This user is currently offline. You can leave a message to notify them or try again later."})]}}),r(d,{get children(){return r(h,{size:"small",children:"Leave Message"})}})]}})},p={render:e=>{const y=[{initials:"SH",avatar:"https://github.com/shayanhabibi.png"},{initials:"AD",avatar:"https://github.com/disruptek.png"},{initials:"SG",avatar:"https://github.com/saem.png"}];return r(a,{get children(){return[r(c,{get children(){return[r(u,{get children(){return r(T,{items:y})}}),r(m,{children:"No Team Members"}),r(t,{children:"Invite your team to collaborate on this project."})]}}),r(d,{get children(){return r(h,{size:"small",get children(){return[r(I,{}),"Invite Members"]}})}})]}})}},l={render:e=>r(a,{get children(){return[r(c,{get children(){return[r(m,{children:"404 - Not Found"}),r(t,{children:"The page you're looking for doesn't exist. Try searching for what you need below."})]}}),r(d,{get children(){return[r(B,{class:"sm:w-3/4",get children(){return[r(N,{class:"flex-1",get children(){return r(C,{placeholder:"Try searching for pages..."})}}),r(E,{get children(){return r(M,{})}}),r(E,{align:"inline-end",get children(){return r(k,{children:"/"})}})]}}),r(t,{get children(){return["Need help?",_(()=>x()),G()]}})]}})]}})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <Empty_1 class="border border-dashed">\r
            <EmptyHeader>\r
                <EmptyMedia variant="icon">\r
                    <Cloud />\r
                </EmptyMedia>\r
                <EmptyTitle>\r
                    Cloud Storage Empty\r
                </EmptyTitle>\r
                <EmptyDescription>\r
                    Upload files to your cload storage to access them anywhere.\r
                </EmptyDescription>\r
            </EmptyHeader>\r
            <EmptyContent>\r
                <Button variant="outline" size="small">\r
                    Upload Files\r
                </Button>\r
            </EmptyContent>\r
        </Empty_1>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => <Empty_1 class="from-muted/50 to-background h-full bg-gradient-to-b from-30%">\r
            <EmptyHeader>\r
                <EmptyMedia variant="icon">\r
                    <Bell />\r
                </EmptyMedia>\r
                <EmptyTitle>\r
                    No Notifications\r
                </EmptyTitle>\r
                <EmptyDescription>\r
                    You're all caught up. New notifications will appear here.\r
                </EmptyDescription>\r
            </EmptyHeader>\r
            <EmptyContent>\r
                <Button variant="outline" size="small">\r
                    <RefreshCcw />\r
                    Refresh\r
                </Button>\r
            </EmptyContent>\r
        </Empty_1>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_3 => <Empty_1>\r
            <EmptyHeader>\r
                <EmptyMedia variant="default">\r
                    <Avatar class="size-12">\r
                        <AvatarImage src="https://github.com/shayanhabibi.png" class="grayscale" />\r
                        <AvatarFallback>\r
                            SH\r
                        </AvatarFallback>\r
                    </Avatar>\r
                </EmptyMedia>\r
                <EmptyTitle>\r
                    User Offline\r
                </EmptyTitle>\r
                <EmptyDescription>\r
                    This user is currently offline.\r
                    You can leave a message to notify them or try again later.\r
                </EmptyDescription>\r
            </EmptyHeader>\r
            <EmptyContent>\r
                <Button size="small">\r
                    Leave Message\r
                </Button>\r
            </EmptyContent>\r
        </Empty_1>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_4 => {
    const avatars = [{
      initials: "SH",
      avatar: "https://github.com/shayanhabibi.png"
    }, {
      initials: "AD",
      avatar: "https://github.com/disruptek.png"
    }, {
      initials: "SG",
      avatar: "https://github.com/saem.png"
    }];
    return <Empty_1>\r
                <EmptyHeader>\r
                    <EmptyMedia>\r
                        <AvatarStack items={avatars} />\r
                    </EmptyMedia>\r
                    <EmptyTitle>\r
                        No Team Members\r
                    </EmptyTitle>\r
                    <EmptyDescription>\r
                        Invite your team to collaborate on this project.\r
                    </EmptyDescription>\r
                </EmptyHeader>\r
                <EmptyContent>\r
                    <Button size="small">\r
                        <Plus />\r
                        Invite Members\r
                    </Button>\r
                </EmptyContent>\r
            </Empty_1>;
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_5 => <Empty_1>\r
            <EmptyHeader>\r
                <EmptyTitle>\r
                    404 - Not Found\r
                </EmptyTitle>\r
                <EmptyDescription>\r
                    The page you're looking for doesn't exist.\r
                    Try searching for what you need below.\r
                </EmptyDescription>\r
            </EmptyHeader>\r
            <EmptyContent>\r
                <InputGroup class="sm:w-3/4">\r
                    <TextField class="flex-1">\r
                        <InputGroupInput placeholder="Try searching for pages..." />\r
                    </TextField>\r
                    <InputGroupAddon>\r
                        <Search />\r
                    </InputGroupAddon>\r
                    <InputGroupAddon align="inline-end">\r
                        <Kbd>\r
                            /\r
                        </Kbd>\r
                    </InputGroupAddon>\r
                </InputGroup>\r
                <EmptyDescription>\r
                    Need help?\r
                    {System_Char__Char_get_empty_Static()}\r
                    <a href="#">\r
                        Contact support\r
                    </a>\r
                </EmptyDescription>\r
            </EmptyContent>\r
        </Empty_1>
}`,...l.parameters?.docs?.source}}};const L=["Default","Outline","Background","AvatarExample","AvatarStackExample","InputGroupExample"],rr=Object.freeze(Object.defineProperty({__proto__:null,AvatarExample:i,AvatarStackExample:p,Background:s,Default:n,InputGroupExample:l,Outline:o,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{i as A,s as B,rr as E,l as I,o as O,p as a};
