import { MessageCircle, Phone } from 'lucide-react'
import { company, emblem } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { Button, Container } from './ui.jsx'

export default function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gold-gradient px-6 py-12 sm:px-12 sm:py-14">
          <img src={emblem} alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 w-64 opacity-15 mix-blend-multiply" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">Need guards on site this week?</h2>
              <p className="mt-3 text-base font-medium text-ink-950/75 sm:text-lg">
                Call us now or message on WhatsApp. We usually respond within the hour.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href={`tel:${company.phone}`} variant="dark"><Phone className="size-4" /> Call now</Button>
              <Button href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener" variant="outlineDark">
                <MessageCircle className="size-4" /> WhatsApp us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
