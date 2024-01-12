"use client"

import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext)
  return { theme, setTheme, toggleTheme }
}
