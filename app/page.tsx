import Link from "next/link"
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
} from "lucide-react"
import { portfolioData } from "@/data/content"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <Link href="#top" className="wordmark" aria-label="Atikram Das, home">
          AD<span className="wordmark-period">.</span>
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <a className="availability" href="mailto:cyber.secfor@gmail.com">
          <span className="availability-dot" /> Open to opportunities
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Cybersecurity · Digital forensics</p>
          <h1>Clarity when<br />it matters <span>most.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I&apos;m Atikram, a cybersecurity and digital forensics professional focused on investigation, incident response, and building stronger security foundations.</p>
            <Link className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Profile summary">
          <div className="monogram" aria-hidden="true"><span>AD</span><i /></div>
          <p className="aside-label">Currently focused on</p>
          <p className="aside-focus">Evidence-led security.<br />Thoughtful response.</p>
          <div className="hero-socials">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a>
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a>
            <a href="mailto:cyber.secfor@gmail.com" aria-label="Email Atikram"><Mail /></a>
          </div>
          <p className="location-note">Based in Assam, India</p>
        </aside>
        <div className="hero-index" aria-hidden="true"><span>PORTFOLIO</span><span>2025 — 2026</span></div>
      </section>

      <section id="about" className="intro-section section-grid">
        <div className="section-label"><span>01 / ABOUT</span><span>My approach</span></div>
        <div className="intro-content">
          <h2>Curiosity is the start.<br /><span>Evidence is the answer.</span></h2>
          <div className="intro-detail">
            <p>{portfolioData.about}</p>
            <a className="text-link" href="mailto:cyber.secfor@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading">
          <div><p className="eyebrow"><span>02</span> Selected work</p><h2>Projects with<br /><span>a purpose.</span></h2></div>
          <p className="section-aside">A selection of academic and independent work exploring digital evidence, detection, and security tooling.</p>
        </div>
        <div className="project-list">
          {portfolioData.projects.filter((project) => project.title !== "E-commerce Website").map((project, index) => (
            <article className="project-row" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section section-grid">
        <div className="section-label"><span>03 / EXPERTISE</span><span>What I bring</span></div>
        <div className="expertise-content">
          <div className="expertise-heading"><ShieldCheck aria-hidden="true" /><h2>Methodical by nature.<br /><span>Always learning.</span></h2></div>
          <div className="expertise-grid">
            {portfolioData.technicalSkills.slice(0, 4).map((group, index) => (
              <article className="expertise-item" key={group.category}>
                <span className="expertise-number">0{index + 1}</span>
                <h3>{group.category}</h3>
                <p>{group.skills.slice(0, 4).join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-heading experience-heading">
          <div><p className="eyebrow"><span>04</span> Experience</p><h2>Learning through<br /><span>real-world work.</span></h2></div>
          <p className="section-aside">A foundation built across investigation, security training, teaching, and team leadership.</p>
        </div>
        <div className="timeline-list">
          {[...portfolioData.experience.internships, ...portfolioData.experience.jobs].map((role, index) => (
            <article className="timeline-row" key={`${role.company}-${role.title}`}>
              <span className="timeline-date">{role.period}</span>
              <div className="timeline-role"><h3>{role.title}</h3><p>{role.company}</p></div>
              <p className="timeline-detail">{role.responsibilities[0]}</p>
              <span className="timeline-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials-section section-grid">
        <div className="section-label"><span>05 / CREDENTIALS</span><span>Continued learning</span></div>
        <div className="credentials-content">
          <h2>Building a wider<br /><span>security perspective.</span></h2>
          <div className="credentials-grid">
            {portfolioData.certifications.map((group) => (
              <article key={group.category} className="credential-group">
                <p>{group.category}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <p className="eyebrow"><span>06</span> Have something to solve?</p>
        <div className="contact-main">
          <h2>Let&apos;s make<br />the next move <span>count.</span></h2>
          <a className="contact-link" href="mailto:cyber.secfor@gmail.com">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <Link href="#top" className="wordmark">AD<span className="wordmark-period">.</span></Link>
          <span>Atikram Das · Cybersecurity &amp; Digital Forensics</span>
          <div className="footer-links"><a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={portfolioData.personal.github} target="_blank" rel="noreferrer">GitHub</a><span>© {new Date().getFullYear()}</span></div>
        </div>
      </footer>
    </main>
  )
}
