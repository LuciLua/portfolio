"use client"

import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext<any>(null)

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactElement
}) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const local_theme = localStorage.getItem("theme")
    ChangeThemeDOM(local_theme)
    setTheme(local_theme)
  }, [theme])

  function toggleTheme() {
    const local_theme = localStorage.getItem("theme")
    const localSetItemAndChangeDOM = ([item, mode]) => {
      localStorage.setItem(item, mode)
      ChangeThemeDOM(mode)
      setTheme(mode)
    }

    local_theme === "dark"
      ? localSetItemAndChangeDOM(["theme", "light"])
      : localSetItemAndChangeDOM(["theme", "dark"])
  }

  function ChangeThemeDOM(theme: "dark" | "light" | string) {
    const removeAndAddClasses = ([c_remove, c_add]) => {
      document.body.classList.remove(c_remove)
      document.body.classList.add(c_add)
    }
    theme === "dark"
      ? removeAndAddClasses(["light", "dark"])
      : removeAndAddClasses(["dark", "light"])
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
