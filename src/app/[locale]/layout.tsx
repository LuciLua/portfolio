import { Montserrat } from "next/font/google"
import "../../styles/globals.css"
import { Providers } from "../../components/Providers"
import { ProjectModal } from "../../components/Modals/ProjectModal"
import { CurriculumModal } from "../../components/Modals/CurriculumModal"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Menu from "../../components/Menu/Menu"
import { Footer } from "../../components/Footer"

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const locales = ["en", "pt", "fr"]

export const metadata: Metadata = {
  title: "LuciLua Portfólio",
  description: "Frontend Developer Portfólio - Luci Lua",
  authors: [
    { name: "Lúcia Maria Rosa Guelber", url: "https://lucilua.com.br/" },
    { name: "Luci Lua", url: "https://lucilua.com.br/" },
    { name: "LuciLua", url: "https://lucilua.com.br/" },
  ],
  creator: "LuciLua",
  keywords: [
    "LuciLua, frontend, developer, backend, web developer, desenvolvimento de sites, portfolio, Luci Lua",
  ],
  alternates: {
    canonical: "https://lucilua.com.br/",
    languages: {
      "en-US": "https://lucilua.com.br/en",
      "pt-BR": "https://lucilua.com.br/pt",
      "fr-FR": "https://lucilua.com.br/fr",
    },
  },
  category: "technology",
  icons: {
    icon: "/assets/ico.ico",
  },
  other: {
    email: "luci.lua81@gmail.com",
    name: "Lúcia Maria Rosa Guelber",
  },
}

export default function root_layout({ children, params }) {
  const { locale } = params
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LuciLua Portfólio</title>
        <link rel="alternate" hrefLang="pt" href="https://lucilua.com.br/pt" />
        <link rel="alternate" hrefLang="en" href="https://lucilua.com.br/en" />
        <link rel="alternate" hrefLang="fr" href="https://lucilua.com.br/fr" />
        <meta name="google-adsense-account" content="ca-pub-1035225397173431"/>
      </head>
      <body className={`${montserrat.className} custom-scrollbar`}>
        <Providers params={params}>
          <Menu />
          {children}
          <ProjectModal />
          <CurriculumModal />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
