import { navLinks } from '../data/content'
import './Footer.css'

const socials = ['GitHub', 'LinkedIn', 'X', 'YouTube']

export default function Footer() {
  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">YN</span>
          <span className="footer-brand-text">Your Name</span>
          <p className="footer-tagline">Building modern, thoughtful web experiences.</p>
        </div>

        <nav className="footer-nav">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleNavClick(link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map((label) => (
            <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label} className="footer-social-icon">
              {label[0]}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Project Title. All rights reserved.</p>
      </div>
    </footer>
  )
}
