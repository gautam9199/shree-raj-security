import Reveal from './Reveal.jsx'

const buttonStyles = {
  gold: 'bg-gold-gradient text-ink-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5',
  ghost: 'border border-white/15 text-white hover:border-gold-400/60 hover:text-gold-300',
  dark: 'bg-ink-950 text-white hover:bg-ink-800',
  outlineDark: 'border border-ink-950/40 text-ink-950 hover:bg-ink-950/10',
}

export function Button({ variant = 'gold', size = 'md', className = '', children, ...props }) {
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3.5 text-[15px]' }
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 ${sizes[size]} ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export function Kicker({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
      <span className="h-px w-6 bg-gold-500" />
      {children}
    </span>
  )
}

export function SectionHeading({ kicker, title, text, center = true }) {
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${center ? 'mx-auto text-center' : ''}`}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{text}</p>}
    </Reveal>
  )
}

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
