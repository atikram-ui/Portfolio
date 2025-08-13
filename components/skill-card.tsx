import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-3 font-serif text-lg">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
