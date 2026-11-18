import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Atikram Das | DFIR & Digital Forensics",
  description:
    "Atikram Das is a digital forensics and incident response analyst focused on evidence-led investigations, threat hunting, and incident response.",
  generator: "v0.app",
  openGraph: {
    title: "Atikram Das | DFIR & Digital Forensics",
    description:
      "Digital forensics, incident response, threat hunting, and security expertise.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
