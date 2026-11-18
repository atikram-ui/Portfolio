import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AtSign,
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

const experience = [
  {
    date: "2026",
    title: "Forensics Analyst Intern",
    company: "AreteIR",
    location: "Hyderabad, India",
    description:
      "Investigated BEC, cybercrime, and ransomware incidents by correlating endpoint, disk, memory, network, identity, email, and cloud evidence.",
    highlights: [
      "Scoped 7 BEC and cybercrime incidents and 2 ransomware cases, reducing time to identification by 2 hours per case.",
      "Identified persistence and unauthorized remote-access tools across 18+ endpoints through memory and Windows artifact analysis.",
      "Pivoted across 25+ indicators and automated enrichment and artifact correlation with Python and PowerShell.",
    ],
  },
  {
    date: "2025",
    title: "Digital Forensics Intern",
    company: "CID Crime Branch HQ",
    location: "India",
    description:
      "Supported cybercrime investigations with endpoint and log analysis, evidence documentation, and OSINT collection.",
  },
  {
    date: "2024",
    title: "Penetration Testing Intern",
    company: "C-DAC Noida",
    location: "Noida, India",
    description:
      "Tested web and network systems against OWASP Top 10 risks, validated findings, and prepared severity-rated remediation reports.",
  },
  {
    date: "2023",
    title: "Ethical Hacking Intern",
    company: "Engineer Core",
    location: "India",
    description:
      "Performed web and network vulnerability assessments and tracked remediation recommendations.",
  },
]

const investigations = [
  {
    number: "01",
    category: "Digital forensics · Incident response",
    title: "Evidence correlation framework",
    description:
      "A Python framework that brings disk, memory, network, and log artifacts into one investigation timeline, matching related indicators to support faster scoping and root-cause analysis.",
    tools: ["Python", "Artifact analysis", "Timeline reconstruction"],
  },
  {
    number: "02",
    category: "Detection engineering · Ransomware",
    title: "Behavior-based ransomware detection",
    description:
      "Detection logic combining file-entropy scoring and behavioral heuristics to flag mass-encryption activity, with ATT&CK-aligned investigation reports for response.",
    tools: ["Python", "Behavioral analysis", "MITRE ATT&CK"],
  },
  {
    number: "03",
    category: "Threat intelligence · OSINT",
    title: "Dark-Scrapper intelligence pipeline",
    description:
      "A research pipeline that collects threat content, extracts and enriches indicators, and classifies relevant findings into ATT&CK-mapped reports and dashboard alerts.",
    tools: ["Python", "NLP", "Threat intelligence"],
  },
]

const strengths = [
  {
    number: "01",
    title: "Threat hunting",
    text: "Hypothesis-led hunts, SIEM/EDR correlation, anomaly analysis, and attack timeline reconstruction.",
    tools: "Splunk · Microsoft Sentinel · KQL / SPL (lab use)",
  },
  {
    number: "02",
    title: "Threat intelligence",
    text: "IOC extraction, enrichment, validation, OSINT, and mapping adversary behavior to ATT&CK and the Cyber Kill Chain.",
    tools: "VirusTotal · AbuseIPDB · Shodan",
  },
  {
    number: "03",
    title: "Security testing",
    text: "Web and network vulnerability assessment, manual finding validation, severity rating, and remediation reporting.",
    tools: "OWASP Top 10 · VAPT",
  },
  {
    number: "04",
    title: "Risk & compliance",
    text: "Control-gap analysis, audit evidence, risk documentation, and security recommendations informed by incident work.",
    tools: "ISO/IEC 27001:2022 · NIST · CIS Controls",
  },
]

const toolGroups = [
  { label: "Forensics", items: "Magnet AXIOM · FTK · EnCase · X-Ways · Autopsy · Belkasoft · Oxygen · Volatility" },
  { label: "Evidence sources", items: "Windows & Linux · Microsoft 365 · Google Workspace · AWS · Network traffic" },
  { label: "Response & analysis", items: "Splunk · Microsoft Sentinel · Wireshark · VirusTotal · AbuseIPDB · Shodan" },
  { label: "Automation", items: "Python · PowerShell · Bash · SQL" },
]

const credentials = [
  "ISO/IEC 27001:2022 Certified Lead Auditor",
  "Belkasoft Advanced Digital Forensics & Windows Forensics",
  "Greyhawk Certified Digital Forensics Practitioner",
  "Fortinet Certified Associate (FCA)",
]

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string
  title: string
  detail?: string
}) {
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
          <span className="wordmark-mark">AD</span>
          <span>Atikram Das</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:atikramdas24@gmail.com">
          Get in touch <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" /> DFIR · Digital forensics & incident response</p>
          <h1>Making sense<br />of the <span>evidence.</span></h1>
          <p className="hero-description">
            I investigate digital incidents, connect the evidence, and turn technical findings into clear next steps.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" /></a>
            <a className="text-link" href="mailto:atikramdas24@gmail.com">Contact me <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin aria-hidden="true" /> India</span>
            <span className="meta-divider" />
            <span>M.Sc. Digital Forensics & Information Security</span>
          </div>
        </div>

        <aside className="case-file" aria-label="Investigation snapshot">
          <div className="case-file-top">
            <span className="case-file-label"><ScanSearch aria-hidden="true" /> Investigation snapshot</span>
            <span className="case-file-index">DFIR / 026</span>
          </div>
          <div className="case-file-title">
            <span className="case-file-kicker">Working across</span>
            <h2>Host. Identity.<br />Network. Cloud.</h2>
          </div>
          <div className="evidence-list">
            <div><span className="evidence-icon"><Fingerprint aria-hidden="true" /></span><span>Evidence-led investigations</span><Check aria-hidden="true" className="evidence-check" /></div>
            <div><span className="evidence-icon"><Radio aria-hidden="true" /></span><span>Cross-source correlation</span><Check aria-hidden="true" className="evidence-check" /></div>
            <div><span className="evidence-icon"><ShieldCheck aria-hidden="true" /></span><span>Actionable response reports</span><Check aria-hidden="true" className="evidence-check" /></div>
          </div>
          <div className="case-file-footer"><span>Current focus</span><span>Forensics · IR · Threat hunting</span></div>
          <div className="case-file-watermark" aria-hidden="true">AD</div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div className="page-width proof-grid">
          <div className="proof-intro"><span className="eyebrow">Field notes</span><p>Selected investigation<br />experience</p></div>
          <div className="proof-stat"><strong>9</strong><span>incidents investigated<br />across BEC & ransomware</span></div>
          <div className="proof-stat"><strong>18<span>+</span></strong><span>endpoints reviewed<br />for missed persistence</span></div>
          <div className="proof-stat"><strong>25<span>+</span></strong><span>indicators pivoted<br />to scope activity</span></div>
          <p className="proof-note">Experience highlights from my AreteIR internship.</p>
        </div>
      </section>

      <section className="section page-width" id="work">
        <SectionHeading eyebrow="Selected work" title="Investigation thinking, built into tools." detail="A few projects at the intersection of digital evidence, incident response, and detection." />
        <div className="project-grid">
          {investigations.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top"><span>{project.number}</span><ArrowUpRight aria-hidden="true" /></div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="confidentiality-note"><ShieldCheck aria-hidden="true" /> Case details are generalized to respect confidentiality; project descriptions reflect academic and portfolio work.</p>
      </section>

      <section className="section section-tinted" id="experience">
        <div className="page-width">
          <SectionHeading eyebrow="Experience" title="From evidence to understanding." detail="Hands-on work across incident response, cybercrime investigations, and security testing." />
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
        <SectionHeading eyebrow="Beyond the investigation" title="Connected areas of expertise." detail="Supporting disciplines that help me investigate, anticipate, and communicate security risk." />
        <div className="strength-grid">
          {strengths.map((strength) => (
            <article className="strength-card" key={strength.number}>
              <span className="strength-number">{strength.number}</span>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
              <span className="strength-tools">{strength.tools}</span>
            </article>
          ))}
        </div>
        <div className="toolbox">
          <div className="toolbox-heading"><span className="eyebrow">Working toolkit</span><span>Tools & methods</span></div>
          {toolGroups.map((group) => <div className="toolbox-row" key={group.label}><span>{group.label}</span><p>{group.items}</p></div>)}
        </div>
      </section>

      <section className="section section-tinted" id="about">
        <div className="page-width about-layout">
          <div className="about-main">
            <SectionHeading eyebrow="About" title="Curious by nature. Careful with evidence." />
            <p className="about-copy">I’m Atikram, a digital forensics and incident response analyst with a foundation in forensic investigation and a practical interest in how adversaries move through systems. I work across endpoint, memory, network, identity, email, and cloud evidence—then communicate what happened, what it means, and what to do next.</p>
            <div className="credential-list">{credentials.map((credential) => <div key={credential}><Check aria-hidden="true" />{credential}</div>)}</div>
          </div>
          <aside className="education-card">
            <span className="eyebrow">Education</span>
            <div className="education-entry"><span>2024 — 2026</span><h3>M.Sc. Digital Forensics & Information Security</h3><p>National Forensic Sciences University</p></div>
            <div className="education-entry"><span>2020 — 2023</span><h3>Bachelor of Computer Applications</h3><p>Assam Science and Technology University</p></div>
          </aside>
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="page-width footer-inner">
          <div><p className="eyebrow">Have a role, case, or conversation in mind?</p><h2>Let’s talk about<br /><span>the evidence.</span></h2></div>
          <div className="footer-actions">
            <a className="button button-light" href="mailto:atikramdas24@gmail.com"><AtSign aria-hidden="true" /> Email Atikram <ArrowRight aria-hidden="true" /></a>
            <a className="footer-link" href="tel:+919387947070">+91 93879 47070</a>
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
