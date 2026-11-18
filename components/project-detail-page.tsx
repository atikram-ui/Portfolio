import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Crosshair, Fingerprint, ScanSearch } from "lucide-react"
import type { PortfolioProject } from "@/data/projects"

export function ProjectDetailPage({ project }: { project: PortfolioProject }) {
  return (
    <main className="project-detail-page">
      <header className="detail-header">
        <Link className="detail-wordmark" href="/#home" aria-label="Atikram Das home"><span>AD</span> Atikram Das</Link>
        <Link className="detail-back" href="/#work"><ArrowLeft aria-hidden="true" /> Back to selected work</Link>
      </header>
      <article>
        <section className="detail-hero page-width">
          <div className="detail-hero-top"><span className="eyebrow"><ScanSearch aria-hidden="true" /> Project brief / {project.number}</span><span className="detail-classification">PORTFOLIO CASE STUDY</span></div>
          <p className="detail-category">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.description}</p>
          <div className="detail-meta"><span><Fingerprint aria-hidden="true" /> Evidence-led workflow</span><span><Crosshair aria-hidden="true" /> Investigation focus</span></div>
        </section>
        <section className="detail-content page-width" aria-label="Project details">
          <div className="detail-objective">
            <span className="eyebrow">01 / Objective</span>
            <h2>What this work set out to do.</h2>
            <p>{project.objective}</p>
          </div>
          <div className="detail-columns">
            <section className="detail-panel" aria-labelledby="methodology-title">
              <div className="detail-panel-heading"><span className="eyebrow">02 / Methodology</span><span className="detail-panel-icon"><ScanSearch aria-hidden="true" /></span></div>
              <h2 id="methodology-title">Investigation approach</h2>
              <ol className="detail-method-list">{project.methodology.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            </section>
            <section className="detail-panel" aria-labelledby="findings-title">
              <div className="detail-panel-heading"><span className="eyebrow">03 / Findings</span><span className="detail-panel-icon"><Check aria-hidden="true" /></span></div>
              <h2 id="findings-title">What the workflow surfaces</h2>
              <ul className="detail-findings">{project.findings.map((finding) => <li key={finding}><Check aria-hidden="true" /><span>{finding}</span></li>)}</ul>
            </section>
          </div>
          <section className="detail-tools" aria-labelledby="tools-title">
            <div><span className="eyebrow">04 / Tools &amp; techniques</span><h2 id="tools-title">Built with the right evidence in mind.</h2></div>
            <div className="detail-tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </section>
          <div className="detail-end-link"><Link href="/#work">Return to selected work <ArrowRight aria-hidden="true" /></Link><a href="mailto:atikramdas24@gmail.com">Discuss a similar challenge <ArrowUpRight aria-hidden="true" /></a></div>
        </section>
      </article>
      <footer className="detail-footer"><span>© {new Date().getFullYear()} Atikram Das</span><span>Digital forensics · Incident response · Security</span></footer>
    </main>
  )
}
