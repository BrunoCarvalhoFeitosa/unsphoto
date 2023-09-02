"use client"

import type { UnsphotoApiCompleteType } from "@/@types/typings"
import React, { createContext, useState, useContext, ReactNode } from "react"

type LightboxContextType = {
  isLightboxOpen: boolean;
  openLightbox: () => void;
  closeLightbox: () => void;
  lightboxData: UnsphotoApiCompleteType[];
  setLightboxData: (data: UnsphotoApiCompleteType[]) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

type LightboxContextProviderProps = {
  children: ReactNode;
}

export const LightboxProvider: React.FC<LightboxContextProviderProps> = ({ children }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)
  const [lightboxData, setLightboxData] = useState<UnsphotoApiCompleteType[]>([])

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return (
    <LightboxContext.Provider
      value={{
        isLightboxOpen,
        openLightbox,
        closeLightbox,
        lightboxData,
        setLightboxData,
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext)

  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }

  return context
}