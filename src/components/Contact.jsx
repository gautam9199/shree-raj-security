import { useEffect, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { company, services, siteTypes } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Container, Kicker } from './ui.jsx'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition focus:border-gold-500/60 focus:ring-4 focus:ring-gold-500/10'

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      {children}
    </div>
  )
}

const serviceOptions = [...services.map((s) => s.title), 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', service: serviceOptions[0], site: siteTypes[0], staff: '', message: '',
  })
  const [error, setError] = useState('')

  // "Enquire" links on service cards preselect the service here.
  useEffect(() => {
    const onSelect = (e) => setForm((f) => ({ ...f, service: e.detail }))
    window.addEventListener('select-service', onSelect)
    return () => window.removeEventListener('select-service', onSelect)
  }, [])

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // For the demo the enquiry is handed to WhatsApp; swap this for an API call later.
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setError('Please enter your name.')
    if (form.phone.replace(/\D/g, '').length < 10) return setError('Please enter a valid phone number.')
    setError('')

    const text = [
      `Hello ${company.name}, I'd like a quote.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Site type: ${form.site}`,
      form.staff && `Staff needed: ${form.staff}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const contactItems = [
    { icon: Phone, label: 'Call', value: company.phoneDisplay, href: `tel:${company.phone}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: 'Office', value: company.address },
  ]

  return (
    <section id="contact" className="pb-24 pt-8 sm:pb-28">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Kicker>Get in touch</Kicker>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
            Let's secure your premises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Tell us a little about your site and we'll get back with a plan and a quote.
          </p>

          <ul className="mt-8 space-y-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                  {href ? (
                    <a href={href} className="break-words font-semibold text-white hover:text-gold-300">{value}</a>
                  ) : (
                    <p className="font-medium text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Shree Raj Security Service location"
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale invert-[0.92] hue-rotate-180"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-ink-800 p-6 shadow-2xl shadow-black/30 sm:p-8 lg:sticky lg:top-28"
          >
            <h3 className="text-2xl font-semibold">Request a quote</h3>
            <p className="mt-1 text-sm text-slate-400">Your enquiry opens in WhatsApp, ready to send.</p>

            <div className="mt-7 grid gap-5">
              <Field label="Your name" id="name">
                <input id="name" className={inputClass} autoComplete="name" placeholder="e.g. Ramesh Patel" value={form.name} onChange={update('name')} />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" id="phone">
                  <input id="phone" type="tel" inputMode="tel" className={inputClass} autoComplete="tel" placeholder="10-digit mobile" value={form.phone} onChange={update('phone')} />
                </Field>
                <Field label="Service" id="service">
                  <select id="service" className={inputClass} value={form.service} onChange={update('service')}>
                    {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Site type" id="site">
                  <select id="site" className={inputClass} value={form.site} onChange={update('site')}>
                    {siteTypes.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Staff needed" id="staff">
                  <input id="staff" type="number" min="1" inputMode="numeric" className={inputClass} placeholder="e.g. 4" value={form.staff} onChange={update('staff')} />
                </Field>
              </div>
              <Field label="Anything else?" id="message">
                <textarea id="message" rows={3} className={`${inputClass} resize-none`} placeholder="Shift timings, start date, location…" value={form.message} onChange={update('message')} />
              </Field>
            </div>

            {error && <p role="alert" className="mt-4 text-sm font-medium text-rose-400">{error}</p>}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-4 font-semibold text-ink-950 shadow-lg shadow-gold-500/20 transition hover:-translate-y-0.5 hover:shadow-gold-500/40"
            >
              <Send className="size-4" /> Send enquiry on WhatsApp
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
