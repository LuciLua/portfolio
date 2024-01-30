'use client'

import { useRef } from "react"
import { useTheme } from "../../../../hooks/useTheme"
import { useTranslation } from "../../../../hooks/useTranslation"
import { toast } from "react-toastify"
import { BiMailSend } from "react-icons/bi"

export function MailCopy() {
    const mailToRef = useRef(null)

    const { translations, lang } = useTranslation()
    const { theme } = useTheme()

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
    return (
        <div
            className="cursor-pointer hover:scale-105 transition-[0.3s]"
            ref={mailToRef}
            onClick={mailToCopyToClipboard}
        >
            <BiMailSend className=" text-[var(--text-h1)] text-[36px] w-fit h-fit" />
        </div>
    )

}