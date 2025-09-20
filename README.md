# Partas.Solid.UIKit

> WIP

A comprehensive suite of component implementations leveraging storybook for development and testing.

This is primarily an implementation of `solid-ui`, however it also implements a variety of other related `shadcn-ui` or `tremor` components.

We also implement some of the newer `kobalte` components such as color fields and color pickers.

## Development

Clone the repo, and download dependencies.

```bash
dotnet restore Partas.Solid.UIKit.sln
```

```bash
cd Partas.Solid.UI
```

```bash
npm install
```

> I use a global installation of Fable, you can use a local installation so long as it uses the latest preview version

Run storybook and fable concurrently.

```bash
cd Partas.Solid.UI
```

```bash
fable -e .jsx --typedArrays false -c Release --watch
```

> I prefer to run them in separate processes so I can restart one when required without impacting the other

```bash
npm run storybook
```

## Stack

- Solid-JS
- Storybook 9+
- Kobalte
- Corvu (OTP)
- Ark-UI/Zag-JS (Calendar)
- Tailwindcss 4
- Fable 5+
- Partas.Solid 2.1 +

## IDE Setup

Tailwindcss is enabled using the plugin available for VS Code and Rider.

I use the regex features to enable intellisense in F#.

My settings automatically picks up strings for classes, but if they are found elsewhere, then we can use comments to active the plugin for that string.

```fsharp
//tw
"this will have tailwind intellisense"

(*TW*) "this will have tailwind intellisense"

class' = "this will have tailwind intellisense"
```

See the settings below. You can use the regex for inspiration or just copy paste.

<details>
<summary>Tailwind plugin settings</summary>

> Be aware that these settings are tested with Rider. Some adjustment might be required for compatibility with other development environments.

```json
{
  "includeLanguages": {
    "ftl": "html",
    "jinja": "html",
    "jinja2": "html",
    "smarty": "html",
    "tmpl": "gohtml",
    "cshtml": "html",
    "vbhtml": "html",
    "razor": "html",
    "fsharp": "javascript",
    "fs": "javascript"
  },
  "files": {
    "exclude": [
      "**/.git/**",
      "**/node_modules/**",
      "**/.hg/**",
      "**/.svn/**"
    ]
  },
  "emmetCompletions": false,
  "classAttributes": ["class", "className", "ngClass", "class'"],
  "colorDecorators": true,
  "showPixelEquivalents": true,
  "rootFontSize": 16,
  "hovers": true,
  "suggestions": true,
  "codeActions": true,
  "validate": true,
  "lint": {
    "invalidScreen": "error",
    "invalidVariant": "error",
    "invalidTailwindDirective": "error",
    "invalidApply": "error",
    "invalidConfigPath": "error",
    "cssConflict": "warning",
    "recommendedVariantOrder": "warning"
  },
  "experimental": {
    "configFile": null,
    "classRegex": [
      "class'\\s*=\\s*\"([^\"]*)\"",
      "\\(\\*TW\\*\\)\\s*\"([^\"]*)\"",
      "//\\s*tailwindcss\\s*\"([^\"]*)\"",
      "//\\s*tw\\s*\"([^\"]*)\""
    ]
  }
}
```


</details>
