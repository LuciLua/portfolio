'use client'

import { useTheme } from "../../../../hooks/useTheme"

export function Footer() {
    const { theme } = useTheme()
    return (
        <footer className={`gap-[5px] flex  border-[var(--lines-contrast)] border-t-[3px] w-full p-3 overflow-x-hidden justify-center ${theme == 'dark' ? 'pattern-topography-[#e8eaff]/100' : 'pattern-topography-[#121212]/100'}`} />
    )
}