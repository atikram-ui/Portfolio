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
  title: "Atikram Das | Digital Forensics & Incident Response Analyst",
  description:
    "Digital Forensics & Incident Response Analyst investigating BEC and ransomware incidents through evidence-led analysis, threat hunting, and clear response recommendations.",
  generator: "v0.app",
  openGraph: {
    title: "Atikram Das | Digital Forensics & Incident Response Analyst",
    description:
      "Evidence-led digital forensics, incident response, BEC and ransomware investigations, and threat hunting.",
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
