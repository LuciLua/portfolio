"use client"

import { useState } from "react"
import { useMenuStateColor } from "../../hooks/useMenuStateColor"
import { useTheme } from "../../hooks/useTheme"
import { useTranslation } from "../../hooks/useTranslation"
import Link from "next/link"
import { ItemMenuDropdown } from "./ItemMenuDropdown"
import { BiMenu } from "react-icons/bi"

export default function Menu() {
  const { menuStateColor } = useMenuStateColor()
  const { translations, lang } = useTranslation()
  const { toggleTheme } = useTheme()

  const [openMenu, setOpenMenu] = useState(false)

  function hiddenMenuStateColor() {
    return "bg-[var(--bg-default)] text-[#fff] top-[-70px] overflow-hidden"
  }
  function visibleMenuStateColor() {
    return "bg-[var(--bg-default)] text-[var(--text-h1)] top-0"
  }

  return (
    <div
      className={`min-w-[100vw] w-full h-[70px] backdrop-blur-[12px] flex justify-center fixed z-40 transition-[1s] ${menuStateColor ? hiddenMenuStateColor() : visibleMenuStateColor()
        }`}
    >
      <div className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <ul className="flex h-full justify-center items-center gap-5">
          <li className="flex flex-col justify-center leading-[20px]" aria-label="logo">
            <h1 className="text-[22px] font-black">LuciLua /{">"}</h1>
            <Link
              title="logo: back to home"
              aria-label="logo: back to home"
              href={`/${lang}#`}
              className="text-[12px] font-medium hover:underline"
            >
              {translations.menu.logo}
            </Link>
          </li>
        </ul>
        <div className="list-none xl:gap-10 gap-3 flex items-center w-fit h-full font-[600]">
          <ul className="lg:flex gap-10 hidden text-[14px]">
            <li aria-label="back to home">
              <Link
                title="back to home"
                aria-label="back to home"
                href={`/${lang}/`}
                className="hover:underline"
              >
                {translations.menu.homepage}
              </Link>
            </li>
            <li aria-label="projects">
              <Link
                title="projects"
                aria-label="projects"
                href={`/${lang}/projects`}
                className="hover:underline"
              >
                {translations.menu.projects}
              </Link>
            </li>
            <li aria-label="about">
              <Link
                title="about"
                aria-label="about"
                href={`/${lang}/about`}
                className="hover:underline"
              >
                {translations.menu.about}
              </Link>
            </li>
            <li aria-label="services">
              <ItemMenuDropdown
                label={translations.menu.services}
                type="services"
                clickable
              />
            </li>
            <li aria-label="config">
              <ItemMenuDropdown
                label={translations.menu.config}
                type="config"
              />
            </li>
          </ul>
          <div aria-label="contact">
            <Link
              title="contact"
              aria-label="contact"
              href={`/${lang}/#contact`}
              className="h-full w-full bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap xl:flex hidden hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]"
            >
              {translations.menu.primary_btn}
            </Link>
          </div>

          {/*MENU items MOBILE*/}
          <div className="xl:hidden flex">
            <button
              className={`relative bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <BiMenu />
            </button>
            {openMenu && (
              <div className="absolute top-[55px] right-[60px] bg-[var(--bg-default)]">
                <li
                  className={`bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] px-[30px] py-[10px] font-[600] rounded-[3px] text-nowrap`}
                  onClick={() => setOpenMenu(false)}
                >
                  <Link
                    title={translations.menu.primary_btn}
                    href={`/${lang}/#contact`}
                    aria-label={translations.menu.primary_btn}
                  >
                    {translations.menu.primary_btn}
                  </Link>
                </li>
                <li
                  className="w-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.homepage}
                    aria-label={translations.menu.homepage}
                    href={`/${lang}/`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.homepage}
                  </Link>
                </li>
                <li
                  className="w-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.projects}
                    aria-label={translations.menu.projects}
                    href={`/${lang}/projects`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.projects}
                  </Link>
                </li>
                <li
                  className="w-full h-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.about}
                    aria-label={translations.menu.about}
                    href={`/${lang}/about`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.about}
                  </Link>
                </li>
                <li
                  className="w-full h-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.services}
                    aria-label={translations.menu.services}
                    href={`/${lang}/services`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.services}
                  </Link>
                </li>
                <li
                  className="w-full h-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.plans}
                    aria-label={translations.menu.plans}
                    href={`/${lang}/plans`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.plans}
                  </Link>
                </li>
                <li
                  className="w-full h-full"
                  onClick={() => setOpenMenu(false)}>
                  <Link
                    title={translations.menu.budget}
                    aria-label={translations.menu.budget}
                    href={`/${lang}/budget`}
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                  >
                    {translations.menu.budget}
                  </Link>
                </li>
                <li className="w-full h-full">
                  <button
                    title="toggle theme"
                    aria-label="toggle theme"
                    className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                    onClick={() => {
                      setOpenMenu(false)
                      toggleTheme()
                    }}
                  >
                    {translations.menu.theme_config}
                  </button>
                </li>
              </div>
            )}
          </div>
          {/* LANG Selector MOBILE*/}
          <div title="lang selector">
            <ItemMenuDropdown type="lang" interaction="click" />
          </div>
        </div>
      </div>
    </div>
  )
}
