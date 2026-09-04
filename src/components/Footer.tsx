import { Instagram, Linkedin, Youtube } from 'lucide-react'
import { site, ui } from '../content/site'
import { footerColumns } from '../content/faq'
import { useLang } from '../lib/lang'
import { LangToggle } from './ui/LangToggle'

const socials = [
  { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: site.social.youtube, label: 'YouTube', Icon: Youtube },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="relative bg-ink-deep">
      <div className="rule-grad absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="space-y-5">
            <a href="#/" className="inline-flex items-center" aria-label={site.name}>
              <img
                src={`${import.meta.env.BASE_URL}brand/logo.png`}
                alt={site.name}
                width={355}
                height={220}
                className="h-10 w-auto"
              />
            </a>

            <p className="max-w-xs text-sm leading-relaxed text-fg-muted">{t(site.tagline)}</p>

            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} — ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-subtle transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <LangToggle />
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.title.en} aria-label={t(column.title)}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg">{t(column.title)}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label.en}>
                    {link.pending ? (
                      <span className="text-sm text-fg-subtle">{t(link.label)}</span>
                    ) : (
                      <a href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                        {t(link.label)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:mt-16 gap-2 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t(ui.rights)}
          </p>
          <p className="font-mono">atomlabs.ai</p>
        </div>
      </div>
    </footer>
  )
}
