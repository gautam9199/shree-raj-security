import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { company, emblem } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Button, Container } from './ui.jsx'

const yearsActive = new Date().getFullYear() - company.founded

function CountUp({ to, duration = 1400 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to, duration])

  return <span ref={ref}>{value}</span>
}

const marqueeItems = [
  'Security Guards', 'Event Bouncers', 'Parking Security', 'Housekeeping',
  'Corporate Offices', 'Housing Societies', 'Hotels', 'Hospitals', 'Factories',
]

function FloatCard({ className, delay, children }) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/80 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-md animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}

function RadarVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      {[0, 14, 28].map((inset) => (
        <div key={inset} className="absolute rounded-full border border-gold-500/20" style={{ inset: `${inset}%` }} />
      ))}
      <div
        className="absolute inset-0 rounded-full animate-sweep"
        style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgb(212 167 58 / 0.35) 50deg, transparent 60deg)' }}
      />
      <div className="absolute inset-[38%] rounded-full bg-gold-500/10 blur-2xl" />
      <img src={emblem} alt="" className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_40px_rgba(212,167,58,0.35)]" />

      <FloatCard className="left-0 top-[12%] sm:-left-4" delay="0s">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping-slow" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Night patrol active</p>
          <p className="text-xs text-slate-400">Gate 2 · Checked 02:14 AM</p>
        </div>
      </FloatCard>

      <FloatCard className="right-0 top-[48%] sm:-right-6" delay="-2s">
        <ShieldCheck className="size-5 text-gold-400" />
        <div>
          <p className="text-sm font-semibold text-white">Shift handover</p>
          <p className="text-xs text-slate-400">Logged &amp; verified</p>
        </div>
      </FloatCard>

      <FloatCard className="bottom-[6%] left-[8%]" delay="-4s">
        <div className="flex -space-x-2">
          {['RK', 'MS', 'VJ'].map((i) => (
            <span key={i} className="grid size-7 place-items-center rounded-full border-2 border-ink-800 bg-gold-gradient text-[10px] font-bold text-ink-950">{i}</span>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">3 guards on site</p>
          <p className="text-xs text-slate-400">Supervisor on call</p>
        </div>
      </FloatCard>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <Container className="relative grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold text-gold-300 sm:text-sm">
              <span className="size-1.5 rounded-full bg-gold-400" /> Guarding Rajkot since {company.founded}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Security you can <span className="gold-text">count on</span>, every hour of every day.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Trained guards, bouncers and facility staff for businesses, housing societies, hotels, hospitals and
              events across Gujarat. Deployed fast, supervised closely.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Request a free site survey <ArrowRight className="size-4" /></Button>
            <Button href="#services" variant="ghost">Explore services</Button>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <dt className="sr-only">Years of service</dt>
                <dd className="font-display text-3xl font-bold text-white sm:text-4xl"><CountUp to={yearsActive} />+</dd>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">Years of service</p>
              </div>
              <div>
                <dt className="sr-only">Coverage</dt>
                <dd className="font-display text-3xl font-bold text-white sm:text-4xl">24/7</dd>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">Round-the-clock cover</p>
              </div>
              <div>
                <dt className="sr-only">Service lines</dt>
                <dd className="font-display text-3xl font-bold text-white sm:text-4xl">4</dd>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">Core service lines</p>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="px-2 sm:px-8 lg:px-0">
          <RadarVisual />
        </Reveal>
      </Container>

      {/* Marquee */}
      <div className="relative border-y border-white/5 bg-ink-950/60 py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold text-slate-500">
              {item} <span className="text-gold-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
