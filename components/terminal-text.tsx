"use client"

import { useEffect, useState } from "react"

interface TerminalTextProps {
  text: string
  delay?: number
  className?: string
  showCursor?: boolean
}

export function TerminalText({ text, delay = 100, className = "", showCursor = true }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTerminalCursor, setShowTerminalCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (showCursor) {
      // Start cursor blinking after text is complete
      const cursorInterval = setInterval(() => {
        setShowTerminalCursor((prev) => !prev)
      }, 500)

      return () => clearInterval(cursorInterval)
    }
  }, [currentIndex, text, delay, showCursor])

  return (
    <span className={`${className} font-mono neon-text`}>
      {displayText}
      {showCursor && currentIndex === text.length && (
        <span className={`${showTerminalCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
      )}
    </span>
  )
}
