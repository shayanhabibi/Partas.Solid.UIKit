import{m as at,E as It,a as y,o as G,e as _,f as X,c as v,t as h,i as p,F as ut,n as i,l as I,r as St,S as H,j as U,G as Bt,w as A,d as ct,z as nt,H as xt,I as Ct,J as Pt,s as Ot}from"./iframe-CSkHCzVC.js";import{B as $t}from"./Button-CukqsTBC.js";var zt=h("<div class=sonner-loading-wrapper><div class=sonner-spinner>"),Ht=h("<div class=sonner-loading-bar>"),At=h('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"clip-rule=evenodd>'),_t=h('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"clip-rule=evenodd>'),Dt=h('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"clip-rule=evenodd>'),Rt=h('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 20 20"fill=currentColor height=20 width=20><path fill-rule=evenodd d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"clip-rule=evenodd>'),jt=h("<div class=sonner-loader>"),Mt=h('<button aria-label="Close toast"data-close-button><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),Lt=h("<li aria-atomic=true role=status tabindex=0 data-sonner-toast>"),Yt=h("<div data-icon>"),Nt=h("<div data-description>"),Ft=h("<div data-content><div data-title>"),Ut=h("<button data-button data-cancel>"),Wt=h("<button data-button>"),Kt=h("<section tabindex=-1>"),Vt=h("<ol tabindex=-1 data-sonner-toaster>");function Xt(t,{insertAt:e}={}){if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",e==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}Xt(`:where(html[dir=ltr]),
:where([data-sonner-toaster][dir=ltr]) {
  --toast-icon-margin-start: -3px;
  --toast-icon-margin-end: 4px;
  --toast-svg-margin-start: -1px;
  --toast-svg-margin-end: 0px;
  --toast-button-margin-start: auto;
  --toast-button-margin-end: 0;
  --toast-close-button-start: 0;
  --toast-close-button-end: unset;
  --toast-close-button-transform: translate(-35%, -35%);
}
:where(html[dir=rtl]),
:where([data-sonner-toaster][dir=rtl]) {
  --toast-icon-margin-start: 4px;
  --toast-icon-margin-end: -3px;
  --toast-svg-margin-start: 0px;
  --toast-svg-margin-end: -1px;
  --toast-button-margin-start: 0;
  --toast-button-margin-end: auto;
  --toast-close-button-start: unset;
  --toast-close-button-end: 0;
  --toast-close-button-transform: translate(35%, -35%);
}
:where([data-sonner-toaster]) {
  position: fixed;
  width: var(--width);
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 8px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  z-index: 999999999;
}
:where([data-sonner-toaster][data-x-position=right]) {
  right: max(var(--offset), env(safe-area-inset-right));
}
:where([data-sonner-toaster][data-x-position=left]) {
  left: max(var(--offset), env(safe-area-inset-left));
}
:where([data-sonner-toaster][data-x-position=center]) {
  left: 50%;
  transform: translateX(-50%);
}
:where([data-sonner-toaster][data-y-position=top]) {
  top: max(var(--offset), env(safe-area-inset-top));
}
:where([data-sonner-toaster][data-y-position=bottom]) {
  bottom: max(var(--offset), env(safe-area-inset-bottom));
}
:where([data-sonner-toast]) {
  --y: translateY(100%);
  --lift-amount: calc(var(--lift) * var(--gap));
  z-index: var(--z-index);
  position: absolute;
  opacity: 0;
  transform: var(--y);
  filter: blur(0);
  touch-action: none;
  transition:
    transform 400ms,
    opacity 400ms,
    height 400ms,
    box-shadow 200ms;
  box-sizing: border-box;
  outline: none;
  overflow-wrap: anywhere;
}
:where([data-sonner-toast][data-styled=true]) {
  padding: 16px;
  background: var(--normal-bg);
  border: 1px solid var(--normal-border);
  color: var(--normal-text);
  border-radius: var(--border-radius);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--width);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
:where([data-sonner-toast]:focus-visible) {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast][data-y-position=top]) {
  top: 0;
  --y: translateY(-100%);
  --lift: 1;
  --lift-amount: calc(1 * var(--gap));
}
:where([data-sonner-toast][data-y-position=bottom]) {
  bottom: 0;
  --y: translateY(100%);
  --lift: -1;
  --lift-amount: calc(var(--lift) * var(--gap));
}
:where([data-sonner-toast]) :where([data-description]) {
  font-weight: 400;
  line-height: 1.4;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-title]) {
  font-weight: 500;
  line-height: 1.5;
  color: inherit;
}
:where([data-sonner-toast]) :where([data-icon]) {
  display: flex;
  height: 16px;
  width: 16px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--toast-icon-margin-start);
  margin-right: var(--toast-icon-margin-end);
}
:where([data-sonner-toast][data-promise=true]) :where([data-icon]) > svg {
  opacity: 0;
  transform: scale(0.8);
  transform-origin: center;
  animation: sonner-fade-in 300ms ease forwards;
}
:where([data-sonner-toast]) :where([data-icon]) > * {
  flex-shrink: 0;
}
:where([data-sonner-toast]) :where([data-icon]) svg {
  margin-left: var(--toast-svg-margin-start);
  margin-right: var(--toast-svg-margin-end);
}
:where([data-sonner-toast]) :where([data-content]) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
[data-sonner-toast][data-styled=true] [data-button] {
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  height: 24px;
  font-size: 12px;
  color: var(--normal-bg);
  background: var(--normal-text);
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 400ms, box-shadow 200ms;
}
:where([data-sonner-toast]) :where([data-button]):focus-visible {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
}
:where([data-sonner-toast]) :where([data-button]):first-of-type {
  margin-left: var(--toast-button-margin-start);
  margin-right: var(--toast-button-margin-end);
}
:where([data-sonner-toast]) :where([data-cancel]) {
  color: var(--normal-text);
  background: rgba(0, 0, 0, 0.08);
}
:where([data-sonner-toast][data-theme=dark]) :where([data-cancel]) {
  background: rgba(255, 255, 255, 0.3);
}
:where([data-sonner-toast]) :where([data-close-button]) {
  position: absolute;
  left: var(--toast-close-button-start);
  right: var(--toast-close-button-end);
  top: 0;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: var(--gray1);
  color: var(--gray12);
  border: 1px solid var(--gray4);
  transform: var(--toast-close-button-transform);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  transition:
    opacity 100ms,
    background 200ms,
    border-color 200ms;
}
:where([data-sonner-toast]) :where([data-close-button]):focus-visible {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);
}
:where([data-sonner-toast]) :where([data-disabled=true]) {
  cursor: not-allowed;
}
:where([data-sonner-toast]):hover :where([data-close-button]):hover {
  background: var(--gray2);
  border-color: var(--gray5);
}
:where([data-sonner-toast][data-swiping=true])::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}
:where([data-sonner-toast][data-y-position=top][data-swiping=true])::before {
  bottom: 50%;
  transform: scaleY(3) translateY(50%);
}
:where([data-sonner-toast][data-y-position=bottom][data-swiping=true])::before {
  top: 50%;
  transform: scaleY(3) translateY(-50%);
}
:where([data-sonner-toast][data-swiping=false][data-removed=true])::before {
  content: "";
  position: absolute;
  inset: 0;
  transform: scaleY(2);
}
:where([data-sonner-toast])::after {
  content: "";
  position: absolute;
  left: 0;
  height: calc(var(--gap) + 1px);
  bottom: 100%;
  width: 100%;
}
:where([data-sonner-toast][data-mounted=true]) {
  --y: translateY(0);
  opacity: 1;
}
:where([data-sonner-toast][data-expanded=false][data-front=false]) {
  --scale: var(--toasts-before) * 0.05 + 1;
  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));
  height: var(--front-toast-height);
}
:where([data-sonner-toast]) > * {
  transition: opacity 400ms;
}
:where([data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]) > * {
  opacity: 0;
}
:where([data-sonner-toast][data-visible=false]) {
  opacity: 0;
  pointer-events: none;
}
:where([data-sonner-toast][data-mounted=true][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset)));
  height: var(--initial-height);
}
:where([data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]) {
  --y: translateY(calc(var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]) {
  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
  opacity: 0;
}
:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]) {
  --y: translateY(40%);
  opacity: 0;
  transition: transform 500ms, opacity 200ms;
}
:where([data-sonner-toast][data-removed=true][data-front=false])::before {
  height: calc(var(--initial-height) + 20%);
}
[data-sonner-toast][data-swiping=true] {
  transform: var(--y) translateY(var(--swipe-amount, 0px));
  transition: none;
}
[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],
[data-sonner-toast][data-swipe-out=true][data-y-position=top] {
  animation: swipe-out 200ms ease-out forwards;
}
@keyframes swipe-out {
  from {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));
    opacity: 1;
  }
  to {
    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));
    opacity: 0;
  }
}
@media (max-width: 600px) {
  [data-sonner-toaster] {
    position: fixed;
    --mobile-offset: 16px;
    right: var(--mobile-offset);
    left: var(--mobile-offset);
    width: 100%;
  }
  [data-sonner-toaster] [data-sonner-toast] {
    left: 0;
    right: 0;
    width: calc(100% - var(--mobile-offset) * 2);
  }
  [data-sonner-toaster][data-x-position=left] {
    left: var(--mobile-offset);
  }
  [data-sonner-toaster][data-y-position=bottom] {
    bottom: 20px;
  }
  [data-sonner-toaster][data-y-position=top] {
    top: 20px;
  }
  [data-sonner-toaster][data-x-position=center] {
    left: var(--mobile-offset);
    right: var(--mobile-offset);
    transform: none;
  }
}
[data-sonner-toaster][data-theme=light] {
  --normal-bg: #fff;
  --normal-border: var(--gray4);
  --normal-text: var(--gray12);
  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 91%);
  --success-text: hsl(140, 100%, 27%);
  --info-bg: hsl(208, 100%, 97%);
  --info-border: hsl(221, 91%, 91%);
  --info-text: hsl(210, 92%, 45%);
  --warning-bg: hsl(49, 100%, 97%);
  --warning-border: hsl(49, 91%, 91%);
  --warning-text: hsl(31, 92%, 45%);
  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}
[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
}
[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true] {
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
}
[data-sonner-toaster][data-theme=dark] {
  --normal-bg: #000;
  --normal-border: hsl(0, 0%, 20%);
  --normal-text: var(--gray1);
  --success-bg: hsl(150, 100%, 6%);
  --success-border: hsl(147, 100%, 12%);
  --success-text: hsl(150, 86%, 65%);
  --info-bg: hsl(215, 100%, 6%);
  --info-border: hsl(223, 100%, 12%);
  --info-text: hsl(216, 87%, 65%);
  --warning-bg: hsl(64, 100%, 6%);
  --warning-border: hsl(60, 100%, 12%);
  --warning-text: hsl(46, 87%, 65%);
  --error-bg: hsl(358, 76%, 10%);
  --error-border: hsl(357, 89%, 16%);
  --error-text: hsl(358, 100%, 81%);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button] {
  background: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button] {
  background: var(--info-bg);
  border-color: var(--info-border);
  color: var(--info-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button] {
  background: var(--warning-bg);
  border-color: var(--warning-border);
  color: var(--warning-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button] {
  background: var(--error-bg);
  border-color: var(--error-border);
  color: var(--error-text);
}
.sonner-loading-wrapper {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  position: absolute;
  inset: 0;
  z-index: 10;
}
.sonner-loading-wrapper[data-visible=false] {
  transform-origin: center;
  animation: sonner-fade-out 0.2s ease forwards;
}
.sonner-spinner {
  position: relative;
  top: 50%;
  left: 50%;
  height: var(--size);
  width: var(--size);
}
.sonner-loading-bar {
  animation: sonner-spin 1.2s linear infinite;
  background: var(--gray11);
  border-radius: 6px;
  height: 8%;
  left: -10%;
  position: absolute;
  top: -3.9%;
  width: 24%;
}
.sonner-loading-bar:nth-child(1) {
  animation-delay: -1.2s;
  transform: rotate(0.0001deg) translate(146%);
}
.sonner-loading-bar:nth-child(2) {
  animation-delay: -1.1s;
  transform: rotate(30deg) translate(146%);
}
.sonner-loading-bar:nth-child(3) {
  animation-delay: -1s;
  transform: rotate(60deg) translate(146%);
}
.sonner-loading-bar:nth-child(4) {
  animation-delay: -0.9s;
  transform: rotate(90deg) translate(146%);
}
.sonner-loading-bar:nth-child(5) {
  animation-delay: -0.8s;
  transform: rotate(120deg) translate(146%);
}
.sonner-loading-bar:nth-child(6) {
  animation-delay: -0.7s;
  transform: rotate(150deg) translate(146%);
}
.sonner-loading-bar:nth-child(7) {
  animation-delay: -0.6s;
  transform: rotate(180deg) translate(146%);
}
.sonner-loading-bar:nth-child(8) {
  animation-delay: -0.5s;
  transform: rotate(210deg) translate(146%);
}
.sonner-loading-bar:nth-child(9) {
  animation-delay: -0.4s;
  transform: rotate(240deg) translate(146%);
}
.sonner-loading-bar:nth-child(10) {
  animation-delay: -0.3s;
  transform: rotate(270deg) translate(146%);
}
.sonner-loading-bar:nth-child(11) {
  animation-delay: -0.2s;
  transform: rotate(300deg) translate(146%);
}
.sonner-loading-bar:nth-child(12) {
  animation-delay: -0.1s;
  transform: rotate(330deg) translate(146%);
}
@keyframes sonner-fade-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes sonner-fade-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes sonner-spin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
}
@media (prefers-reduced-motion) {
  [data-sonner-toast],
  [data-sonner-toast] > *,
  .sonner-loading-bar {
    transition: none !important;
    animation: none !important;
  }
}
.sonner-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: opacity 200ms, transform 200ms;
}
.sonner-loader[data-visible=false] {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%);
}
`);var Gt=Array(12).fill(0);function Jt(t){return(()=>{var e=zt(),r=e.firstChild;return p(r,v(ut,{each:Gt,children:()=>Ht()})),I(()=>i(e,"data-visible",t.visible)),e})()}function qt(){return At()}function Qt(){return _t()}function Zt(){return Dt()}function te(){return Rt()}function ee(t){switch(t){case"success":return qt;case"info":return Zt;case"warning":return Qt;case"error":return te;default:return null}}var ft=0,ne=class{subscribers;toasts;constructor(){this.subscribers=[],this.toasts=[]}subscribe=t=>(this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)});publish=t=>{this.subscribers.forEach(e=>e(t))};addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]};create=t=>{const{message:e,...r}=t,s=typeof t?.id=="number"||t.id&&t.id?.length>0?t.id:ft++;return this.toasts.find(g=>g.id===s)?this.toasts=this.toasts.map(g=>g.id===s?(this.publish({...g,...t,id:s,title:e}),{...g,...t,id:s,title:e}):g):this.addToast({title:e,...r,id:s}),s};dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(r=>r({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t);message=(t,e)=>this.create({...e,message:t});error=(t,e)=>this.create({...e,message:t,type:"error"});success=(t,e)=>this.create({...e,type:"success",message:t});info=(t,e)=>this.create({...e,type:"info",message:t});warning=(t,e)=>this.create({...e,type:"warning",message:t});promise=(t,e)=>{if(!e)return;let r;e.loading!==void 0&&(r=this.create({...e,promise:t,type:"loading",message:e.loading}));const s=t instanceof Promise?t:t();let B=r!==void 0;return s.then(g=>{if(g&&typeof g.ok=="boolean"&&!g.ok){B=!1;const E=typeof e.error=="function"?e.error(`HTTP error! status: ${g.status}`):e.error;this.create({id:r,type:"error",message:E})}else if(e.success!==void 0){B=!1;const E=typeof e.success=="function"?e.success(g):e.success;this.create({id:r,type:"success",message:E})}}).catch(g=>{if(e.error!==void 0){B=!1;const E=typeof e.error=="function"?e.error(g):e.error;this.create({id:r,type:"error",message:E})}}).finally(()=>{B&&(this.dismiss(r),r=void 0),e.finally?.()}),r};loading=(t,e)=>this.create({...e,type:"loading",message:t});custom=(t,e)=>{const r=e?.id||ft++;return this.publish({jsx:t(r),id:r,...e}),r}},k=new ne;function ae(t,e){const r=e?.id||ft++;return k.addToast({title:t,...e,id:r}),r}var oe=ae,re=Object.assign(oe,{success:k.success,info:k.info,warning:k.warning,error:k.error,custom:k.custom,message:k.message,promise:k.promise,dismiss:k.dismiss,loading:k.loading});function se(){const[t,e]=y(!1);return G(()=>{const r=()=>{e(document.hidden)};document.addEventListener("visibilitychange",r),U(()=>{window.removeEventListener("visibilitychange",r)})}),t}var ie=3,le="32px",de=4e3,ce=356,kt=14,ue=20,fe=200;function F(...t){return t.filter(Boolean).join(" ")}var ge=t=>{const[e,r]=y(!1),[s,B]=y(!1),[g,E]=y(!1),[J,C]=y(!1),[q,D]=y(0),[P,Q]=y(0);let T;const W=()=>t.index===0,Z=()=>t.index+1<=t.visibleToasts,b=()=>t.toast.type,ot=()=>t.toast.class||"",K=()=>t.toast.descriptionClass||"",rt=at({gap:kt},t),d=()=>t.heights.findIndex(a=>a.toastId===t.toast.id)||0,m=()=>t.toast.duration||t.duration||de;let S=0,w=0;const[O,c]=y(null),R=()=>t.position.split("-"),l=()=>t.heights.reduce((a,x,n)=>n>=d()?a:a+x.height,0),j=se(),tt=()=>t.toast.invert||t.invert,M=()=>b()==="loading",$=()=>d()*rt.gap+l();function st(){return t.icons?.loading?(()=>{var a=jt();return p(a,()=>t.icons.loading),I(()=>i(a,"data-visible",b()==="loading")),a})():v(Jt,{get visible(){return b()==="loading"}})}G(()=>{r(!0)}),G(()=>{const a=T,x=a.style.height;a.style.height="auto";const n=a.getBoundingClientRect().height;a.style.height=x,Q(n),_(()=>{t.setHeights(o=>o.find(f=>f.toastId===t.toast.id)?o.map(f=>f.toastId===t.toast.id?{...f,height:n}:f):[{toastId:t.toast.id,height:n,position:t.toast.position},...o])})});const L=()=>{B(!0),D($()),t.setHeights(a=>a.filter(x=>x.toastId!==t.toast.id)),setTimeout(()=>{t.removeToast(t.toast)},fe)};let it=m();return _(X(()=>[t.expanded,t.interacting,t.toast,m(),t.toast.promise,b(),t.pauseWhenPageIsHidden,j()],([a,x,n,o,u,f,Y,z])=>{if(u&&f==="loading"||o===Number.POSITIVE_INFINITY)return;let N;a||x||Y&&z?(()=>{if(w<S){const et=new Date().getTime()-S;it=it-et}w=new Date().getTime()})():(()=>{S=new Date().getTime(),N=setTimeout(()=>{n.onAutoClose?.(n),L()},it)})(),U(()=>{clearTimeout(N)})})),_(X(()=>t.toast.id,a=>{const x=T;if(x){const n=x.getBoundingClientRect().height;Q(n),t.setHeights(o=>[{toastId:a,height:n,position:t.toast.position},...o]),U(()=>{t.setHeights(o=>o.filter(u=>u.toastId!==a))})}})),_(X(()=>t.toast.delete,a=>{a&&L()})),(()=>{var a=Lt();a.$$pointermove=n=>{if(!O())return;const o=n.clientY-O().y,u=n.clientX-O().x,Y=(R()[0]==="top"?Math.min:Math.max)(0,o),z=n.pointerType==="touch"?10:2;Math.abs(Y)>z?T?.style.setProperty("--swipe-amount",`${o}px`):Math.abs(u)>z&&c(null)},a.$$pointerup=()=>{if(J())return;c(null);const n=Number(T?.style.getPropertyValue("--swipe-amount").replace("px","")||0);if(Math.abs(n)>=ue){D($()),t.toast.onDismiss?.(t.toast),L(),C(!0);return}T?.style.setProperty("--swipe-amount","0px"),E(!1)},a.$$pointerdown=n=>{M()||(D($()),n.target.setPointerCapture(n.pointerId),n.target.tagName!=="BUTTON"&&(E(!0),c({x:n.clientX,y:n.clientY})))};var x=T;return typeof x=="function"?St(x,a):T=a,p(a,v(H,{get when(){return ct(()=>!!t.closeButton)()&&!t.toast.jsx},get children(){var n=Mt();return Bt(n,"click",M()?void 0:()=>{L(),t.toast.onDismiss?.(t.toast)},!0),I(o=>{var u=M(),f=F(t.classes?.closeButton,t.toast?.classes?.closeButton);return u!==o.e&&i(n,"data-disabled",o.e=u),f!==o.t&&A(n,o.t=f),o},{e:void 0,t:void 0}),n}}),null),p(a,v(H,{get when(){return t.toast.jsx||t.toast.title instanceof Element},get fallback(){return[v(H,{get when(){return b()||t.toast.icon||t.toast.promise},get children(){var n=Yt();return p(n,(()=>{var o=ct(()=>!!(t.toast.promise||t.toast.type==="loading"&&!t.toast.icon));return()=>o()?t.toast.icon||st():null})(),null),p(n,(()=>{var o=ct(()=>t.toast.type!=="loading");return()=>o()?t.toast.icon||t.icons?.[b()]||ee(b())():null})(),null),n}}),(()=>{var n=Ft(),o=n.firstChild;return p(o,()=>t.toast.title),p(n,v(H,{get when(){return t.toast.description},get children(){var u=Nt();return p(u,()=>t.toast.description),I(()=>A(u,F(t.descriptionClass,K(),t.classes?.description,t.toast?.classes?.description))),u}}),null),I(()=>A(o,F(t.classes?.title,t.toast?.classes?.title))),n})(),v(H,{get when(){return t.toast.cancel},get children(){var n=Ut();return n.$$click=()=>{L(),t.toast.cancel?.onClick&&t.toast.cancel.onClick()},p(n,()=>t.toast.cancel.label),I(o=>{var u=t.toast.cancelButtonStyle||t.cancelButtonStyle,f=F(t.classes?.cancelButton,t.toast?.classes?.cancelButton);return o.e=nt(n,u,o.e),f!==o.t&&A(n,o.t=f),o},{e:void 0,t:void 0}),n}}),v(H,{get when(){return t.toast.action},get children(){var n=Wt();return n.$$click=o=>{t.toast.action?.onClick(o),!o.defaultPrevented&&L()},p(n,()=>t.toast.action.label),I(o=>{var u=t.toast.actionButtonStyle||t.actionButtonStyle,f=F(t.classes?.actionButton,t.toast?.classes?.actionButton);return o.e=nt(n,u,o.e),f!==o.t&&A(n,o.t=f),o},{e:void 0,t:void 0}),n}})]},get children(){return t.toast.jsx||t.toast.title}}),null),I(n=>{var o=t.toast.important?"assertive":"polite",u=F(t.class,ot(),t.classes?.toast,t.toast?.classes?.toast,t.classes?.default,t.classes?.[b()],t.toast?.classes?.[b()]),f=!(t.toast.jsx||t.toast.unstyled||t.unstyled),Y=e(),z=!!t.toast.promise,N=s(),lt=Z(),dt=R()[0],et=R()[1],gt=t.index,mt=W(),ht=g(),vt=b(),bt=tt(),yt=J(),wt=!!(t.expanded||t.expandByDefault&&e()),Et={"--index":t.index,"--toasts-before":t.index,"--z-index":t.toasts.length-t.index,"--offset":`${s()?q():$()}px`,"--initial-height":t.expandByDefault?"auto":`${P()}px`,...t.style,...t.toast.style};return o!==n.e&&i(a,"aria-live",n.e=o),u!==n.t&&A(a,n.t=u),f!==n.a&&i(a,"data-styled",n.a=f),Y!==n.o&&i(a,"data-mounted",n.o=Y),z!==n.i&&i(a,"data-promise",n.i=z),N!==n.n&&i(a,"data-removed",n.n=N),lt!==n.s&&i(a,"data-visible",n.s=lt),dt!==n.h&&i(a,"data-y-position",n.h=dt),et!==n.r&&i(a,"data-x-position",n.r=et),gt!==n.d&&i(a,"data-index",n.d=gt),mt!==n.l&&i(a,"data-front",n.l=mt),ht!==n.u&&i(a,"data-swiping",n.u=ht),vt!==n.c&&i(a,"data-type",n.c=vt),bt!==n.w&&i(a,"data-invert",n.w=bt),yt!==n.m&&i(a,"data-swipe-out",n.m=yt),wt!==n.f&&i(a,"data-expanded",n.f=wt),n.y=nt(a,Et,n.y),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),a})()};function pt(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var me=t=>{const e=at({position:"bottom-right",hotkey:["altKey","KeyT"],theme:"light",visibleToasts:ie,dir:pt()},t),[r,s]=It({toasts:[]}),B=()=>Array.from(new Set([e.position].concat(r.toasts.filter(d=>d.position).map(d=>d.position)))),[g,E]=y([]),[J,C]=y(!1),[q,D]=y(!1);let P;const Q=()=>e.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),[T,W]=y(null),[Z,b]=y(!1),[ot,K]=y(e.theme!=="system"?e.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),rt=d=>s("toasts",m=>m.filter(({id:S})=>S!==d.id));return G(()=>{const d=k.subscribe(m=>{if(m.dismiss){s("toasts",xt(w=>{w.forEach(O=>{O.id===m.id&&(O.delete=!0)})}));return}const S=r.toasts.findIndex(w=>w.id===m.id);if(S!==-1){s("toasts",[S],Ct(m));return}s("toasts",xt(w=>{w.unshift(m)}))});U(()=>{d()})}),_(X(()=>e.theme,d=>{if(d!=="system"){K(d);return}typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:m})=>{K(m?"dark":"light")})})),_(()=>{r.toasts.length<=1&&C(!1)}),G(()=>{const d=m=>{e.hotkey.every(w=>m[w]||m.code===w)&&(C(!0),P?.focus()),m.code==="Escape"&&(document.activeElement===P||P?.contains(document.activeElement))&&C(!1)};document.addEventListener("keydown",d),U(()=>{document.removeEventListener("keydown",d)})}),_(X(()=>P,d=>{d&&U(()=>{T()&&(T()?.focus({preventScroll:!0}),W(null),b(!1))})})),v(H,{get when(){return r.toasts.length>0},get children(){var d=Kt();return p(d,v(ut,{get each(){return B()},children:(m,S)=>{const[w,O]=m.split("-");return(()=>{var c=Vt();c.$$pointerup=()=>D(!1),c.$$pointerdown=()=>{D(!0)},c.addEventListener("mouseleave",()=>{q()||C(!1)}),c.$$mousemove=()=>C(!0),c.addEventListener("mouseenter",()=>C(!0)),c.addEventListener("focus",l=>{Z()||(b(!0),W(l.relatedTarget))}),c.addEventListener("blur",l=>{Z()&&!l.currentTarget.contains(l.relatedTarget)&&(b(!1),T()&&(T()?.focus({preventScroll:!0}),W(null)))});var R=P;return typeof R=="function"?St(R,c):P=c,i(c,"data-y-position",w),i(c,"data-x-position",O),p(c,v(ut,{get each(){return r.toasts.filter(l=>!l.position&&S()===0||l.position===m)},children:(l,j)=>v(ge,{get index(){return j()},get icons(){return e.icons},toast:l,get duration(){return e.toastOptions?.duration??t.duration},get class(){return e.toastOptions?.class},get classes(){return e.toastOptions?.classes},get cancelButtonStyle(){return e.toastOptions?.cancelButtonStyle},get actionButtonStyle(){return e.toastOptions?.actionButtonStyle},get descriptionClass(){return e.toastOptions?.descriptionClass},get invert(){return!!e.invert},get visibleToasts(){return e.visibleToasts},get closeButton(){return!!e.closeButton},get interacting(){return q()},get position(){return e.position},get style(){return e.toastOptions?.style},get unstyled(){return e.toastOptions?.unstyled},removeToast:rt,get toasts(){return r.toasts},get heights(){return g()},setHeights:E,get expandByDefault(){return!!e.expand},get gap(){return e.gap},get expanded(){return J()},get pauseWhenPageIsHidden(){return e.pauseWhenPageIsHidden}})})),I(l=>{var j=e.dir==="auto"?pt():e.dir,tt=e.class,M=ot(),$=e.richColors,st={"--front-toast-height":`${g()[0]?.height}px`,"--offset":typeof e.offset=="number"?`${e.offset}px`:e.offset||le,"--width":`${ce}px`,"--gap":`${kt}px`,...e.style};return j!==l.e&&i(c,"dir",l.e=j),tt!==l.t&&A(c,l.t=tt),M!==l.a&&i(c,"data-theme",l.a=M),$!==l.o&&i(c,"data-rich-colors",l.o=$),l.i=nt(c,st,l.i),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()}})),I(()=>i(d,"aria-label",`Notifications ${Q()}`)),d}})};/*!
 * Original code by Emil Kowalski
 * MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
 *
 * Credits:
 * https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
 */Pt(["pointerdown","pointerup","pointermove","click","mousemove"]);function Tt(t){const[e,r]=Ot(t,[]);return v(me,at({class:"toaster group",toastOptions:{classes:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground"}}},r,{"bool:n$":!1}))}const he={args:{},argTypes:{invert:{control:{type:"boolean"},table:{type:{summary:"bool"}}},hotkey:{control:{type:"object"},table:{type:{summary:"Array of String"}}},richColors:{control:{type:"boolean"},table:{type:{summary:"bool"}}},expand:{control:{type:"boolean"},table:{type:{summary:"bool"}}},duration:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},gap:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},visibleToasts:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},closeButton:{control:{type:"boolean"},table:{type:{summary:"bool"}}},toastOptions:{control:{type:"object"},table:{type:{summary:"Toast",detail:"C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/fable_modules/Partas.Solid.Sonner.0.2.2/Program.fs"}}},offset:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},icons:{control:{type:"object"},table:{type:{summary:"ToastIcons",detail:"C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/fable_modules/Partas.Solid.Sonner.0.2.2/Program.fs"}}},containerAriaLabel:{control:{type:"text"},table:{type:{summary:"string"}}},pauseWhenPageIsHidden:{control:{type:"boolean"},table:{type:{summary:"bool"}}},cn:{control:{type:!1},table:{type:{summary:"function"}}}},render:t=>[v(Tt,at(t,{"bool:n$":!1})),v($t,{onClick:e=>re("Event has been created"),children:"Click me"})],component:Tt},V={args:{}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...V.parameters?.docs?.source}}};const ve=["Default"],we=Object.freeze(Object.defineProperty({__proto__:null,Default:V,__namedExportsOrder:ve,default:he},Symbol.toStringTag,{value:"Module"}));export{V as D,we as S};
