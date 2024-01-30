"use client"

import { BiWorld } from "react-icons/bi"
import { useTheme } from "../../hooks/useTheme"
import { useTranslation } from "../../hooks/useTranslation"
import { BtnToggleLocale } from "../Btns/BtnToggleLocale"
import { GoGear } from "react-icons/go"
import { useState } from "react"
import { TfiAngleDown } from "react-icons/tfi"
import { MdDesignServices } from "react-icons/md";

type ItemMenuDropdownTypes = {
  label?: string
  type?: "config" | "lang" | "services"
  interaction?: "hover" | "click"
  clickable?: boolean
}

// SUBMENUS
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
export function ServicesChoice() {
  const { translations, lang } = useTranslation()
  return (
    <>
      <a
        aria-label={translations.menu.budget}
        title={translations.menu.budget}
        href={`/${lang}/services/budget`}
        className={`text-nowrap w-full block px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]`}
      >
        {translations.menu.budget}
      </a>
      <a
        aria-label={translations.menu.plans}
        title={translations.menu.plans}
        href={`/${lang}/services/plans`}
        className={`text-nowrap w-full block px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]`}
      >
        {translations.menu.plans}
      </a>
    </>

  )
}

// MENU btn interaction type
export function ButtonChoice({
  children,
  interaction,
  dropDownOpen,
  setDropDownOpen,
  label
}) {
  if (interaction === "click") {
    return (
      <button
        title={label}
        aria-label={label}
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
        title={label}
        aria-label={label}
        className="flex gap-1 justify-center items-center"
        onPointerEnter={() => setDropDownOpen(true)}
      >
        {children}
      </button>
    )
  }
}

// MENU Icons
export const WordIcon = () => {
  return <BiWorld className="text-[16px]" />
}
export const ConfigIcon = () => {
  return <GoGear className="text-[16px]" />
}
export const ServicesIcon = () => {
  return <MdDesignServices className="text-[16px]" />
}

// MENU element
export function ItemMenuDropdown({
  label,
  type,
  interaction = "hover",
  clickable = false
}: ItemMenuDropdownTypes) {

  const [dropDownOpen, setDropDownOpen] = useState(false)
  const { lang } = useTranslation()

  return (
    <div className="relative flex justify-center items-center gap-2 text-left"
      onPointerLeave={() => setDropDownOpen(false)}>
      {/* LABEL and ICON */}
      <ButtonChoice
        label={label}
        interaction={interaction}
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
      >
        {clickable ?
          <a href={`/${lang}/${type}`} className="hover:underline z-10 w-full flex justify-center items-center gap-1">
            {label && <p className="mr-[5px]">{label}</p>}
            {type === "lang" && <WordIcon />}
            {type === "config" && <ConfigIcon />}
            {type === "services" && <ServicesIcon />}
            <TfiAngleDown className="text-[13px] text-[#565656]" />
          </a>
          :
          <>
            {label && <p className="mr-[5px]">{label}</p>}
            {type === "lang" && <WordIcon />}
            {type === "config" && <ConfigIcon />}
            {type === "services" && <ServicesIcon />}
            <TfiAngleDown className="text-[13px] text-[#565656]" />
          </>
        }
      </ButtonChoice>
      {/* SUBMENUS */}
      <div
        className="absolute w-fit h-fit top-[0] pt-[25px] right-[20px] shadow-lg rounded-[4px] overflow-hidden"
        onPointerEnter={() => setDropDownOpen(true)}
      >
        <div className="bg-[var(--bg-dropdown)] text-[text-dropdown] h-fit w-fit">
          {dropDownOpen && type == "lang" && <LanguageChoice />}
          {dropDownOpen && type == "config" && <ConfigChoice />}
          {dropDownOpen && type == "services" && <ServicesChoice />}
        </div>
      </div>
    </div>
  )
}
