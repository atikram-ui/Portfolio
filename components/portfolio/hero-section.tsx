import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin } from "lucide-react"
import { portfolioData } from "@/data/content"
import { SectionReveal } from "@/components/portfolio/section-reveal"

function ForensicNetwork() {
  return (
    <svg className="network-visual" viewBox="0 0 900 620" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="node-glow">
          <stop stopColor="#22D3EE" stopOpacity="0.8" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="network-line" x1="124" y1="390" x2="743" y2="172" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="#22D3EE" stopOpacity="0.42" />
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <g stroke="url(#network-line)" strokeWidth="1">
        <path d="M106 356 220 259 322 303 430 179 547 244 662 147 794 210" />
        <path d="m220 259 26 155 128-111 79 156 94-215 115 144 132-178" />
        <path d="m106 356 140 58 76 146 132-257 52 257 126-172 142 87" />
        <path d="M322 303 294 109l136 70 117-110 115 78-15 251" />
        <path d="m246 414 84-189 100-46 117 65 94 215" />
      </g>
      <g fill="#080C14" stroke="#4D8BCE" strokeWidth="1.4">
        <circle cx="106" cy="356" r="5" /><circle cx="220" cy="259" r="4" />
        <circle cx="322" cy="303" r="6" /><circle cx="430" cy="179" r="5" />
        <circle cx="547" cy="244" r="6" /><circle cx="662" cy="147" r="5" />
        <circle cx="794" cy="210" r="4" /><circle cx="246" cy="414" r="5" />
        <circle cx="294" cy="109" r="4" /><circle cx="330" cy="560" r="4" />
        <circle cx="430" cy="445" r="5" /><circle cx="482" cy="560" r="4" />
        <circle cx="609" cy="388" r="5" /><circle cx="751" cy="475" r="4" />
        <circle cx="777" cy="297" r="4" /><circle cx="547" cy="69" r="4" />
      </g>
      <circle cx="547" cy="244" r="20" fill="url(#node-glow)" opacity="0.35" />
      <circle cx="322" cy="303" r="16" fill="url(#node-glow)" opacity="0.24" />
      <g fill="#72A9E8" fontFamily="monospace" fontSize="10" opacity="0.72">
        <text x="560" y="237">EVIDENCE NODE</text>
        <text x="335" y="296">CORRELATION</text>
        <text x="667" y="137">TIMELINE</text>
      </g>
    </svg>
  )
}

export function HeroSection() {
  const { personal } = portfolioData

  return (
    <section id="overview" className="hero-section">
      <ForensicNetwork />
      <div className="container hero-layout">
        <SectionReveal>
          <div className="hero-copy">
            <p className="eyebrow">Digital evidence · incident response</p>
            <h1 className="hero-title">{personal.name}</h1>
            <p className="hero-role">{personal.title}</p>
            <h2 className="hero-headline">{personal.headline}</h2>
            <p className="hero-summary">{personal.summary}</p>
            <div className="hero-actions">
              <Link className="action-link action-link-primary" href="#projects">
                Explore My Projects <ArrowDownRight aria-hidden="true" size={16} />
              </Link>
              <a className="action-link" href={personal.resume} download>
                Download Resume <Download aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="social-actions" aria-label="Professional profiles">
              <a className="action-link action-link-quiet" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
                <Linkedin aria-hidden="true" size={16} /> LinkedIn <ArrowUpRight aria-hidden="true" size={13} />
              </a>
              <a className="action-link action-link-quiet" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">
                <Github aria-hidden="true" size={16} /> GitHub <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            </div>
          </div>
        </SectionReveal>
        <SectionReveal>
          <aside className="hero-panel" aria-label="Professional snapshot">
            <div className="panel-topline">
              <span className="panel-label">Professional snapshot</span>
              <span className="panel-reference">DFIR / 01</span>
            </div>
            <h2 className="panel-title">Investigation focus</h2>
            <p className="panel-copy">Evidence sources and workstreams across digital investigations.</p>
            <ul className="snapshot-list">
              {portfolioData.snapshot.map((item) => (
                <li className="snapshot-item" key={item}>
                  <span className="snapshot-marker" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </SectionReveal>
      </div>
    </section>
  )
}
