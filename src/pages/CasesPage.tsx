import { casesPage } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { Clients } from '../components/Clients'
import { Metrics } from '../components/Metrics'
import { FinalCta } from '../components/FinalCta'
import { Reveal } from '../components/ui/Reveal'

export function CasesPage() {
  const { t } = useLang()

  return (
    <>
      <PageHeader eyebrow={t(casesPage.eyebrow)} title={t(casesPage.title)} intro={t(casesPage.intro)} />

      {casesPage.items.length === 0 && (
        <section className="mx-auto w-full max-w-6xl px-6 pt-20">
          <Reveal>
            <p className="max-w-xl text-[15px] leading-relaxed text-fg-muted">{t(casesPage.emptyNote)}</p>
          </Reveal>
        </section>
      )}

      <Clients />
      <Metrics />
      <FinalCta />
    </>
  )
}
