import { FileSearch2, Factory, Network, Shield, ShieldAlert } from "lucide-react"

const expertiseAreas = [
  {
    number: "01",
    title: "Digital Forensics",
    icon: FileSearch2,
    summary: "Preserve, examine, and correlate endpoint artifacts into a clear, traceable account of events.",
    tools: "Autopsy · EnCase · Belkasoft · Oxygen · Volatility", 
    scope: "Evidence handling · disk & memory",
  },
  {
    number: "02",
    title: "Incident Response",
    icon: ShieldAlert,
    summary: "Scope suspicious activity, reconstruct timelines, and translate technical findings into response actions.",
    tools: "SIEM/SOAR · Email analysis · Malware analysis",
    scope: "Triage · scoping · reporting",
  },
  {
    number: "03",
    title: "Cybersecurity",
    icon: Shield,
    summary: "Assess security gaps, validate findings, and connect threat context with practical risk reduction.",
    tools: "Splunk · Nessus · Vulnerability assessment",
    scope: "Threat hunting · testing · risk",
  },
  {
    number: "04",
    title: "Network Forensics",
    icon: Network,
    summary: "Review network activity and connect traffic, indicators, and endpoint evidence across an investigation.",
    tools: "Wireshark · Nmap · Traffic analysis",
    scope: "Traffic analysis · event correlation",
  },
  {
    number: "05",
    title: "OT Security",
    icon: Factory,
    summary: "Operational technology brings safety, availability, and evidence-preservation constraints to incident response.",
    tools: "Discipline context · no field experience implied",
    scope: "Industrial systems · response considerations",
  },
]

export function ExpertiseCards() {
  return (
    <div className="expertise-card-grid">
      {expertiseAreas.map((area) => {
        const Icon = area.icon
        return (
          <article className="expertise-card" key={area.number}>
            <div className="expertise-card-top">
              <Icon aria-hidden="true" />
              <span>{area.number} / 05</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.summary}</p>
            <span className="expertise-card-scope">{area.scope}</span>
            <span className="expertise-card-tools">{area.tools}</span>
          </article>
        )
      })}
    </div>
  )
}
