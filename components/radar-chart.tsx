"use client"

import { motion } from "framer-motion"

interface RadarChartProps {
  skills: { name: string; level: number }[]
}

export function RadarChart({ skills }: RadarChartProps) {
  const centerX = 150
  const centerY = 150
  const radius = 100

  const getPointPosition = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
    const x = centerX + Math.cos(angle) * ((radius * level) / 100)
    const y = centerY + Math.sin(angle) * ((radius * level) / 100)
    return { x, y }
  }

  const pathData =
    skills
      .map((skill, index) => {
        const { x, y } = getPointPosition(index, skill.level)
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ") + " Z"

  return (
    <div className="relative w-80 h-80 mx-auto radar-chart">
      <svg width="300" height="300" className="absolute inset-0">
        {/* Grid circles */}
        {[20, 40, 60, 80, 100].map((percent) => (
          <circle
            key={percent}
            cx={centerX}
            cy={centerY}
            r={(radius * percent) / 100}
            fill="none"
            stroke="rgba(15, 240, 252, 0.2)"
            strokeWidth="1"
            className="animate-pulse"
          />
        ))}

        {/* Grid lines */}
        {skills.map((_, index) => {
          const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="rgba(15, 240, 252, 0.3)"
              strokeWidth="1"
            />
          )
        })}

        {/* Data area */}
        <motion.path
          d={pathData}
          fill="rgba(15, 240, 252, 0.1)"
          stroke="#0FF0FC"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="drop-shadow-lg"
        />

        {/* Data points */}
        {skills.map((skill, index) => {
          const { x, y } = getPointPosition(index, skill.level)
          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="#0FF0FC"
              stroke="#A239CA"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="drop-shadow-md"
            />
          )
        })}

        {/* Percentage labels on circles */}
        {[20, 40, 60, 80, 100].map((percent) => (
          <text
            key={percent}
            x={centerX}
            y={centerY - (radius * percent) / 100 - 5}
            textAnchor="middle"
            className="fill-primary/60 text-xs font-mono"
          >
            {percent}%
          </text>
        ))}
      </svg>

      {/* Skill labels */}
      {skills.map((skill, index) => {
        const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
        const labelRadius = radius + 35
        const x = centerX + Math.cos(angle) * labelRadius
        const y = centerY + Math.sin(angle) * labelRadius

        return (
          <motion.div
            key={index}
            className="absolute text-sm text-primary font-medium transform -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
          >
            <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded border border-primary/20">
              {skill.name}
              <div className="text-xs text-muted-foreground">{skill.level}%</div>
            </div>
          </motion.div>
        )
      })}

      {/* Center point */}
      <motion.div
        className="absolute w-3 h-3 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: centerX, top: centerY }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
    </div>
  )
}
