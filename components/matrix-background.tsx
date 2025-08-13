"use client"

import { useEffect, useState } from "react"

export function MatrixBackground() {
  const [drops, setDrops] = useState<number[]>([])

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20)
    const initialDrops = Array(columns).fill(1)
    setDrops(initialDrops)

    const interval = setInterval(() => {
      setDrops((prev) => prev.map((drop) => (drop * 20 > window.innerHeight && Math.random() > 0.975 ? 1 : drop + 1)))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 overflow-hidden">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute text-primary font-mono text-sm"
          style={{
            left: i * 20,
            top: drop * 20,
            animation: "matrix-rain 3s linear infinite",
          }}
        >
          {String.fromCharCode(0x30a0 + Math.random() * 96)}
        </div>
      ))}
    </div>
  )
}
