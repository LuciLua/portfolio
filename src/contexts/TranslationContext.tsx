"use client"

import { useMessages } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"

export const TranslationContext = createContext<any>({})

export function TranslationContextProvider({ children, params }) {
  const [translation, setTranslation] = useState()
  const pathname = usePathname()
  const router = useRouter()
  const { pt, en, fr } = useMessages()
  let translations: any

  if (params.locale == "pt") {
    translations = pt
  }
  if (params.locale == "en") {
    translations = en
  }
  if (params.locale == "fr") {
    translations = fr
  }

  let lang = params.locale

  const pathname_split = pathname.split("/")
  pathname_split[1] = lang
  const currentPathname = pathname_split.join("/")

  useEffect(() => {
    setTranslation(translations)
  }, [translation])

  return (
    <TranslationContext.Provider
      value={{ translations, setTranslation, lang, currentPathname }}
    >
      {children}
    </TranslationContext.Provider>
  )
}
