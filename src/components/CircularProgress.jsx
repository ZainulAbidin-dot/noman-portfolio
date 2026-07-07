import useReveal from '../hooks/useReveal'
import './CircularProgress.css'

const SIZE = 90
const STROKE = 6
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function CircularProgress({ percent, label }) {
  const [ref, isVisible] = useReveal({ threshold: 0.5 })
  const offset = CIRCUMFERENCE - (isVisible ? percent : 0) / 100 * CIRCUMFERENCE

  return (
    <div className="circular-skill" ref={ref}>
      <div className="circular-skill-ring-wrap">
        <svg width={SIZE} height={SIZE} className="progress-ring">
          <circle className="circle-bg" cx={SIZE / 2} cy={SIZE / 2} r={RADIUS} strokeWidth={STROKE} />
          <circle
            className="circle-progress"
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            strokeWidth={STROKE}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="circular-skill-percent">{isVisible ? percent : 0}%</div>
      </div>
      <div className="circular-skill-label">{label}</div>
    </div>
  )
}
