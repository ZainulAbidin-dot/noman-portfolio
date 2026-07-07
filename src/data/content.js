export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

// Rings closest-to-farthest, mirrors a 13 / 10 / 5 icon distribution
export const ringIcons = [
  ['JS', 'CSS', 'HTML', 'TS', 'React', 'Vue', 'Node', 'Git', 'MySQL', 'Bootstrap', 'Sass', 'AWS', 'Linux'],
  ['API', 'Docker', 'Figma', 'GraphQL', 'Redis', 'Webpack', 'Nginx', 'Photoshop', 'Jest', 'CI/CD'],
  ['Cloud', 'AI', 'Auto', 'UX', 'DevOps'],
]

export const stats = [
  { value: 6, suffix: '+', label: 'Years of\nExperience' },
  { value: 80, suffix: '+', label: 'Projects\nDelivered' },
  { value: 40, suffix: '+', label: 'Tutorials &\nArticles' },
  { value: 15, suffix: 'K+', label: 'Community\nReach' },
]

export const services = [
  {
    title: 'Custom Web Development',
    description: 'Building fast, secure, and maintainable web applications from the ground up, tailored to your exact requirements.',
    icon: 'code',
  },
  {
    title: 'Modern UI/UX Design',
    description: 'Designing user-centered interfaces that convert visitors into customers, using modern tools and design systems.',
    icon: 'design',
  },
  {
    title: 'Advanced Web Apps',
    description: 'Custom dashboards, membership platforms, and internal tools built to scale with your business.',
    icon: 'app',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Conversion-focused online stores with smooth checkout flows and scalable product catalogs.',
    icon: 'cart',
  },
  {
    title: 'Performance & Hosting',
    description: 'Speed audits, server setup, and infrastructure tuning for maximum reliability and load times.',
    icon: 'speed',
  },
  {
    title: 'Technical Content',
    description: 'Documentation, tutorials, and educational content that helps teams and communities learn faster.',
    icon: 'content',
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Crafting responsive and interactive user interfaces',
    icon: 'code',
    skills: [
      { name: 'HTML / CSS', percent: 95 },
      { name: 'JavaScript', percent: 90 },
      { name: 'React', percent: 88 },
      { name: 'Tailwind', percent: 85 },
    ],
  },
  {
    title: 'Backend',
    description: 'Building reliable APIs and server-side logic',
    icon: 'server',
    skills: [
      { name: 'Node.js', percent: 85 },
      { name: 'REST APIs', percent: 90 },
      { name: 'Databases', percent: 85 },
      { name: 'PHP', percent: 75 },
    ],
  },
  {
    title: 'Platforms',
    description: 'Delivering complete website and product builds',
    icon: 'layout',
    skills: [
      { name: 'Web Design', percent: 95 },
      { name: 'CMS Theming', percent: 90 },
      { name: 'Speed Optimization', percent: 92 },
      { name: 'Custom Plugins', percent: 80 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Keeping infrastructure fast, secure, and automated',
    icon: 'cloud',
    skills: [
      { name: 'Server Setup', percent: 90 },
      { name: 'Docker & CI/CD', percent: 80 },
      { name: 'Cloud Hosting', percent: 85 },
      { name: 'Migrations', percent: 90 },
    ],
  },
]

export const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    tags: ['React', 'Node.js', 'Tailwind'],
  },
  {
    title: 'Community Blog Platform',
    category: 'Publishing Platform',
    tags: ['CMS', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Online Learning Portal',
    category: 'LMS Platform',
    tags: ['React', 'API', 'PostgreSQL'],
  },
  {
    title: 'Modern Storefront',
    category: 'E-Commerce',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
  },
  {
    title: 'Developer Toolkit',
    category: 'Open Source Tool',
    tags: ['TypeScript', 'CLI', 'Node.js'],
  },
  {
    title: 'Agency Portfolio Template',
    category: 'Marketing Site',
    tags: ['React', 'Framer Motion', 'CSS'],
  },
]
