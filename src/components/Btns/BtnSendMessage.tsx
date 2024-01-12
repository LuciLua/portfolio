"use client"

import Link from "next/link"
import { useTranslation } from "../../hooks/useTranslation"
import { BiSend } from "react-icons/bi"

export function BtnSendMessage() {
  const { lang, translations } = useTranslation()

  return (
    <Link
      href={`/${lang}/#contact`}
      className="py-3 underline flex gap-2 relative left-[-15px] justify-center items-center text-[14px]"
    >
      <BiSend /> {translations.contact.sendMessage}
    </Link>
  )
}
