import React from "react"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { SearchProvider } from "@/contexts/SearchContext"
import { LightboxProvider } from "@/contexts/LightboxContext"

interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SearchProvider>
      <LightboxProvider>
        <Header />
        <main className="pt-[90px]">
          {children}
        </main>
      </LightboxProvider>
    </SearchProvider>
  )
}

export default Layout