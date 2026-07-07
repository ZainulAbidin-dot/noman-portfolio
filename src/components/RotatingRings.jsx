import { ringIcons } from '../data/content'
import useElementScale from '../hooks/useElementScale'
import './RotatingRings.css'

// Ring config: radius (px), spin duration (s), spin direction
const RING_CONFIG = [
  { radius: 230, duration: 34, reverse: false },
  { radius: 160, duration: 26, reverse: true },
  { radius: 90, duration: 18, reverse: false },
]

const BASE_SIZE = 460

export default function RotatingRings() {
  const [wrapRef, scale] = useElementScale(BASE_SIZE)

  return (
    <div className="rings-scale-wrap" ref={wrapRef}>
    <div className="rotating-rings" aria-hidden="true" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
      {RING_CONFIG.map((ring, ringIndex) => {
        const icons = ringIcons[ringIndex] || []
        const step = 360 / icons.length
        return (
          <div
            key={ringIndex}
            className="ring"
            style={{ width: ring.radius * 2, height: ring.radius * 2 }}
          >
            <div className={`ring-track ring-track-${ringIndex}`} />
            <div
              className={`ring-spin ${ring.reverse ? 'spin-reverse' : 'spin-forward'}`}
              style={{ animationDuration: `${ring.duration}s` }}
            >
              {icons.map((label, i) => {
                const angle = step * i
                return (
                  <div
                    key={label}
                    className="orbit-icon-wrapper"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${ring.radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div
                      className={`orbit-icon-inner ${ring.reverse ? 'spin-forward' : 'spin-reverse'}`}
                      style={{ animationDuration: `${ring.duration}s` }}
                    >
                      <span className="orbit-icon">{label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <div className="rings-core">
        <span>&lt;/&gt;</span>
      </div>
    </div>
    </div>
  )
}
