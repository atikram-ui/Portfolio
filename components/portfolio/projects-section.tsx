import Link from "next/link"
import { ArrowUpRight, FileSearch, Fingerprint, Network } from "lucide-react"
import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

const projectMarks = [FileSearch, Fingerprint, Network]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-block section-block-alt">
      <div className="container">
        <SectionReveal>
          <header className="section-heading">
            <span className="section-kicker">03 / Selected investigations</span>
            <h2 className="section-title">Forensic projects built around traceable evidence.</h2>
            <p className="section-description">
              Project summaries describe the stated objectives and workflow. Detailed pages distinguish documented facts from information not supplied.
            </p>
          </header>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => {
              const Mark = projectMarks[index]
              return (
                <article className="project-card" key={project.slug}>
                  <div className="project-card-heading">
                    <span className="project-number">PROJECT / {project.number}</span>
                    <span className="project-mark"><Mark aria-hidden="true" size={18} /></span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-objectives" aria-label={`${project.title} objectives`}>
                    {project.objectives.slice(0, 2).map((objective) => <li key={objective}>{objective}</li>)}
                  </ul>
                  <div className="tech-list" aria-label="Technology stack">
                    {project.technology.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
                  </div>
                  <Link className="project-link" href={`/projects/${project.slug}`}>
                    View Details <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </article>
              )
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
