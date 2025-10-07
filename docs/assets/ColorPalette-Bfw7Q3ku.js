import{G as r,H as i,I as c,J as s}from"./iframe-BHVPMPJn.js";import{useMDXComponents as t}from"./index-CB5oDCs8.js";import"./preload-helper-PPVm8Dsz.js";const d=`@import 'tailwindcss';\r
@import 'tw-animate-css';\r
\r
@custom-variant dark (&:is(.dark *));\r
\r
/* Aurora Banner */\r
@layer base {\r
    :root { --fd-banner-height: 3rem ; }\r
}\r
\r
@layer base {\r
    :root {\r
        --partas-signature-gradient: linear-gradient(90deg, #ff6b47 0%, #ff4081 33%, #8b5cf6 66%, #06b6d4 100%);\r
        --partas-background: #fafafa;\r
        --partas-foreground: #374151;\r
        --partas-surface-background: #ffffff;\r
        --partas-background-accent: #F5F5F5;\r
        --partas-primary: #8b5cf6;\r
        --partas-attention: #fd6a46;\r
        --partas-secondary: #ff4081;\r
        --partas-success: #06b6d4;\r
        --partas-background-attention: #fef2f2;\r
        --partas-background-primary: #faf5ff;\r
        --partas-background-info: #f0fdff;\r
\r
    }\r
}\r
@layer base {\r
    :root {\r
        --color-partas-primary: var(--partas-primary);\r
        --color-partas-secondary: var(--partas-secondary);\r
        --color-partas-success: var(--partas-success);\r
        --color-partas-attention: var(--partas-attention);\r
        --color-background-attention: var(--partas-background-attention);\r
        --color-background-primary: var(--partas-background-primary);\r
        --color-background-info: var(--partas-background-info);\r
    }\r
}\r
\r
/* Base color palette */\r
@layer base {\r
    :root {\r
        --radius: 0.625rem;\r
        --background: oklch(1 0 0);\r
        --foreground: oklch(0.145 0 0);\r
        --card: oklch(1 0 0);\r
        --card-foreground: oklch(0.145 0 0);\r
        --popover: oklch(1 0 0);\r
        --popover-foreground: oklch(0.145 0 0);\r
        --primary: oklch(0.205 0 0);\r
        --primary-foreground: oklch(0.985 0 0);\r
        --secondary: oklch(0.97 0 0);\r
        --secondary-foreground: oklch(0.205 0 0);\r
        --muted: oklch(0.97 0 0);\r
        --muted-foreground: oklch(0.556 0 0);\r
        --accent: oklch(0.97 0 0);\r
        --accent-foreground: oklch(0.205 0 0);\r
        --destructive: oklch(0.577 0.245 27.325);\r
        --border: oklch(0.922 0 0);\r
        --input: oklch(0.922 0 0);\r
        --ring: oklch(0.708 0 0);\r
        --chart-1: oklch(0.646 0.222 41.116);\r
        --chart-2: oklch(0.6 0.118 184.704);\r
        --chart-3: oklch(0.398 0.07 227.392);\r
        --chart-4: oklch(0.828 0.189 84.429);\r
        --chart-5: oklch(0.769 0.188 70.08);\r
        --sidebar: oklch(0.985 0 0);\r
        --sidebar-foreground: oklch(0.145 0 0);\r
        --sidebar-background: oklch(0.985 0 89.876);\r
        --sidebar-primary: oklch(0.205 0 0);\r
        --sidebar-primary-foreground: oklch(0.985 0 0);\r
        --sidebar-accent: oklch(0.97 0 0);\r
        --sidebar-accent-foreground: oklch(0.205 0 0);\r
        --sidebar-border: oklch(0.922 0 0);\r
        --sidebar-ring: oklch(0.708 0 0);\r
\r
        --destructive-foreground: oklch(1 0 0);\r
\r
        --info: oklch(0.954 0.024 234.417);\r
        --info-foreground: oklch(0.677 0.148 238.144);\r
\r
        --success: oklch(0.95 0.051 163.051);\r
        --success-foreground: oklch(0.531 0.115 161.958);\r
\r
        --warning: oklch(0.962 0.057 95.338);\r
        --warning-foreground: oklch(0.706 0.186 48.088);\r
\r
        --error: oklch(0.933 0.032 17.74);\r
        --error-foreground: oklch(0.636 0.209 25.413);\r
\r
\r
    }\r
\r
    .dark {\r
        --background: oklch(0.145 0 0);\r
        --foreground: oklch(0.985 0 0);\r
        --card: oklch(0.205 0 0);\r
        --card-foreground: oklch(0.985 0 0);\r
        --popover: oklch(0.269 0 0);\r
        --popover-foreground: oklch(0.985 0 0);\r
        --primary: oklch(0.922 0 0);\r
        --primary-foreground: oklch(0.205 0 0);\r
        --secondary: oklch(0.269 0 0);\r
        --secondary-foreground: oklch(0.985 0 0);\r
        --muted: oklch(0.269 0 0);\r
        --muted-foreground: oklch(0.708 0 0);\r
        --accent: oklch(0.371 0 0);\r
        --accent-foreground: oklch(0.985 0 0);\r
        --destructive: oklch(0.704 0.191 22.216);\r
        --border: oklch(1 0 0 / 10%);\r
        --input: oklch(1 0 0 / 15%);\r
        --ring: oklch(0.556 0 0);\r
        --chart-1: oklch(0.488 0.243 264.376);\r
        --chart-2: oklch(0.696 0.17 162.48);\r
        --chart-3: oklch(0.769 0.188 70.08);\r
        --chart-4: oklch(0.627 0.265 303.9);\r
        --chart-5: oklch(0.645 0.246 16.439);\r
        --sidebar: oklch(0.205 0 0);\r
        --sidebar-foreground: oklch(0.985 0 0);\r
        --sidebar-background: oklch(0.21 0.006 285.885);\r
        --sidebar-primary: oklch(0.488 0.243 264.376);\r
        --sidebar-primary-foreground: oklch(0.985 0 0);\r
        --sidebar-accent: oklch(0.269 0 0);\r
        --sidebar-accent-foreground: oklch(0.985 0 0);\r
        --sidebar-border: oklch(1 0 0 / 10%);\r
        --sidebar-ring: oklch(0.439 0 0);\r
\r
        --destructive-foreground: oklch(1 0 0);\r
\r
        --info: oklch(0.954 0.024 234.417);\r
        --info-foreground: oklch(0.677 0.148 238.144);\r
\r
        --success: oklch(0.95 0.051 163.051);\r
        --success-foreground: oklch(0.775 0.194 164.161);\r
\r
        --warning: oklch(0.962 0.057 95.338);\r
        --warning-foreground: oklch(0.706 0.186 48.088);\r
\r
        --error: oklch(0.933 0.032 17.74);\r
        --error-foreground: oklch(0.636 0.209 25.413);\r
    }\r
}\r
\r
\r
/* Default breakpoint behaviour for \`container\`s */\r
@media (max-width: 640px) {\r
    .container {\r
        @apply px-4;\r
    }\r
}\r
\r
/* Apply defaults */\r
@layer base {\r
    * {\r
        @apply border-border outline-ring/50;\r
    }\r
    body {\r
        @apply bg-background text-foreground;\r
        /*font-feature-settings:*/\r
        /*        "rlig" 1,*/\r
        /*        "calt" 1;*/\r
    }\r
    button {\r
        @apply cursor-pointer;\r
    }\r
}\r
\r
@utility input-invalid-border {\r
    @apply\r
    border-destructive\r
    ring-destructive/20\r
    dark:ring-destructive/40\r
}\r
@utility input-border {\r
    @apply\r
    outline-none\r
    border-input\r
    border\r
}\r
@utility input-focus-border {\r
    @apply \r
    ring-[3px] \r
    border-ring \r
    ring-ring/50\r
}\r
\r
@utility focus-ring-offset {\r
@apply\r
    ring-offset-background\r
    outline-none\r
    ring-2\r
    ring-offset-2 \r
    ring-ring\r
}\r
\r
@theme inline {\r
    /* Color utils */\r
    --color-border: var(--border);\r
    --color-input: var(--input);\r
    --color-ring: var(--ring);\r
\r
    --color-background: var(--background);\r
    --color-foreground: var(--foreground);\r
\r
    --color-primary: var(--primary);\r
    --color-primary-foreground: var(--primary-foreground);\r
\r
    --color-secondary: var(--secondary);\r
    --color-secondary-foreground: var(--secondary-foreground);\r
\r
    --color-destructive: var(--destructive);\r
    --color-destructive-foreground: var(--destructive-foreground);\r
\r
    --color-muted: var(--muted);\r
    --color-muted-foreground: var(--muted-foreground);\r
\r
    --color-info: var(--info);\r
    --color-info-foreground: var(--info-foreground);\r
\r
    --color-success: var(--success);\r
    --color-success-foreground: var(--success-foreground);\r
\r
    --color-warning: var(--warning);\r
    --color-warning-foreground: var(--warning-foreground);\r
\r
    --color-error: var(--error);\r
    --color-error-foreground: var(--error-foreground);\r
\r
    --color-accent: var(--accent);\r
    --color-accent-foreground: var(--accent-foreground);\r
\r
    --color-popover: var(--popover);\r
    --color-popover-foreground: var(--popover-foreground);\r
\r
    --color-card: var(--card);\r
    --color-card-foreground: var(--card-foreground);\r
\r
    /* Sidebar */\r
    --color-sidebar: var(--sidebar-background);\r
    --color-sidebar-foreground: var(--sidebar-foreground);\r
\r
    --color-sidebar-primary: var(--sidebar-primary);\r
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);\r
\r
    --color-sidebar-accent: var(--sidebar-accent);\r
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);\r
\r
    --color-sidebar-border: var(--sidebar-border);\r
    --color-sidebar-ring: var(--sidebar-ring);\r
\r
    /* Radius */\r
    --radius-sm: calc(var(--radius) - 4px);\r
    --radius-md: calc(var(--radius) - 2px);\r
    --radius-lg: calc(var(--radius));\r
    --radius-xl: calc(var(--radius) + 4px);\r
\r
    /* Animation utils */\r
    --animate-accordion-down: accordion-down 0.2s ease-out;\r
    --animate-accordion-up: accordion-up 0.2s ease-out;\r
    --animate-shine: shine 3s ease-out infinite;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-shineborder: shineborder var(--duration) infinite linear;\r
    --animate-caret-blink: caret-blink 1.25s ease-out infinite;\r
    --animate-content-show: content-show 0.2s ease-out;\r
    --animate-content-hide: content-hide 0.2s ease-out;\r
    --animate-shiny-text: shiny-text 8s infinite;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-border-beam: border-beam var(--duration) infinite linear;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-ripple: ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-orbit: orbit var(--duration) linear infinite;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-marquee: marquee var(--duration) linear infinite;\r
    /*noinspection CssUnresolvedCustomProperty*/\r
    --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;\r
    --animate-aurora: aurora 8s ease-in-out infinite alternate;\r
\r
    /* Animation util keyframes */\r
    @keyframes accordion-down {\r
        from { height: 0 }\r
        /*noinspection CssUnresolvedCustomProperty*/\r
        to { height: var(--kb-accordion-content-height) }\r
    }\r
    @keyframes accordion-up {\r
        /*noinspection CssUnresolvedCustomProperty*/\r
        from { height: var(--kb-accordion-content-height) }\r
        to { height: 0 }\r
    }\r
    @keyframes shine {\r
        0% { background-position: 200% 0; }\r
        25% { background-position: -200% 0; }\r
        100% { background-position: -200% 0; }\r
    }\r
    @keyframes shineborder {\r
        0% { background-position: 0 0; }\r
        50% { background-position: 100% 100%; }\r
        to { background-position: 0 0; }\r
    }\r
    @keyframes caret-blink {\r
        0%, 70%, 100% { opacity: 1;}\r
        20%, 50% { opacity: 0;}\r
    }\r
    @keyframes content-show {\r
        from {\r
            opacity: 0;\r
            transform: scale(0.96);\r
        }\r
        to {\r
            opacity: 1;\r
            transform: scale(1);\r
        }\r
    }\r
    @keyframes content-hide {\r
        from {\r
            opacity: 1;\r
            transform: scale(1);\r
        }\r
        to {\r
            opacity: 0;\r
            transform: scale(0.96);\r
        }\r
    }\r
    @keyframes shiny-text {\r
        0%, 90%, 100% {\r
            /*noinspection CssUnresolvedCustomProperty*/\r
            background-position: calc(-100% - var(--shiny-width)) 0;\r
        }\r
        30%, 60% {\r
            /*noinspection CssUnresolvedCustomProperty*/\r
            background-position: calc(100% + var(--shiny-width)) 0;\r
        }\r
    }\r
    @keyframes border-beam {\r
        100% { offset-distance: 100% }\r
    }\r
    @keyframes ripple {\r
        0%, 100% {\r
            transform: translate(-50%, -50%) scale(1);\r
        }\r
        50% {\r
            transform: translate(-50%, -50%) scale(0.9);\r
        }\r
    }\r
    @keyframes orbit {\r
        0% {transform: rotate(0deg) translateY(var(--radius)) rotate(0deg)}\r
        100% {transform: rotate(360deg) translateY(var(--radius)) rotate(-360deg)}\r
    }\r
    @keyframes marquee {\r
        from {transform: translateX(0)}\r
        /*noinspection CssUnresolvedCustomProperty*/\r
        to {transform: translateX(calc(-100% - var(--gap)))}\r
    }\r
    @keyframes marquee-vertical {\r
        from { transform: translateY(0); }\r
        /*noinspection CssUnresolvedCustomProperty*/\r
        to { transform: translateY(calc(-100% - var(--gap))); }\r
    }\r
    @keyframes aurora {\r
        0% {\r
            background-position: 0 50%;\r
            transform: rotate(-5deg) scale(0.9);\r
        }\r
        25% {\r
            background-position: 50% 100%;\r
            transform: rotate(5deg) scale(1.1);\r
        }\r
        50% {\r
            background-position: 100% 50%;\r
            transform: rotate(-3deg) scale(0.95);\r
        }\r
        75% {\r
            background-position: 50% 0;\r
            transform: rotate(3deg) scale(1.05);\r
        }\r
        100% {\r
            background-position: 0 50%;\r
            transform: rotate(-5deg) scale(0.9);\r
        }\r
    }\r
    --animate-background-position-spin: background-position-spin 3000ms infinite alternate;\r
    @keyframes background-position-spin {\r
        0% {\r
            background-position: top center;\r
        }\r
        100% {\r
            background-position: bottom center;\r
        }\r
    }\r
    --animate-fd-moving-banner-normal: 20s linear 0s infinite normal none running fd-moving-banner;\r
    --animate-fd-moving-banner-reverse: 16s linear 0s infinite reverse none running fd-moving-banner;\r
    @keyframes fd-moving-banner {\r
        from { background-position: 0 0; }\r
        to { background-position: 100% 0; }\r
    }\r
}\r
`;function a(n){const o={h1:"h1",h2:"h2",p:"p",...t(),...n.components},{SourceCode:e}=o;return e||l("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Colors"}),`
`,r.jsx(o.h1,{id:"colors",children:"Colors"}),`
`,r.jsx(e,{code:d}),`
`,r.jsx(o.h2,{id:"charts",children:"Charts"}),`
`,r.jsx(o.p,{children:"Colors for charts"}),`
`,r.jsx(c,{children:r.jsx(s,{title:"charts",subtitle:"light",colors:{Blue:"var(--color-blue-500)",Emerald:"var(--color-emerald-500)",Violet:"var(--color-violet-500)",Amber:"var(--color-amber-500)",Gray:"var(--color-gray-500)",Cyan:"var(--color-cyan-500)",Pink:"var(--color-pink-500)",Lime:"var(--color-lime-500)",Fuchsia:"var(--color-fuchsia-500)"}})})]})}function g(n={}){const{wrapper:o}={...t(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(a,{...n})}):a(n)}function l(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};
