import React from 'react'
import Footer from "../components/footer"
import Menu from "../components/menu"
import '../styles/global.scss'
import Script from 'next/script'

function App({ Component, pageProps }) {

    function analytics() {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-SKCXMJ02HX')
    }

    return (
        <>
            <Script id="google-analytics" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SKCXMJ02HX" />
            {analytics()}
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App