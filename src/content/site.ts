import {
  Boxes,
  Brain,
  CalendarDays,
  Calculator,
  ChartPie,
  Cog,
  FileText,
  Headset,
  LineChart,
  MessagesSquare,
  Mic,
  Receipt,
  Search,
  UserCheck,
  Warehouse,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type Lang = 'es' | 'en'

/** A string that exists in both languages. */
export type T = Record<Lang, string>

export const site = {
  name: 'AtomLabs AI',
  tagline: {
    es: 'Innovación con rostro humano',
    en: 'Innovation with a human face',
  } satisfies T,
  email: 'atomn8n@gmail.com',
  calendly: 'https://calendly.com/atomlabs-ai/',
  social: {
    linkedin: 'https://www.linkedin.com/company/atomlabs-ai',
    youtube: 'https://www.youtube.com/@AtomLabsAI',
    instagram: 'https://www.instagram.com/atomlabs.ai/',
  },
}

export const nav: { id: string; label: T }[] = [
  { id: 'beneficios', label: { es: 'Beneficios', en: 'Benefits' } },
  { id: 'agentes', label: { es: 'AI Agents', en: 'AI Agents' } },
  { id: 'proceso', label: { es: 'Cómo trabajamos', en: 'How we work' } },
  { id: 'nosotros', label: { es: 'Nosotros', en: 'About' } },
]

export const hero = {
  eyebrow: {
    es: 'Aceleradora de procesos empresariales',
    en: 'Business process accelerator',
  } satisfies T,
  titleTop: { es: 'Acelerá tu negocio', en: 'Accelerate your business' } satisfies T,
  titleAccent: { es: 'con agentes de IA', en: 'with AI agents' } satisfies T,
  subtitle: {
    es: 'Diseñamos, implementamos y operamos agentes especializados que se integran a tus sistemas y trabajan 24/7. Menos tareas manuales, decisiones más rápidas y costos más bajos.',
    en: 'We design, deploy and run specialised agents that plug into your systems and work 24/7. Fewer manual tasks, faster decisions and lower costs.',
  } satisfies T,
  primaryCta: { es: 'Solicitá tu demo', en: 'Request a demo' } satisfies T,
  secondaryCta: { es: 'Ver cómo funciona', en: 'See how it works' } satisfies T,
}

/** `prefix`/`suffix` frame the animated number rendered by CountUp. */
export const metrics: { prefix?: string; to: number; suffix: string; label: T }[] = [
  { to: 70, suffix: '%', label: { es: 'menos tiempo de respuesta', en: 'less response time' } },
  { to: 10, suffix: 'h', label: { es: 'ahorradas por semana', en: 'saved every week' } },
  { to: 3, suffix: '×', label: { es: 'productividad del equipo', en: 'team productivity' } },
  { prefix: 'US$', to: 50, suffix: 'k', label: { es: 'de ahorro anual', en: 'saved per year' } },
]

export const metricsCaption: T = {
  es: 'Resultados medidos en implementaciones de AtomLabs AI.',
  en: 'Results measured across AtomLabs AI deployments.',
}

export type BenefitCategory = {
  id: string
  label: T
  blurb: T
  items: { icon: LucideIcon; title: T; desc: T }[]
}

export const benefitCategories: BenefitCategory[] = [
  {
    id: 'operations',
    label: { es: 'Operaciones', en: 'Operations' },
    blurb: {
      es: 'Sacá de encima el trabajo repetitivo y mirá tus operaciones en tiempo real.',
      en: 'Take repetitive work off the table and see your operations in real time.',
    },
    items: [
      {
        icon: Cog,
        title: { es: 'Automatización de procesos', en: 'Process automation' },
        desc: {
          es: 'Optimiza flujos de trabajo y reduce tareas manuales con agentes que trabajan 24/7.',
          en: 'Optimise workflows and cut manual tasks with agents that work 24/7.',
        },
      },
      {
        icon: LineChart,
        title: { es: 'Análisis de rendimiento', en: 'Performance analysis' },
        desc: {
          es: 'Monitorea KPIs en tiempo real y detecta anomalías automáticamente.',
          en: 'Monitor KPIs in real time and detect anomalies automatically.',
        },
      },
      {
        icon: Warehouse,
        title: { es: 'Gestión inteligente de inventario', en: 'Smart inventory management' },
        desc: {
          es: 'Predice demanda, evita desabastecimientos y optimiza niveles de stock.',
          en: 'Predict demand, prevent stockouts and optimise stock levels.',
        },
      },
    ],
  },
  {
    id: 'customer',
    label: { es: 'Servicios al cliente', en: 'Customer service' },
    blurb: {
      es: 'Respondé al instante, en todos los canales, sin sumar headcount.',
      en: 'Answer instantly, on every channel, without adding headcount.',
    },
    items: [
      {
        icon: Headset,
        title: { es: 'Soporte multicanal', en: 'Multichannel support' },
        desc: {
          es: 'Gestiona casos en todos los canales con respuestas consistentes y escalación inteligente.',
          en: 'Handle cases across every channel with consistent replies and smart escalation.',
        },
      },
      {
        icon: MessagesSquare,
        title: { es: 'Chatbot inteligente', en: 'Intelligent chatbot' },
        desc: {
          es: 'Responde consultas al instante entendiendo contexto, y deriva a un humano cuando hace falta.',
          en: 'Answers queries instantly with real context, and hands off to a human when needed.',
        },
      },
      {
        icon: UserCheck,
        title: { es: 'Onboarding automatizado', en: 'Automated onboarding' },
        desc: {
          es: 'Guía a nuevos clientes paso a paso, recopila información y agenda reuniones.',
          en: 'Guides new customers step by step, collects data and books meetings.',
        },
      },
    ],
  },
  {
    id: 'finance',
    label: { es: 'Finanzas', en: 'Finance' },
    blurb: {
      es: 'Cerrá el mes más rápido y anticipá los números antes de que pasen.',
      en: 'Close the month faster and see the numbers before they happen.',
    },
    items: [
      {
        icon: Calculator,
        title: { es: 'Análisis financiero automatizado', en: 'Automated financial analysis' },
        desc: {
          es: 'Genera reportes, detecta anomalías y predice tendencias con IA avanzada.',
          en: 'Generates reports, detects anomalies and predicts trends with advanced AI.',
        },
      },
      {
        icon: Receipt,
        title: { es: 'Procesamiento de facturas', en: 'Invoice processing' },
        desc: {
          es: 'Extrae datos automáticamente, reconcilia pagos y detecta discrepancias.',
          en: 'Extracts data automatically, reconciles payments and flags discrepancies.',
        },
      },
      {
        icon: ChartPie,
        title: { es: 'Predicción de ingresos', en: 'Revenue prediction' },
        desc: {
          es: 'Pronostica ingresos futuros según patrones históricos y tendencias del mercado.',
          en: 'Forecasts future revenue from historical patterns and market trends.',
        },
      },
    ],
  },
  {
    id: 'knowledge',
    label: { es: 'Conocimiento', en: 'Knowledge' },
    blurb: {
      es: 'Toda la información de la empresa, disponible en una pregunta.',
      en: 'Everything the company knows, one question away.',
    },
    items: [
      {
        icon: Search,
        title: { es: 'Búsqueda inteligente', en: 'Intelligent search' },
        desc: {
          es: 'Encuentra información en segundos usando lenguaje natural en todos tus sistemas.',
          en: 'Find anything in seconds using natural language across all your systems.',
        },
      },
      {
        icon: Brain,
        title: { es: 'Análisis de datos profundo', en: 'Deep data analysis' },
        desc: {
          es: 'Descubre insights ocultos con análisis avanzado y visualizaciones automáticas.',
          en: 'Surfaces hidden insights with advanced analysis and automatic visualisations.',
        },
      },
      {
        icon: FileText,
        title: { es: 'Generación de reportes', en: 'Report generation' },
        desc: {
          es: 'Crea reportes ejecutivos con insights clave y recomendaciones accionables.',
          en: 'Builds executive reports with key insights and actionable recommendations.',
        },
      },
    ],
  },
]

export type Agent = {
  id: string
  icon: LucideIcon
  name: T
  short: T
  description: T
  bullets: T[]
}

export const agents: Agent[] = [
  {
    id: 'voice',
    icon: Mic,
    name: { es: 'Agente de voz', en: 'Voice agent' },
    short: { es: 'Atención telefónica 24/7', en: '24/7 phone support' },
    description: {
      es: 'Maneja llamadas y consultas 24/7 con naturalidad humana. Reduce costos operativos y mejora la experiencia del cliente.',
      en: 'Handles calls and inquiries 24/7 with human-like naturalness. Cuts operating costs and improves customer experience.',
    },
    bullets: [
      {
        es: 'Atiende llamadas entrantes sin esperas ni horarios',
        en: 'Answers inbound calls with no queue and no office hours',
      },
      {
        es: 'Deriva a una persona del equipo cuando el caso lo pide',
        en: 'Escalates to a human teammate when the case calls for it',
      },
      { es: 'Deja registro y resumen de cada conversación', en: 'Logs and summarises every conversation' },
    ],
  },
  {
    id: 'inventory',
    icon: Boxes,
    name: { es: 'Agente de inventario', en: 'Inventory agent' },
    short: { es: 'Stock predictivo', en: 'Predictive stock' },
    description: {
      es: 'Predice demanda y optimiza stock automáticamente. Evita faltantes y reduce costos de almacenamiento.',
      en: 'Predicts demand and optimises stock automatically. Prevents shortages and reduces storage costs.',
    },
    bullets: [
      { es: 'Proyecta demanda a partir de tu histórico de ventas', en: 'Projects demand from your sales history' },
      { es: 'Avisa antes del quiebre de stock, no después', en: 'Warns before a stockout, not after' },
      {
        es: 'Ajusta puntos de reposición por producto y sucursal',
        en: 'Tunes reorder points per product and location',
      },
    ],
  },
  {
    id: 'calendar',
    icon: CalendarDays,
    name: { es: 'Agente de calendario', en: 'Calendar agent' },
    short: { es: 'Agenda sin fricción', en: 'Frictionless scheduling' },
    description: {
      es: 'Gestiona citas y horarios automáticamente. Optimiza la agenda del equipo y elimina los conflictos de programación.',
      en: 'Manages appointments and schedules automatically. Optimises the team calendar and removes scheduling conflicts.',
    },
    bullets: [
      {
        es: 'Agenda, reprograma y confirma sin intervención manual',
        en: 'Books, reschedules and confirms with no manual step',
      },
      {
        es: 'Respeta la disponibilidad real de cada persona del equipo',
        en: 'Respects the real availability of every teammate',
      },
      { es: 'Reduce ausencias con recordatorios automáticos', en: 'Cuts no-shows with automatic reminders' },
    ],
  },
  {
    id: 'process',
    icon: Workflow,
    name: { es: 'Agente de procesos', en: 'Process agent' },
    short: { es: 'Workflows end-to-end', en: 'End-to-end workflows' },
    description: {
      es: 'Analiza y optimiza procesos empresariales. Automatiza workflows complejos y elimina cuellos de botella.',
      en: 'Analyses and optimises business processes. Automates complex workflows and removes bottlenecks.',
    },
    bullets: [
      {
        es: 'Conecta las herramientas que ya usás, sin migraciones',
        en: 'Connects the tools you already use, with no migration',
      },
      { es: 'Ejecuta tareas de punta a punta entre sistemas', en: 'Runs tasks end to end across systems' },
      {
        es: 'Muestra dónde se pierde tiempo y cuánto se recupera',
        en: 'Shows where time is lost and how much comes back',
      },
    ],
  },
]

export const processSteps: { n: string; title: T; desc: T }[] = [
  {
    n: '01',
    title: { es: 'Diagnóstico', en: 'Diagnosis' },
    desc: {
      es: 'Mapeamos tus procesos actuales y priorizamos dónde la IA genera retorno real. Salís con un plan, no con una promesa.',
      en: 'We map your current processes and prioritise where AI actually pays off. You leave with a plan, not a promise.',
    },
  },
  {
    n: '02',
    title: { es: 'Implementación', en: 'Deployment' },
    desc: {
      es: 'Construimos el agente y lo integramos a los sistemas que ya usás. Sin migraciones forzadas ni frenar la operación.',
      en: 'We build the agent and integrate it with the systems you already run. No forced migrations, no downtime.',
    },
  },
  {
    n: '03',
    title: { es: 'Operación y mejora', en: 'Run and improve' },
    desc: {
      es: 'Medimos resultados, ajustamos el agente y escalamos a los procesos que siguen. Acompañamiento continuo.',
      en: 'We measure results, tune the agent and scale to the next process. Continuous support.',
    },
  },
]

export const team = [
  {
    name: 'Matías Jordá',
    role: { es: 'Co-Founder & AI Engineer', en: 'Co-Founder & AI Engineer' } satisfies T,
    photo: '/images/team-matias.webp',
    linkedin: 'https://www.linkedin.com/in/mat%C3%ADas-jord%C3%A1-b663642a3/',
  },
  {
    name: 'Ignacio Miranda',
    role: { es: 'Co-Founder & Software Engineer', en: 'Co-Founder & Software Engineer' } satisfies T,
    photo: '/images/team-ignacio.webp',
    linkedin: 'https://www.linkedin.com/in/ignacio-miranda-7a367b2a9/',
  },
]

export const finalCta = {
  title: {
    es: '¿Listo para llevar tu empresa al futuro?',
    en: 'Ready to take your company into the future?',
  } satisfies T,
  text: {
    es: 'Agendá una consultoría gratuita de 30 minutos y te mostramos, sobre tus propios procesos, dónde la IA mueve la aguja.',
    en: 'Book a free 30-minute consultation and we will show you, on your own processes, where AI moves the needle.',
  } satisfies T,
  button: { es: 'Agendar reunión', en: 'Book a meeting' } satisfies T,
}

export const ui = {
  benefitsEyebrow: { es: 'Beneficios', en: 'Benefits' } satisfies T,
  benefitsTitle: {
    es: 'Qué cambia dentro de tu empresa',
    en: 'What changes inside your company',
  } satisfies T,
  benefitsSubtitle: {
    es: 'Automatizá decisiones y flujos de trabajo hablando directamente con tus sistemas.',
    en: 'Automate decisions and workflows by talking straight to your systems.',
  } satisfies T,
  agentsEyebrow: { es: 'AI Agents', en: 'AI Agents' } satisfies T,
  agentsTitle: { es: 'Nuestros agentes', en: 'Our agents' } satisfies T,
  agentsSubtitle: {
    es: 'Cuatro agentes especializados, listos para adaptarse a tu operación.',
    en: 'Four specialised agents, ready to adapt to your operation.',
  } satisfies T,
  processEyebrow: { es: 'Cómo trabajamos', en: 'How we work' } satisfies T,
  processTitle: {
    es: 'De la idea a producción en semanas',
    en: 'From idea to production in weeks',
  } satisfies T,
  teamEyebrow: { es: 'Nosotros', en: 'About us' } satisfies T,
  teamTitle: { es: 'Quiénes están detrás', en: 'Who is behind this' } satisfies T,
  teamSubtitle: {
    es: 'Un equipo chico y técnico. Hablás siempre con quien construye.',
    en: 'A small, technical team. You always talk to the people who build it.',
  } satisfies T,
  results: { es: 'Resultados', en: 'Results' } satisfies T,
  writeUs: { es: 'Escribinos', en: 'Email us' } satisfies T,
  quickLinks: { es: 'Navegación', en: 'Navigation' } satisfies T,
  followUs: { es: 'Seguinos', en: 'Follow us' } satisfies T,
  menu: { es: 'Menú', en: 'Menu' } satisfies T,
  rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' } satisfies T,
}
