'use client'

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useTranslation } from "../../hooks/useTranslation";

export function TalkToMeSectionSeparator() {

    const { translations, lang } = useTranslation()

    return (
        <p className="xl:text-[18px] text-nowrap text-sm w-full h-fit flex justify-center items-center font-[500] py-4 bg-black text-[#fff]">
            <a href={`/${lang}#contact`} className="underline mr-1 flex gap-2 justify-center items-center">
                <IoChatbubbleEllipsesOutline /> {translations.talkToMeSectionSeparator_1}
            </a>{" "}
            {translations.talkToMeSectionSeparator_2}{" "}
            <span className="bg-[#121212] text-[#fff]  ml-1 px-1 rounded-[3px]">
                {translations.talkToMeSectionSeparator_3}
            </span>
        </p>
    )
}