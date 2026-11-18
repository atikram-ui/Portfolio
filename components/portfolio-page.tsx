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
import { ExpertiseTabs } from "@/components/expertise-tabs"
import { ProjectSlider } from "@/components/project-slider"

const experience = [
  {
    date: "JAN — OCT 2026",
    title: "Forensics Analyst",
    company: "AreteIR",
    location: "Hyderabad, India",
    description:
      "Investigated BEC, cybercrime, and ransomware incidents by correlating endpoint, disk, memory, network, identity, email, and cloud evidence.",
    highlights: [
      "Investigated 7 BEC and cybercrime incidents and 2 ransomware cases, reducing time to identification by about 2 hours per case.",
      "Identified persistence mechanisms and unauthorized remote-access tools across 18+ endpoints through memory and Windows artifact analysis.",
      "Pivoted across 25+ hashes, domains, URLs, and IP addresses to help scope intrusion activity.",
      "Automated IOC enrichment and artifact correlation using Python and PowerShell; prepared structured reports and remediation recommendations.",
    ],
  },
  {
    date: "MAY — JUN 2025",
    title: "Digital Forensics Intern",
    company: "CID Crime Branch HQ",
    location: "India",
    description:
      "Supported cybercrime investigations through endpoint and log analysis, evidence documentation, and OSINT collection; prepared investigation-ready reports.",
  },
  {
    date: "2024",
    title: "Penetration Testing Intern",
    company: "C-DAC Noida",
    location: "Noida, India",
    description:
      "Tested web and network systems against OWASP Top 10 risks, manually validated findings, and prepared severity-rated assessment and remediation reports.",
  },
  {
    date: "2023",
    title: "Ethical Hacking Intern",
    company: "Engineer Core",
    location: "India",
    description:
      "Performed vulnerability assessments and penetration testing on web applications and networks, documenting findings and remediation steps.",
  },
]

const projects = [
  {
    number: "01",
    category: "Digital forensics / Incident response",
    title: "Integrated Digital Forensics Correlation Framework",
    description:
      "Correlates disk, memory, network, and log artifacts into a unified investigation timeline. Cross-source artifact matching helps surface related indicators, accelerate incident scoping, and support root-cause analysis with traceable findings.",
    tools: ["Python", "Artifact correlation", "Timeline reconstruction"],
    mark: "DFIR",
  },
  {
    number: "02",
    category: "Incident response / Recovery",
    title: "Ransomware Detection & System Recovery",
    description:
      "Combines file-entropy scoring with behavioral heuristics to identify mass-encryption activity early. The workflow raises investigation-ready alerts, maps observed behavior to MITRE ATT&CK, and supports recovery of affected files.",
    tools: ["Python", "Behavioral analysis", "MITRE ATT&CK"],
    mark: "IR",
  },
  {
    number: "03",
    category: "Threat intelligence / OSINT",
    title: "Dark-Scrapper Intelligence Pipeline",
    description:
      "A threat-intelligence research project that gathers threat content, extracts and enriches indicators, and classifies relevant findings into ATT&CK-mapped reports and dashboard alerts.",
    tools: ["Python", "NLP", "Threat intelligence"],
    mark: "CTI",
  },
]

const credentials = [
  "ISO/IEC 27001:2022 Certified Lead Auditor",
  "Belkasoft Advanced Digital Forensics & Windows Forensics",
  "Greyhawk Certified Digital Forensics Practitioner",
  "Fortinet Certified Associate (FCA)",
]

const evidenceSources = [
  { type: "Endpoint", sources: "Windows · Linux", details: "Registry, event logs, services, scheduled tasks, browser and system artifacts" },
  { type: "Memory & disk", sources: "Memory images · Forensic disk images", details: "Memory analysis, file-system artifacts, persistence, and timeline evidence" },
  { type: "Identity & email", sources: "Microsoft 365 · Google Workspace", details: "Account activity, sign-in events, mailbox and email investigation" },
  { type: "Cloud", sources: "AWS", details: "Cloud activity and log review for incident scope and sequence" },
  { type: "Network", sources: "Network traffic · PCAP · Logs", details: "Traffic analysis, connections, indicators, and event correlation" },
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
        <a className="header-contact" href="mailto:atikramdas24@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Digital forensics / Incident response</p>
            <h1>Atikram<br /><span>Das.</span></h1>
            <p className="hero-role">Digital Forensics &amp; Incident Response Analyst</p>
            <p className="hero-description">I investigate digital incidents, connect evidence across endpoints, memory, networks, identity, email, and cloud environments, and turn technical findings into clear next steps—with a focus on BEC and ransomware investigations.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" /></a>
              <a className="hero-scroll" href="#experience"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
            </div>
            <div className="hero-meta"><span><MapPin aria-hidden="true" /> India</span><span className="meta-divider" /><span>M.Sc. Digital Forensics &amp; Information Security</span></div>
          </div>
          <aside className="hero-readout" aria-label="Investigation focus">
            <div className="readout-head"><span><ScanSearch aria-hidden="true" /> Investigation focus</span><span>FIELD NOTE 026</span></div>
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

      <section className="proof-strip" aria-label="Investigation highlights">
        <div className="page-width proof-grid">
          <div className="proof-intro"><span className="eyebrow">Selected field notes</span><p>Investigation highlights<br />from AreteIR</p></div>
          <div className="proof-stat"><strong>07<span> + 02</span></strong><span>BEC / cybercrime<br />and ransomware cases</span></div>
          <div className="proof-stat"><strong>18<span>+</span></strong><span>endpoints examined<br />for persistence</span></div>
          <div className="proof-stat"><strong>25<span>+</span></strong><span>indicators pivoted<br />to scope activity</span></div>
        </div>
      </section>

      <section className="section page-width" id="work">
        <SectionHeading eyebrow="Selected work" index="01 / 05" title="Investigation tools, built around evidence." detail="Projects across digital forensics, incident response, ransomware recovery, and threat intelligence." />
        <ProjectSlider projects={projects} />
        <p className="confidentiality-note"><ShieldCheck aria-hidden="true" /> Case details are generalized to respect confidentiality. Project descriptions reflect portfolio work.</p>
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
                  {role.highlights ? <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-width" id="expertise">
        <SectionHeading eyebrow="Expertise" index="03 / 05" title="Think across the entire evidence trail." detail="A focused DFIR practice, supported by hunting, intelligence, security testing, and risk expertise." />
        <ExpertiseTabs />
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
            <p className="about-copy">I’m Atikram, a digital forensics and incident response analyst who brings structure to complex investigations. I examine endpoint, memory, network, identity, email, and cloud evidence to reconstruct events, establish scope, and explain what happened in language teams can act on. My experience in BEC and ransomware investigations is complemented by threat hunting, security testing, and risk and compliance—so findings can inform both immediate response and stronger security controls.</p>
            <div className="profile-location"><MapPin aria-hidden="true" /> Based in India <span>·</span> Open to meaningful security work</div>
          </div>
          <div className="profile-details">
            <section className="education-card" aria-labelledby="education-title">
              <div className="detail-heading"><span className="eyebrow">Education</span><span id="education-title">Academic foundation</span></div>
              <div className="education-entry"><span>2024 — 2026</span><h3>M.Sc. Digital Forensics &amp; Information Security</h3><p>National Forensic Sciences University</p></div>
              <div className="education-entry"><span>2020 — 2023</span><h3>Bachelor of Computer Applications</h3><p>Assam Science and Technology University</p></div>
            </section>
            <section className="credentials-card" aria-labelledby="credentials-title">
              <div className="detail-heading"><span className="eyebrow">Credentials</span><span id="credentials-title">Certifications</span></div>
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
