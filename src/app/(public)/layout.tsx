import type { Metadata } from "next"
import Layout from "@/components/common/Layout"
import "react-lazy-load-image-component/src/effects/blur.css"
import "../../styles/globals.css"

export const metadata: Metadata = {
  title: "Unsphoto, fotos de máxima qualidade para download gratuito",
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://github.com/BrunoCarvalhoFeitosa",
  },
  description: "Unsphoto, faça download de imagens de qualidade gratuitamente.",
  icons: {
    icon: "/fav.png",
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  )
}