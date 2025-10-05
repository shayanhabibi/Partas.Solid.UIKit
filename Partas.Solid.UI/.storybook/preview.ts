import './tailwind.css'
import type { Preview, SolidRenderer } from 'storybook-solidjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import {CodeBlock, CopyBlock} from './CodeBlock';

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        // automatically create action args for all props that start with "on"
        actions: { argTypesRegex: '^on.*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            codePanel: false,
            components: {
                code: CodeBlock,
                SourceCode: CopyBlock
            }
        },
    },
    decorators: [
        withThemeByClassName<SolidRenderer>({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light'
        })
    ],
};

export default preview;
