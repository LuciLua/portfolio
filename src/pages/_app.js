import React from 'react'
import Footer from "../components/footer"
import Menu from "../components/menu"
import '../styles/global.scss'
import Script from 'next/script'

function App({ Component, pageProps }) {
    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id={`analytics`} strategy="lazyOnload">{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
            `}</Script>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App