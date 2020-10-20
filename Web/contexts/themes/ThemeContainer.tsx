import React, { FC } from 'react';

import {
    ThemeProvider as ChakraThemeProvider, 
    ColorModeProvider,
    CSSReset,
} from '@chakra-ui/core';

import {
    ThemeProvider as EmotionThemeProvider
} from 'emotion-theming';

import theme from 'styles/theme';

const ThemeContainer: FC = ({ children }) => (
    <ChakraThemeProvider theme={theme}>
        <ColorModeProvider value='dark' >
            <EmotionThemeProvider theme={theme}>
                <CSSReset />
                {children}
            </EmotionThemeProvider>
        </ColorModeProvider>
    </ChakraThemeProvider>
)

export default ThemeContainer;