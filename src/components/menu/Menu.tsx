"use client"

import { ItemMenuDropdown } from "./ItemMenuDropdown"
import { useMenuStateColor } from "../../hooks/useMenuStateColor"
import { useTranslation } from "../../hooks/useTranslation"
import { useTheme } from "../../hooks/useTheme"
import { BiMenu } from "react-icons/bi"
import { useState } from "react"
import Link from "next/link"

export function Menu() {
  const { menuStateColor } = useMenuStateColor()
  const { translations, currentPathname, lang } = useTranslation()
  const { toggleTheme, theme } = useTheme()

  const [openMenu, setOpenMenu] = useState(false)

  function hiddenMenuStateColor() {
    return "bg-[var(--bg-default)] text-[#fff] top-[-70px] overflow-hidden"
  }
  function visibleMenuStateColor() {
    return "bg-[var(--bg-default)] text-[var(--text-h1)] top-0"
  }

  return (
    <div
      className={`min-w-[100vw] w-full h-[70px] backdrop-blur-[12px] flex justify-center fixed z-40 transition-[1s] ${
        menuStateColor ? hiddenMenuStateColor() : visibleMenuStateColor()
      }`}
    >
      <ul className="list-none flex justify-between w-full max-w-[1300px] h-full  items-center px-[10px]">
        <li className="flex h-full justify-center items-center gap-5">
          <div className="flex flex-col justify-center leading-[20px]">
            <h1 className="text-[22px] font-black">LuciLua /{">"}</h1>
            <Link href="#" className="text-[12px] font-medium hover:underline">
              {translations.menu.logo}
            </Link>
          </div>
        </li>
        <li>
          <ul className="list-none xl:gap-10 gap-3 flex items-center w-fit h-full font-[600]">
            <div className="lg:flex gap-10 hidden text-[14px]">
              <li>
                <Link href={`/${lang}/`} className="hover:underline">
                  {translations.menu.homepage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/projects`} className="hover:underline">
                  {translations.menu.projects}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:underline">
                  {translations.menu.about}
                </Link>
              </li>
              <li>
                <ItemMenuDropdown
                  label={translations.menu.config}
                  type="config"
                />
              </li>
            </div>
            <li>
              <Link
                href={`/${lang}/#contact`}
                className="h-full w-full bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap xl:flex hidden hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]"
              >
                {translations.menu.primary_btn}
              </Link>
            </li>

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
                    <Link href={`/${lang}/#contact`}>
                      {translations.menu.primary_btn}
                    </Link>
                  </li>
                  <li className="w-full" onClick={() => setOpenMenu(false)}>
                    <Link
                      href={`/${lang}/`}
                      className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                    >
                      {translations.menu.homepage}
                    </Link>
                  </li>
                  <li className="w-full" onClick={() => setOpenMenu(false)}>
                    <Link
                      href={`/${lang}/projects`}
                      className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                    >
                      {translations.menu.projects}
                    </Link>
                  </li>
                  <li
                    className="w-full h-full"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link
                      href={`/${lang}/about`}
                      className="px-4 py-2 text-sm hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)] bg-[var(--bg-dropdown)] text-[var(--text-dropdown)] w-full flex"
                    >
                      {translations.menu.about}
                    </Link>
                  </li>
                  <li className="w-full h-full">
                    <button
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
            <ItemMenuDropdown type="lang" interaction="click" />
          </ul>
        </li>
      </ul>
    </div>
  )
}
