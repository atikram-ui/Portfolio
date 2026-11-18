import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const editorial = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
})

const inter = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Atikram Das — Cybersecurity & Digital Forensics",
  description:
    "Atikram Das is a cybersecurity and digital forensics professional focused on investigation, incident response, and evidence-led security.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${editorial.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
