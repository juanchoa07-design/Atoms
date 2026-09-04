import { Instagram, Linkedin, Youtube } from 'lucide-react'
import { nav, site, ui } from '../content/site'
import { useLang } from '../lib/lang'

const socials = [
  { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: site.social.youtube, label: 'YouTube', Icon: Youtube },
  { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#/" className="flex items-center" aria-label={site.name}>
              <img
                src={`${import.meta.env.BASE_URL}brand/logo.png`}
                alt={site.name}
                width={258}
                height={160}
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-fg-muted">{t(site.tagline)}</p>
          </div>

          <nav aria-label={t(ui.quickLinks)}>
            <h2 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">{t(ui.quickLinks)}</h2>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-fg-muted transition hover:text-fg">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">{t(ui.followUs)}</h2>
            <div className="mt-4 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t(ui.rights)}
          </p>
          <p>{t(site.tagline)}</p>
        </div>
      </div>
    </footer>
  )
}
