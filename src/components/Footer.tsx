import { Instagram, Linkedin, Youtube } from 'lucide-react'
import { site, ui } from '../content/site'
import { footerColumns } from '../content/faq'
import { useLang } from '../lib/lang'
import { LangToggle } from './ui/LangToggle'
import { Logo } from './ui/Logo'

const socials = [
  { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: site.social.youtube, label: 'YouTube', Icon: Youtube },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-(--container) px-6 py-12 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand */}
          <div>
            {/* The negative margin lines the logo up with the column while its
                clear zone stays free around it. */}
            <div className="flex">
              <Logo className="-m-3" />
            </div>

            <p className="mt-6 max-w-xs text-small text-text-muted">{t(site.tagline)}</p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} — ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-detail hover:text-detail"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <LangToggle />
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.title.en} aria-label={t(column.title)}>
              <h2 className="text-small font-semibold text-text">{t(column.title)}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label.en}>
                    {link.pending ? (
                      <span className="text-small text-text-muted">{t(link.label)}</span>
                    ) : (
                      <a href={link.href} className="text-small text-text-muted transition-colors hover:text-text">
                        {t(link.label)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-small text-text-muted sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>
            © {new Date().getFullYear()} {site.name}. {t(ui.rights)}
          </p>
          <p>atomlabs.ai</p>
        </div>
      </div>
    </footer>
  )
}
