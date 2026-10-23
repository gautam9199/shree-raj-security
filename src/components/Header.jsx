import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { company, emblem, navLinks } from '../data/site.js'
import { Button, Container } from './ui.jsx'

export function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={`${company.name} home`}>
      <img src={emblem} alt="" width="38" height="42" className="h-10 w-auto" />
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-tight text-white">{company.shortName}</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400">Security Service</span>
      </span>
    </a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/5 bg-ink-900/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-gold-300">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:${company.phone}`} className="hidden items-center gap-2 text-sm font-semibold text-white md:flex lg:hidden xl:flex">
            <Phone className="size-4 text-gold-400" /> {company.phoneDisplay}
          </a>
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">Get a Quote</Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${open ? 'max-h-[100svh]' : 'max-h-0'}`}>
        <Container className="flex h-[calc(100svh-4.5rem)] flex-col gap-1 pb-8 pt-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-display text-2xl font-semibold text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-auto grid gap-3">
            <Button href={`tel:${company.phone}`} variant="ghost"><Phone className="size-4" /> Call {company.phoneDisplay}</Button>
            <Button href="#contact" onClick={() => setOpen(false)}>Get a Quote</Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
