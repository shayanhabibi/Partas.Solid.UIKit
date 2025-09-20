import './tailwind.css'
import type { Preview, SolidRenderer } from 'storybook-solidjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

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
