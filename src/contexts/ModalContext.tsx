"use client"
import { createContext, useState } from "react"

export const ModalContext = createContext<any>({})

export function ModalContextProvider({ children }) {
  const [modalType, setModalType] = useState<any>()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<any>({})

  function toggleModalOpen() {
    setModalOpen(!modalOpen)
  }

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        modalContent,
        modalType,
        toggleModalOpen,
        setModalContent,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
