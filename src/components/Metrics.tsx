import { metrics, metricsTitle, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import CountUp from './reactbits/CountUp'
import { OrbitRings } from './ui/AtomArt'

export function Metrics() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden border-t border-border">
      <OrbitRings className="pointer-events-none absolute -left-20 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-detail opacity-5" />
      <div className="relative mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t(ui.metricsEyebrow)}</p>
          <h2 className="mt-4 text-h2">{t(metricsTitle)}</h2>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label.en} delay={i * 70} className="bg-bg py-8 sm:px-6 sm:first:pl-0">
              {/* Tabular digits so the count-up doesn't jitter */}
              <dt className="flex items-baseline text-h1 tabular-nums text-text">
                {metric.prefix}
                <CountUp to={metric.to} duration={1.6} />
                {metric.suffix}
              </dt>
              <dd className="mt-2 text-small text-text-muted">{t(metric.label)}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
