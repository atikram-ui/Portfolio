import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

export function ContactSection() {
  const { personal } = portfolioData

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container">
        <SectionReveal>
          <div className="contact-card">
            <div>
              <span className="section-kicker">05 / Contact</span>
              <h2 className="contact-title">Let’s discuss evidence, investigations and DFIR.</h2>
              <p className="contact-copy">
                For professional inquiries, reach out by email or connect through the profiles below.
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-link-row" href={`mailto:${personal.email}`}>
                <Mail aria-hidden="true" size={16} /> {personal.email} <span>Email</span>
              </a>
              <a className="contact-link-row" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
                <Linkedin aria-hidden="true" size={16} /> LinkedIn <span>Profile</span><ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a className="contact-link-row" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">
                <Github aria-hidden="true" size={16} /> GitHub <span>Profile</span><ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a className="contact-link-row" href={personal.resume} download>
                <Download aria-hidden="true" size={16} /> Download Resume <span>PDF</span>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
