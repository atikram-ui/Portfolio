import Link from "next/link"
import { portfolioData } from "@/data/content"

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand-lockup" href="/#overview" aria-label="Atikram Das — overview">
          <span className="brand-monogram" aria-hidden="true">AD</span>
          <span>
            <span className="brand-name">ATIKRAM DAS</span>
            <span className="brand-role">DFIR Analyst</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {portfolioData.navigation.map((item) => (
            <Link key={item.href} href={`/#${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
