"use client"

import { useContext } from "react"
import { ModalContext } from "../contexts/ModalContext"
export function useModal() {
  const {
    modalOpen,
    toggleModalOpen,
    setModalContent,
    modalContent,
    modalType,
    setModalType,
  } = useContext(ModalContext)
  return {
    modalOpen,
    toggleModalOpen,
    setModalContent,
    modalContent,
    modalType,
    setModalType,
  }
}
