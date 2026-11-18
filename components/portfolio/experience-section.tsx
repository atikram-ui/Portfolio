import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

export function ExperienceSection() {
  const { primary, secondary } = portfolioData.experience

  return (
    <section id="experience" className="section-block section-block-alt">
      <div className="container">
        <SectionReveal>
          <header className="section-heading">
            <span className="section-kicker">01 / Field experience</span>
            <h2 className="section-title">Evidence-led investigation, from acquisition to scope.</h2>
            <p className="section-description">
              Professional work centered on forensic integrity, cross-source correlation and clear incident reconstruction.
            </p>
          </header>
          <div className="experience-layout">
            <article className="primary-experience">
              <div className="experience-heading">
                <div>
                  <span className="meta-label">Primary experience</span>
                  <h3 className="experience-title">{primary.title}</h3>
                  <p className="experience-company">
                    {primary.company}<span className="experience-location">· {primary.location}</span>
                  </p>
                </div>
                <span className="experience-date">{primary.period}</span>
              </div>
              <div className="experience-context" aria-label="Incident types">
                <span className="context-chip">BEC & cybercrime</span>
                <span className="context-chip">Ransomware</span>
                <span className="context-chip">Endpoint · identity · cloud</span>
              </div>
              <ul className="experience-list">
                {primary.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className="list-marker" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
            <aside className="secondary-experience">
              <h3 className="secondary-title">Earlier experience</h3>
              <ol className="secondary-timeline">
                {secondary.map((role) => (
                  <li key={`${role.company}-${role.period}`}>
                    <p className="timeline-role">{role.title}</p>
                    <span className="timeline-company">{role.company}</span>
                    <span className="timeline-period">{role.period}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
