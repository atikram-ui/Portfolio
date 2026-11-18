"use client"

import { useRef, useState, type KeyboardEvent } from "react"

const tabs = [
  {
    id: "forensics",
    label: "Digital forensics & incident response",
    summary: "Evidence preservation, examination, correlation, and clear incident reporting across complex digital environments.",
    capabilities: ["Disk and memory forensics", "Windows artifact analysis", "BEC and ransomware investigations", "Incident scoping and timeline reconstruction", "Evidence documentation and chain of custody", "Root-cause analysis and response reporting"],
    tools: "Magnet AXIOM · FTK · EnCase · X-Ways · Autopsy · Belkasoft · Oxygen · Volatility · OSForensics · Redline",
  },
  {
    id: "hunting",
    label: "Threat hunting",
    summary: "Proactive, hypothesis-led investigation of suspicious activity across endpoint and security telemetry.",
    capabilities: ["Hypothesis-driven hunts", "SIEM and EDR event correlation", "Anomaly and persistence analysis", "Attack timeline reconstruction", "IOC pivots and investigative triage", "MITRE ATT&CK behavior mapping"],
    tools: "Splunk · Microsoft Sentinel · KQL · SPL · Microsoft Defender · Wireshark",
  },
  {
    id: "intelligence",
    label: "Threat intelligence",
    summary: "Enriching and connecting indicators to build context around adversary infrastructure and activity.",
    capabilities: ["IOC extraction and enrichment", "OSINT collection and validation", "Infrastructure and indicator pivots", "Threat actor behavior research", "ATT&CK and Cyber Kill Chain mapping", "Actionable intelligence reporting"],
    tools: "VirusTotal · AbuseIPDB · Shodan · Talos Intelligence · MITRE ATT&CK",
  },
  {
    id: "security",
    label: "Security testing & risk",
    summary: "Assessing security weaknesses and translating technical observations into practical recommendations.",
    capabilities: ["Web and network security testing", "OWASP Top 10 assessment", "Manual finding validation", "Severity and risk assessment", "Control-gap analysis and audit evidence", "Remediation reporting"],
    tools: "OWASP · ISO/IEC 27001:2022 · NIST CSF · NIST SP 800-53 · CIS Controls · SOC 2 · PCI DSS · GDPR · DPDPA · HIPAA",
  },
]

export function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = tabs[activeTab]

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let nextIndex = activeTab
    if (event.key === "ArrowRight") nextIndex = (activeTab + 1) % tabs.length
    else if (event.key === "ArrowLeft") nextIndex = (activeTab - 1 + tabs.length) % tabs.length
    else if (event.key === "Home") nextIndex = 0
    else if (event.key === "End") nextIndex = tabs.length - 1
    else return
    event.preventDefault()
    setActiveTab(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="expertise-tabs">
      <div className="expertise-tab-list" role="tablist" aria-label="Areas of expertise" aria-orientation="horizontal">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => { tabRefs.current[index] = element }}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
          >{tab.label}</button>
        ))}
      </div>
      <section className="expertise-panel" id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`tab-${active.id}`} tabIndex={0}>
        <div className="expertise-panel-heading"><span className="eyebrow">0{activeTab + 1} / 0{tabs.length} · Capability area</span><h3>{active.label}</h3><p>{active.summary}</p></div>
        <div className="expertise-details">
          <div><h4>Core capabilities</h4><ul>{active.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul></div>
          <div><h4>Tools &amp; frameworks</h4><p>{active.tools}</p></div>
        </div>
      </section>
    </div>
  )
}
