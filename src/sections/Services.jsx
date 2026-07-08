import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CircularProgress from '../components/CircularProgress'
import { services, skillCategories } from '../data/content'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <Reveal className="services-heading">
          <span className="eyebrow">What I Do</span>
          <h2 className="section-heading">
            How I Can Help Your <span className="gold-text">Business</span>
          </h2>
          <p className="section-subtext">
            From product builds to performance optimization and educational
            content, I provide well-rounded solutions that help teams grow
            their online presence.
          </p>
        </Reveal>

        <div className="service-cards-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="service-card ">
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills-heading">
          <span className="eyebrow">Tech Stack</span>
          <h3 className="section-heading">
            Skills &amp; <span className="gold-text">Tools</span>
          </h3>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <Icon name={cat.icon} size={22} />
                </div>
                <div>
                  <h4>{cat.title}</h4>
                  <p>{cat.description}</p>
                </div>
              </div>
              <div className="skill-category-items">
                {cat.skills.map((skill) => (
                  <CircularProgress key={skill.name} percent={skill.percent} label={skill.name} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
