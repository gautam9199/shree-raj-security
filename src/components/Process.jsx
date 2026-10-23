import { steps } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Container, SectionHeading } from './ui.jsx'

export default function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-ink-950 py-20 sm:py-28">
      <Container>
        <SectionHeading kicker="How we work" title="From first call to guard on duty" />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent md:block" aria-hidden="true" />
          {steps.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100} className="relative flex gap-5 md:flex-col md:text-center">
              <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-gold-500/50 bg-ink-900 font-display text-lg font-bold text-gold-300 md:mx-auto">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
