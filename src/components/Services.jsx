import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Container, SectionHeading } from './ui.jsx'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="What we do"
          title={<>Services built around <span className="gold-text">your site</span></>}
          text="Every deployment starts with understanding your premises, people and risks. Pick a service, or combine them into one managed contract."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, icon: Icon, description, points, featured }, i) => (
            <Reveal
              key={title}
              as="article"
              delay={i * 80}
              className={`group relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                featured
                  ? 'border-gold-500/40 bg-gradient-to-b from-gold-500/10 to-ink-800'
                  : 'border-white/8 bg-ink-800 hover:border-gold-500/30'
              }`}
            >
              {featured && (
                <span className="absolute right-6 top-6 rounded-full bg-gold-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300">
                  Most requested
                </span>
              )}
              <div className="grid size-12 place-items-center rounded-2xl bg-gold-gradient text-ink-950 shadow-lg shadow-gold-500/20">
                <Icon className="size-6" strokeWidth={2} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{description}</p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="size-4 shrink-0 text-gold-400" /> {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: title }))}
                className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-gold-300"
              >
                Enquire <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
