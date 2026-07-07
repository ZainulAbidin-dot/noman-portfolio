import useReveal from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, zoom = false, children, ...rest }) {
  const [ref, isVisible] = useReveal()
  const base = zoom ? 'reveal-zoom' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
