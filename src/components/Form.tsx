"use client"

import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { AiOutlineArrowRight } from "react-icons/ai"
import { animate, motion } from "framer-motion"
import { FaRegBuilding } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import { BsPostcardHeart } from "react-icons/bs"
import { RiMessageLine } from "react-icons/ri"

export function Form() {
  const formUsername = useRef(null)
  const formEmail = useRef(null)
  const formMessage = useRef(null)
  const formRef = useRef(null)
  const formBtnSend = useRef(null)

  const [simpleFormOpen, setSimpleFormOpen] = useState<boolean>(true)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function updateStateOnResize() {
      if (!carouselRef.current) return
      const { scrollWidth, offsetWidth } = carouselRef.current
      setWidth(() => scrollWidth - offsetWidth)
    }

    updateStateOnResize()

    window.addEventListener("resize", updateStateOnResize)
    return () => window.removeEventListener("resize", updateStateOnResize)
  }, [])

  return (
    <div className="w-full max-w-[1300px] flex flex-col justify-center items-center">
      <div className="p-5 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-[350px] xl:max-w-none text-center">
          <h1 className="text-[#121212] text-[2em] font-[600] xl:text-[30px]">
            Me mande uma mensagem rápida
          </h1>
          <h2 className="text-[15px]">
            ou faça um orçamento prévio mais detalhado com um simples formulário
          </h2>
        </div>

        <div className="flex gap-4 py-[30px]  w-full justify-center items-center">
          <button
            onClick={() => {
              setSimpleFormOpen(false)
              toast("Ainda não disponível", { type: "warning" })
            }}
            className="h-full w-fit bg-[var(--text-h1)] text-[var(--bg-default)] text-[14px] p-[10px] font-[600] rounded-[3px] text-nowrap xl:flex hover:bg-[var(--bg-dropdown-hover)] hover:text-[var(--text-dropdown-hover)]"
          >
            Fazer orçamento
          </button>
          <button
            onClick={() => setSimpleFormOpen(true)}
            className="underline flex gap-3 p-[10px] text-[14px] justify-center items-center group"
          >
            <AiOutlineArrowRight className="group-hover:delay-75 group-hover:translate-x-1 group-hover:duration-1 transition-[1s]" />{" "}
            Mensagem Rápida
          </button>
        </div>
      </div>

      {simpleFormOpen ? (
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
            <RiMessageLine /> Mensagem Rápida
          </h1>
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
              className="bg-transparent outline-none inset-3 shadow-[inset_0_0_12px_#0004] rounded-[4px] resize-none h-[150px] p-[10px] text-inherit peer"
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
        </motion.form>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[460px] w-full h-fit gap-4">
          <h1 className="pb-5">Mais pedidos</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileTap={{ cursor: "grabbing" }}
            ref={carouselRef}
            className=" cursor-grab overflow-hidden flex justify-center w-full gap-10"
          >
            <motion.div
              key={width}
              drag="x"
              dragConstraints={{ right: 200, left: -200 }}
              className="flex space-x-16 laptop:space-x-12 mobile:space-x-6"
            >
              <motion.div className="h-[285px] w-[230px] min-h-[285px] min-w-[230px] bg-gradient-to-t to-[#fff] hover:border-[#465d88] transition-[0.3s] from-[#eee] border-[1px] border-[#f4f4f4] rounded-[12px] flex justify-center items-center flex-col">
                <span>
                  <FaRegBuilding className="text-[35px] text-[#121212]" />
                </span>
                <h1 className="text-[23px] font-[500]">Institucional</h1>
                <div className="flex  flex-col pt-[30px] gap-3">
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="underline"
                  >
                    Saiba mais
                  </button>
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="bg-[#090e14]  text-white rounded-[30px] px-5 py-1"
                  >
                    Quero esse
                  </button>
                </div>
              </motion.div>

              <motion.div className="h-[300px] w-[250px] max-h-[300px] min-w-[250px] bg-gradient-to-t to-[#fff] hover:border-[#465d88] transition-[0.3s] from-[#eee] border-[1px] border-[#f4f4f4] rounded-[12px] flex justify-center items-center flex-col">
                <span>
                  <CgWebsite className="text-[35px] text-[#121212]" />
                </span>
                <h1 className="text-[23px] font-[500]">Landing Page</h1>
                <div className="flex  flex-col pt-[30px] gap-3">
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="underline"
                  >
                    Saiba mais
                  </button>
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="bg-[#090e14]  text-white rounded-[30px] px-5 py-1"
                  >
                    Quero esse
                  </button>
                </div>
              </motion.div>

              <motion.div className="h-[285px] w-[230px] min-h-[285px] min-w-[230px] bg-gradient-to-t to-[#fff] hover:border-[#465d88] transition-[0.3s] from-[#eee] border-[1px] border-[#f4f4f4] rounded-[12px] flex justify-center items-center flex-col">
                <span>
                  <BsPostcardHeart className="text-[35px] text-[#121212]" />
                </span>
                <h1 className="text-[23px] font-[500]">Portfólio</h1>
                <div className="flex  flex-col pt-[30px] gap-3">
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="underline"
                  >
                    Saiba mais
                  </button>
                  <button
                    onClick={() => {
                      toast("Ainda não disponível", { type: "warning" })
                    }}
                    className="bg-[#090e14]  text-white rounded-[30px] px-5 py-1"
                  >
                    Quero esse
                  </button>
                </div>
              </motion.div>
              {/* end caroussel */}
            </motion.div>
          </motion.div>

          <button
            className="underline flex gap-3 p-[10px] text-[14px] justify-center items-center group "
            onClick={() => {
              toast("Ainda não disponível", { type: "warning" })
            }}
          >
            Quero outro tipo de site
          </button>
        </div>
      )}
      <iframe
        src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfDbayAADAu06mZo2VSV5nJvENCnEJlqOVhkxL9mE2D8yNXEg/formResponse"
        name="iframeForm"
        style={{ display: "none" }}
        id="iframeForm"
      />
    </div>
  )
}
