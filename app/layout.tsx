import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Atikram Das | Digital Forensics & Incident Response Analyst",
  description:
    "Digital Forensics and Incident Response analyst investigating digital evidence, reconstructing cyber incidents, and supporting evidence-driven response.",
  applicationName: "Atikram Das — DFIR Portfolio",
  generator: "v0.app",
  openGraph: {
    title: "Atikram Das | Digital Forensics & Incident Response Analyst",
    description:
      "Digital forensics, incident investigation, evidence handling and selected DFIR projects.",
    type: "website",
    siteName: "Atikram Das — DFIR Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Atikram Das | Digital Forensics & Incident Response Analyst",
    description:
      "Digital forensics, incident investigation, evidence handling and selected DFIR projects.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080C14",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
