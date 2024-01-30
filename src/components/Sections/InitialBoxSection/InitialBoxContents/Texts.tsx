"use client"

import Link from "next/link"
import { useTranslation } from "../../../../hooks/useTranslation"

export function Texts() {

    const { translations, lang } = useTranslation()

    return (
        <div className="xl:py-[70px] py-[20px] xl:max-w-[500px] max-w-[700px] px-[10px] m-auto xl:m-0">
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
                <div className="flex  mt-[30px] z-20  m-auto xl:m-0 xl:w-fit w-full justify-center gap-2 xl:pt-4 pt-1">
                    <Link
                        href={`/${lang}/#contact`}
                        className="bg-[var(--btn-bg-primary)] text-[var(--btn-text-primary)] px-[30px] py-[10px] font-[500] rounded-[3px] text-nowrap"
                        aria-label="contact me now"
                        title="contact me now"
                    >
                        {translations.initial_box.primary_btn}
                    </Link>
                    <Link
                        href={`/${lang}/about`}
                        className="bg-[var(--bg-medium)] text-[var(--text-h1)] px-[30px] py-[10px] font-[500] rounded-[3px] text-nowrap"
                        aria-label="about me"
                        title="about me"
                    >
                        {translations.initial_box.secondary_btn}
                    </Link>
                </div>
            </div>
        </div>
    )
}