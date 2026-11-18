import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { portfolioData } from "@/data/content"
import { SiteNav } from "@/components/portfolio/site-nav"

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioData.projects.find((item) => item.slug === slug)

  if (!project) return { title: "Project not found | Atikram Das" }

  return {
    title: `${project.title} | Atikram Das`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Atikram Das`,
      description: project.description,
      type: "article",
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioData.projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav />
      <main id="main-content" className="container">
        <div className="detail-hero">
          <Link className="detail-back" href="/#projects">
            <ArrowLeft aria-hidden="true" size={15} /> Back to projects
          </Link>
          <div className="detail-hero-content">
            <span className="section-kicker">Project / {project.number} · Digital Forensics & Incident Response</span>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-summary">{project.description}</p>
            <div className="detail-stack" aria-label="Technology and methods">
              {project.technology.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
            </div>
          </div>
        </div>
        <div className="detail-main">
          <div className="detail-grid">
            <section className="detail-card">
              <span className="detail-index">01 / Problem</span>
              <h2 className="detail-card-title">Investigation context</h2>
              <p className="detail-card-copy">{project.problem}</p>
            </section>
            <section className="detail-card">
              <span className="detail-index">02 / Objectives</span>
              <h2 className="detail-card-title">Investigation objectives</h2>
              <ul className="detail-list">
                {project.objectives.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </section>
            <section className="detail-card detail-card-wide">
              <span className="detail-index">03 / Architecture</span>
              <h2 className="detail-card-title">Evidence-to-output flow</h2>
              <ol className="workflow-list">
                {project.architecture.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <p className="workflow-note">Summary-level flow based on the supplied project description; implementation internals are not inferred.</p>
            </section>
            <section className="detail-card">
              <span className="detail-index">04 / Methodology</span>
              <h2 className="detail-card-title">Methodology</h2>
              <ul className="detail-list">
                {project.methodology.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>
            <section className="detail-card">
              <span className="detail-index">05 / Technical workflow</span>
              <h2 className="detail-card-title">Workflow and tools</h2>
              <p className="detail-card-copy">The documented workflow is represented above. The stated tools and technologies are:</p>
              <div className="detail-stack">
                {project.tools.map((tool) => <span className="tech-chip" key={tool}>{tool}</span>)}
              </div>
            </section>
            <section className="detail-card">
              <span className="detail-index">06 / Findings</span>
              <h2 className="detail-card-title">Findings</h2>
              <p className="detail-card-copy">The approved project summary does not provide measured findings, validation results or performance figures. No outcomes are claimed here.</p>
            </section>
            <section className="detail-card">
              <span className="detail-index">07 / Limitations</span>
              <h2 className="detail-card-title">Known limitations</h2>
              <p className="detail-card-copy">Dataset scope, evaluation criteria and documented limitations were not included in the supplied project material, so they are left unspecified.</p>
            </section>
            <section className="detail-card detail-card-wide">
              <span className="detail-index">08 / Screenshots</span>
              <h2 className="detail-card-title">Project evidence</h2>
              <div className="evidence-note">
                <strong>No screenshots supplied</strong>
                No implementation screenshots were provided in the approved source material. This page intentionally avoids fabricated interfaces or evidence imagery.
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>ATIKRAM DAS</span>
          <span>Digital Forensics & Incident Response</span>
          <Link href="/#projects">Return to projects</Link>
        </div>
      </footer>
    </>
  )
}
