export default function TestimonialCard({ avatar, name, title, company, rating, text }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-avatar">
          {avatar ? (
            <img src={avatar} alt={`${name} avatar`} />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div className="testimonial-author">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">
            {title} <span aria-hidden="true">·</span> {company}
          </p>
        </div>
      </div>

      <div className="testimonial-rating" aria-label={`Rating: ${rating} out of 5`}>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`testimonial-star ${index < rating ? 'filled' : ''}`}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      <p className="testimonial-text">{text}</p>
      <div className="testimonial-quote-icon" aria-hidden="true">“</div>
    </article>
  )
}
