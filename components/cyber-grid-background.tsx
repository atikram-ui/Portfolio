"use client"

import { motion } from "framer-motion"

export function CyberGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden background-grid">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(0,230,255,0.03), transparent 10%),
            linear-gradient(rgba(0, 230, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 230, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "200px 200px, 16px 16px, 16px 16px",
        }}
      />

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
          style={{
            top: `${10 + i * 12}%`,
            left: "-100%",
            width: "200%",
          }}
          animate={{
            x: ["0%", "100%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.22, 1, 0.36, 1],
            delay: i * 0.8,
          }}
        />
      ))}

      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`scan-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"
          style={{
            top: `${25 + i * 25}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}
