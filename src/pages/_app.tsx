import type {AppProps} from 'next/app'
import {AuthContextProvider} from "@/context";
import {theme} from "@/config/theme";
import {GlobalStyles} from "@/config/theme/styles";
import {ThemeProvider} from "@mui/material/styles";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthContextProvider>
            <ThemeProvider theme={ theme }>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthContextProvider>
    )
}
