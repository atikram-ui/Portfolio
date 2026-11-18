import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Fingerprint,
  Github,
  Linkedin,
  MapPin,
  Radio,
  ScanSearch,
  ShieldCheck,
} from "lucide-react"
import { ExpertiseTabs } from "@/components/expertise-tabs"
import { ProjectSlider } from "@/components/project-slider"

const experience = [
  {
    date: "Jan — Oct 2026",
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
    date: "May — Jun 2025",
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
    category: "Digital forensics · Incident response",
    title: "Integrated Digital Forensics Correlation Framework",
    description:
      "Correlates disk, memory, network, and log artifacts into a unified investigation timeline. Cross-source artifact matching helps surface related indicators, accelerate incident scoping, and support root-cause analysis with traceable findings.",
    tools: ["Python", "Artifact correlation", "Timeline reconstruction"],
    mark: "DFIR",
  },
  {
    number: "02",
    category: "Incident response · Recovery",
    title: "Ransomware Detection & System Recovery",
    description:
      "Combines file-entropy scoring with behavioral heuristics to identify mass-encryption activity early. The workflow raises investigation-ready alerts, maps observed behavior to MITRE ATT&CK, and supports recovery of affected files.",
    tools: ["Python", "Behavioral analysis", "MITRE ATT&CK"],
    mark: "IR",
  },
  {
    number: "03",
    category: "Threat intelligence · OSINT",
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

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
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
          <a href="#work">Projects</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a><a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:atikramdas24@gmail.com">Contact <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Digital forensics · Incident response</p>
          <h1>Atikram Das<span className="hero-period">.</span></h1>
          <p className="hero-role">Digital Forensics &amp; Incident Response Analyst</p>
          <p className="hero-description">
            I investigate digital incidents, connect evidence across endpoints, memory, networks, identity, email, and cloud environments, and turn technical findings into clear next steps—with a focus on BEC and ransomware investigations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" /></a>
            <a className="text-link" href="mailto:atikramdas24@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-meta"><span><MapPin aria-hidden="true" /> India</span><span className="meta-divider" /><span>M.Sc. Digital Forensics &amp; Information Security</span></div>
        </div>
        <aside className="case-file" aria-label="Investigation approach">
          <div className="case-file-top"><span className="case-file-label"><ScanSearch aria-hidden="true" /> Investigation approach</span><span className="case-file-index">DFIR / 026</span></div>
          <div className="case-file-title"><span className="case-file-kicker">One investigation. Multiple evidence sources.</span><h2>Find the signal.<br />Build the timeline.</h2></div>
          <div className="evidence-list">
            <div><span className="evidence-icon"><Fingerprint aria-hidden="true" /></span><span>Preserve and examine evidence</span><Check aria-hidden="true" className="evidence-check" /></div>
            <div><span className="evidence-icon"><Radio aria-hidden="true" /></span><span>Correlate events across sources</span><Check aria-hidden="true" className="evidence-check" /></div>
            <div><span className="evidence-icon"><ShieldCheck aria-hidden="true" /></span><span>Communicate clear response actions</span><Check aria-hidden="true" className="evidence-check" /></div>
          </div>
          <div className="case-file-footer"><span>Primary domain</span><span>Digital forensics &amp; incident response</span></div>
          <div className="case-file-watermark" aria-hidden="true">AD</div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Investigation highlights">
        <div className="page-width proof-grid">
          <div className="proof-intro"><span className="eyebrow">Investigation highlights</span><p>Evidence-led work<br />at AreteIR</p></div>
          <div className="proof-stat"><strong>7 + 2</strong><span>BEC / cybercrime<br />and ransomware cases</span></div>
          <div className="proof-stat"><strong>18<span>+</span></strong><span>endpoints reviewed<br />for persistence</span></div>
          <div className="proof-stat"><strong>25<span>+</span></strong><span>indicators pivoted<br />to scope activity</span></div>
          <p className="proof-note">Selected metrics from my forensic analyst experience.</p>
        </div>
      </section>

      <section className="section page-width" id="work">
        <SectionHeading eyebrow="Selected work" title="Tools for the moments that matter." detail="Digital forensics, incident response, ransomware detection, and threat intelligence projects." />
        <ProjectSlider projects={projects} />
        <p className="confidentiality-note"><ShieldCheck aria-hidden="true" /> Case details are generalized to respect confidentiality. Project descriptions reflect portfolio work.</p>
      </section>

      <section className="section section-tinted" id="experience">
        <div className="page-width">
          <SectionHeading eyebrow="Experience" title="From evidence to understanding." detail="Experience across incident response, cybercrime investigations, and security testing." />
          <div className="experience-list">
            {experience.map((role) => (
              <article className="experience-item" key={`${role.company}-${role.date}`}>
                <div className="experience-date">{role.date}</div>
                <div className="experience-content">
                  <div className="experience-heading"><div><h3>{role.title}</h3><p>{role.company} <span>·</span> {role.location}</p></div><BriefcaseBusiness aria-hidden="true" /></div>
                  <p className="experience-description">{role.description}</p>
                  {role.highlights ? <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-width" id="expertise">
        <SectionHeading eyebrow="DFIR first · Broader security depth" title="A connected security skill set." detail="Explore the capabilities and tools I bring to an investigation and the disciplines that support it." />
        <ExpertiseTabs />
        <div className="evidence-sources">
          <div className="toolbox-heading"><span className="eyebrow">Investigation coverage</span><span>Evidence sources</span></div>
          <div className="evidence-source-grid">
            {evidenceSources.map((source) => (
              <article className="evidence-source" key={source.type}>
                <span>{source.type}</span><h3>{source.sources}</h3><p>{source.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="about">
        <div className="page-width about-layout">
          <div className="about-main">
            <SectionHeading eyebrow="Profile" title="Evidence-driven. Methodical. Clear." />
            <p className="about-copy">I’m Atikram, a digital forensics and incident response analyst who brings structure to complex investigations. I examine endpoint, memory, network, identity, email, and cloud evidence to reconstruct events, establish scope, and explain what happened in language teams can act on. My experience in BEC and ransomware investigations is complemented by threat hunting, security testing, and risk and compliance—so findings can inform both immediate response and stronger security controls.</p>
            <div className="credential-list">{credentials.map((credential) => <div key={credential}><Check aria-hidden="true" />{credential}</div>)}</div>
          </div>
          <aside className="education-card">
            <span className="eyebrow">Education</span>
            <div className="education-entry"><span>2024 — 2026</span><h3>M.Sc. Digital Forensics &amp; Information Security</h3><p>National Forensic Sciences University</p></div>
            <div className="education-entry"><span>2020 — 2023</span><h3>Bachelor of Computer Applications</h3><p>Assam Science and Technology University</p></div>
          </aside>
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="page-width footer-inner">
          <div><p className="eyebrow">Open to the right opportunity</p><h2>Let’s discuss<br /><span>what happened.</span></h2></div>
          <div className="footer-actions">
            <a className="button button-light" href="mailto:atikramdas24@gmail.com"><span className="contact-icon" aria-hidden="true">@</span> Email Atikram <ArrowRight aria-hidden="true" /></a>
            <p className="contact-privacy">Use the button to start an email. My address isn’t displayed publicly.</p>
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
