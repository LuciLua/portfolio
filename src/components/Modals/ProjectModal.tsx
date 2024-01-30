"use client"

import { AiFillCloseCircle } from "react-icons/ai"
import { motion } from "framer-motion"
import { useModal } from "../../hooks/useModal"
import { useTranslation } from "../../hooks/useTranslation"
import { useEffect, useState } from "react"

export function ProjectModal() {
  const { toggleModalOpen, modalOpen, modalContent, modalType } = useModal()
  const { name, img, url, stack, description } = modalContent
  const { translations } = useTranslation()

  const [newDescription, setNewDescription] = useState(description)

  async function getNewDescription() {
    const translatedModals = await translations?.projects

    if (name === "Hidrofobia") {
      setNewDescription(await translatedModals?.hidrofobia_modal?.about)
    }
    if (name === "Somuuh") {
      setNewDescription(await translatedModals?.somuuh_modal?.about)
    }
    if (name === "NoteIn") {
      setNewDescription(await translatedModals?.notein_modal?.about)
    }
    if (name === "Pokedex") {
      setNewDescription(await translatedModals?.pokedex_modal?.about)
    }
    if (name === "ToDo") {
      setNewDescription(await translatedModals?.todo_modal?.about)
    }
    if (name === "Compare") {
      setNewDescription(await translatedModals?.compare_modal?.about)
    }
  }

  useEffect(() => {
    getNewDescription()
  }, [name])

  if (modalOpen && modalType == "project") {
    return (
      <div className="top-0 w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-[var(--bg-default-opacity50)] backdrop-blur-[10px] flex flex-col justify-center items-center fixed z-50 px-3 py-[20px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
          className="w-full max-w-[700px] h-fit min-h-[200px] max-h-[calc(100dvh-100px)] relative flex flex-col bg-[var(--bg-default)] p-4 rounded-[4px] shadow-[var(--bg-default)] shadow-[0px_0px_12px]"
        >
          <button
            onClick={toggleModalOpen}
            className="absolute right-[-10px] text-[30px] top-[-10px] text-[#484848] font-[500] rounded-full hover:text-[#121212]"
          >
            <AiFillCloseCircle />
          </button>
          <h1 className="text-[var(--text-h1)] font-[700] text-[25px]">
            {name}
          </h1>
          <div className="flex w-full gap-2 h-fit border-y-[1px] border-y-[var(--bg-medium)] px-[4px] py-[10px] flex-wrap">
            {stack.map((tool) => {
              return (
                <div
                  key={tool}
                  className="bg-[var(--bg-medium)] text-[var(--text-h3)] px-[8px] py-[3px] flex text-[13px] font-[500] rounded-[4px]"
                >
                  {tool}
                </div>
              )
            })}
          </div>
          <div className="custom-scrollbar overflow-y-scroll overflow-x-hidden scroll-py-[1px]">
            <p className="p-4 text-[var(--text-default)]">{newDescription}</p>
            <img src={img} alt="project_image_modal" className="py-4" />
          </div>
          <a
            className="bg-[var(--btn-bg-primary)] font-[700] text-[var(--btn-text-primary)] px-5 py-3 mt-2 h-fit rounded-[3px] flex justify-center items-center"
            href={url}
            target="_blank"
          >
            {translations.projects.primary_btn}
          </a>
        </motion.div>
      </div>
    )
  }
}
