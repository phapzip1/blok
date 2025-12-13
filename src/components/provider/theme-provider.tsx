"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps extends React.ComponentProps<typeof NextThemeProvider> {}

const ThemeProvider : React.FC<ThemeProviderProps> = ({children, ...props}) => {

    return (
        <NextThemeProvider
            {...props}
        >
            {children}
        </NextThemeProvider>
    );
}

export default ThemeProvider;