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
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute text-primary/30 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </motion.div>
        ))}
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h20v20h20v20h20v20h-20v-20h-20v-20h-20z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-primary/20"
              />
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary/40" />
              <circle cx="70" cy="70" r="2" fill="currentColor" className="text-secondary/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated data streams */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Scanning grid lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`grid-v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
            style={{
              left: `${15 + i * 17.5}%`,
              top: 0,
              bottom: 0,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating cyber particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`cyber-particle-${i}`}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Radar sweep effect */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
        <motion.div
          className="absolute inset-0 border border-primary/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border border-secondary/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: 1,
          }}
        />
      </div>

      {/* Corner security brackets */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-primary/40"></div>
      <div className="absolute top-6 right-6 w-20 h-20 border-r-2 border-t-2 border-primary/40"></div>
      <div className="absolute bottom-6 left-6 w-20 h-20 border-l-2 border-b-2 border-primary/40"></div>
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-primary/40"></div>

      {/* Central security grid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 border border-primary/30 rounded-lg">
          <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-px">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="bg-primary/20"
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: (i * 0.05) % 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
