import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google"


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // escolha os pesos que usar
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Do colo para o berço em 7 dias",
  description: "Landing de curso — estrutura em Next.js + Tailwind",
  openGraph: {
    title: "Do colo para o berço em 7 dias",
    description: "Ensinar bebê a dormir no berço — landing em Next.js",
    type: "website",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f6f7ff] text-white antialiased">
        {children}
      </body>
    </html>
  )
}