"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { portfolioData } from "@/data/content"
import { AnimatedNavbar } from "@/components/animated-navbar"
import { CyberBackground } from "@/components/cyber-background"
import { TerminalText } from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Lock,
  Search,
  Code,
  Database,
  Network,
  Github,
  Linkedin,
  Award,
  Briefcase,
  Users,
  Terminal,
  FileSearch,
  Bug,
  Wifi,
  Eye,
  Zap,
  Activity,
  HardDrive,
  Cpu,
  Globe,
  Settings,
  AlertTriangle,
  Microscope,
  Layers,
  MonitorSpeaker,
  Radar,
  Fingerprint,
  ShieldCheck,
  Send,
} from "lucide-react"
import { useState } from "react"

const roundSvgCoordinate = (value: number) => Math.round(value * 1000) / 1000

const iconMap = {
  Cybersecurity: Shield,
  "Digital Forensics": Search,
  Programming: Code,
  Networking: Network,
  "Penetration Testing": Lock,
  "Database Management": Database,
  Leadership: Users,
  Communication: Briefcase,
  "Problem Solving": Bug,
  "SIEM/SOAR": Database,
  "Forensics Tools": FileSearch,
  "Network Tools": Wifi,
  "Security Tools": Lock,
}

// Tool icons mapping
const toolIcons: { [key: string]: any } = {
  // SIEM/SOAR Tools
  Splunk: Database,
  "IBM QRadar": Radar,
  ArcSight: Shield,
  Phantom: Eye,
  Demisto: Settings,
  LogRhythm: Activity,

  // Forensics Tools
  Autopsy: FileSearch,
  Volatility: Microscope,
  EnCase: HardDrive,
  "OS Forensics": Cpu,
  "Oxygen Forensics": Fingerprint,
  FTK: Layers,
  Cellebrite: MonitorSpeaker,

  // Network Tools
  Wireshark: Network,
  Nmap: Globe,
  Netcat: Terminal,
  TCPdump: Activity,
  "Burp Suite": Bug,
  "OWASP ZAP": Zap,

  // Security Tools
  Metasploit: AlertTriangle,
  Nessus: ShieldCheck,
  OpenVAS: Shield,
  Nikto: Search,
  "John the Ripper": Lock,
  Hashcat: Cpu,
  "Aircrack-ng": Wifi,
  Maltego: Network,
  Shodan: Globe,
  VirusTotal: Shield,
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const coreCompetencies = [
    { name: "SOC Operations", color: "#00E6FF" },
    { name: "Digital Forensics", color: "#A239CA" },
    { name: "Incident Response", color: "#007BFF" },
    { name: "SIEM/SOAR", color: "#00FF88" },
    { name: "Threat Detection", color: "#FF6B6B" },
    { name: "Malware Analysis", color: "#FFD93D" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        if (data.mailto) {
          // Open email client as fallback
          window.open(data.mailto, "_blank")
          setSubmitStatus("success")
          setFormData({ name: "", email: "", message: "" })
        } else {
          // Email was sent successfully via API
          setSubmitStatus("success")
          setFormData({ name: "", email: "", message: "" })
        }
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      const subject = encodeURIComponent("Portfolio Contact from " + formData.name)
      const body = encodeURIComponent(
        `Hi Atikram,

I found your portfolio and would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`,
      )

      const mailtoLink = `mailto:cyber.secfor@gmail.com?subject=${subject}&body=${body}`
      window.open(mailtoLink, "_blank")
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CyberBackground />
      <AnimatedNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif font-bold text-foreground">
              ATIKRAM DAS
            </motion.h1>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="text-xl md:text-2xl font-mono">
                <TerminalText text="$ whoami" delay={150} />
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto max-w-md"
              />
            </motion.div>

            <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {portfolioData.personal.title.toUpperCase()}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              SECURING THE DIGITAL WORLD, ONE VULNERABILITY AT A TIME.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
            <div className="flex justify-center items-center">
              <div className="flex gap-4">
                {[
                  { icon: Github, href: portfolioData.personal.github },
                  { icon: Linkedin, href: portfolioData.personal.linkedin },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="glass-card neon-border bg-transparent h-12 w-12"
                      onClick={() => window.open(href, "_blank")}
                    >
                      <Icon className="h-6 w-6" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">ABOUT ME</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Card className="glass-card neon-border relative overflow-hidden">
              <CardContent className="p-12">
                <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">{portfolioData.about}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">CORE COMPETENCIES</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card neon-border">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                  {/* Pie Chart Visualization */}
                  <div className="relative w-80 h-80">
                    <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                      {coreCompetencies.map((competency, index) => {
                        const angle = (360 / coreCompetencies.length) * index
                        const nextAngle = (360 / coreCompetencies.length) * (index + 1)
                        const startAngle = (angle * Math.PI) / 180
                        const endAngle = (nextAngle * Math.PI) / 180

                        const x1 = roundSvgCoordinate(100 + 80 * Math.cos(startAngle))
                        const y1 = roundSvgCoordinate(100 + 80 * Math.sin(startAngle))
                        const x2 = roundSvgCoordinate(100 + 80 * Math.cos(endAngle))
                        const y2 = roundSvgCoordinate(100 + 80 * Math.sin(endAngle))

                        const largeArcFlag = nextAngle - angle > 180 ? 1 : 0

                        return (
                          <motion.path
                            key={competency.name}
                            d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                            fill={competency.color}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ delay: index * 0.03, duration: 0.3 }}
                            whileHover={{ opacity: 1, scale: 1.02 }}
                            className="cursor-pointer"
                          />
                        )
                      })}
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-1 gap-4">
                    {coreCompetencies.map((competency, index) => (
                      <motion.div
                        key={competency.name}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03, duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: competency.color }} />
                        <span className="text-lg font-medium">{competency.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">TECHNICAL SKILLS</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioData.technicalSkills.map((skillGroup, index) => {
              const IconComponent = iconMap[skillGroup.category as keyof typeof iconMap] || Code
              return (
                <motion.div
                  key={skillGroup.category}
                  variants={popIn}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="glass-card neon-border h-full project-card">
                    <CardHeader>
                      <CardTitle className="font-serif text-xl flex items-center gap-3">
                        <IconComponent className="h-7 w-7 text-primary" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="neon-border hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">SOFT SKILLS</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {portfolioData.softSkills.map((skillGroup, index) => {
              const IconComponent = iconMap[skillGroup.category as keyof typeof iconMap] || Users
              return (
                <motion.div
                  key={skillGroup.category}
                  variants={popIn}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="glass-card neon-border h-full project-card">
                    <CardHeader>
                      <CardTitle className="font-serif text-xl flex items-center gap-3">
                        <IconComponent className="h-7 w-7 text-primary" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="neon-border hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">TOOLS & TECHNOLOGIES</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {Object.entries(portfolioData.tools).map(([category, tools], index) => {
              const IconComponent = iconMap[category as keyof typeof iconMap] || Terminal
              return (
                <motion.div
                  key={category}
                  variants={popIn}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="glass-card neon-border h-full project-card">
                    <CardHeader>
                      <CardTitle className="font-serif text-lg flex items-center gap-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => {
                          const ToolIcon = toolIcons[tool] || Terminal
                          return (
                            <motion.div key={tool} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Badge
                                variant="outline"
                                className="neon-border hover:bg-primary/10 transition-colors text-xs flex items-center gap-1"
                              >
                                <ToolIcon className="h-3 w-3" />
                                {tool}
                              </Badge>
                            </motion.div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">PROJECTS</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={popIn}
                whileHover={{ y: -5, rotateX: 1, rotateY: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="glass-card neon-border h-full group project-card">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary neon-border">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                PROFESSIONAL EXPERIENCE
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Work Experience */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl flex items-center gap-3">
                    <Briefcase className="h-8 w-8 text-primary" />
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {portfolioData.experience.jobs.map((job, index) => (
                    <motion.div
                      key={job.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-l-2 border-primary/30 pl-8 hover:border-primary/60 transition-colors"
                    >
                      <h3 className="font-semibold text-primary text-xl">{job.title}</h3>
                      <p className="text-muted-foreground text-lg">
                        {job.company === "Echoboom Management Solutions"
                          ? `${job.company} • 2023-24`
                          : `${job.company} • ${job.period}`}
                      </p>
                      <ul className="text-base mt-3 space-y-2 list-disc list-inside">
                        {job.responsibilities.map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Internships */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    Internships & Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {portfolioData.experience.internships.map((internship, index) => (
                    <motion.div
                      key={internship.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-l-2 border-primary/30 pl-8 hover:border-primary/60 transition-colors"
                    >
                      <h3 className="font-semibold text-primary text-xl">{internship.title}</h3>
                      <p className="text-muted-foreground text-lg">
                        {internship.company === "CEC Assam Hindustan College"
                          ? `${internship.company} • 2024`
                          : `${internship.company} • ${internship.period}`}
                      </p>
                      <ul className="text-base mt-3 space-y-2 list-disc list-inside">
                        {internship.responsibilities.map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                CERTIFICATIONS & COURSES
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Certifications - 3x3 Grid */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl flex items-center justify-center gap-3">
                    <Award className="h-7 w-7 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolioData.certifications
                      .flatMap((cert) => cert.items)
                      .filter((item) => item !== "Vulnerability Assessment")
                      .map((item, index) => (
                        <motion.div
                          key={item}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="neon-border hover:bg-primary/10 transition-colors text-sm w-full justify-center py-3 px-4 text-center"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Courses - 5x4 Grid */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl flex items-center justify-center gap-3">
                    <Code className="h-7 w-7 text-primary" />
                    Courses & Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {[...portfolioData.courses.flatMap((course) => course.items), "Vulnerability Assessment"].map(
                      (item, index) => (
                        <motion.div
                          key={item}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <Badge
                            variant="outline"
                            className="neon-border hover:bg-primary/10 transition-colors text-sm w-full justify-center py-3 px-4 text-center"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                ACHIEVEMENTS & RECOGNITION
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {portfolioData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={popIn}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="glass-card neon-border h-full project-card">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl flex items-center gap-3">
                      <Award className="h-8 w-8 text-primary" />
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-l-2 border-primary/30 pl-6">
                      <p className="text-muted-foreground text-lg">{achievement.organization}</p>
                      <p className="text-base mt-2">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">GET IN TOUCH</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card neon-border">
              <CardContent className="p-12">
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div className="text-center space-y-4">
                    <p className="text-xl text-muted-foreground">
                      Ready to secure your digital infrastructure? Let's connect!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="glass-card neon-border bg-transparent"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="glass-card neon-border bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="glass-card neon-border bg-transparent resize-none"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        size="lg"
                        className="glass-card neon-border font-serif group px-8 py-4 text-lg disabled:opacity-50"
                      >
                        <Send className="mr-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>

                    <p className="text-sm text-muted-foreground text-center">
                      Your message will be sent directly to my inbox.
                    </p>
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center font-medium"
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center font-medium"
                    >
                      ✗ Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-muted-foreground text-lg mb-4">
              <span className="text-primary font-mono text-xl">$</span> SECURING THE DIGITAL WORLD, ONE VULNERABILITY AT
              A TIME.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 Atikram Das. All Rights Reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
