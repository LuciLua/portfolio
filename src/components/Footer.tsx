"use client"

import Link from "next/link"
import { useTranslation } from "../hooks/useTranslation"

export function Footer() {
  const { lang, translations } = useTranslation()

  return (
    <footer className="w-full min-h-[80px] h-fit border-t-[1px] border-t-[var(--lines_contrast)] flex justify-center items-center">
      <div className="flex flex-col items-center w-full max-w-[1300px] h-fit">
        <div className="flex py-4 w-full justify-between p-5">
          <ul className="flex gap-4 xl:flex-row flex-col">
            <li>
              <a
                className="hover:underline"
                href={"https://www.linkedin.com/in/lucia-guelber/"}
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={"https://www.instagram.com/luci_lua81/"}
                target="_blank"
              >
                Intagram
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={"https://twitter.com/l4dev"}
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={"https://www.facebook.com/luci4dev/"}
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={"https://github.com/LuciLua"}
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
          <ul className="flex gap-4 xl:flex-row flex-col">
            <li>
              <Link className="hover:underline" href={`/${lang}/`}>
                {translations.menu.homepage}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${lang}/projects`}>
                {translations.menu.projects}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${lang}/about`}>
                {translations.menu.about}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${lang}#contact`}>
                {translations.menu.primary_btn}
              </Link>
            </li>
          </ul>
          <ul>
            <li className="font-[500]">Updated Jan 17, 2024</li>
          </ul>
        </div>
        <div className="pt-[20px] pb-[10px] xl:flex-row flex-col">
          <p>LuciLua@2024 | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
