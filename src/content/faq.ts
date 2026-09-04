import type { T } from './site'

/** Verbatim from atomlabsai.com — both language versions. */
export const faq = {
  eyebrow: { en: 'FAQ', es: 'FAQ' } satisfies T,
  title: { en: 'Questions clients ask', es: 'Preguntas que nos hacen los clientes' } satisfies T,
  subtitle: {
    en: "If yours isn't here, send it through the form.",
    es: 'Si la tuya no está, escribinos por el formulario.',
  } satisfies T,
  items: [
    {
      q: { en: 'How long until something is live?', es: '¿Cuánto tarda en estar funcionando?' } satisfies T,
      a: {
        en: 'Most agents and automations go live in 2 to 6 weeks. We work in weekly iterations with demos, so you see progress from week one.',
        es: 'La mayoría de los agentes y automatizaciones salen a producción en 2 a 6 semanas. Trabajamos en iteraciones semanales con demos, así ves el avance desde la primera semana.',
      } satisfies T,
    },
    {
      q: { en: 'How do you charge?', es: '¿Cómo cobran?' } satisfies T,
      a: {
        en: 'We scope each project after a discovery call: a fixed build fee plus an optional monthly fee for operation, monitoring and iteration. Clear numbers, no surprises.',
        es: 'Definimos el alcance de cada proyecto después de una llamada de discovery: un fee fijo de desarrollo más un fee mensual opcional por operación, monitoreo e iteración. Números claros, sin sorpresas.',
      } satisfies T,
    },
    {
      q: {
        en: 'Do you integrate with our existing tools?',
        es: '¿Se integran con nuestras herramientas actuales?',
      } satisfies T,
      a: {
        en: 'Yes. We build on your stack — CRM, ERP, WhatsApp, databases, telephony — and connect to the systems your team already uses.',
        es: 'Sí. Construimos sobre tu stack — CRM, ERP, WhatsApp, bases de datos, telefonía — y nos conectamos a los sistemas que tu equipo ya usa.',
      } satisfies T,
    },
    {
      q: { en: 'What happens after launch?', es: '¿Qué pasa después del lanzamiento?' } satisfies T,
      a: {
        en: "We operate the system with you: monitoring, alerts, SLA and continuous improvements. You're never left with code you can't run.",
        es: 'Operamos el sistema junto a tu equipo: monitoreo, alertas, SLA y mejoras continuas. Nunca te quedás con código que no podés correr.',
      } satisfies T,
    },
    {
      q: {
        en: 'Which languages do your agents work in?',
        es: '¿En qué idiomas trabajan los agentes?',
      } satisfies T,
      a: {
        en: 'Spanish (including Rio Plate) and neutral English, across both voice and chat.',
        es: 'Español (incluido rioplatense) e inglés neutro, tanto en voz como en chat.',
      } satisfies T,
    },
    {
      q: { en: 'Where are you based?', es: '¿Dónde están ubicados?' } satisfies T,
      a: {
        en: "We're a LATAM team and work with clients across the Americas, fully remote and in your timezone.",
        es: 'Somos un equipo de LATAM y trabajamos con clientes en toda América, 100% remoto y en tu huso horario.',
      } satisfies T,
    },
  ],
}

/**
 * Footer link columns, mirroring the live site. `pending` entries have no page
 * in this build yet — they render as plain text rather than dead links.
 */
export const footerColumns: {
  title: T
  links: { label: T; href?: string; external?: boolean; pending?: boolean }[]
}[] = [
  {
    title: { en: 'Company', es: 'Empresa' },
    links: [
      { label: { en: 'About us', es: 'Sobre nosotros' }, href: '#/about' },
      { label: { en: 'Contact', es: 'Contacto' }, href: '#contact' },
    ],
  },
  {
    title: { en: 'Services', es: 'Servicios' },
    links: [
      { label: { en: 'What we build', es: 'Lo que hacemos' }, href: '#/services' },
      { label: { en: 'Training', es: 'Capacitaciones' }, href: '#/training' },
    ],
  },
  {
    title: { en: 'Resources', es: 'Recursos' },
    links: [{ label: { en: 'Podcast', es: 'Podcast' }, href: '#/podcast' }],
  },
  {
    title: { en: 'Legal', es: 'Legal' },
    links: [
      { label: { en: 'Privacy', es: 'Privacidad' }, pending: true },
      { label: { en: 'Terms', es: 'Términos' }, pending: true },
    ],
  },
]
