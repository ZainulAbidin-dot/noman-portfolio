import Reveal from '../components/Reveal'
import TestimonialCard from '../components/TestimonialCard'
import testimonials from '../data/testimonials'
import './TestimonialSection.css'

export default function TestimonialSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="testimonial-section section">
      <div className="container">
        <Reveal className="testimonial-heading">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-heading">
            Trusted by teams who want <span className="gold-text">polished growth</span>
          </h2>
          <p className="section-subtext">
            A premium testimonial experience with smooth continuous motion and clean glass styling for modern brands.
          </p>
        </Reveal>

        <div className="testimonial-row-wrapper">
          <div className="testimonial-row testimonial-row-left">
            <div className="testimonial-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`left-${index}-${testimonial.name}`} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="testimonial-row testimonial-row-right">
            <div className="testimonial-track">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`right-${index}-${testimonial.name}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
