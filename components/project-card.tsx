import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  technologies?: string[]
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <CardHeader className="relative">
        <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
