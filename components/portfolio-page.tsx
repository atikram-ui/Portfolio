import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Github,
  Linkedin,
  MapPin,
  ScanSearch,
  ShieldCheck,
} from "lucide-react"
import { ProjectSlider } from "@/components/project-slider"
import { ExpertiseCards } from "@/components/expertise-cards"
import { projects } from "@/data/projects"

const experience = [
  {
    date: "2025",
    title: "Cybersecurity & Digital Forensics Intern",
    company: "CID CB HQ",
    location: "Guwahati, India",
    description:
      "Assisted with cybercrime investigations and forensic analysis, digital evidence recovery and preservation, and malware and threat-indicator analysis.",
  },
  {
    date: "2024",
    title: "Ethical Hacking & Penetration Testing Intern",
    company: "CDAC Noida",
    location: "Noida, India",
    description:
      "Simulated cyberattacks on web applications and networks, performed vulnerability assessments and penetration testing, and documented findings and remediation strategies.",
  },
  {
    date: "2024",
    title: "Computer Science Educator",
    company: "CEC Assam Hindustan College",
    location: "India",
    description:
      "Taught programming fundamentals and cybersecurity concepts, developed technical-course curricula, and mentored students.",
  },
  {
    date: "2023 — 2024",
    title: "Sales Leader",
    company: "Echoboom Management Solutions",
    location: "India",
    description:
      "Led a sales team, developed customer relationship strategies, and analyzed market trends and competitor activity.",
  },
  {
    date: "2023",
    title: "Ethical Hacking Trainee",
    company: "Engineer Core",
    location: "India",
    description:
      "Completed hands-on penetration-testing and vulnerability-scanning training and developed familiarity with exploitation techniques and security tools.",
  },
]

const credentials = [
  "Windows Forensics — Belkasoft",
  "Advanced Digital Forensics — Belkasoft",
  "Splunk SIEM — HaxCamp",
  "Ethical Hacker — IIIT Allahabad",
  "Penetration Testing — CDAC",
  "Vulnerability Assessment",
]

const evidenceSources = [
  { type: "Windows forensics", sources: "Windows artifacts", details: "System artifacts, logs, and digital evidence examination" },
  { type: "Memory & disk", sources: "Memory · forensic images", details: "Memory analysis, file-system artifacts, and evidence integrity" },
  { type: "Network analysis", sources: "Traffic · network logs", details: "Network monitoring, traffic analysis, and event review" },
  { type: "Email & indicators", sources: "Email headers · domains · IPs", details: "Header analysis and domain/IP review for security investigations" },
]

function SectionHeading({ eyebrow, title, detail, index }: { eyebrow: string; title: string; detail?: string; index?: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading-top"><p className="eyebrow">{eyebrow}</p>{index ? <span className="section-index">{index}</span> : null}</div>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {detail ? <p>{detail}</p> : null}
      </div>
    </div>
  )
}

export function PortfolioPage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Atikram Das home">
          <span className="wordmark-mark">AD</span><span>Atikram Das</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a><a href="#profile">Profile</a>
        </nav>
        <a className="header-contact" href="mailto:atikramdas24@gmail.com" aria-label="Contact Atikram"><span>Let&apos;s talk</span><ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Digital forensics / Incident response</p>
            <h1>Atikram<br /><span>Das.</span></h1>
            <p className="hero-role">Cybersecurity &amp; Digital Forensics Professional</p>
            <p className="hero-description">I work across digital evidence, malware analysis, log analysis, and incident response, with a foundation in Windows forensics, SIEM/SOAR workflows, and network security.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" /></a>
              <a className="hero-scroll" href="#experience"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
            </div>
            <div className="hero-meta"><span><MapPin aria-hidden="true" /> India</span><span className="meta-divider" /><span>Cybersecurity · Digital forensics</span></div>
          </div>
          <aside className="hero-readout" aria-label="Investigation focus">
            <div className="readout-head"><span><ScanSearch aria-hidden="true" /> Investigation focus</span><span>EVIDENCE MAP</span></div>
            <div className="hero-network" aria-hidden="true">
              <span className="network-link network-link-one" /><span className="network-link network-link-two" /><span className="network-link network-link-three" /><span className="network-link network-link-four" /><span className="network-link network-link-five" />
              <span className="network-node network-node-main" /><span className="network-node network-node-a" /><span className="network-node network-node-b" /><span className="network-node network-node-c" /><span className="network-node network-node-d" /><span className="network-node network-node-e" />
              <span className="network-label network-label-main">evidence</span><span className="network-label network-label-side">source links</span>
            </div>
            <p className="readout-intro">A clear picture emerges when evidence is connected.</p>
            <div className="readout-track">
              <div><span className="readout-marker">01</span><span><strong>Collect</strong><small>Preserve the digital evidence</small></span></div>
              <div><span className="readout-marker">02</span><span><strong>Correlate</strong><small>Connect activity across sources</small></span></div>
              <div><span className="readout-marker">03</span><span><strong>Respond</strong><small>Translate findings into action</small></span></div>
            </div>
            <div className="readout-foot"><span>CORE PRACTICE</span><span>Evidence → context → response</span></div>
          </aside>
          <a className="hero-index" href="#work" aria-label="Scroll to selected work">01 <span>—</span> 05</a>
        </div>
      </section>

      <section className="proof-strip" aria-label="Investigation workflow">
        <div className="page-width proof-grid">
          <div className="proof-intro"><span className="eyebrow">Investigation workflow</span><p>Evidence first.<br />Methodical throughout.</p></div>
          <div className="proof-stat"><strong>Collect</strong><span>Preserve and examine<br />digital evidence</span></div>
          <div className="proof-stat"><strong>Analyze</strong><span>Connect artifacts,<br />logs, and indicators</span></div>
          <div className="proof-stat"><strong>Report</strong><span>Document findings<br />and next steps</span></div>
        </div>
      </section>

      <section className="section page-width" id="work">
        <SectionHeading eyebrow="Selected work" index="01 / 05" title="Investigation tools, built around evidence." detail="Projects spanning digital evidence integrity, ransomware detection, and cybersecurity utilities." />
        <ProjectSlider projects={projects} />
        <p className="confidentiality-note"><ShieldCheck aria-hidden="true" /> Project summaries reflect the portfolio project descriptions.</p>
      </section>

      <section className="section experience-section" id="experience">
        <div className="page-width">
          <SectionHeading eyebrow="Experience" index="02 / 05" title="A record of careful investigation." detail="Hands-on work across incident response, cybercrime investigations, and security testing." />
          <div className="experience-list">
            {experience.map((role, index) => (
              <article className={`experience-item${index === 0 ? " experience-featured" : ""}`} key={`${role.company}-${role.date}`}>
                <div className="experience-rail"><span>{role.date}</span><i aria-hidden="true" /></div>
                <div className="experience-content">
                  <div className="experience-heading"><div><p className="experience-company">{role.company} <span>·</span> {role.location}</p><h3>{role.title}</h3></div><BriefcaseBusiness aria-hidden="true" /></div>
                  <p className="experience-description">{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-width" id="expertise">
        <SectionHeading eyebrow="Expertise" index="03 / 05" title="Think across the entire evidence trail." detail="Grounded in digital-forensics training, incident response, and cybersecurity project work." />
        <ExpertiseCards />
        <div className="evidence-sources">
          <div className="toolbox-heading"><span className="eyebrow">Investigation coverage</span><span>Evidence sources</span></div>
          <div className="evidence-source-grid">
            {evidenceSources.map((source, index) => (
              <article className="evidence-source" key={source.type}>
                <span className="source-index">0{index + 1}</span><p className="source-type">{source.type}</p><h3>{source.sources}</h3><p className="source-details">{source.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section profile-section" id="profile">
        <div className="page-width profile-layout">
          <div className="profile-copy">
            <SectionHeading eyebrow="Profile" index="04 / 05" title="Evidence-driven. Methodical. Clear." />
            <p className="about-copy">I’m Atikram, a cybersecurity and digital forensics professional with a foundation in incident response, SIEM/SOAR workflows, threat detection, malware identification, forensic investigations, and log analysis. My experience includes internships, academic projects, and specialized training, with an interest in contributing to security operations and proactive threat mitigation.</p>
            <div className="profile-location"><MapPin aria-hidden="true" /> Based in India <span>·</span> Open to meaningful security work</div>
          </div>
          <div className="profile-details">
            <section className="education-card training-card" aria-labelledby="training-title">
              <div className="detail-heading"><span className="eyebrow">Professional development</span><span id="training-title">Training &amp; courses</span></div>
              <ul className="training-list">
                <li><strong>Technical training</strong><span>Python programming · PowerShell scripting · Linux administration</span></li>
                <li><strong>Network security</strong><span>Network analysis · Incident response · Threat hunting</span></li>
                <li><strong>Specialized tools</strong><span>SIEM operations · Malware analysis · Digital investigation</span></li>
              </ul>
            </section>
            <section className="credentials-card" aria-labelledby="credentials-title">
              <div className="detail-heading"><span className="eyebrow">Credentials</span><span id="credentials-title">Certifications &amp; training</span></div>
              <ul className="credential-list">{credentials.map((credential) => <li key={credential}><Check aria-hidden="true" />{credential}</li>)}</ul>
            </section>
          </div>
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="page-width footer-inner">
          <div className="footer-prompt"><span className="eyebrow">05 / 05 · Contact</span><h2>Let’s make<br /><span>the next move.</span></h2><p>Have a role, investigation, or security conversation in mind? I’d be glad to hear from you.</p></div>
          <div className="footer-actions">
            <a className="button button-light" href="mailto:atikramdas24@gmail.com"><span className="contact-icon" aria-hidden="true">@</span> Email Atikram <ArrowRight aria-hidden="true" /></a>
            <p className="contact-privacy">My email address isn’t displayed publicly.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/atikram-das-92b271320" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/atikram-ui" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Atikram Das</span><span>Digital forensics · Incident response · Security</span><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  )
}
