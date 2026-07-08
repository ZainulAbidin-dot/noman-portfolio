import { navLinks } from '../data/content'
import './Footer.css'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const socials = ['GitHub', 'LinkedIn', 'X', 'YouTube']

export default function Footer() {
  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

   useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"project-discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">YN</span>
          <span className="footer-brand-text">Your Name</span>
          <p className="footer-tagline">Building modern, thoughtful web experiences.</p>
          <button className="btn btn-primary" style={{ marginTop: '1rem', maxWidth: '150px' }} data-cal-namespace="project-discovery-call" data-cal-link="noman-abdul-maliq/project-discovery-call" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
           >Book a Call</button>
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
