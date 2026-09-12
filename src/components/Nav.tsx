import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site, hero } from '../content/site'
import { useLang } from '../lib/lang'
import { useScrolled } from '../lib/useScrolled'
import { LangToggle } from './ui/LangToggle'
import { Button } from './ui/Button'
import { Logo } from './ui/Logo'

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-border bg-bg' : 'border-transparent'
      }`}
    >
      {/* No fixed height: the bar is as tall as the logo plus its clear zone. */}
      <nav className="mx-auto flex w-full max-w-(--container) items-center justify-between px-6">
        {/* The clear zone overhangs into the gutter so the logo's edge lines up
            with the content below it. */}
        <Logo className="-ml-3" />

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-small text-text-muted transition-colors hover:text-text">
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <Button variant="outline" href={site.calendly} target="_blank" rel="noopener noreferrer">
            {t(hero.primaryCta)}
          </Button>
        </div>

        <button
          type="button"
          className="-mr-3 p-3 text-text lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 text-body font-medium text-text-muted transition-colors hover:text-text"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
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
