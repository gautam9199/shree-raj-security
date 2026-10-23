import { company, navLinks, services } from '../data/site.js'
import { Brand } from './Header.jsx'
import { Container } from './ui.jsx'

export default function Footer() {
  const columns = [
    { title: 'Services', links: services.map((s) => ({ label: s.title, href: '#services' })) },
    { title: 'Company', links: navLinks },
    {
      title: 'Reach us',
      links: [
        { label: company.phoneDisplay, href: `tel:${company.phone}` },
        { label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}` },
        { label: 'Gandhigram, Rajkot' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Brand />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Trusted security, bouncer, parking and housekeeping services in Rajkot since {company.founded}.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">{col.title}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <a href={l.href} className="text-slate-400 transition hover:text-white">{l.label}</a>
                  ) : (
                    <span className="text-slate-400">{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </Container>
    </footer>
  )
}
