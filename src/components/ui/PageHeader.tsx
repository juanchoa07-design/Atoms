import { ArrowLeft } from 'lucide-react'
import { pageProof } from '../../content/site'
import { Reveal } from './Reveal'
import { CallButton } from './CallButton'
import { AtomDot, OrbitRings } from './AtomArt'
import { BrandArt } from './BrandArt'
import { useLang } from '../../lib/lang'

const back = { en: 'Back to home', es: 'Volver al inicio' }

type PageHeaderProps = {
  eyebrow: string
  title: string
  intro: string
  /** Match the tone of the door that leads here. */
  tone?: 'blue' | 'orange'
  /** Opens the page with one of the manual's figures instead of the orbit. */
  art?: 'chain' | 'eye' | 'mind'
}

export function PageHeader({ eyebrow, title, intro, tone = 'blue', art }: PageHeaderProps) {
  const { t } = useLang()

  return (
    // pt-18 clears the fixed header: the 48px logo plus its 12px clear zone
    // above and below.
    <header className={`tone-${tone} relative overflow-hidden border-b border-border pt-18`}>
      {/* The copy only fills the left half on a wide screen, so the brand mark
          takes the other one — whole, not cropped by the edge. */}
      {art ? (
        <BrandArt
          name={art}
          className="pointer-events-none absolute right-6 top-1/2 hidden h-[22rem] w-[18rem] -translate-y-1/2 opacity-25 lg:block xl:right-16"
        />
      ) : (
        <OrbitRings className="pointer-events-none absolute right-6 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 text-tone opacity-20 lg:block xl:right-16" />
      )}

      <div className="relative mx-auto w-full max-w-(--container) px-6 py-12 lg:py-24">
        <Reveal className="max-w-2xl">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-small text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(back)}
          </a>

          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="mt-4 text-h1">{title}</h1>
          <p className="mt-4 max-w-[65ch] text-body text-text-muted">{intro}</p>

          {/* Every page opens with the way to book, not only the home. */}
          <div className="mt-8">
            <CallButton />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            {pageProof.map((proof) => (
              <li key={proof.en} className="flex items-center gap-2 text-small text-text-muted">
                <AtomDot className="h-3 w-3 shrink-0 text-tone" />
                {t(proof)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </header>
  )
}
