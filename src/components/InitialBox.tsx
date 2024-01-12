"use client"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiMailSend } from "react-icons/bi"
import { useRef } from "react"
import { toast } from "react-toastify"
import { useTranslation } from "../hooks/useTranslation"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function InitialBox() {
  const mailToRef = useRef(null)

  const { translations, lang, currentPathname } = useTranslation()

  function mailToCopyToClipboard() {
    // Use the Clipboard API for modern browsers
    navigator.clipboard
      .writeText("luci.lua81@gmail.com")
      .then(() => {
        console.log("Email address copied successfully! (luci.lua81@gmail.com)")
        toast("Email address copied successfully! (luci.lua81@gmail.com)", {
          autoClose: 4000,
          hideProgressBar: true,
        })
      })
      .catch((error) => {
        console.error("Unable to copy text to clipboard", error)
      })
  }

  const mySkills = [
    "ReactJs",
    "NextJs",
    "JavaScript",
    "SASS",
    "CSS",
    "NodeJs",
    "Tailwindcss",
    "VueJs",
    "AngularJs",
    "Flexbox",
    "HTML",
    "Express",
    "API",
    "Git",
    "GitHub",
    "NPM",
    "Yarn",
  ]

  return (
    <div className="border-[var(--lines-contrast)] bg-[var(--bg-default)] text-[var(--text-default)] border-[3px] max-w-[1300px] w-full h-fit min-h-[300px] flex flex-col ">
      <div className="flex xl:flex-row flex-col xl:max-h-[508px] xl:h-[508px] w-full relative  shadow-[-12px_0_12px_inset] shadow-[#00000014]">
        <div className="xl:border-r-[3px] xl:border-r-[var(--lines-contrast)] w-full h-full  items-center flex flex-col">
          <div className="xl:py-[70px] py-[20px] xl:max-w-[500px] max-w-[700px] px-[10px]">
            <h1 className="leading-none xl:text-[70px] text-[50px] font-black self-start text-[var(--text-h1)]">
              {translations.initial_box.h1}
            </h1>
            <h2 className=" font-[500] text-[20px] self-start text-[var(--text-h2)]">
              {translations.initial_box.h2}
            </h2>
            <div className="flex gap-[10px] flex-col">
              <h1 className="font-[800] mt-[30px] text-[var(--text-h3)]">
                {translations.initial_box.about_me}
              </h1>
              <p className="font-[500]">{translations.initial_box.p}</p>
              <div className="flex w-fit xl:gap-5 gap-2 mt-[30px] z-20">
                <Link
                  href={`/${lang}/#contact`}
                  className="bg-[var(--btn-bg-primary)] text-[var(--btn-text-primary)] px-[30px] py-[10px] font-[500] rounded-[3px] text-nowrap"
                >
                  {translations.initial_box.primary_btn}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="bg-[var(--bg-medium)] text-[var(--text-h1)] px-[30px] py-[10px] font-[500] rounded-[3px] text-nowrap"
                >
                  {translations.initial_box.secondary_btn}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" xl:w-full xl:h-full h-[220px] flex relative justify-center ">
          <img
            className="z-10 top-[-129px] xl:top-[-142px] xl:left-[-25px] xl:max-h-[650px] xl:min-h-[650px] max-h-[350px] min-h-[350px] object-cover absolute "
            src="assets/outro.svg"
          />
        </div>

        <div className="z-20 relative xl:absolute flex flex-row xl:flex-col gap-[20px] w-full h-full xl:w-[60px] xl:h-[calc(100%+80px)] xl:top-[-10px]  bg-[var(--bg-default)] xl:border-x-[3px] border-y-[3px] xl:border-x-[var(--lines-contrast)]  xl:border-y-0 border-y-[var(--lines-contrast)] xl:right-[15px]  xl:pt-[20px] xl:justify-start justify-center items-center py-3 border-b-0">
          <a
            className="cursor-pointer hover:scale-105 transition-[0.3s]"
            href="https://www.linkedin.com/in/lucia-guelber/"
            target="_blank"
          >
            <AiFillLinkedin className=" text-[var(--text-h1)] text-[36px] w-fit h-fit " />
          </a>
          <a
            className="cursor-pointer hover:scale-105 transition-[0.3s]"
            href="https://github.com/lucilua/"
            target="_blank"
          >
            <AiFillGithub className=" text-[var(--text-h1)] text-[36px] w-fit h-fit" />
          </a>
          <div
            className="cursor-pointer hover:scale-105 transition-[0.3s]"
            ref={mailToRef}
            onClick={mailToCopyToClipboard}
          >
            <BiMailSend className=" text-[var(--text-h1)] text-[36px] w-fit h-fit" />
          </div>
        </div>
      </div>

      <footer className="gap-[5px] flex  border-[var(--lines-contrast)] border-t-[3px] w-full p-3 overflow-x-hidden justify-start">
        {mySkills.map((skill) => {
          return (
            <div
              key={`skills_${skill}`}
              className="flex h-fit gap-1 text-[var(--text-h1)]"
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: -3010 }}
                transition={{ ease: "linear", duration: 14.8 }}
                key={`1_${skill}`}
                className="font-[600] text-[15px] w-fit rounded-[2px] h-fit"
              >
                {skill}
              </motion.div>
              <motion.div
                initial={{ x: 1300 }}
                animate={{ x: -4470 }}
                transition={{
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
                  delay: 7,
                }}
                key={`2_${skill}`}
                className="font-[600] text-[15px] w-fit rounded-[2px] h-fit"
              >
                {skill}
              </motion.div>
              <motion.div
                initial={{ x: 1300 }}
                animate={{ x: -4470 }}
                transition={{
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
                  delay: 21.5,
                }}
                key={`3_${skill}`}
                className="font-[600] text-[15px] w-fit rounded-[2px] h-fit"
              >
                {skill}
              </motion.div>
            </div>
          )
        })}
      </footer>
    </div>
  )
}
