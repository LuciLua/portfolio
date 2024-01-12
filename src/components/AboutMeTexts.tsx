"use client"

import { useTranslation } from "../hooks/useTranslation"

export function AboutMeTexts({ p }: { p: Number | string }) {
  const { translations } = useTranslation()

  if (p == 1) return <p>{translations.about.about_1}</p>
  if (p == 2) return <p>{translations.about.about_2}</p>
  if (p == 3) return <p>{translations.about.about_3}</p>
  if (p == 4) return <p>{translations.about.about_4}</p>
}
