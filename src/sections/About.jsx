import Reveal from '../components/Reveal'
import StatCounter from '../components/StatsCard'
import { stats } from '../data/content'
import './About.css'
import placeholderImage from '../assets/profile2.png'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-inner">
        <Reveal className="about-text">
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading">
            From Code to <span className="gold-text">Community</span>
          </h2>
          <p className="about-paragraph">
            I&apos;m a passionate developer who builds websites, applications,
            and digital experiences. What started as curiosity about how the
            web works has grown into a mission to create solutions that work
            beautifully and help people learn along the way.
          </p>
          <p className="about-paragraph">
            My approach combines technical excellence with practical
            problem-solving. I write clean, maintainable code and build
            complete product experiences — from custom applications to
            e-commerce stores and learning platforms — while sharing what I
            learn with a growing community of developers.
          </p>
          <a href="#contact" className="btn btn-primary about-cta">
            Know More About Me
          </a>
        </Reveal>

        <Reveal className="about-visual" delay={150} zoom>
          <div className="about-image-frame">
            <div className="about-image-placeholder">
              <img src={placeholderImage} alt="Profile" style={{  margin:" -2rem auto", minWidth: "100%" }} />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
