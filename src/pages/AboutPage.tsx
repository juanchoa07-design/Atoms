import { tracks, ui } from '../content/site'
import { useLang } from '../lib/lang'
import { PageHeader } from '../components/ui/PageHeader'
import { Team } from '../components/Team'
import { Metrics } from '../components/Metrics'
import { FinalCta } from '../components/FinalCta'

export function AboutPage() {
  const { t } = useLang()
  const track = tracks.find((entry) => entry.id === 'about')!

  return (
    <>
      <PageHeader eyebrow={t(ui.teamEyebrow)} title={t(track.title)} intro={t(track.blurb)} />
      <Team headless />
      <Metrics />
      <FinalCta />
    </>
  )
}
