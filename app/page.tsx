import { ContactSection } from "@/components/portfolio/contact-section"
import { CredentialsSection } from "@/components/portfolio/credentials-section"
import { ExpertiseSection } from "@/components/portfolio/expertise-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SiteNav } from "@/components/portfolio/site-nav"

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>ATIKRAM DAS</span>
          <span>Digital Forensics & Incident Response</span>
          <a href="#overview">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}
