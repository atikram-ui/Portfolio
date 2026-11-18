import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetailPage } from "@/components/project-detail-page"
import { projects } from "@/data/projects"

type ProjectRouteProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: "Project not found | Atikram Das" }

  return {
    title: `${project.title} | Atikram Das`,
    description: project.description,
  }
}

export default async function ProjectRoute({ params }: ProjectRouteProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return <ProjectDetailPage project={project} />
}
