import {
  BrainCircuit,
  ClipboardCheck,
  Database,
  Map,
  MessagesSquare,
  Mic,
  Users,
  Workflow,
} from 'lucide-react'
import type { Offering, T } from './site'

/** Everything shown on the Services page, reached from the home page chooser. */
export const servicesPage = {
  eyebrow: { en: 'Services', es: 'Servicios' } satisfies T,
  title: { en: 'What we build', es: 'Qué construimos' } satisfies T,
  intro: {
    en: 'Ready-to-deploy AI agents and tailor-made systems, designed around how your business actually runs. We build, integrate and operate all of it.',
    es: 'Agentes de IA listos para desplegar y sistemas a medida, diseñados según cómo funciona tu negocio de verdad. Los construimos, integramos y operamos nosotros.',
  } satisfies T,
  groups: [
    {
      id: 'agents',
      kicker: { en: 'AI agents', es: 'Agentes de IA' } satisfies T,
      title: { en: 'AI agents for your business', es: 'Agentes de IA para tu negocio' } satisfies T,
      blurb: {
        en: 'Deployable agents that talk to your data, your customers and your phone lines — live in weeks, not quarters.',
        es: 'Agentes listos para desplegar que hablan con tus datos, tus clientes y tus líneas telefónicas — en producción en semanas, no en trimestres.',
      } satisfies T,
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
          bullets: [
            { en: 'WhatsApp, Instagram, Telegram and web chat', es: 'WhatsApp, Instagram, Telegram y chat web' },
            { en: 'Qualification rules tuned to your funnel', es: 'Reglas de calificación ajustadas a tu embudo' },
            { en: 'Human handoff when the case needs it', es: 'Derivación a un humano cuando el caso lo pide' },
          ],
        },
        {
          n: '03',
          icon: Mic,
          title: { en: 'Voice AI', es: 'Voice AI' },
          desc: {
            en: 'Phone agents that book, qualify and resolve.',
            es: 'Agentes telefónicos que agendan, califican y resuelven.',
          },
          bullets: [
            { en: 'Inbound and outbound call handling', es: 'Atención de llamadas entrantes y salientes' },
            { en: 'Booking straight into your calendar', es: 'Agendado directo en tu calendario' },
            { en: 'Transcripts and summaries of every call', es: 'Transcripción y resumen de cada llamada' },
          ],
        },
      ] satisfies Offering[],
    },
    {
      id: 'tailor',
      kicker: { en: 'Tailor-made', es: 'A medida' } satisfies T,
      title: { en: 'Systems built to measure', es: 'Sistemas hechos a medida' } satisfies T,
      blurb: {
        en: 'End-to-end automations and custom software, designed around how your business actually runs.',
        es: 'Automatizaciones de punta a punta y software a medida, diseñados según cómo funciona tu negocio de verdad.',
      } satisfies T,
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
          desc: {
            en: 'Internal platforms with AI built in.',
            es: 'Plataformas internas con IA integrada de base.',
          },
          bullets: [
            { en: 'Built on your data model, not a template', es: 'Sobre tu modelo de datos, no una plantilla' },
            { en: 'Roles, permissions and audit trail', es: 'Roles, permisos y trazabilidad' },
            { en: 'Deployed and operated by us', es: 'Desplegado y operado por nosotros' },
          ],
        },
      ] satisfies Offering[],
    },
  ],
}

/**
 * Broken out from the live site's single "Consulting & enablement" entry
 * (roadmaps, audits and team training) so the page has real depth. The three
 * headings come from AtomLabs' own copy; the bullets are our wording and
 * should be confirmed with the team before publishing.
 */
export const trainingPage = {
  eyebrow: { en: 'Training & consulting', es: 'Capacitaciones y consultorías' } satisfies T,
  title: { en: 'Consulting & enablement', es: 'Consultoría y capacitación' } satisfies T,
  intro: {
    en: 'Not every problem needs custom software. Sometimes a team needs a clear plan and the skills to run it. We map where AI pays off, and we train your people to own it.',
    es: 'No todo problema necesita software a medida. A veces un equipo necesita un plan claro y las habilidades para ejecutarlo. Mapeamos dónde rinde la IA, y entrenamos a tu gente para que lo maneje.',
  } satisfies T,
  items: [
    {
      n: '01',
      icon: Map,
      title: { en: 'AI roadmap', es: 'Roadmap de IA' },
      desc: {
        en: 'Where AI actually pays off in your operation, in what order, and what each step costs.',
        es: 'Dónde rinde de verdad la IA en tu operación, en qué orden, y cuánto cuesta cada paso.',
      },
      bullets: [
        { en: 'Opportunity map across your processes', es: 'Mapa de oportunidades sobre tus procesos' },
        { en: 'Prioritised by effort and return', es: 'Priorizado por esfuerzo y retorno' },
        { en: 'Budget and timeline per initiative', es: 'Presupuesto y cronograma por iniciativa' },
      ],
    },
    {
      n: '02',
      icon: ClipboardCheck,
      title: { en: 'Process and stack audit', es: 'Auditoría de procesos y stack' },
      desc: {
        en: 'A hard look at how your team works today and what your tools can and cannot support.',
        es: 'Una mirada dura a cómo trabaja tu equipo hoy y qué pueden y qué no pueden soportar tus herramientas.',
      },
      bullets: [
        { en: 'Process and data-flow mapping', es: 'Mapeo de procesos y flujo de datos' },
        { en: 'Integration and security review', es: 'Revisión de integraciones y seguridad' },
        { en: 'Findings with concrete next steps', es: 'Hallazgos con próximos pasos concretos' },
      ],
    },
    {
      n: '03',
      icon: Users,
      title: { en: 'Team training', es: 'Capacitación de equipos' },
      desc: {
        en: 'Hands-on sessions on your own tools and data, so the team keeps going once we hand over.',
        es: 'Sesiones prácticas sobre tus propias herramientas y datos, para que el equipo siga solo cuando entregamos.',
      },
      bullets: [
        { en: 'Workshops on your real use cases', es: 'Talleres sobre tus casos de uso reales' },
        { en: 'Prompting and agent operation', es: 'Prompting y operación de agentes' },
        { en: 'Documentation and handover', es: 'Documentación y traspaso' },
      ],
    },
  ] satisfies Offering[],
}
