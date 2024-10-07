"use client";
import React from 'react'

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const muiCache = createCache({
    key: "mui",
});

const ThemeProv = ({ children }: { children: React.ReactNode }) => {
    const theme = createTheme({
        direction: "rtl",
        palette: {
            mode: "light",
            primary: {
                main: "#755139",
            },
            secondary: {
                main: "#F2EDD7",
            },
            background: {
                default: "#fafafa",
                paper: "#fff",
                // hover: "#f5f5f5",
                // appTitle: "#f5f7f9"
            }
        },
        typography: {
            fontFamily: [ '__Cairo_210179', '__Cairo_Fallback_210179'].join(","),
            fontSize: 12.5,
        }
    });

    return (
        <AppRouterCacheProvider options={{
            key: "muirtl",
            stylisPlugins: [prefixer, rtlPlugin],
        }}>

            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}

export default ThemeProv
