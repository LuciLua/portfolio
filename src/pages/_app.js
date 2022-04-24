import React from 'react'
import Footer from "../components/footer"
import Menu from "../components/menu"
import '../styles/global.scss'
import Script from 'next/script'

function App({ Component, pageProps }) {
    return (
        <>
            <Script id="google-analytics" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SKCXMJ02HX" />
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App