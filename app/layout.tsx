import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const viewport: Viewport = {
  themeColor: "#080C14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: "Atikram Das | Cybersecurity & Digital Forensics Professional",
  description:
    "Cybersecurity and digital forensics professional focused on incident response, malware analysis, Windows forensics, log analysis, and SIEM/SOAR workflows.",
  generator: "v0.app",
  openGraph: {
    title: "Atikram Das | Cybersecurity & Digital Forensics Professional",
    description:
      "Digital forensics, incident response, malware analysis, Windows forensics, log analysis, and SIEM/SOAR workflows.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
