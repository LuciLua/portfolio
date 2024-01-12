"use client"

import { useContext } from "react"
import { TranslationContext } from "../contexts/TranslationContext"

export function useTranslation() {
  const { translations, lang, currentPathname } = useContext(TranslationContext)
  return { translations, lang, currentPathname }
}
