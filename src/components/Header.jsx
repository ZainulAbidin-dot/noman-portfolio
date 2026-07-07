import { useState } from 'react'
import useStickyHeader from '../hooks/useStickyHeader'
import useScrollSpy from '../hooks/useScrollSpy'
import { navLinks } from '../data/content'
import './Header.css'

export default function Header() {
  const isScrolled = useStickyHeader(30)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo anim-fadeInDown" onClick={handleNavClick('home')}>
          <span className="logo-mark">YN</span>
          <span className="logo-text">Your Name</span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'active' : ''}
                  onClick={handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary header-cta anim-fadeInDown" onClick={handleNavClick('contact')}>
          Let&apos;s Talk
        </a>

        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
