import { BookOpenCheck, GraduationCap } from "lucide-react"
import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

export function CredentialsSection() {
  return (
    <section id="credentials" className="section-block">
      <div className="container">
        <SectionReveal>
          <header className="section-heading">
            <span className="section-kicker">04 / Credentials & education</span>
            <h2 className="section-title">A foundation in forensics, security and evidence handling.</h2>
          </header>
          <div className="credentials-grid">
            {portfolioData.credentials.map((credential) => (
              <article className="credential-card" key={credential}>
                <div className="credential-header">
                  <span className="credential-mark"><BookOpenCheck aria-hidden="true" size={15} /></span>
                  <h3 className="credential-title">{credential}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="education-block">
            <span className="section-kicker">Education</span>
            <div className="education-grid">
              {portfolioData.education.map((record) => (
                <article className="education-card" key={record.degree}>
                  <div className="education-row">
                    <div>
                      <div className="credential-header">
                        <GraduationCap aria-hidden="true" size={18} color="#7db7ff" />
                        <h3 className="education-degree">{record.degree}</h3>
                      </div>
                      <p className="education-institution">{record.institution} · {record.location}</p>
                    </div>
                    <span className="education-period">{record.period}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
