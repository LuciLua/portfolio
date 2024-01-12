"use client"

import { AiOutlineEye } from "react-icons/ai"
import { ModalContext } from "../../contexts/ModalContext"
import { useContext } from "react"
import { useTranslation } from "../../hooks/useTranslation"

export function ViewCV() {
  const { toggleModalOpen, setModalType } = useContext(ModalContext)
  const { translations } = useTranslation()

  function openCV() {
    setModalType("cv")
    toggleModalOpen()
  }

  return (
    <>
      <a
        href="/assets/cv/curriculum.pdf"
        className="bg-[var(--bg-medium)] text-[var(--text-h1)] px-4 py-1 rounded-[30px]"
      >
        {translations ? translations.education.download_cv : "Download CV"}
      </a>
      <button
        className="border-b-[1px] border-b-[var(--text-h1)] text-[var(--text-h1)] flex gap-1 justify-center items-center h-fit"
        onClick={() => openCV()}
      >
        <AiOutlineEye className="font-[12px]" />{" "}
        {translations ? translations.education.view_cv : "View CV"}
      </button>
    </>
  )
}
