import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import './Contact.css'
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"project-discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  useEffect(() => {
    const scriptId = 'cal-inline-embed-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://app.cal.com/embed/embed.js'
      script.async = true
      script.onload = () => {
        if (window.Cal) {
          initCal()
        }
      }
      document.head.appendChild(script)
    } else if (window.Cal) {
      initCal()
    }

    function initCal() {
      window.Cal('init', 'project-discovery-call', { origin: 'https://app.cal.com' })
      window.Cal.config = window.Cal.config || {}
      window.Cal.config.forwardQueryParams = true
      window.Cal.ns = window.Cal.ns || {}
      window.Cal.ns['project-discovery-call']('inline', {
        elementOrSelector: '#my-cal-inline-project-discovery-call',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink: 'noman-abdul-maliq/project-discovery-call',
      })
      window.Cal.ns['project-discovery-call']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact-glow" />
      <div className="container contact-inner">
        <Reveal className="contact-text">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading">
            Ready to Discuss <span className="gold-text">Your Project?</span>
          </h2>
          <p className="section-subtext">
            Tell me a bit about what you&apos;re building. I&apos;ll get back
            to you within one business day to explore how we can work
            together.
          </p>
        </Reveal>

        {/* <Reveal delay={150} zoom className="contact-form-wrap glass-card">
          {submitted ? (
            <div className="contact-success">
              <h3>Thanks for reaching out!</h3>
              <p>Your message has been received. I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your Name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>
            </form>
          )}


        </Reveal> */}
        <Cal namespace="project-discovery-call"
          calLink="noman-abdul-maliq/project-discovery-call"
          style={{width:"100%",height:"100%",overflow:"scroll", alignSelf:"flex-start"}}
          config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
        />
      </div>
    </section>
  )
}
