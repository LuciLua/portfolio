"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useModal } from "../hooks/useModal"
import { useTranslation } from "../hooks/useTranslation"

export function Project({ name, img, url, stack, description }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  const rotated = `${[
    "translate3d(20px, -10px, 5px)" + "rotateY(20deg)" + "rotateX(20deg)",
  ]}`

  const { toggleModalOpen, setModalContent, setModalType } = useModal()
  const { translations } = useTranslation()

  return (
    <motion.div
      className="w-fit rounded-[12px] max-w-[350px] h-fit min-w-[300px] min-h-[250px] 
      border-[1px] overflow-hidden border-[var(--bg-medium)]"
      ref={ref}
      style={{
        transform: isInView ? "none" : rotated,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <img
        src={img}
        alt="image_project"
        className="w-full object-contain h-fit opacity-90  grayscale-[0.3] contrast-[1.1] brightness-[0.95] relative"
      />
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
      <div className="flex justify-between h-fit items-center mt-3 py-2 px-5">
        <h1 className="text-[var(--text-h1)] text-[20px] font-[700] ">
          {name}
        </h1>
        <button
          className=" text-[var(--text-h2)] underline px-5 py-1 h-fit rounded-[3px] text-nowrap"
          onClick={() => {
            toggleModalOpen(),
              setModalType("project"),
              setModalContent({ name, img, url, stack, description })
          }}
        >
          {translations.projects.cards.primary_btn}
        </button>
        <a
          className="bg-[var(--btn-bg-primary)] text-[var(--btn-text-primary)] font-[500] px-5 py-1 h-fit rounded-[3px]"
          href={url}
          target="_blank"
        >
          {translations.projects.cards.secundary_btn}
        </a>
      </div>
    </motion.div>
  )
}
