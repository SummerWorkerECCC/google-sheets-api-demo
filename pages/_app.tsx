import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import './App.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
    </GeistProvider>
)

export default MyApp



