"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { MoreText } from "./Btns/MoreText"
import { useTranslation } from "../hooks/useTranslation"

type EducationBoxProps = {
  title: string
  duration: string
  date: string
  description: string
  credentials?: boolean
  credentialsLink?: string
  credentialsLabel?: string
  style?: string
  moreText?: boolean
  idCourse: string
}

export function EducationBox({
  title,
  duration,
  date,
  description,
  credentialsLink,
  credentials,
  credentialsLabel,
  style,
  moreText,
  idCourse,
}: EducationBoxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const { translations } = useTranslation()

  const course = {
    title,
    duration,
    date,
    description,
    credentialsLink,
    credentials,
    credentialsLabel,
    style,
    moreText,
    idCourse,
  }

  const [newCourseEducation, setNewCourseEducation] = useState(course)

  async function getNewEducation() {
    const translatedCourse = await translations?.education

    if (idCourse === "webModerno") {
      setNewCourseEducation(await translatedCourse?.box_course_webModerno)
    }
    if (idCourse === "biArts") {
      setNewCourseEducation(await translatedCourse?.box_course_biArts)
    }
    if (idCourse === "biCinema") {
      setNewCourseEducation(await translatedCourse?.box_course_biCinema)
    }
  }

  useEffect(() => {
    getNewEducation()
  }, [idCourse])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`${style} border-[1px] border-[var(--border-medium)] shadow-lg mr-auto flex flex-col p-4 justify-between  rounded-[4px] h-fit bg-[var(--bg-medium-soft)] xl:w-full w-[800px] xl:m-0 m-auto`}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="font-[600] text-[16px] text-[var(--text-h1)]">
            {newCourseEducation ? newCourseEducation.title : title}
          </h1>
          <span className="text-nowrap max-h-[25px] font-[500] text-[14px]  bg-[var(--bg-medium)] text-[var(--text-default)] rounded-full px-2 flex justify-center items-center gap-2">
            <AiOutlineClockCircle />
            {newCourseEducation ? newCourseEducation.duration : duration}
          </span>
        </div>
        <h2 className="font-[500] text-[14px] py-[4px] text-[var(--text-h2)]">
          {newCourseEducation ? newCourseEducation.date : date}
        </h2>
      </div>
      <div className="w-full mt-[10px] text-[15px] text-[var(--text-default)]">
        {moreText ? (
          <MoreText numOfLines={2}>
            {newCourseEducation ? newCourseEducation.description : description}
          </MoreText>
        ) : (
          <p>
            {newCourseEducation ? newCourseEducation.description : description}
          </p>
        )}
      </div>
      {newCourseEducation && credentials && (
        <a
          href={credentialsLink}
          target="_blank"
          className="self-start py-[10px] font-[400] text-[14px] underline text-[var(--text-default)]"
        >
          {newCourseEducation
            ? newCourseEducation.credentials
            : credentialsLabel}
        </a>
      )}
    </motion.div>
  )
}
