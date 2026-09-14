import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { faq } from '../content/faq'
import { useLang } from '../lib/lang'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'

export function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section split id="faq" eyebrow={t(faq.eyebrow)} title={t(faq.title)} subtitle={t(faq.subtitle)}>
      <ul>
        {faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal as="li" key={item.q.en} delay={i * 45} className="border-t border-border last:border-b">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-body font-semibold transition-colors ${
                      isOpen ? 'text-text' : 'text-text-muted group-hover:text-text'
                    }`}
                  >
                    {t(item.q)}
                  </span>
                  <Plus
                    className={`mt-1 h-4 w-4 shrink-0 text-tone transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[65ch] pb-6 pr-8 text-body text-text-muted">{t(item.a)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
