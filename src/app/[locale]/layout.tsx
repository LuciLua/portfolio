import { Montserrat } from "next/font/google"
import "../../styles/globals.css"
import { Providers } from "../../components/Providers"
import { Menu } from "../../components/Menu/Menu"
import { ProjectModal } from "../../components/ProjectModal"
import { CurriculumModal } from "../../components/CurriculumModal"
import { notFound } from "next/navigation"
import { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const locales = ["en", "pt", "fr"]

export const metadata: Metadata = {
  title: 'LuciLua Portfólio',
  description: 'Frontend Developer Portfólio - Luci Lua',
  authors: [{ name: 'Lúcia Maria Rosa Guelber', url: 'https://lucilua.com.br/' }, { name: 'Luci Lua', url: 'https://lucilua.com.br/' }, { name: 'LuciLua', url: 'https://lucilua.com.br/' }],
  creator: 'LuciLua',
  twitter: { site: 'https://twitter.com/l4dev', creator: 'LuciLua', description: 'My Twitter' },
  keywords: ['LuciLua, frontend, developer, backend, web developer, desenvolvimento de sites, portfolio, Luci Lua'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
      'fr-FR': '/fr',
    }
  },
  category: "technology",
  icons: {
    icon: '/assets/ico.ico'
  },
  other: {
    email: "luci.lua81@gmail.com",
    name: "Lúcia Maria Rosa Guelber"
  }
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
      </head>
      <body className={`${montserrat.className} custom-scrollbar`}>
        <Providers params={params}>
          <Menu />
          {children}
          <ProjectModal />
          <CurriculumModal />
        </Providers>
      </body>
    </html>
  )
}
