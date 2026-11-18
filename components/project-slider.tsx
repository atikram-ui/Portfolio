"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

type Project = {
  number: string
  category: string
  title: string
  description: string
  tools: string[]
  mark: string
}

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = projects[activeIndex]
  const showProject = (index: number) => setActiveIndex((index + projects.length) % projects.length)

  return (
    <div className="project-slider" aria-roledescription="carousel" aria-label="Selected projects">
      <article className="project-slide" aria-live="polite" aria-atomic="true">
        <div className="slide-visual" aria-hidden="true">
          <span className="slide-visual-label">CASE STUDY / {project.number}</span>
          <span className="slide-visual-mark">{project.mark}</span>
          <span className="slide-visual-grid" />
          <span className="slide-visual-caption">Evidence · analysis · response</span>
        </div>
        <div className="slide-content">
          <div className="project-card-top"><span>{project.number} / 0{projects.length}</span><ArrowUpRight aria-hidden="true" /></div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
        </div>
      </article>
      <div className="slider-controls">
        <div className="slider-dots" role="group" aria-label="Choose a project">
          {projects.map((item, index) => (
            <button key={item.number}             type="button" aria-pressed={activeIndex === index} aria-label={`Show project ${index + 1}: ${item.title}`} onClick={() => showProject(index)} />
          ))}
        </div>
        <span className="slider-counter">0{activeIndex + 1} <span>/</span> 0{projects.length}</span>
        <div className="slider-arrows">
          <button type="button" aria-label="Previous project" onClick={() => showProject(activeIndex - 1)}><ArrowLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Next project" onClick={() => showProject(activeIndex + 1)}><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  )
}
