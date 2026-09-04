import { ArrowLeft } from 'lucide-react'
import { Reveal } from './Reveal'
import { useLang } from '../../lib/lang'

const back = { en: 'Back to home', es: 'Volver al inicio' }

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  const { t } = useLang()

  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Reveal>
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-sm text-fg-muted transition hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(back)}
          </a>

          <p className="eyebrow mt-10">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(1.85rem,3.8vw,2.8rem)] font-medium leading-[1.14]">{title}</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-muted">{intro}</p>
        </Reveal>
      </div>
    </header>
  )
}
