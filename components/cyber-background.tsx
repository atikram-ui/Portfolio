"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CyberBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Digital rain effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute text-primary/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          >
            {Math.random().toString(36).substring(2, 6)}
          </motion.div>
        ))}
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M20 20h30v30h30v30h-30v-30h-30z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary/15"
              />
              <circle cx="35" cy="35" r="2" fill="currentColor" className="text-primary/25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated data streams */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              top: `${15 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Floating cyber particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`cyber-particle-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Simplified radar sweep effect */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 opacity-15">
        <motion.div
          className="absolute inset-0 border border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Corner security brackets */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-primary/30"></div>
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-primary/30"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-primary/30"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-primary/30"></div>
    </div>
  )
}
