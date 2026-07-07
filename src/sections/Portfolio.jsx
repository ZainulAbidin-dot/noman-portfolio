import Reveal from '../components/Reveal'
import { projects } from '../data/content'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <Reveal className="portfolio-heading">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-heading">
            Projects I&apos;ve <span className="gold-text">Built &amp; Launched</span>
          </h2>
          <p className="section-subtext">
            A snapshot of platforms and products designed to solve real
            problems for real users.
          </p>
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90} className="project-card">
              <div className="project-thumb">
                <div className="project-thumb-placeholder">
                  <span>{project.category}</span>
                </div>
                <div className="project-overlay">
                  <a href="#" className="btn btn-primary project-view-btn" onClick={(e) => e.preventDefault()}>
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
