const paths = {
  code: 'M8 4L2 12l6 8M16 4l6 8-6 8',
  design: 'M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z',
  app: 'M4 4h7v7H4V4zm9 0h7v7h-7V4zm0 9h7v7h-7v-7zM4 13h7v7H4v-7z',
  cart: 'M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z',
  speed: 'M12 12l5-3M4 12a8 8 0 1116 0 8 8 0 01-16 0z',
  content: 'M4 4h16v4H4V4zm0 6h10v10H4V10zm12 2h4v8h-4v-8z',
  server: 'M4 4h16v6H4V4zm0 10h16v6H4v-6zm3 3h.01M7 7h.01',
  layout: 'M3 4h18v4H3V4zm0 6h8v10H3V10zm10 0h8v10h-8V10z',
  cloud: 'M7 18a4 4 0 01-1-7.87A5.5 5.5 0 0117 8a4.5 4.5 0 010 9H7z',
}

export default function Icon({ name, size = 26 }) {
  const d = paths[name] || paths.code
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}
