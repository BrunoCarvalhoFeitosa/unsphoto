"use client"

import type { UnsphotoApiUserType, UnsphotoApiLinksType, UnsphotoApiUrlsType } from "@/@types/typings"
import React, { createContext, useState, useContext, ReactNode } from "react"

type LightboxContextType = {
  isLightboxOpen: boolean;
  lightBoxUserData: UnsphotoApiUserType;
  lightBoxLinksData: UnsphotoApiLinksType;
  lightBoxUrlsData: UnsphotoApiUrlsType;
  openLightbox: () => void;
  closeLightbox: () => void;
  setLightBoxUserData: (userData: UnsphotoApiUserType) => void;
  setLightBoxLinksData: (linksData: UnsphotoApiLinksType) => void;
  setLightBoxUrlsData: (urlsData: UnsphotoApiUrlsType) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

type LightboxContextProviderProps = {
  children: ReactNode;
}

export const LightboxProvider: React.FC<LightboxContextProviderProps> = ({ children }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false)
  const [lightBoxUserData, setLightBoxUserData] = useState({})
  const [lightBoxLinksData, setLightBoxLinksData] = useState({})
  const [lightBoxUrlsData, setLightBoxUrlsData] = useState({})

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
        setLightBoxUserData,
        setLightBoxLinksData,
        setLightBoxUrlsData,
        lightBoxUserData,
        lightBoxLinksData,
        lightBoxUrlsData,
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