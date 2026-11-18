export const portfolioData = {
  personal: {
    name: "Atikram Das",
    title: "Digital Forensics & Incident Response Analyst",
    location: "Hyderabad, Telangana, India",
    email: "amdofficial289@gmail.com",
    phone: "+91 9387947070",
    linkedin: "https://www.linkedin.com/in/atikram-das-92b271320",
    github: "https://github.com/atikram-ui",
  },

  about:
    "I investigate security incidents by following the evidence: examining endpoint, disk, memory, network, identity, email, and log artifacts to establish what happened and why. My work spans digital forensics, incident response, threat hunting, and security risk—grounded in careful evidence handling, clear reporting, and a practical understanding of attacker behavior.",

  projects: [
    {
      title: "Integrated Digital Forensics Correlation Framework",
      description:
        "A framework for correlating disk, memory, network, and log artifacts into a unified investigation timeline. Automated artifact matching helps connect indicators, scope incidents, and organize findings for reporting.",
      tech: ["Python", "Artifact analysis", "Timeline reconstruction", "IOC correlation"],
      index: "01",
    },
    {
      title: "Ransomware Detection & Recovery",
      description:
        "Behavior-focused ransomware detection combining file-entropy scoring and behavioral heuristics to flag suspicious mass-encryption activity, with investigation-oriented reporting and recovery workflows.",
      tech: ["Python", "Entropy analysis", "Behavioral detection", "MITRE ATT&CK"],
      index: "02",
    },
    {
      title: "Dark-Scrapper",
      subtitle: "Dark-web threat intelligence pipeline",
      description:
        "A Tor-based threat-intelligence pipeline described as extracting indicators from dark-web sources, enriching them with VirusTotal, AbuseIPDB, and Shodan, and producing categorized, ATT&CK-mapped reports and alerts.",
      tech: ["Python", "Tor", "NLP", "Threat intelligence"],
      index: "03",
    },
    {
      title: "Evidence Tampering Detection",
      description:
        "A SHA-256 file-integrity validation tool that compares evidence and monitored files against recorded hash baselines, helping identify changed or missing files and preserve evidence integrity.",
      tech: ["Python", "SHA-256", "Integrity validation", "Forensic reporting"],
      index: "04",
    },
  ],

  skillGroups: [
    {
      category: "Digital forensics",
      description: "Evidence-led examination across devices and data sources.",
      skills: ["Disk & endpoint forensics", "Memory forensics", "Network forensics", "Windows/Linux artifacts", "Browser artifacts", "Forensic imaging", "Chain of custody", "Timeline reconstruction"],
    },
    {
      category: "Incident response & threat hunting",
      description: "Investigation, scoping, and analysis of attacker activity.",
      skills: ["BEC investigations", "Ransomware analysis", "IOC extraction & pivoting", "SIEM/EDR correlation", "Alert triage", "Root-cause analysis", "MITRE ATT&CK", "Cyber Kill Chain"],
    },
    {
      category: "Threat intelligence & OSINT",
      description: "Turning external indicators and open sources into useful context.",
      skills: ["OSINT collection", "Tor-based monitoring", "IOC enrichment", "VirusTotal", "AbuseIPDB", "Shodan", "I2P familiarity", "PGP analysis familiarity"],
    },
    {
      category: "Governance, risk & compliance",
      description: "Security controls, audit support, and risk-informed recommendations.",
      skills: ["ISO/IEC 27001:2022", "NIST CSF", "NIST SP 800-53", "NIST SP 800-61", "CIS Controls", "PCI DSS", "SOC 2 awareness", "GDPR / DPDPA / HIPAA awareness", "Risk & gap assessment", "Audit evidence"],
    },
    {
      category: "Security testing & fundamentals",
      description: "Practical foundation across web, network, and cloud security.",
      skills: ["OWASP Top 10", "Web & network VAPT", "Vulnerability assessment", "TCP/IP", "Windows & Linux security", "AWS fundamentals", "Container scanning", "Access control"],
    },
    {
      category: "Scripting & analysis",
      description: "Small, practical automations for investigation and documentation.",
      skills: ["Python", "PowerShell", "Bash", "SQL", "KQL / SPL (academic & lab use)", "Excel", "Technical reporting"],
    },
  ],

  tools: [
    { category: "Forensics", items: ["Magnet AXIOM", "FTK / FTK Imager", "EnCase", "X-Ways", "Autopsy", "Belkasoft", "Oxygen Forensics", "OSForensics", "Cellebrite UFED (basic)"] },
    { category: "Memory & endpoint", items: ["Volatility", "Redline"] },
    { category: "SIEM & network", items: ["Splunk", "Microsoft Sentinel", "Wireshark"] },
    { category: "Testing & research", items: ["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Nuclei", "Kali Linux", "Netcat", "Nikto", "John the Ripper", "Hashcat"] },
  ],

  experience: [
    {
      title: "Forensics Analyst",
      company: "AreteIR",
      location: "Hyderabad, Telangana",
      period: "Jan 2026 — Oct 2026",
      kind: "Professional experience",
      responsibilities: [
        "Investigated BEC and cybercrime incidents across endpoint, network, memory, disk, and log sources, correlating findings with SIEM telemetry to establish incident scope.",
        "Analyzed Windows and Linux artifacts—including Registry, Event Logs, file systems, browser artifacts, services, and scheduled tasks—to identify indicators and suspicious activity.",
        "Acquired and preserved digital evidence using forensic imaging and documented chain-of-custody procedures.",
        "Extracted and correlated indicators, applied MITRE ATT&CK context to observed behavior, and prepared structured investigation reports and remediation recommendations.",
      ],
    },
    {
      title: "Cybersecurity & Digital Forensics Intern",
      company: "CID Crime Branch HQ",
      location: "Assam, India",
      period: "May — Jun 2025",
      kind: "Internship",
      responsibilities: [
        "Supported cybercrime investigations through endpoint and log analysis, evidence acquisition, documentation, and forensic reporting.",
        "Conducted OSINT collection, including Tor-based monitoring, to support investigative intelligence gathering.",
      ],
    },
    {
      title: "Penetration Testing Intern",
      company: "CDAC",
      location: "Noida, India",
      period: "2024",
      kind: "Internship",
      responsibilities: [
        "Conducted web and network penetration testing aligned with OWASP Top 10 risk categories and assessed vulnerability findings.",
        "Prepared vulnerability assessment and remediation reports with severity, evidence, and recommendations.",
      ],
    },
    {
      title: "Ethical Hacking Intern",
      company: "Engineer Core",
      location: "India",
      period: "2023",
      kind: "Internship",
      responsibilities: [
        "Performed vulnerability assessment and penetration testing of web applications and networks, documenting findings and remediation guidance.",
      ],
    },
  ],

  certifications: [
    "ISO/IEC 27001:2022 Certified Lead Auditor",
    "Belkasoft — Advanced Digital Forensics",
    "Belkasoft — Windows Forensics",
    "Fortinet Certified Associate (FCA)",
    "OPSWAT — Certified OT Security Expert",
    "Greyhawk — Certified Digital Forensics Practitioner",
    "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  ],

  education: [
    { degree: "M.Sc. Digital Forensics and Information Security", institution: "National Forensic Sciences University", location: "Gandhinagar", period: "2024 — 2026" },
    { degree: "Bachelor of Computer Application (BCA)", institution: "Assam Science and Technology University", location: "Guwahati", period: "2020 — 2023" },
  ],
}
