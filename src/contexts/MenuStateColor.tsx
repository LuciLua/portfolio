import { createContext, useState } from "react"

export const MenuStateColor = createContext<any>(false)

export function MenuStateColorProvider({ children }) {
  const [menuStateColor, setMenuStateColor] = useState<boolean | null>(false)

  function toggleMenuStateColor(state) {
    setMenuStateColor(state)
  }

  return (
    <MenuStateColor.Provider value={{ toggleMenuStateColor, menuStateColor }}>
      {children}
    </MenuStateColor.Provider>
  )
}
