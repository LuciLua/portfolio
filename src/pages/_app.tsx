import React from "react";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import "../styles/global.scss";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
