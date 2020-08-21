import { theme, ITheme, CustomTheme } from '@chakra-ui/core';

const customTheme: ITheme = {
    ...theme,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Alata, system-ui, sans-serif',
        mono: 'Fira Code, system-ui, sans-serif',
    }
}

export default customTheme;