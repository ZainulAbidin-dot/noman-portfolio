import RotatingRings from '../components/RotatingRings'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section">
      <div className="hero-glow hero-glow-cyan" />
      <div className="hero-glow hero-glow-gold" />

      <div className="container hero-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="hero-visual anim-zoomIn" style={{ animationDelay: '600ms' }}>
          <RotatingRings />
        </div>

        <div
          className="hero-text anim-fadeInUp"
          style={{ animationDelay: '750ms', maxWidth: '900px', width: '100%' }}
        >
          <span className="eyebrow anim-fadeInDown">Available for freelance work</span>
          <h1 className="hero-title anim-fadeInUp">
            Hi, I&apos;m <span className="gold-text">Noman Abdul Maliq</span>
          </h1>
          <h2 className="hero-subtitle anim-fadeInUp" style={{ animationDelay: '150ms' }}>
            Web Developer, Digital Creator &amp; Educator
          </h2>
          <p className="anim-fadeInUp" style={{ animationDelay: '300ms', maxWidth: '700px', margin: '10px 0' }}>
            I design and build fast, modern web experiences — from custom
            applications to full digital products — and share what I learn
            along the way with a growing developer community.
          </p>
          <div className="hero-actions anim-fadeInUp" style={{ animationDelay: '450ms' }}>
            <a href="#contact" className="btn btn-primary" onClick={scrollTo('contact')}>
              Let&apos;s Talk
            </a>
            <a href="#portfolio" className="btn btn-outline" onClick={scrollTo('portfolio')}>
              View My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
