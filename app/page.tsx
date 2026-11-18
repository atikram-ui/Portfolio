import Link from "next/link"
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Fingerprint,
  Github,
  Linkedin,
  Mail,
  ScanSearch,
  ShieldCheck,
} from "lucide-react"
import { portfolioData } from "@/data/content"

const navigation = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
]

export default function Home() {
  const currentRole = portfolioData.experience[0]

  return (
    <main className="portfolio-shell" id="top">
      <header className="site-header">
        <Link href="#top" className="wordmark" aria-label="Atikram Das, home">
          <span className="wordmark-mark">A</span><span className="wordmark-name">ATIKRAM DAS</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="header-contact" href={`mailto:${portfolioData.personal.email}`}>
          <span className="status-dot" aria-hidden="true" /> Get in touch <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> DIGITAL FORENSICS <span className="eyebrow-separator">/</span> INCIDENT RESPONSE</p>
          <h1 id="hero-heading">Follow the<br /><span className="hero-accent">evidence.</span></h1>
          <p className="hero-intro">I&apos;m Atikram Das, a forensics analyst investigating digital traces, reconstructing incidents, and turning technical evidence into clear answers.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="#projects">Explore selected work <ArrowDownRight aria-hidden="true" /></Link>
            <a className="text-action" href={`mailto:${portfolioData.personal.email}`}>Contact me <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>

        <aside className="case-panel" aria-label="Professional focus">
          <div className="panel-topline"><span>PROFILE / 001</span><span className="panel-status"><i /> FIELD NOTES</span></div>
          <div className="fingerprint-art" aria-hidden="true"><Fingerprint strokeWidth={0.75} /></div>
          <div className="panel-rule" />
          <p className="panel-caption">CURRENT DISCIPLINE</p>
          <p className="panel-focus">Digital forensics<br />&amp; incident response</p>
          <div className="panel-meta">
            <span><b>BASED IN</b>{portfolioData.personal.location}</span>
            <span><b>EDUCATION</b>M.Sc. Digital Forensics</span>
          </div>
          <div className="panel-coordinate" aria-hidden="true">EVIDENCE · CONTEXT · CLARITY</div>
        </aside>

        <div className="hero-footerline"><span>INVESTIGATE WITH INTENT</span><a href="#profile">SCROLL TO EXPLORE <ArrowDown aria-hidden="true" /></a><span>PORTFOLIO / 2026</span></div>
      </section>

      <section className="profile-section section-wrap" id="profile">
        <div className="section-kicker"><span>01</span><span>PROFILE</span></div>
        <div className="profile-main">
          <div className="section-title-row"><h2>Digital evidence.<br /><span>Human clarity.</span></h2><ScanSearch className="section-title-icon" strokeWidth={1.2} aria-hidden="true" /></div>
          <div className="profile-copy">
            <p>{portfolioData.about}</p>
            <div className="profile-links">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="profile-highlight">
            <ShieldCheck aria-hidden="true" />
            <p>Evidence handling grounded in <strong>method, integrity, and clear documentation.</strong></p>
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div><div className="section-kicker"><span>02</span><span>SELECTED PROJECTS</span></div><h2>Built to investigate.<br /><span>Designed to clarify.</span></h2></div>
          <p className="section-aside">Independent and academic work across evidence integrity, incident correlation, detection, and threat intelligence.</p>
        </div>
        <div className="project-grid">
          {portfolioData.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top"><span className="project-index">{project.index} / PROJECT</span><ArrowUpRight aria-hidden="true" /></div>
              <div className="project-glyph" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="project-title-wrap"><h3>{project.title}</h3>{project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}</div>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section section-wrap" id="expertise">
        <div className="section-heading">
          <div><div className="section-kicker"><span>03</span><span>CAPABILITIES</span></div><h2>Investigative depth.<br /><span>Connected thinking.</span></h2></div>
          <p className="section-aside">A cross-domain toolkit for examining evidence, understanding adversary behavior, and communicating risk.</p>
        </div>
        <div className="expertise-grid">
          {portfolioData.skillGroups.map((group, index) => (
            <article className="expertise-card" key={group.category}>
              <div className="expertise-card-top"><span>0{index + 1}</span><ArrowUpRight aria-hidden="true" /></div>
              <h3>{group.category}</h3>
              <p className="expertise-description">{group.description}</p>
              <ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="toolkit-block">
          <div className="toolkit-heading"><span>INVESTIGATION TOOLKIT</span><span>TOOLS &amp; PLATFORMS</span></div>
          <div className="toolkit-groups">
            {portfolioData.tools.map((group) => (
              <div className="toolkit-row" key={group.category}><h3>{group.category}</h3><ul>{group.items.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-wrap" id="experience">
        <div className="section-heading">
          <div><div className="section-kicker"><span>04</span><span>EXPERIENCE</span></div><h2>From evidence<br /><span>to understanding.</span></h2></div>
          <p className="section-aside">Professional investigation work and early experience across forensics and security testing.</p>
        </div>
        <div className="experience-list">
          {portfolioData.experience.map((role, index) => (
            <article className={`experience-row ${index === 0 ? "experience-featured" : ""}`} key={`${role.company}-${role.title}`}>
              <div className="experience-date"><span>{role.period}</span><span className="experience-kind">{role.kind}</span></div>
              <div className="experience-content">
                <div className="experience-heading"><div><h3>{role.title}</h3><p>{role.company}<span> · </span>{role.location}</p></div>{index === 0 ? <BriefcaseBusiness aria-hidden="true" /> : <span className="experience-marker" aria-hidden="true" />}</div>
                <ul>{role.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-section section-wrap" id="credentials">
        <div className="section-heading">
          <div><div className="section-kicker"><span>05</span><span>FOUNDATION</span></div><h2>Study. Practice.<br /><span>Keep learning.</span></h2></div>
        </div>
        <div className="foundation-grid">
          <div className="foundation-column"><h3>Education</h3>{portfolioData.education.map((item) => <article className="education-item" key={item.degree}><span>{item.period}</span><h4>{item.degree}</h4><p>{item.institution} · {item.location}</p></article>)}</div>
          <div className="foundation-column"><h3>Certifications</h3><ul className="certification-list">{portfolioData.certifications.map((certification) => <li key={certification}><ShieldCheck aria-hidden="true" />{certification}</li>)}</ul></div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-topline"><span>06 / CONTACT</span><span>OPEN TO A CONVERSATION</span></div>
        <div className="contact-main"><div><p className="contact-eyebrow">Have a challenge worth investigating?</p><h2>Let&apos;s find<br /><span>the signal.</span></h2></div><a className="contact-button" href={`mailto:${portfolioData.personal.email}`}><span>{portfolioData.personal.email}</span><ArrowUpRight aria-hidden="true" /></a></div>
        <div className="footer-bottom">
          <Link href="#top" className="footer-brand"><span className="wordmark-mark">A</span><span>ATIKRAM DAS</span></Link>
          <span className="footer-description">Digital forensics · Incident response · Threat intelligence</span>
          <div className="footer-links"><a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={portfolioData.personal.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${portfolioData.personal.email}`} aria-label="Email Atikram"><Mail aria-hidden="true" /></a><span>© {new Date().getFullYear()}</span></div>
        </div>
      </footer>
    </main>
  )
}
