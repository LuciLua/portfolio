import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "../components/Analytics";

function Document() {

  // window.dataLayer = window.dataLayer || [];
  // function gtag() { dataLayer.push(arguments); }
  // gtag('js', new Date());

  // gtag('config', 'G-Z7ENJJPVDF');


  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta httpEquiv="content-language" content="pt-br, en-US, fr" />
        <meta name="rating" content="general" />

        <meta property="og:title" content="Portfólio de LuciLua." />
        <meta property="og:site_name" content="LuciLua portfólio" />

        <meta property="og:url" content="https://www.lucilua.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfólio de LuciLua" />
        <meta
          property="og:description"
          content="Nesta página você encontra meus projetos pessoais, artes, trabalhos realizados e muito mais!!"
        />

        <meta
          property="og:image"
          content="https://www.lucilua.com.br/src/img/ogimg.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.lucilua.com.br/src/img/ogimg.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />

        <link rel="shortcut icon" href="src/img/ico.ico" sizes="192x192" />
        <link
          rel="apple-touch-icon"
          href="/src/img/ico.ico"
          sizes="192x192"
        />

        <meta name="theme-color" content="#e3004f" />
        <meta name="msapplication-navbutton-color" content="#e3004f" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#e3004f"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="description"
          content="Nesta página você encontra meus projetos pessoais, artes, trabalhos realizados e muito mais!"
        />
        <meta
          name="keywords"
          content="portfolio, arte, design, art, develop, desenvolvedora, front end, site, home, lucilua, LuciLua81, Luci Lua, LuciLua, Lúcia Maria Rosa Guelber, Lúcia Guelber, meu portfólio, portfólio de artes, audiovisual, artes e design, luci lua portfólio, luci lua, luci lua81"
        />

        <meta name="author" content="Luci Lua" />
        <meta name="robots" content="index, follow" />
        <meta name="reply-to" content="luci.lua81@gmail.com" />
        <meta name="copyright" content="© 2021 LuciLua" />

        <link rel="shortcut icon" href="./ico.ico" type="image/x-icon" />
      </Head>
      <Analytics/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


export default Document