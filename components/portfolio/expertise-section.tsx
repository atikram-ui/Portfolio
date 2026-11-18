import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-block">
      <div className="container">
        <SectionReveal>
          <header className="section-heading">
            <span className="section-kicker">02 / Investigation capability</span>
            <h2 className="section-title">DFIR at the core. Supporting disciplines in context.</h2>
            <p className="section-description">
              A practical view of forensic, investigative and supporting technical capabilities—without proficiency scores or inflated labels.
            </p>
          </header>
          <div className="domain-grid">
            {portfolioData.expertise.map((domain, index) => (
              <article className={`domain-card${index === 0 ? " domain-card-primary" : ""}`} key={domain.title}>
                <div className="domain-heading">
                  <span className="domain-index">0{index + 1}</span>
                  <div>
                    <span className="domain-priority">{domain.priority}</span>
                    <h3 className="domain-title">{domain.title}</h3>
                  </div>
                </div>
                <p className="domain-description">{domain.description}</p>
                <div className="skill-list">
                  {domain.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="supporting-skills" aria-label="Supporting technical skills">
            {portfolioData.supportingSkills.map((group) => (
              <article className="supporting-skill-card" key={group.label}>
                <h3 className="supporting-skill-title">{group.label}</h3>
                {"note" in group && <span className="supporting-skill-note">{group.note}</span>}
                <p className="supporting-skill-values">{group.values.join(" · ")}</p>
              </article>
            ))}
          </div>
          <div className="toolkit-heading">
            <span className="section-kicker">Forensic toolkit</span>
            <h3 className="section-title toolkit-title">Tools used across the workflow.</h3>
          </div>
          <div className="toolkit-grid">
            {portfolioData.toolkit.map((group) => (
              <article className="tool-card" key={group.category}>
                <h4 className="tool-category">{group.category}</h4>
                <div className="tool-list">
                  {group.tools.map((tool) => <span className="tool-chip" key={tool}>{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
