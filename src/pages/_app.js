import React from 'react'
import Footer from "../components/footer"
import Menu from "../components/menu"
import '../styles/global.scss'

function App({ Component, pageProps }) {

    return (
        <>
        <Menu/>
            <Component {...pageProps} />
        <Footer/>
        </>
    )
}

export default App