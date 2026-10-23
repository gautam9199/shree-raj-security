import { company, reasons } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Button, Container, Kicker } from './ui.jsx'

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Kicker>Why Shree Raj</Kicker>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
            Two decades of <span className="gold-text">earned trust</span> in Rajkot
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Since {company.founded} we've grown from a local agency in Gandhigram into a full-service security partner.
            Clients stay with us because we treat their premises like our own, and we answer the phone at 3 AM.
          </p>
          <Button href="#contact" className="mt-8">Talk to our team</Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(({ title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className={`rounded-3xl border border-white/8 bg-ink-800 p-7 ${i % 2 === 1 ? 'sm:translate-y-8' : ''}`}
            >
              <span className="font-display text-4xl font-bold text-gold-500/30">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
