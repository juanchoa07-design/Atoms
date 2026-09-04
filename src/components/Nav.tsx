import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site, hero } from '../content/site'
import { useLang } from '../lib/lang'
import { useScrolled } from '../lib/useScrolled'
import { AtomMark } from './ui/AtomMark'
import { Button } from './ui/Button'

function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center rounded-full border border-line p-0.5" role="group" aria-label="Idioma / Language">
      {(['en', 'es'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase transition ${
            lang === code ? 'bg-white/10 text-fg' : 'text-fg-subtle hover:text-fg-muted'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export function Nav() {
  const { t } = useLang()
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-2.5 text-fg" aria-label={site.name}>
          <AtomMark className="h-6 w-6 text-brand" />
          <span className="text-[15px] font-display font-semibold tracking-tight">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-fg-muted transition hover:text-fg">
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <Button href={site.calendly} target="_blank" rel="noopener noreferrer">
            {t(hero.primaryCta)}
          </Button>
        </div>

        <button
          type="button"
          className="text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-y border-line bg-ink px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg text-fg-muted transition hover:text-fg"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between gap-4">
            <LangToggle />
            <Button href={site.calendly} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              {t(hero.primaryCta)}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
