"use client"

import { useRef } from "react"
import { toast } from "react-toastify"
import { AiOutlineArrowRight } from "react-icons/ai"
import { motion } from "framer-motion"
import { RiMessageLine } from "react-icons/ri"
import { useTranslation } from "../../../hooks/useTranslation"

export function Form() {
  const formUsername = useRef(null)
  const formEmail = useRef(null)
  const formMessage = useRef(null)
  const formRef = useRef(null)
  const formBtnSend = useRef(null)
  const { lang, translations } = useTranslation()

  return (
    <div className="w-full max-w-[1300px] flex flex-col justify-center items-center">
      <div className="p-5 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-[350px] xl:max-w-none text-center">
          <h1 className="text-[#121212] text-[2em] font-[600] xl:text-[30px]">
            {translations.contact.title_message}
          </h1>
          <h2 className="text-[15px]">
            {translations.contact.subtitle_budget}
          </h2>
        </div>

        <div className="flex gap-4 py-[30px]  w-full justify-center items-center">
          <a
            href={`/${lang}/services/budget`}
            className="h-full w-fit bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap xl:flex hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]"
          >
            {translations.contact.btn_budget}
          </a>
          <button
            onClick={() => formUsername.current.focus()}
            className="underline flex gap-3 p-[10px] text-[14px] justify-center items-center group"
          >
            <AiOutlineArrowRight className="group-hover:delay-75 group-hover:translate-x-1 group-hover:duration-1 transition-[1s]" />{" "}
            {translations.contact.btn_send_message}
          </button>
        </div>
      </div>
      <motion.form
        initial={{ y: -50, opacity: 0 }}
        exit={{ y: 0, opacity: 1 }}
        animate={{ y: 10, opacity: 1 }}
        ref={formRef}
        className="flex flex-col bg-white w-full  max-w-[900px] min-h-[460px] h-[460px] xl:rounded-[12px] inset-3 xl:shadow-[inset_0_0_12px_#0004] p-[30px] gap-[30px]"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfDbayAADAu06mZo2VSV5nJvENCnEJlqOVhkxL9mE2D8yNXEg/formResponse"
        target="iframeForm"
      >
        <h1 className="font-[600] text-[20px] flex gap-2 justify-center items-center w-fit">
          <RiMessageLine /> {translations.contact.btn_send_message}
        </h1>
        <div className="flex flex-col w-full relative mt-[20px]">
          <input
            ref={formUsername}
            name="entry.1340990935"
            className="bg-transparent border-b-[2px] border-b-[#bdbdbd] outline-none valid:border-[#5b5b5b] focus:border-[#5b5b5b] peer "
            required
            type="text"
            id="name"
            title={translations.contact.form.name}
          />
          <label
            className="pointer-events-none  absolute top-[0px] transition-[0.3s] peer-focus:top-[-20px] peer-focus:text-[#7192a2] peer-focus:font-[500] peer-focus:text-[14px] peer-valid:top-[-20px] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="name"
            title={translations.contact.form.name}
          >
            {translations.contact.form.name}
          </label>
        </div>
        <div className="flex flex-col w-full relative">
          <input
            ref={formEmail}
            className="bg-transparent border-b-[2px] border-b-[#bdbdbd] outline-none valid:border-[#5b5b5b] focus:border-[#5b5b5b] peer"
            required
            name="entry.1638245563"
            type="text"
            id="email"
            title={translations.contact.form.email}
          />
          <label
            className="pointer-events-none  absolute top-[0px] peer-focus:top-[-20px] peer-focus:text-[#7192a2] peer-focus:font-[500] peer-focus:text-[14px] peer-valid:top-[-20px] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="email"
            title={translations.contact.form.email}
          >
            {translations.contact.form.email}
          </label>
        </div>
        {/* <a href="" className="text-[#000] underline">
          or use your google account
        </a> */}
        <div className="flex flex-col w-full relative">
          <textarea
            id="message"
            ref={formMessage}
            required
            name="entry.1937766715"
            className="bg-transparent outline-none inset-3 shadow-[inset_0_0_12px_#0004] rounded-[4px] resize-none h-[150px] p-[10px] text-inherit peer"
            title={translations.contact.form.message}
          />
          <label
            className="p-[10px] pointer-events-none  absolute top-[0px] peer-focus:top-[-30px] peer-focus:text-[#7192a2] peer-focus:font-[500] peer-focus:text-[14px] peer-focus:left-[-10px] peer-valid:top-[-30px] peer-valid:left-[-10px] transition-[0.3s] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="message"
            title={translations.contact.form.message}
          >
            {translations.contact.form.message}
          </label>
        </div>
        <button
          ref={formBtnSend}
          className="bg-[#121212] text-[#fff] p-3"
          title={translations.contact.btn_send_message_form}
          onClick={async (e) => {
            e.preventDefault()
            if (
              formUsername.current.value.length > 2 &&
              formEmail.current.value.length > 4 &&
              formMessage.current.value.length > 0
            ) {
              formUsername.current.style.pointerEvents = "none"
              formEmail.current.style.pointerEvents = "none"
              formMessage.current.style.pointerEvents = "none"
              formMessage.current.style.backgroundColor = "#ddd"
              formBtnSend.current.style.pointerEvents = "none"
              formBtnSend.current.textContent = "Mensagem enviada"
              formBtnSend.current.style.backgroundColor = "#777"
              await formRef.current.submit()
              toast("Mensagem enviada com sucesso!", { type: "success" })
            } else {
              toast("Preencha todos os campos!", { type: "error" })
            }
          }}
        >
          {translations.contact.btn_send_message_form}
        </button>
      </motion.form>
      <iframe
        src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfDbayAADAu06mZo2VSV5nJvENCnEJlqOVhkxL9mE2D8yNXEg/formResponse"
        name="iframeForm"
        style={{ display: "none" }}
        id="iframeForm"
      />
    </div>
  )
}
