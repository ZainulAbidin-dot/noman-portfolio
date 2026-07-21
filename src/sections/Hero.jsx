import RotatingRings from '../components/RotatingRings'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="min-h-screen w-full bg-[#020617] relative"
      style={{
        background: "#020617",
        minHeight: "120vh",
        width: "100%",
        backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(80, 225, 227, 0.15) 0%, transparent 70%)
        `,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }}
    >
      <div id="home" className="hero section" style={{ paddingBottom: 0 }}>
        <div className="container hero-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        
        <div className="hero-visual anim-zoomIn" style={{ animationDelay: '600ms' }}>
          <RotatingRings />
        </div>

        <div
          className="hero-text anim-fadeInUp"
          style={{
            animationDelay: '200ms',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.9) 15%, rgba(0,0,0) 100%)',
            padding: '2rem 1.5rem',
            borderRadius: '0',
          }}
        >
          <span className="eyebrow anim-fadeInDown">Available for freelance work</span>
          <h1 className="hero-title anim-fadeInUp" style={{ animationDelay: '250ms' }}>
            Hi, I&apos;m <span className="gold-text">Noman Abdul Maliq</span>
          </h1>
          <h2 className="hero-subtitle anim-fadeInUp" style={{ animationDelay: '300ms' }}>
            Web Developer, Digital Creator &amp; Educator
          </h2>
          <p className="anim-fadeInUp" style={{ animationDelay: '350ms', maxWidth: '700px', margin: '10px auto' }}>
            I design and build fast, modern web experiences — from custom
            applications to full digital products — and share what I learn
            along the way with a growing developer community.
          </p>
          <div className="hero-actions anim-fadeInUp" style={{ animationDelay: '400ms', justifyContent: 'center', display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary" onClick={scrollTo('contact')}>
              Let&apos;s Talk
            </a>
            <a href="#portfolio" className="btn btn-outline" onClick={scrollTo('portfolio')}>
              View My Work
            </a>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
