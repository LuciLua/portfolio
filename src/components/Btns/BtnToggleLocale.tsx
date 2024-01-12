"use client"

import { usePathname, useRouter } from "next/navigation"

export function BtnToggleLocale({
  lang,
  className,
  lang_label,
}: {
  lang: string
  className?: string
  lang_label?: string
}) {
  const pathname = usePathname()
  const router = useRouter()

  function toggleTranslateLanguage(lang: string) {
    const pathname_split = pathname.split("/")
    pathname_split[1] = lang
    const novoPathname = pathname_split.join("/")
    router.push(novoPathname)
  }

  return (
    <button
      onClick={() => toggleTranslateLanguage(lang)}
      className={`${className}`}
      aria-label="change_language"
      title="Change language"
    >
      {lang_label ? lang_label : lang}
    </button>
  )
}
