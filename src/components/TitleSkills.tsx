"use client"

import { useTranslation } from "../hooks/useTranslation"

export function TitleSkills({
  title,
  main,
}: {
  title: "frontend" | "backend" | "others"
  main?: boolean
}) {
  const { translations } = useTranslation()

  return (
    <>
      {main ? (
        <div className="flex w-full h-fit justify-center items-center">
          <h3 className="font-[600] text-[20px] py-4 w-full justify-center items-center flex text-[var(--bg-default)] bg-[var(--text-h1)] rounded-tl-[12px] rounded-tr-[12px]">
            {title === "others"
              ? translations.skills.others.charAt(0).toUpperCase() +
                translations.skills.others.slice(1)
              : title.charAt(0).toUpperCase() + title.slice(1)}
          </h3>
          <h4 className="bg-[var(--btn-text-primary)] text-[var(--btn-bg-primary)] rounded-[30px] px-5 border-[3px] font-[700] text-[15px] border-[var(--btn-bg-primary)] absolute top-[-12px] w-fit h-fit">
            {translations.skills.main.charAt(0).toUpperCase() +
              translations.skills.main.slice(1)}
          </h4>
        </div>
      ) : (
        <h3 className="font-[600] text-[20px] py-4 w-full justify-center items-center flex bg-[var(--bg-medium)] text-[var(--text-h1)] rounded-tl-[12px] rounded-tr-[12px]">
          {title === "others"
            ? translations.skills.others.charAt(0).toUpperCase() +
              translations.skills.others.slice(1)
            : title.charAt(0).toUpperCase() + title.slice(1)}
        </h3>
      )}
    </>
  )
}
