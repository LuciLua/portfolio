"use client"

import { BiWorld } from "react-icons/bi"
import { useTheme } from "../hooks/useTheme"
import { useTranslation } from "../hooks/useTranslation"
import { BtnToggleLocale } from "./Btns/BtnToggleLocale"
import { GoGear } from "react-icons/go"
import { useState } from "react"
import { TfiAngleDown } from "react-icons/tfi"


type ItemMenuDropdownTypes = {
  label?: string
  type?: "config" | "lang"
  interaction?: "hover" | "click"
}

export function LanguageChoice() {
  const { translations } = useTranslation()
  return (
    <div className="w-full" role="none">
      <BtnToggleLocale
        className={`w-full px-4 py-2 text-sm  hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] ${translations.current_lang === translations.lang_opt_1 &&
          "bg-[var(--bg-dropdown-active)] text-[var(--text-dropdown)]"
          }`}
        lang={"en"}
        lang_label={translations.lang_opt_1}
      />
      <BtnToggleLocale
        className={`w-full px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] ${translations.current_lang === translations.lang_opt_2 &&
          "bg-[var(--bg-dropdown-active)] text-[var(--text-dropdown)]"
          }`}
        lang={"pt"}
        lang_label={translations.lang_opt_2}
      />
      <BtnToggleLocale
        className={`w-full px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] ${translations.current_lang === translations.lang_opt_3 &&
          "bg-[var(--bg-dropdown-active)] text-[var(--text-dropdown)]"
          }`}
        lang={"fr"}
        lang_label={translations.lang_opt_3}
      />
    </div>
  )
}
export function ConfigChoice() {
  const { translations } = useTranslation()
  const { toggleTheme } = useTheme()
  return (
    <button
      onClick={() => toggleTheme()}
      className={`text-nowrap w-full block px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]`}
    >
      {translations.menu.theme_config}
    </button>
  )
}

export function ButtonChoice({
  children,
  interaction,
  dropDownOpen,
  setDropDownOpen,
}) {
  if (interaction === "click") {
    return (
      <button
        className="flex gap-1 justify-center items-center"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        {children}
      </button>
    )
  }
  if (interaction === "hover") {
    return (
      <button
        className="flex gap-1 justify-center items-center"
        onPointerEnter={() => setDropDownOpen(true)}
      >
        {children}
      </button>
    )
  }
}

export const WordIcon = () => {
  return <BiWorld className="text-[16px]" />
}
export const ConfigIcon = () => {
  return <GoGear className="text-[16px]" />
}

export function ItemMenuDropdown({
  label,
  type,
  interaction = "hover",
}: ItemMenuDropdownTypes) {
  const [dropDownOpen, setDropDownOpen] = useState(false)

  return (
    <>
      <div>
        <div className="relative flex justify-center items-center gap-2 text-left">
          <ButtonChoice
            interaction={interaction}
            dropDownOpen={dropDownOpen}
            setDropDownOpen={setDropDownOpen}
          >
            {label && <p className="mr-[5px]">{label}</p>}
            {type === "lang" && <WordIcon />}
            {type === "config" && <GoGear />}
            <TfiAngleDown className="text-[13px] text-[#565656]" />
          </ButtonChoice>
          <div
            className="absolute w-fit h-fit top-[0] pt-[20px] right-[20px] shadow-lg rounded-[4px] overflow-hidden"
            onPointerEnter={() => setDropDownOpen(true)}
            onPointerLeave={() => setDropDownOpen(false)}
          >
            <div className="bg-[var(--bg-dropdown)] text-[text-dropdown] h-fit w-fit">
              {dropDownOpen && type == "lang" && <LanguageChoice />}
              {dropDownOpen && type == "config" && <ConfigChoice />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
