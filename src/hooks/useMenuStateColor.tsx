"use client"

import { useContext } from "react"
import { MenuStateColor } from "../contexts/MenuStateColor"

export function useMenuStateColor() {
  const { menuStateColor, toggleMenuStateColor } = useContext(MenuStateColor)
  return { menuStateColor, toggleMenuStateColor }
}
