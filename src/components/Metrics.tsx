import { metrics, metricsCaption, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import CountUp from './reactbits/CountUp'

export function Metrics() {
  const { t } = useLang()

  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="eyebrow">{t(ui.results)}</p>
          <p className="text-xs text-fg-subtle">{t(metricsCaption)}</p>
        </Reveal>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-line lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label.es} delay={i * 70} className="bg-ink py-8 sm:px-6 sm:first:pl-0">
              <dt className="flex items-baseline font-mono text-[2.1rem] font-medium tracking-tight text-fg sm:text-[2.5rem]">
                {metric.prefix}
                <CountUp to={metric.to} duration={1.6} />
                {metric.suffix}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-fg-muted">{t(metric.label)}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
