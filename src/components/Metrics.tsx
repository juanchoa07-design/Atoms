import { metrics, metricsTitle, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { Reveal } from './ui/Reveal'
import CountUp from './reactbits/CountUp'
import { BrandArt } from './ui/BrandArt'

export function Metrics() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Vigilancia: this section is about operation that is watched. */}
      <BrandArt
        name="eye"
        className="pointer-events-none absolute right-0 top-1/2 h-56 w-[30rem] -translate-y-1/2 opacity-[0.08]"
      />

      <div className="relative mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t(ui.metricsEyebrow)}</p>
          <h2 className="mt-4 text-h2">{t(metricsTitle)}</h2>
        </Reveal>

        {/* The 1px gaps let the border colour show through, so the grid fades
            in as one piece: fading each cell left a grey block until the last
            one arrived. */}
        <Reveal className="mt-12">
          <dl className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label.en}
                className="bg-bg py-8 even:pl-4 sm:px-6 sm:first:pl-0 sm:even:pl-6"
              >
                {/* Tabular digits so the count-up doesn't jitter */}
                <dt className="flex items-baseline text-h1 tabular-nums text-text">
                  {metric.prefix}
                  <CountUp to={metric.to} duration={1.6} />
                  {metric.suffix}
                </dt>
                <dd className="mt-2 text-small text-text-muted">{t(metric.label)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
