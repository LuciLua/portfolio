"use client"

import { useEffect, useRef } from "react"
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { useMenuStateColor } from "../../hooks/useMenuStateColor"

import { useSpring } from "framer-motion"
import { HomepageWrap } from "../Wrap/HomepageWrap"

export function CreativeSection() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    smooth: 900,
    layoutEffect: true,
    offset: [-2, 1.5],
    axis: "y",
  })

  const x = useTransform(scrollYProgress, [10, 0], ["100%", "0%"])
  const xN = useTransform(scrollYProgress, [0.4, -9], ["0%", "0%"])
  const xC = useTransform(scrollYProgress, [1, -1], ["0%", "100%"])

  const y = useTransform(scrollYProgress, [0, 0.7], [-1000, 100])
  const yX = useTransform(scrollYProgress, [0, 0.6], [2000, 0])

  const isInView = useInView(targetRef, { margin: "-50%" })

  const xs = useSpring(0)

  const { toggleMenuStateColor, menuStateColor } = useMenuStateColor()

  useEffect(() => {
    if (isInView) {
      toggleMenuStateColor(true)
    } else {
      toggleMenuStateColor(false)
    }
  }, [isInView])

  return (
    <HomepageWrap type="full" className="bg-[#000] overflow-hidden">
      <div
        ref={targetRef}
        className="h-[150vh] relative w-full max-w-[1300px] flex justify-center items-center"
      >
        <motion.div
          className="font-[900] absolute text-[300px] w-fit h-fit  text-[#ffffff03] top-0"
          style={{ x: x, transition: "0.3s" }}
        >
          web experiences. design. development. art. creativity. modern.
          exclusivity. minimalism. value.
        </motion.div>
        <div className="text-[35px] top-0 font-[700] flex-col gap-4 justify-center bg-[#000] text-[#fff] h-[80svh] sticky flex  items-center scroll-smooth">
          <motion.div
            key={"slide_1"}
            initial={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col relative"
            style={{ x: x, y: y, transition: "0.3s", scale: 1 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-[5vw] relative h-[10px]">when</h2>
            <h1 className="text-[16vw]">Creativity</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            key={"slide_2"}
            style={{ x: xN, y: yX, transition: "0.3s" }}
            className="flex gap-4 flex-col justify-start relative"
            exit={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-[5vw] relative h-[10px] text-end">meets</h2>
            <h1 className="text-[15vw] ">Innovation</h1>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between px-1 text-[100%] bottom-0 absolute text-nowrap w-full h-fit bg-yellow-400 text-black">
        <motion.div
          style={{ x: xC, transition: "0.3s" }}
          className="flex justify-between w-full"
        >
          <p className="font-[800]">
            web experiences. design. development. art. creativity. modern.
            exclusivity. minimalism. value.
          </p>
          <p className="font-[500]">LuciLua@2024</p>
        </motion.div>
      </div>
    </HomepageWrap>
  )
}
