import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as React from 'react';
import { Unstyled, Source } from '@storybook/addon-docs/blocks';
import { duotoneDark, lucario, twilight, vs, prism, ghcolors, vscDarkPlus, materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
export function CodeBlock(props) {
    return (
        <Unstyled>
            <SyntaxHighlighter
                language={"fsharp"}
                showLineNumbers={true}
                style={vs} {...props} />
        </Unstyled>
    )
}

export function CopyBlock(props) {
    return (
        React.createElement(
            "div",
            {
                className: "flex flex-col w-full justify-center items-center **:data-[radix-scroll-area-content]:shrink **:data-[radix-scroll-area-content]:max-h-[400px] **:[radix-scroll-area-content]:max-w-[500px]",
                children: [
                    React.createElement( "h3",
                        {
                            className: "justify-self-start",
                            children: [
                                "Copy and paste the code to use."       
                            ]
                        }
                        ),
                    
                    React.createElement(Source, {
                        code: props.code,
                        dark: true,
                        language: 'tsx'
                    }),
                    props.dependencies ? React.createElement("span", {
                        children: [
                            "Download the following dependencies:",
                            React.createElement(Source, {
                                code: props.dependencies,
                                dark: true,
                                language: 'bash'
                            })
                        ]
                    }) : null
                ]
            }
        // <div className={"flex w-full justify-center items-center **:data-[radix-scroll-area-content]:max-h-[400px] **:[radix-scroll-area-content]:max-w-2/3"}>
        //     Copy and paste the code to use.
        //     <Source code={props.code} dark={true} language={'tsx'} />
        //     props.dependencies ?? <span>
        //         Download the following dependencies:
        //         <Source code={props.dependencies} dark={true} language={'bash'} />
        //         </span>
        // </div>
    ))
}
