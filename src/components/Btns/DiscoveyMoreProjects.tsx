"use client"

import { AiOutlineArrowRight } from "react-icons/ai"
import { useTranslation } from "../../hooks/useTranslation"
import Link from "next/link"

export function DiscoveryMoreProjects() {
  const { translations, lang } = useTranslation()

  return (
    <Link
      href={`/${lang}/projects`}
      className="w-full h-fit  font-[700] p-4 rounded-[3px] bg-gradient-to-br from-[var(--bg-medium)] to-transparent text-[var(--text-h3)] flex justify-center items-center gap-3 "
    >
      {translations.projects.discovery} <AiOutlineArrowRight />
    </Link>
  )
}
