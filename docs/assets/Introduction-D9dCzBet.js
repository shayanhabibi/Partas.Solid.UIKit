import{G as r,a3 as a}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import"./preload-helper-PPVm8Dsz.js";const i=`\uFEFF# Partas.Solid.UIKit\r
\r
> WIP\r
\r
A comprehensive suite of component implementations leveraging storybook for development and testing.\r
\r
This is primarily an implementation of \`solid-ui\`, however it also implements a variety of other related \`shadcn-ui\` or \`tremor\` components.\r
\r
We also implement some of the newer \`kobalte\` components such as color fields and color pickers.\r
\r
## Development\r
\r
Clone the repo, and download dependencies.\r
\r
\`\`\`bash\r
dotnet restore Partas.Solid.UIKit.sln\r
\`\`\`\r
\r
\`\`\`bash\r
cd Partas.Solid.UI\r
\`\`\`\r
\r
\`\`\`bash\r
npm install\r
\`\`\`\r
\r
> I use a global installation of Fable, you can use a local installation so long as it uses the latest preview version\r
\r
Run storybook and fable concurrently.\r
\r
\`\`\`bash\r
cd Partas.Solid.UI\r
\`\`\`\r
\r
\`\`\`bash\r
fable -e .jsx --typedArrays false -c Release --watch\r
\`\`\`\r
\r
> I prefer to run them in separate processes so I can restart one when required without impacting the other\r
\r
\`\`\`bash\r
npm run storybook\r
\`\`\`\r
\r
## Stack\r
\r
- Solid-JS\r
- Storybook 9+\r
- Kobalte\r
- Corvu (OTP)\r
- Ark-UI/Zag-JS (Calendar)\r
- Tailwindcss 4\r
- Fable 5+\r
- Partas.Solid 2.1 +\r
\r
## IDE Setup\r
\r
Tailwindcss is enabled using the plugin available for VS Code and Rider.\r
\r
I use the regex features to enable intellisense in F#.\r
\r
My settings automatically picks up strings for classes, but if they are found elsewhere, then we can use comments to active the plugin for that string.\r
\r
\`\`\`fsharp\r
//tw\r
"this will have tailwind intellisense"\r
\r
(*TW*) "this will have tailwind intellisense"\r
\r
class' = "this will have tailwind intellisense"\r
\`\`\`\r
\r
See the settings below. You can use the regex for inspiration or just copy paste.\r
\r
<details>\r
<summary>Tailwind plugin settings</summary>\r
\r
> Be aware that these settings are tested with Rider. Some adjustment might be required for compatibility with other development environments.\r
\r
\`\`\`json\r
{\r
  "includeLanguages": {\r
    "ftl": "html",\r
    "jinja": "html",\r
    "jinja2": "html",\r
    "smarty": "html",\r
    "tmpl": "gohtml",\r
    "cshtml": "html",\r
    "vbhtml": "html",\r
    "razor": "html",\r
    "fsharp": "javascript",\r
    "fs": "javascript"\r
  },\r
  "files": {\r
    "exclude": [\r
      "**/.git/**",\r
      "**/node_modules/**",\r
      "**/.hg/**",\r
      "**/.svn/**"\r
    ]\r
  },\r
  "emmetCompletions": false,\r
  "classAttributes": ["class", "className", "ngClass", "class'"],\r
  "colorDecorators": true,\r
  "showPixelEquivalents": true,\r
  "rootFontSize": 16,\r
  "hovers": true,\r
  "suggestions": true,\r
  "codeActions": true,\r
  "validate": true,\r
  "lint": {\r
    "invalidScreen": "error",\r
    "invalidVariant": "error",\r
    "invalidTailwindDirective": "error",\r
    "invalidApply": "error",\r
    "invalidConfigPath": "error",\r
    "cssConflict": "warning",\r
    "recommendedVariantOrder": "warning"\r
  },\r
  "experimental": {\r
    "configFile": null,\r
    "classRegex": [\r
      "class'\\\\s*=\\\\s*\\"([^\\"]*)\\"",\r
      "\\\\(\\\\*TW\\\\*\\\\)\\\\s*\\"([^\\"]*)\\"",\r
      "//\\\\s*tailwindcss\\\\s*\\"([^\\"]*)\\"",\r
      "//\\\\s*tw\\\\s*\\"([^\\"]*)\\""\r
    ]\r
  }\r
}\r
\`\`\`\r
\r
\r
</details>\r
`;function t(n){const e={h1:"h1",...s(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"readme",children:"README"}),`
`,r.jsx(a,{children:i})]})}function d(n={}){const{wrapper:e}={...s(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{d as default};
