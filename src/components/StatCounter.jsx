import useCountUp from '../hooks/useCountUp'
import './StatCounter.css'

export default function StatCounter({ value, suffix = '', label }) {
  const [ref, count] = useCountUp(value)

  return (
    <div className="stat-counter glass-card" ref={ref}>
      <div className="stat-value">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">
        {label.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </div>
  )
}
