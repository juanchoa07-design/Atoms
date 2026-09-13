import { callBands, casesPage } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { Clients } from '../components/Clients'
import { CallBand } from '../components/CallBand'
import { Metrics } from '../components/Metrics'
import { FinalCta } from '../components/FinalCta'
import { Reveal } from '../components/ui/Reveal'

export function CasesPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(casesPage.eyebrow)} title={t(casesPage.title)} intro={t(casesPage.intro)} />

      {casesPage.items.length === 0 && (
        <section className="mx-auto w-full max-w-(--container) px-6 pt-12 lg:pt-24">
          <Reveal>
            <p className="max-w-[65ch] text-body text-text-muted">{t(casesPage.emptyNote)}</p>
          </Reveal>
        </section>
      )}

      <Clients />
      <CallBand {...callBands.cases} />
      <Metrics />
      <FinalCta />
    </>
  )
}
