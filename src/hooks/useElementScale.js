import { useEffect, useRef, useState } from 'react'

// Returns a ref for a wrapper element and a scale factor (0-1] so a
// fixed-size child of `baseSize` px can be scaled down to fit the wrapper.
export default function useElementScale(baseSize) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const update = () => {
      const width = node.clientWidth
      setScale(Math.min(1, width / baseSize))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [baseSize])

  return [ref, scale]
}
