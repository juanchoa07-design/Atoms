import { GraduationCap, Podcast as PodcastIcon, Users, Workflow, type LucideIcon } from 'lucide-react'

export type Lang = 'en' | 'es'

/** A string that exists in both languages. */
export type T = Record<Lang, string>

export const site = {
  name: 'AtomLabs',
  tagline: {
    en: 'AI software factory for LATAM',
    es: 'Software factory de IA para LATAM',
  } satisfies T,
  calendly: 'https://calendly.com/contact-atomlabsai/discovery-call',
  social: {
    youtube: 'https://www.youtube.com/@TheAtomVoice',
    linkedin: 'https://www.linkedin.com/company/atomlabs-ai',
    instagram: 'https://www.instagram.com/atomlabs.ai/',
  },
}

/** `href` is either a route (#/x) or an anchor on the home page (#x). */
export const nav: { href: string; label: T }[] = [
  { href: '#/services', label: { en: 'Services', es: 'Servicios' } },
  { href: '#/training', label: { en: 'Training', es: 'Capacitaciones' } },
  { href: '#/about', label: { en: 'Meet us', es: 'Conocenos' } },
  { href: '#/podcast', label: { en: 'Podcast', es: 'Podcast' } },
]

export const hero = {
  eyebrow: { en: 'AI software factory · LATAM', es: 'Software factory de IA · LATAM' } satisfies T,
  titleTop: { en: 'We build AI systems', es: 'Construimos sistemas de IA' } satisfies T,
  titleAccent: { en: 'that run your business.', es: 'que operan tu negocio.' } satisfies T,
  subtitle: {
    en: 'Custom automation, conversational agents and AI software — designed, built and operated for mid-market and enterprise teams.',
    es: 'Automatización a medida, agentes conversacionales y software con IA. Diseñamos, construimos y operamos para empresas mid-market y enterprise.',
  } satisfies T,
  primaryCta: { en: 'Schedule a call', es: 'Agendar llamada' } satisfies T,
  secondaryCta: { en: 'Cases', es: 'Casos' } satisfies T,
}

export const casesPage = {
  eyebrow: { en: 'Selected work', es: 'Casos seleccionados' } satisfies T,
  title: { en: 'Systems we built and run', es: 'Sistemas que construimos y operamos' } satisfies T,
  intro: {
    en: "Production deployments, not pilots. Each one designed end to end, integrated to the client's stack, and operated day to day.",
    es: 'Despliegues en producción, no pilotos. Cada uno diseñado de punta a punta, integrado al stack del cliente y operado día a día.',
  } satisfies T,
  /** TODO(atomlabs): add the real case studies here. */
  items: [] as { client: string; summary: T; result: T }[],
  emptyNote: {
    en: 'Case studies are being written up. In the meantime, these are the teams already running our systems.',
    es: 'Estamos escribiendo los casos. Mientras tanto, estos son los equipos que ya operan con nuestros sistemas.',
  } satisfies T,
}

export const clients = {
  title: {
    en: 'Trusted by teams across the Americas',
    es: 'Equipos de toda América que ya confían en nosotros',
  } satisfies T,
  /**
   * `dark` marks logos whose artwork is too dark to read on the charcoal
   * ground; the strip inverts those. Measured by scripts/build-clients.mjs.
   */
  logos: [
    { slug: 'magnolias', name: 'Magnolias', dark: false },
    { slug: 'pixel-art', name: 'Pixel Art', dark: false },
    { slug: 'lois-bogao', name: 'Lois & Bogao', dark: true },
    { slug: 'unlimited-insurance', name: 'Unlimited Insurance', dark: false },
    { slug: 'mercado-williman', name: 'Mercado Williman', dark: true },
    { slug: 'mercado-del-prado', name: 'Mercado del Prado', dark: false },
    { slug: 'san-fernando', name: 'San Fernando', dark: false },
    { slug: 'sol', name: 'Sol', dark: true },
    { slug: 'juma', name: 'Juma', dark: false },
    { slug: 'mtur', name: 'Mtur', dark: false },
    { slug: 'an-inmuebles', name: 'AN Inmuebles', dark: false },
  ],
}

export type Offering = {
  n: string
  icon: LucideIcon
  title: T
  desc: T
  bullets?: T[]
}

/**
 * The two doors on the home page. Each one opens its own page with the full
 * catalogue instead of dumping everything inline.
 */
export const tracks: {
  id: 'services' | 'training' | 'about' | 'podcast' | 'cases'
  icon: LucideIcon
  /** CSS colour driving the card's chip, edge and bloom. */
  accent: string
  label: T
  title: T
  blurb: T
  teaser: T[]
  cta: T
}[] = [
  {
    id: 'services',
    icon: Workflow,
    accent: 'var(--color-accent-blue)',
    label: { en: 'Services', es: 'Servicios' },
    title: { en: 'AI agents and systems we build', es: 'Agentes y sistemas de IA que construimos' },
    blurb: {
      en: 'Deployable agents and tailor-made software — designed, built and operated end to end.',
      es: 'Agentes listos para desplegar y software a medida — diseñados, construidos y operados de punta a punta.',
    },
    teaser: [
      { en: 'Talk to your data', es: 'Hablale a tus datos' },
      { en: 'Conversational agents', es: 'Agentes conversacionales' },
      { en: 'Voice AI', es: 'Voice AI' },
      { en: 'End-to-end automations', es: 'Automatizaciones end-to-end' },
      { en: 'Custom AI software', es: 'Software con IA a medida' },
    ],
    cta: { en: 'See all services', es: 'Ver todos los servicios' },
  },
  {
    id: 'training',
    icon: GraduationCap,
    accent: 'var(--color-accent-sky)',
    label: { en: 'Training & consulting', es: 'Capacitaciones y consultorías' },
    title: { en: 'Get your team ready for AI', es: 'Preparamos a tu equipo para la IA' },
    blurb: {
      en: 'Roadmaps, audits and hands-on training so your team can run AI on its own.',
      es: 'Roadmaps, auditorías y formación práctica para que tu equipo maneje la IA por su cuenta.',
    },
    teaser: [
      { en: 'AI roadmap', es: 'Roadmap de IA' },
      { en: 'Process and stack audit', es: 'Auditoría de procesos y stack' },
      { en: 'Team training', es: 'Capacitación de equipos' },
    ],
    cta: { en: 'See training & consulting', es: 'Ver capacitaciones y consultorías' },
  },
  {
    id: 'about',
    icon: Users,
    accent: 'var(--color-accent-sage)',
    label: { en: 'Meet us', es: 'Conocenos' },
    title: { en: 'The people who build it', es: 'La gente que lo construye' },
    blurb: {
      en: 'Founders, engineers and operators. You talk to the people writing the code, not to an account manager.',
      es: 'Fundadores, ingenieros y operadores. Hablás con quienes escriben el código, no con un account manager.',
    },
    teaser: [
      { en: 'Six people, no middlemen', es: 'Seis personas, sin intermediarios' },
      { en: 'Engineering led by the founders', es: 'Ingeniería liderada por los fundadores' },
      { en: 'Based in LATAM, working across the Americas', es: 'Desde LATAM, trabajando en toda América' },
    ],
    cta: { en: 'Meet the team', es: 'Conocer al equipo' },
  },
  {
    id: 'podcast',
    icon: PodcastIcon,
    accent: 'var(--color-accent-lilac)',
    label: { en: 'Podcast', es: 'Podcast' },
    title: { en: 'The Atom Voice', es: 'The Atom Voice' },
    blurb: {
      en: 'Entrepreneurs, experts and operators on AI, product and what it really takes to build in LATAM.',
      es: 'Emprendedores, expertos y operadores hablan de IA, producto y lo que de verdad cuesta construir en LATAM.',
    },
    teaser: [
      { en: 'New episodes on YouTube', es: 'Episodios nuevos en YouTube' },
      { en: 'Guests building across the region', es: 'Invitados que construyen en la región' },
      { en: 'No fluff, just operators talking', es: 'Sin relleno, operadores hablando' },
    ],
    cta: { en: 'Listen to the podcast', es: 'Escuchar el podcast' },
  },
]

export const processSteps: { n: string; when: T; title: T; desc: T; bullets: T[] }[] = [
  {
    n: '01',
    when: { en: 'Week 1', es: 'Semana 1' },
    title: { en: 'Onboarding & Discovery', es: 'Onboarding y Discovery' },
    desc: {
      en: "We map your process, stack and goals, agree on scope and success metrics, and get access to the systems we'll integrate.",
      es: 'Mapeamos tu proceso, stack y objetivos, acordamos el alcance y las métricas de éxito, y obtenemos acceso a los sistemas a integrar.',
    },
    bullets: [
      { en: 'Kickoff and stakeholder alignment', es: 'Kickoff y alineación con stakeholders' },
      { en: 'Process and systems audit', es: 'Auditoría de procesos y sistemas' },
      { en: 'Scope, timeline and success metrics', es: 'Alcance, plazos y métricas de éxito' },
    ],
  },
  {
    n: '02',
    when: { en: 'Week 1–2', es: 'Semana 1–2' },
    title: { en: 'Architecture & Design', es: 'Arquitectura y Diseño' },
    desc: {
      en: 'We design the system end to end: integrations, data flow, fallbacks and the human-handoff points.',
      es: 'Diseñamos el sistema de punta a punta: integraciones, flujo de datos, fallbacks y los puntos de derivación a humano.',
    },
    bullets: [
      { en: 'Solution architecture and data model', es: 'Arquitectura de la solución y modelo de datos' },
      { en: 'Integration and security plan', es: 'Plan de integración y seguridad' },
      { en: 'UX and conversation design', es: 'Diseño de UX y de conversación' },
    ],
  },
  {
    n: '03',
    when: { en: 'Weeks 2–6', es: 'Semanas 2–6' },
    title: { en: 'Build & Integrate', es: 'Desarrollo e Integración' },
    desc: {
      en: 'We implement in code, integrate to your stack and test against real data — with weekly demos so you see progress.',
      es: 'Implementamos en código, integramos a tu stack y probamos con datos reales — con demos semanales para que veas el avance.',
    },
    bullets: [
      { en: 'Iterative build with weekly demos', es: 'Desarrollo iterativo con demos semanales' },
      { en: 'Native integration to your tools', es: 'Integración nativa con tus herramientas' },
      { en: 'Testing against real data', es: 'Pruebas con datos reales' },
    ],
  },
  {
    n: '04',
    when: { en: 'Go-live', es: 'Salida a producción' },
    title: { en: 'Launch', es: 'Lanzamiento' },
    desc: {
      en: 'We deploy to production, train your team and hand over documentation — live in weeks, not quarters.',
      es: 'Desplegamos a producción, capacitamos a tu equipo y entregamos la documentación — en vivo en semanas, no en trimestres.',
    },
    bullets: [
      { en: 'Production deployment', es: 'Despliegue en producción' },
      { en: 'Team training and handover docs', es: 'Capacitación y documentación de entrega' },
      { en: 'Monitoring and alerts from day one', es: 'Monitoreo y alertas desde el día uno' },
    ],
  },
  {
    n: '05',
    when: { en: 'Ongoing', es: 'Continuo' },
    title: { en: 'Operate & Evolve', es: 'Operación y Evolución' },
    desc: {
      en: 'Post-production we run, monitor and iterate alongside your team — with SLA, support and continuous improvements.',
      es: 'En post-producción operamos, monitoreamos e iteramos junto a tu equipo — con SLA, soporte y mejoras continuas.',
    },
    bullets: [
      { en: 'Monitoring, SLA and support', es: 'Monitoreo, SLA y soporte' },
      { en: 'Continuous iteration and new features', es: 'Iteración continua y nuevas features' },
      { en: 'Performance and cost reporting', es: 'Reportes de performance y costos' },
    ],
  },
]

export const integrations = {
  title: {
    en: 'Works with the tools you already use',
    es: 'Funciona con las herramientas que ya usás',
  } satisfies T,
  blurb: {
    en: 'We build on your stack and connect to the systems your team runs every day — CRMs, databases, messaging and telephony.',
    es: 'Construimos sobre tu stack y nos conectamos a los sistemas que tu equipo usa todos los días — CRMs, bases de datos, mensajería y telefonía.',
  } satisfies T,
  tools: [
    'WhatsApp Business API',
    'Instagram',
    'Telegram',
    'OpenAI',
    'Vercel AI SDK',
    'n8n',
    'Supabase',
    'PostgreSQL',
    'Bitrix24',
    'HubSpot',
    'ManyChat',
    'Retell',
    'ElevenLabs',
    'Airtable',
    'Next.js',
  ],
}

/**
 * `needsData` marks figures that still have to be confirmed: the live site
 * counts them up from zero, so they were not readable when this content was
 * pulled. Replace the value and drop the flag before publishing.
 */
export const metrics: { prefix?: string; to: number; suffix: string; label: T; needsData?: boolean }[] = [
  {
    to: 12,
    suffix: '',
    label: { en: 'systems live in production', es: 'Sistemas en producción' },
    needsData: true,
  },
  { to: 24, suffix: '/7', label: { en: 'monitored operation', es: 'Operación monitoreada' } },
  {
    to: 100,
    suffix: '%',
    label: { en: 'production deployments, not pilots', es: 'Despliegues en producción, no pilotos' },
  },
  {
    to: 24,
    suffix: 'h',
    label: { en: 'average response to new projects', es: 'Respuesta promedio a nuevos proyectos' },
    needsData: true,
  },
]

export const metricsTitle: T = {
  en: 'Built to run in production',
  es: 'Hecho para correr en producción',
}

export type Member = {
  name: string
  role: T
  bio: T
  linkedin: string
  /** Founders get their own row above the rest of the team. */
  founder?: boolean
  /** Falls back to a monogram when there is no photo in public/images. */
  photo?: string
}

export const team: Member[] = [
  {
    name: 'Matias Jorda',
    founder: true,
    role: { en: 'Co-Founder & CEO', es: 'Co-Founder y CEO' },
    bio: {
      en: 'Your first call. Turns business problems into a concrete roadmap.',
      es: 'Tu primer contacto. Traduce cada problema de negocio en un roadmap concreto.',
    },
    linkedin: 'https://www.linkedin.com/in/mat%C3%ADas-jord%C3%A1-b663642a3/',
    photo: 'images/team-matias.webp',
  },
  {
    name: 'Ignacio Miranda',
    founder: true,
    role: { en: 'Co-Founder & CTO', es: 'Co-Founder y CTO' },
    bio: {
      en: 'Owns the architecture and leads the engineering behind every agent in production.',
      es: 'Define la arquitectura y lidera la ingeniería detrás de cada agente en producción.',
    },
    linkedin: 'https://www.linkedin.com/in/ignacio-miranda-1b2336380/',
    photo: 'images/team-ignacio.webp',
  },
  {
    name: 'Federico Dominguez',
    role: { en: 'Senior Software & AI Developer', es: 'Senior Software & AI Developer' },
    bio: {
      en: 'Builds the agents, integrations and software that ship to production.',
      es: 'Construye los agentes, las integraciones y el software que termina en producción.',
    },
    linkedin: 'https://www.linkedin.com/in/federico-dominguez-mas-83a509386/',
  },
  {
    name: 'Edgard Bruckmann',
    role: { en: 'Senior Software & AI Developer', es: 'Senior Software & AI Developer' },
    bio: {
      en: 'Develops end-to-end automations and integrations, from idea to deploy.',
      es: 'Desarrolla automatizaciones e integraciones end-to-end, de la idea al deploy.',
    },
    linkedin: 'https://www.linkedin.com/in/ebruckmann/',
  },
  {
    name: 'Valentin Mcauliffe',
    role: { en: 'Creative Director', es: 'Director Creativo' },
    bio: {
      en: 'Makes sure every product looks and feels up to your brand.',
      es: 'Cuida que cada producto se vea y se sienta a la altura de tu marca.',
    },
    linkedin: 'https://www.linkedin.com/in/valent%C3%ADn-mcauliffe-7b3840299/',
  },
  {
    name: 'Martin Vazquez',
    role: { en: 'CFO', es: 'CFO' },
    bio: {
      en: 'Clear numbers: budgets, contracts and pricing with no surprises.',
      es: 'Números claros: presupuestos, contratos y pricing sin sorpresas.',
    },
    linkedin: 'https://www.linkedin.com/in/martinvazquezm/',
  },
]

export const teamOutro: T = {
  en: 'No account managers, no middlemen — you talk directly to the people who build your project.',
  es: 'Sin gerentes de cuenta ni intermediarios: hablás directo con quienes construyen tu proyecto.',
}

export const podcast = {
  kicker: { en: 'The Atom Voice · Podcast', es: 'The Atom Voice · Podcast' } satisfies T,
  title: {
    en: 'Conversations with the people building the future in LATAM',
    es: 'Conversaciones con quienes están construyendo el futuro en LATAM',
  } satisfies T,
  blurb: {
    en: 'Entrepreneurs, experts and operators on AI, product and what it really takes to build in LATAM.',
    es: 'Emprendedores, expertos y operadores hablan de IA, producto y lo que de verdad cuesta construir en LATAM.',
  } satisfies T,
  cta: { en: 'Watch on YouTube', es: 'Ver en YouTube' } satisfies T,
  episodes: [
    {
      n: 'EP 03',
      videoId: 'qO8CgGbzM50',
      title: 'Si trabajas en una empresa, Patricia Jebsen tiene algo que contarte',
      guest: 'Patricia Jebsen',
      date: { en: 'June 20, 2026', es: '20 de junio, 2026' } satisfies T,
    },
    {
      n: 'EP 02',
      videoId: 'Zw2pZpS6CuY',
      title: 'Experto en innovación te enseña a validar tu idea',
      guest: 'Enrique Topolansky',
      date: { en: 'June 9, 2026', es: '9 de junio, 2026' } satisfies T,
    },
    {
      n: 'EP 01',
      videoId: '9kCQLSymOTU',
      title: 'The Atom Voice #01',
      guest: 'Juan Esteban Suarez',
      date: { en: 'May 24, 2026', es: '24 de mayo, 2026' } satisfies T,
    },
  ],
}

export const finalCta = {
  title: {
    en: 'Tell us what you want to automate.',
    es: 'Contanos qué querés automatizar.',
  } satisfies T,
  text: {
    en: 'A short form. A real answer. A call if it makes sense.',
    es: 'Un formulario corto. Una respuesta real. Una llamada si tiene sentido.',
  } satisfies T,
  button: { en: 'Schedule discovery call', es: 'Agendar llamada' } satisfies T,
}

export const ui = {
  servicesEyebrow: { en: 'Service', es: 'Servicios' } satisfies T,
  servicesTitle: { en: 'What we build', es: 'Lo que hacemos' } satisfies T,
  servicesSubtitle: {
    en: 'Two ways to work with us: ready-to-deploy AI agents, and tailor-made systems built around your operation.',
    es: 'Dos formas de trabajar con nosotros: agentes de IA listos para operar y sistemas a medida construidos sobre tu operación.',
  } satisfies T,
  processEyebrow: { en: 'How we work', es: 'Cómo trabajamos' } satisfies T,
  processTitle: { en: 'One team, end to end', es: 'Un solo equipo, de punta a punta' } satisfies T,
  processSubtitle: {
    en: 'From the first call to running in production — we design, build and operate the whole system. No handoffs, no middlemen.',
    es: 'Desde la primera llamada hasta operar en producción: diseñamos, construimos y operamos todo el sistema. Sin traspasos, sin intermediarios.',
  } satisfies T,
  integrationsEyebrow: { en: 'Integrations', es: 'Integraciones' } satisfies T,
  metricsEyebrow: { en: 'By the numbers', es: 'En números' } satisfies T,
  teamEyebrow: { en: 'Team', es: 'Equipo' } satisfies T,
  teamTitle: { en: 'The team behind AtomLabs', es: 'El equipo detrás de AtomLabs' } satisfies T,
  teamSubtitle: {
    en: 'Founders, engineers and operators. No middlemen.',
    es: 'Fundadores, ingenieros y operadores. Sin intermediarios.',
  } satisfies T,
  podcastEyebrow: { en: 'Podcast', es: 'Podcast' } satisfies T,
  allEpisodes: { en: 'See all episodes', es: 'Ver todos los episodios' } satisfies T,
  quickLinks: { en: 'Navigation', es: 'Navegación' } satisfies T,
  followUs: { en: 'Follow us', es: 'Seguinos' } satisfies T,
  rights: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' } satisfies T,
}
