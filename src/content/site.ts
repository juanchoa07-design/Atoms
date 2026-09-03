import {
  BrainCircuit,
  Database,
  GraduationCap,
  MessagesSquare,
  Mic,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type Lang = 'en' | 'es'

/** A string that exists in both languages. */
export type T = Record<Lang, string>

export const site = {
  name: 'AtomLabs',
  tagline: {
    en: 'AI software factory for LATAM',
    es: 'Fábrica de software con IA para LATAM',
  } satisfies T,
  calendly: 'https://calendly.com/contact-atomlabsai/discovery-call',
  social: {
    youtube: 'https://www.youtube.com/@TheAtomVoice',
    linkedin: 'https://www.linkedin.com/company/atomlabs-ai',
    instagram: 'https://www.instagram.com/atomlabs.ai/',
  },
}

export const nav: { id: string; label: T }[] = [
  { id: 'services', label: { en: 'Services', es: 'Servicios' } },
  { id: 'process', label: { en: 'How we work', es: 'Cómo trabajamos' } },
  { id: 'team', label: { en: 'Team', es: 'Equipo' } },
  { id: 'podcast', label: { en: 'Podcast', es: 'Podcast' } },
]

export const hero = {
  eyebrow: { en: 'AI software factory · LATAM', es: 'Fábrica de software con IA · LATAM' } satisfies T,
  titleTop: { en: 'We build AI systems', es: 'Construimos sistemas de IA' } satisfies T,
  titleAccent: { en: 'that run your business.', es: 'que hacen andar tu negocio.' } satisfies T,
  subtitle: {
    en: 'Custom automation, conversational agents and AI software — designed, built and operated for mid-market and enterprise teams.',
    es: 'Automatización a medida, agentes conversacionales y software con IA — diseñados, construidos y operados para equipos medianos y grandes.',
  } satisfies T,
  primaryCta: { en: 'Schedule a call', es: 'Agendar una llamada' } satisfies T,
  secondaryCta: { en: 'See what we build', es: 'Ver qué construimos' } satisfies T,
}

export const clients = {
  title: {
    en: 'Trusted by teams across the Americas',
    es: 'Equipos de toda América confían en nosotros',
  } satisfies T,
  /**
   * Wordmarks, not logo files — the real PNGs live at /clients/*.png on
   * atomlabsai.com. Drop them into public/clients/ to switch to images.
   */
  names: [
    'Magnolias',
    'Pixel Art',
    'Lois & Bogao',
    'Unlimited Insurance',
    'Mercado Williman',
    'Mercado del Prado',
    'San Fernando',
    'Sol',
    'Juma',
    'Mtur',
    'AN Inmuebles',
  ],
}

export type ServiceGroup = {
  id: string
  kicker: T
  title: T
  blurb: T
  items: { n: string; icon: LucideIcon; title: T; desc: T; bullets?: T[] }[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'agents',
    kicker: { en: 'AI agents', es: 'Agentes de IA' },
    title: { en: 'AI agents for your business', es: 'Agentes de IA para tu negocio' },
    blurb: {
      en: 'Deployable agents that talk to your data, your customers and your phone lines — live in weeks, not quarters.',
      es: 'Agentes listos para desplegar que hablan con tus datos, tus clientes y tus líneas telefónicas — en producción en semanas, no en trimestres.',
    },
    items: [
      {
        n: '01',
        icon: Database,
        title: { en: 'Talk to your data', es: 'Hablá con tus datos' },
        desc: {
          en: 'Ask your databases and documents in plain language.',
          es: 'Preguntale a tus bases de datos y documentos en lenguaje natural.',
        },
        bullets: [
          {
            en: 'RAG over internal docs, contracts and SOPs',
            es: 'RAG sobre documentos internos, contratos y procedimientos',
          },
          {
            en: 'Text-to-SQL agents on production databases',
            es: 'Agentes text-to-SQL sobre bases de datos productivas',
          },
          {
            en: 'Conversational access from Slack, Telegram or web',
            es: 'Acceso conversacional desde Slack, Telegram o web',
          },
        ],
      },
      {
        n: '02',
        icon: MessagesSquare,
        title: { en: 'Conversational agents', es: 'Agentes conversacionales' },
        desc: {
          en: 'Lead qualification, support and sales on the channels your customers already use.',
          es: 'Calificación de leads, soporte y ventas en los canales que tus clientes ya usan.',
        },
      },
      {
        n: '03',
        icon: Mic,
        title: { en: 'Voice AI', es: 'Voice AI' },
        desc: {
          en: 'Phone agents that book, qualify and resolve.',
          es: 'Agentes telefónicos que agendan, califican y resuelven.',
        },
      },
    ],
  },
  {
    id: 'tailor',
    kicker: { en: 'Tailor-made', es: 'A medida' },
    title: { en: 'Systems built to measure', es: 'Sistemas hechos a medida' },
    blurb: {
      en: 'End-to-end automations and custom software, designed around how your business actually runs.',
      es: 'Automatizaciones de punta a punta y software a medida, diseñados según cómo funciona tu negocio de verdad.',
    },
    items: [
      {
        n: '04',
        icon: Workflow,
        title: { en: 'End-to-end automations', es: 'Automatizaciones end-to-end' },
        desc: {
          en: 'Wire your stack and your work together.',
          es: 'Conectamos tu stack y tu trabajo en un solo flujo.',
        },
        bullets: [
          {
            en: 'Integrations across Marketing, ERP, CRM, e-commerce',
            es: 'Integraciones con Marketing, ERP, CRM y e-commerce',
          },
          { en: 'Automated reporting and dashboards', es: 'Reportes y dashboards automáticos' },
          { en: 'Monitoring, alerting and SLA from day one', es: 'Monitoreo, alertas y SLA desde el día uno' },
        ],
      },
      {
        n: '05',
        icon: BrainCircuit,
        title: { en: 'Custom AI software', es: 'Software con IA a medida' },
        desc: { en: 'Internal platforms with AI built in.', es: 'Plataformas internas con IA integrada de base.' },
      },
      {
        n: '06',
        icon: GraduationCap,
        title: { en: 'Consulting & enablement', es: 'Consultoría y capacitación' },
        desc: { en: 'Roadmaps, audits and team training.', es: 'Roadmaps, auditorías y formación de equipos.' },
      },
    ],
  },
]

export const servicesOutro = {
  text: { en: 'Not sure which fits your operation?', es: '¿No sabés cuál encaja con tu operación?' } satisfies T,
  cta: { en: 'Schedule a call', es: 'Agendar una llamada' } satisfies T,
}

export const processSteps: { n: string; when: T; title: T; desc: T; bullets: T[] }[] = [
  {
    n: '01',
    when: { en: 'Week 1', es: 'Semana 1' },
    title: { en: 'Onboarding & Discovery', es: 'Onboarding y descubrimiento' },
    desc: {
      en: "We map your process, stack and goals, agree on scope and success metrics, and get access to the systems we'll integrate.",
      es: 'Mapeamos tu proceso, tu stack y tus objetivos, acordamos alcance y métricas de éxito, y conseguimos acceso a los sistemas a integrar.',
    },
    bullets: [
      { en: 'Kickoff and stakeholder alignment', es: 'Kickoff y alineación con los responsables' },
      { en: 'Process and systems audit', es: 'Auditoría de procesos y sistemas' },
      { en: 'Scope, timeline and success metrics', es: 'Alcance, cronograma y métricas de éxito' },
    ],
  },
  {
    n: '02',
    when: { en: 'Week 1–2', es: 'Semana 1–2' },
    title: { en: 'Architecture & Design', es: 'Arquitectura y diseño' },
    desc: {
      en: 'We design the system end to end: integrations, data flow, fallbacks and the human-handoff points.',
      es: 'Diseñamos el sistema de punta a punta: integraciones, flujo de datos, fallbacks y los puntos de derivación a humanos.',
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
    title: { en: 'Build & Integrate', es: 'Construcción e integración' },
    desc: {
      en: 'We implement in code, integrate to your stack and test against real data — with weekly demos so you see progress.',
      es: 'Implementamos en código, integramos a tu stack y probamos contra datos reales — con demos semanales para que veas el avance.',
    },
    bullets: [
      { en: 'Iterative build with weekly demos', es: 'Construcción iterativa con demos semanales' },
      { en: 'Native integration to your tools', es: 'Integración nativa con tus herramientas' },
      { en: 'Testing against real data', es: 'Pruebas contra datos reales' },
    ],
  },
  {
    n: '04',
    when: { en: 'Go-live', es: 'Salida a producción' },
    title: { en: 'Launch', es: 'Lanzamiento' },
    desc: {
      en: 'We deploy to production, train your team and hand over documentation — live in weeks, not quarters.',
      es: 'Desplegamos a producción, entrenamos a tu equipo y entregamos la documentación — en semanas, no en trimestres.',
    },
    bullets: [
      { en: 'Production deployment', es: 'Despliegue a producción' },
      { en: 'Team training and handover docs', es: 'Capacitación del equipo y documentación de entrega' },
      { en: 'Monitoring and alerts from day one', es: 'Monitoreo y alertas desde el día uno' },
    ],
  },
  {
    n: '05',
    when: { en: 'Ongoing', es: 'Continuo' },
    title: { en: 'Operate & Evolve', es: 'Operación y evolución' },
    desc: {
      en: 'Post-production we run, monitor and iterate alongside your team — with SLA, support and continuous improvements.',
      es: 'Después de producción operamos, monitoreamos e iteramos junto a tu equipo — con SLA, soporte y mejoras continuas.',
    },
    bullets: [
      { en: 'Monitoring, SLA and support', es: 'Monitoreo, SLA y soporte' },
      { en: 'Continuous iteration and new features', es: 'Iteración continua y nuevas funcionalidades' },
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
    es: 'Construimos sobre tu stack y conectamos con los sistemas que tu equipo usa todos los días — CRMs, bases de datos, mensajería y telefonía.',
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
    label: { en: 'systems live in production', es: 'sistemas vivos en producción' },
    needsData: true,
  },
  { to: 24, suffix: '/7', label: { en: 'monitored operation', es: 'operación monitoreada' } },
  {
    to: 100,
    suffix: '%',
    label: { en: 'production deployments, not pilots', es: 'despliegues productivos, no pilotos' },
  },
  {
    to: 24,
    suffix: 'h',
    label: { en: 'average response to new projects', es: 'respuesta promedio a proyectos nuevos' },
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
  /** Falls back to a monogram when there is no photo in public/images. */
  photo?: string
}

export const team: Member[] = [
  {
    name: 'Matias Jorda',
    role: { en: 'Co-Founder & CEO', es: 'Co-Founder y CEO' },
    bio: {
      en: 'Your first call. Turns business problems into a concrete roadmap.',
      es: 'Tu primera llamada. Convierte problemas de negocio en un roadmap concreto.',
    },
    linkedin: 'https://www.linkedin.com/in/mat%C3%ADas-jord%C3%A1-b663642a3/',
    photo: 'images/team-matias.webp',
  },
  {
    name: 'Ignacio Miranda',
    role: { en: 'Co-Founder & CTO', es: 'Co-Founder y CTO' },
    bio: {
      en: 'Owns the architecture and leads the engineering behind every agent in production.',
      es: 'Dueño de la arquitectura y responsable de la ingeniería detrás de cada agente en producción.',
    },
    linkedin: 'https://www.linkedin.com/in/ignacio-miranda-1b2336380/',
    photo: 'images/team-ignacio.webp',
  },
  {
    name: 'Federico Dominguez',
    role: { en: 'Senior Software & AI Developer', es: 'Senior Software & AI Developer' },
    bio: {
      en: 'Builds the agents, integrations and software that ship to production.',
      es: 'Construye los agentes, integraciones y software que llegan a producción.',
    },
    linkedin: 'https://www.linkedin.com/in/federico-dominguez-mas-83a509386/',
  },
  {
    name: 'Edgard Bruckmann',
    role: { en: 'Senior Software & AI Developer', es: 'Senior Software & AI Developer' },
    bio: {
      en: 'Develops end-to-end automations and integrations, from idea to deploy.',
      es: 'Desarrolla automatizaciones e integraciones de punta a punta, de la idea al deploy.',
    },
    linkedin: 'https://www.linkedin.com/in/ebruckmann/',
  },
  {
    name: 'Valentin Mcauliffe',
    role: { en: 'Creative Director', es: 'Director Creativo' },
    bio: {
      en: 'Makes sure every product looks and feels up to your brand.',
      es: 'Se asegura de que cada producto esté a la altura de tu marca.',
    },
    linkedin: 'https://www.linkedin.com/in/valent%C3%ADn-mcauliffe-7b3840299/',
  },
  {
    name: 'Martin Vazquez',
    role: { en: 'CFO', es: 'CFO' },
    bio: {
      en: 'Clear numbers: budgets, contracts and pricing with no surprises.',
      es: 'Números claros: presupuestos, contratos y precios sin sorpresas.',
    },
    linkedin: 'https://www.linkedin.com/in/martinvazquezm/',
  },
]

export const teamOutro: T = {
  en: 'No account managers, no middlemen — you talk directly to the people who build your project.',
  es: 'Sin account managers ni intermediarios — hablás directo con quienes construyen tu proyecto.',
}

export const podcast = {
  kicker: { en: 'The Atom Voice · Podcast', es: 'The Atom Voice · Podcast' } satisfies T,
  title: {
    en: 'Conversations with the people building the future in LATAM',
    es: 'Conversaciones con quienes están construyendo el futuro en LATAM',
  } satisfies T,
  blurb: {
    en: 'Entrepreneurs, experts and operators on AI, product and what it really takes to build in LATAM.',
    es: 'Emprendedores, expertos y operadores hablando de IA, producto y lo que de verdad cuesta construir en LATAM.',
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
    en: 'Tell us what your operation needs.',
    es: 'Contanos qué necesita tu operación.',
  } satisfies T,
  text: {
    en: 'A discovery call with the people who will build it — not a sales rep. We map the problem and tell you straight whether AI is worth it.',
    es: 'Una llamada de descubrimiento con quienes lo van a construir, no con un vendedor. Mapeamos el problema y te decimos derecho si la IA vale la pena.',
  } satisfies T,
  button: { en: 'Talk to the team', es: 'Hablar con el equipo' } satisfies T,
}

export const ui = {
  servicesEyebrow: { en: 'Service', es: 'Servicios' } satisfies T,
  servicesTitle: { en: 'What we build', es: 'Qué construimos' } satisfies T,
  servicesSubtitle: {
    en: 'Two ways to work with us: ready-to-deploy AI agents, and tailor-made systems built around your operation.',
    es: 'Dos formas de trabajar con nosotros: agentes de IA listos para desplegar, y sistemas a medida construidos alrededor de tu operación.',
  } satisfies T,
  processEyebrow: { en: 'How we work', es: 'Cómo trabajamos' } satisfies T,
  processTitle: { en: 'One team, end to end', es: 'Un solo equipo, de punta a punta' } satisfies T,
  processSubtitle: {
    en: 'From the first call to running in production — we design, build and operate the whole system. No handoffs, no middlemen.',
    es: 'Desde la primera llamada hasta la operación en producción — diseñamos, construimos y operamos todo el sistema. Sin traspasos ni intermediarios.',
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
