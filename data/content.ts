export const portfolioData = {
  personal: {
    name: "ATIKRAM DAS",
    title: "Digital Forensics & Incident Response Analyst",
    headline: "Investigating Digital Evidence. Reconstructing Cyber Incidents.",
    summary:
      "Digital Forensics and Incident Response professional experienced in investigating BEC, ransomware and cybercrime incidents through disk, memory, network and log evidence. Focused on forensic integrity, artifact analysis, IOC correlation and evidence-driven investigations.",
    email: "atikramdas24@gmail.com",
    github: "https://github.com/atikram-ui",
    linkedin: "https://www.linkedin.com/in/atikram-das-92b271320",
    resume: "/atikram-das-resume.pdf",
  },
  navigation: [
    { label: "Overview", href: "overview" },
    { label: "Experience", href: "experience" },
    { label: "Expertise", href: "expertise" },
    { label: "Projects", href: "projects" },
    { label: "Credentials", href: "credentials" },
    { label: "Contact", href: "contact" },
  ],
  snapshot: [
    "Digital Forensics",
    "Memory & Disk Forensics",
    "Incident Investigation",
    "Evidence Acquisition",
    "Threat Intelligence",
  ],
  experience: {
    primary: {
      title: "Forensics Analyst",
      company: "AreteIR",
      location: "Hyderabad, India",
      period: "January 2026 – October 2026",
      highlights: [
        "Investigated 7 BEC and cybercrime incidents and 2 ransomware cases.",
        "Correlated memory, disk and network artifacts with Splunk and Microsoft Sentinel.",
        "Reduced time to identification by approximately two hours per case through evidence correlation.",
        "Performed forensic imaging and evidence preservation under chain-of-custody procedures.",
        "Analyzed Windows and browser artifacts.",
        "Investigated Microsoft 365, Google Workspace and AWS logs.",
        "Identified persistence mechanisms and unauthorized remote-access tools across 18+ endpoints.",
        "Pivoted through 25+ IOCs using VirusTotal, AbuseIPDB and Shodan.",
        "Mapped attacker behavior across 50+ historical cases using MITRE ATT&CK and Cyber Kill Chain.",
        "Automated IOC enrichment and artifact correlation using Python and PowerShell.",
      ],
    },
    secondary: [
      {
        title: "Digital Forensics Intern",
        company: "CID Crime Branch HQ",
        period: "May 2025 – June 2025",
      },
      {
        title: "Penetration Testing Intern",
        company: "CDAC Noida",
        period: "2024",
      },
      {
        title: "Ethical Hacking Intern",
        company: "Engineer Core",
        period: "2023",
      },
    ],
  },
  expertise: [
    {
      priority: "Primary domain",
      title: "Digital Forensics & Incident Response",
      description:
        "Evidence-led examination, incident reconstruction and defensible documentation across digital sources.",
      skills: [
        "Disk and endpoint forensics",
        "Memory forensics",
        "Network forensics",
        "Forensic imaging",
        "Evidence acquisition and preservation",
        "Chain of custody",
        "Windows and Linux artifact analysis",
        "Registry and event log analysis",
        "Browser artifact analysis",
        "Timeline reconstruction",
        "Root-cause analysis",
        "BEC and ransomware investigation",
        "Digital evidence documentation",
      ],
    },
    {
      priority: "Secondary domain",
      title: "Incident Investigation & Security Operations",
      description:
        "Cross-source log correlation to establish incident scope, sequence and affected activity.",
      skills: [
        "SIEM/EDR log correlation",
        "Splunk",
        "Microsoft Sentinel",
        "Microsoft 365 logs",
        "Google Workspace logs",
        "AWS logs",
        "Incident triage",
        "Attack scope reconstruction",
      ],
    },
    {
      priority: "Secondary domain",
      title: "Threat Intelligence & OSINT",
      description:
        "Indicator validation and contextual pivots to support investigation and threat understanding.",
      skills: [
        "IOC extraction and enrichment",
        "Threat hunting",
        "OSINT",
        "VirusTotal",
        "AbuseIPDB",
        "Shodan",
        "Talos Intelligence",
      ],
    },
    {
      priority: "Secondary domain",
      title: "Security Testing & OT Security",
      description:
        "Supporting assessment skills and OT security fundamentals complement the primary DFIR practice.",
      skills: ["Vulnerability assessment", "Penetration testing", "OWASP Top 10", "OT security fundamentals"],
    },
  ],
  supportingSkills: [
    { label: "Programming", values: ["Python", "PowerShell", "Bash", "SQL"] },
    { label: "Query languages", values: ["KQL", "SPL"], note: "Academic and lab use" },
    { label: "Frameworks", values: ["MITRE ATT&CK", "Cyber Kill Chain", "NIST SP 800-61"] },
    {
      label: "Compliance",
      values: ["ISO/IEC 27001:2022", "GDPR", "DPDPA", "HIPAA awareness"],
    },
  ],
  toolkit: [
    {
      category: "Disk & computer forensics",
      tools: ["Magnet AXIOM", "FTK", "EnCase", "X-Ways", "Autopsy", "Belkasoft", "Oxygen"],
    },
    { category: "Memory forensics", tools: ["Volatility"] },
    { category: "Network forensics", tools: ["Wireshark"] },
    { category: "SIEM & security monitoring", tools: ["Splunk", "Microsoft Sentinel"] },
    { category: "Threat intelligence", tools: ["VirusTotal", "AbuseIPDB", "Shodan", "Talos Intelligence"] },
    { category: "Scripting", tools: ["Python", "PowerShell", "Bash", "SQL"] },
  ],
  projects: [
    {
      slug: "integrated-digital-forensics-correlation-framework",
      number: "01",
      title: "Integrated Digital Forensics Correlation Framework",
      technology: ["Python"],
      description:
        "Parses disk, memory, network and log artifacts into a unified investigation timeline, correlating related evidence to support IOC identification, attack scoping and traceable reporting.",
      problem:
        "Evidence spread across disk, memory, network and log sources can make cross-source review and timeline reconstruction difficult.",
      objectives: [
        "Bring parsed evidence sources into one investigation timeline.",
        "Correlate related artifacts across sources.",
        "Support IOC identification, attack scoping and traceable reporting.",
      ],
      architecture: [
        "Disk, memory, network and log artifacts",
        "Artifact parsing and cross-source correlation",
        "Unified investigation timeline",
        "IOC identification, attack scoping and reporting",
      ],
      methodology: [
        "Parse the stated evidence sources into a common timeline.",
        "Correlate related artifacts across those sources.",
        "Use the resulting timeline to support investigation and reporting.",
      ],
      tools: ["Python"],
    },
    {
      slug: "ransomware-detection-recovery",
      number: "02",
      title: "Ransomware Detection & Recovery",
      technology: ["Python"],
      description:
        "A behavioral ransomware detection project that evaluates file entropy and mass-encryption patterns, raises early alerts and generates ATT&CK-aligned investigation reports.",
      problem:
        "Signature-only identification may not capture behavioral indicators of ransomware activity early enough to support investigation.",
      objectives: [
        "Evaluate file entropy and mass-encryption patterns as behavioral indicators.",
        "Raise alerts early in the described detection workflow.",
        "Produce ATT&CK-aligned investigation reports.",
      ],
      architecture: [
        "File activity",
        "Entropy and mass-encryption pattern evaluation",
        "Early alert",
        "ATT&CK-aligned investigation report",
      ],
      methodology: [
        "Assess the stated file behavior signals rather than relying only on signatures.",
        "Generate an alert when the described patterns are detected.",
        "Present detection context in an ATT&CK-aligned investigation report.",
      ],
      tools: ["Python", "MITRE ATT&CK"],
    },
    {
      slug: "dark-scrapper",
      number: "03",
      title: "Dark-Scrapper — Dark-Web Threat Intelligence Pipeline",
      technology: ["Python", "Tor", "NLP"],
      description:
        "A threat intelligence pipeline that collects data from Tor hidden services, extracts and enriches IOCs, and produces MITRE ATT&CK-mapped reports.",
      problem:
        "Relevant threat indicators from Tor hidden services need to be collected and contextualized for investigation use.",
      objectives: [
        "Collect data from Tor hidden services.",
        "Extract and enrich indicators through threat intelligence sources.",
        "Produce MITRE ATT&CK-mapped reports.",
      ],
      architecture: [
        "Tor hidden-service data",
        "IOC extraction",
        "Threat intelligence enrichment",
        "MITRE ATT&CK-mapped reports",
      ],
      methodology: [
        "Collect source data from Tor hidden services.",
        "Extract indicators and enrich them with threat intelligence sources.",
        "Present the resulting intelligence in ATT&CK-mapped reports.",
      ],
      tools: ["Python", "Tor", "NLP", "VirusTotal", "AbuseIPDB", "Shodan"],
    },
  ],
  credentials: [
    "Fortinet Certified Associate (FCA)",
    "OPSWAT Certified OT Security Expert",
    "OCI Certified Gen AI Professional",
    "ISO/IEC 27001:2022 Professional",
    "Greyhawk Certified Digital Forensics Practitioner (GCDFP)",
  ],
  education: [
    {
      degree: "M.Sc. Digital Forensics and Information Security",
      institution: "National Forensic Sciences University",
      location: "Gandhinagar",
      period: "2024–2026",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Assam Science and Technology University",
      location: "Guwahati",
      period: "2020–2023",
    },
  ],
} as const
