"use client"

import { useTranslation } from "../hooks/useTranslation"

export function TitleHomeSections({
  section,
}: {
  section: "projects" | "skills" | "education" | "about"
}) {
  const { translations } = useTranslation()

  let title: string
  let h2: string

  if (section === "projects") {
    title = translations.projects.h1
    h2 = translations.projects.h2
  }
  if (section === "skills") {
    title = translations.skills.h1
    h2 = translations.skills.h2
  }
  if (section === "education") {
    title = translations.education.h1
    h2 = undefined
  }
  if (section === "about") {
    title = translations.about.h1
    h2 = translations.about.h2
  }

  return (
    <>
      <h1 className="text-[35px] font-[700] text-[var(--text-h1)] self-start">{title}</h1>
      {h2 && <h2 className="text-[var(--text-h2)] self-start">{h2}</h2>}
    </>
  )
}
