"use client"

import { useRef } from "react"
import { toast } from "react-toastify"

export function Form() {
  const formUsername = useRef(null)
  const formEmail = useRef(null)
  const formMessage = useRef(null)
  const formRef = useRef(null)
  const formBtnSend = useRef(null)

  return (
    <div className="w-full max-w-[900px] p-10">
      <h1 className="bg-[#000] text-[#fff] px-8 py-2">Contate-me</h1>
      <form
        ref={formRef}
        className="flex flex-col max-w-[900px] min-h-[300px] h-fit border-[1px] rounded-[12px] mt-[20px] inset-3 shadow-[inset_0_0_12px_#0004] p-[30px] gap-[30px]"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfDbayAADAu06mZo2VSV5nJvENCnEJlqOVhkxL9mE2D8yNXEg/formResponse"
        target="iframeForm"
      >
        <div className="flex flex-col w-full relative mt-[20px]">
          <input
            ref={formUsername}
            name="entry.1340990935"
            className="bg-transparent border-b-[2px] border-b-[#bdbdbd] outline-none valid:border-[#5b5b5b] focus:border-[#5b5b5b] peer "
            required
            type="text"
            id="name"
          />
          <label
            className="pointer-events-none  absolute top-[0px] transition-[0.3s] peer-valid:top-[-20px] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="name"
          >
            Your Name
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
          />
          <label
            className="pointer-events-none  absolute top-[0px] peer-valid:top-[-20px] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="email"
          >
            Your Email
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
            className="bg-transparent outline-none inset-3 shadow-[inset_0_0_12px_#0004] rounded-[4px] resize-none h-[200px] p-[10px] text-inherit peer"
          />
          <label
            className="p-[10px] pointer-events-none  absolute top-[0px] peer-valid:top-[-30px] peer-valid:left-[-10px] transition-[0.3s] peer-valid:text-[#7192a2] peer-valid:font-[500] peer-valid:text-[14px]"
            htmlFor="message"
          >
            Message
          </label>
        </div>

        <button
          ref={formBtnSend}
          className="bg-[#121212] text-[#fff] p-3"
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
          Send message
        </button>
      </form>
      <iframe
        src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfDbayAADAu06mZo2VSV5nJvENCnEJlqOVhkxL9mE2D8yNXEg/formResponse"
        name="iframeForm"
        style={{ display: "none" }}
        id="iframeForm"
      />
    </div>
  )
}
