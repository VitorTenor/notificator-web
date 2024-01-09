import type {AppProps} from 'next/app'
import {theme} from "@/config/theme";
import {GlobalStyles} from "@/config/theme/styles";
import {ThemeProvider} from "@mui/material/styles";
import {Toast} from "@/components/atom/Toast";
import {AuthContextProvider} from "@/context";
import Loading from "@/components/molecule/Loading";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthContextProvider>
            <ThemeProvider theme={ theme }>
                <GlobalStyles />
                <Component {...pageProps} />
                <Toast />
                <Loading />
            </ThemeProvider>
        </AuthContextProvider>
    )
}
