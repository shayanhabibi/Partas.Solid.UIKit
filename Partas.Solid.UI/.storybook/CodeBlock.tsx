import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, lucario, twilight, vs, vscDarkPlus, materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock(props) {
    return (
        <SyntaxHighlighter 
            language={"fsharp"} 
            showLineNumbers={true}
            style={materialOceanic}
            {...props} 
        />
    )
}
