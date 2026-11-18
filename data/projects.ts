export type PortfolioProject = {
  slug: string
  number: string
  category: string
  title: string
  description: string
  objective: string
  methodology: string[]
  tools: string[]
  findings: string[]
  mark: string
}

export const projects: PortfolioProject[] = [
  {
    slug: "digital-evidence-tampering-detection",
    number: "01",
    category: "Digital forensics / Evidence integrity",
    title: "Digital Evidence Tampering Detection",
    description:
      "Uses SHA-256 hashing to verify file integrity and automated hash comparisons to detect changes in digital evidence.",
    objective: "Verify the integrity of digital evidence files and identify changes that need further review.",
    methodology: [
      "Generate SHA-256 hashes to create file-integrity fingerprints.",
      "Automate hash comparisons across evidence files.",
      "Flag mismatches for further forensic review.",
    ],
    tools: ["Python", "SHA-256", "Digital forensics", "Automation"],
    findings: [
      "Hash comparison provides a repeatable integrity check for evidence files.",
      "Detected mismatches identify files that require further examination.",
    ],
    mark: "HASH",
  },
  {
    slug: "ransomware-detection-system-recovery",
    number: "02",
    category: "Incident response / Recovery",
    title: "Ransomware Detection & System Recovery",
    description:
      "Combines behavioral and entropy analysis with file monitoring, automated alerts, and secure recovery protocols to support ransomware detection and response.",
    objective: "Identify suspicious file activity and support a structured response and recovery workflow.",
    methodology: [
      "Use behavioral and file-entropy analysis to identify suspicious activity.",
      "Monitor file activity and generate automated alerts.",
      "Apply secure recovery protocols to affected systems and files.",
    ],
    tools: ["Python", "Behavioral analysis", "Entropy analysis", "File monitoring"],
    findings: [
      "Behavioral and entropy signals help surface activity for investigation.",
      "Automated alerts and recovery protocols form part of the response workflow.",
    ],
    mark: "IR",
  },
  {
    slug: "cybersecurity-mini-tools",
    number: "03",
    category: "Cybersecurity / Research utilities",
    title: "Cybersecurity Mini-Tools",
    description:
      "A suite of small utilities covering authentication systems, network port scanning, and domain and IP analysis for security research and assessment.",
    objective: "Bring common security-research and assessment tasks together in a small set of focused utilities.",
    methodology: [
      "Build lightweight utilities for authentication-related tasks.",
      "Include network port-scanning functionality for assessment workflows.",
      "Add domain and IP analysis tools for security research.",
    ],
    tools: ["Python", "Network security", "Port scanning", "Domain/IP analysis"],
    findings: [
      "The project groups authentication, network scanning, and domain/IP analysis utilities.",
      "Each tool is scoped to a distinct security-research or assessment task.",
    ],
    mark: "TOOLS",
  },
]
