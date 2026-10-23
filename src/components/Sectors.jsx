import { sectors } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Container, SectionHeading } from './ui.jsx'

export default function Sectors() {
  return (
    <section id="sectors" className="border-y border-white/5 bg-ink-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="Who we protect"
          title="Trusted across industries"
          text="From factory gates to hotel lobbies, our teams are trained for the environment they work in."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {sectors.map(({ label, icon: Icon }, i) => (
            <Reveal
              key={label}
              delay={i * 50}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-white/8 bg-ink-800/60 p-5 transition hover:border-gold-500/40 hover:bg-ink-800 sm:flex-row sm:items-center sm:p-6"
            >
              <Icon className="size-7 shrink-0 text-gold-400 transition group-hover:scale-110" strokeWidth={1.6} />
              <span className="font-semibold leading-snug text-white">{label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
