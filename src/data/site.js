// Central content for the site. Edit here instead of inside components.
import {
  ShieldCheck, UserCheck, ParkingSquare, Sparkles,
  Building2, Factory, Home, Hotel, Hospital, PartyPopper, Landmark, ScanEye,
} from 'lucide-react'

export const emblem = `${import.meta.env.BASE_URL}emblem.svg`

export const company = {
  name: 'Shree Raj Security Service',
  shortName: 'Shree Raj',
  founded: 2001,
  phone: '+918048067194',
  phoneDisplay: '+91 80480 67194',
  whatsapp: '919426201742',
  email: 'shreeraj_vijaysinh91@yahoo.com',
  address: '80 Feet Road, Near Lakh No Bunglow, Gandhigram, Rajkot, Gujarat 360007',
  mapEmbed: 'https://www.google.com/maps?q=22.309688,70.773659&z=15&output=embed',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#sectors' },
  { label: 'Why Us', href: '#why' },
  { label: 'How We Work', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'Security Guard Service',
    icon: ShieldCheck,
    featured: true,
    description:
      'Uniformed, trained guards for access control, patrolling, visitor management and asset protection, by day, by night or round the clock.',
    points: ['Gate & access control', 'Patrolling & incident logs', 'Armed / unarmed options'],
  },
  {
    title: 'Bouncer Service',
    icon: UserCheck,
    description:
      'Professional, well-presented bouncers for weddings, private parties, concerts, clubs and VIP movement.',
    points: ['Crowd & entry management', 'VIP & guest protection'],
  },
  {
    title: 'Parking Security',
    icon: ParkingSquare,
    description:
      'Traffic marshals and parking attendants who keep vehicles moving and premises safe at malls, hospitals, offices and events.',
    points: ['Vehicle flow & marshalling', 'Entry / exit logging'],
  },
  {
    title: 'Housekeeping Service',
    icon: Sparkles,
    description:
      'Reliable housekeeping staff for offices, societies and commercial buildings: clean, punctual and supervised.',
    points: ['Daily & deep cleaning', 'Facility upkeep'],
  },
]

export const sectors = [
  { label: 'Corporate Offices', icon: Building2 },
  { label: 'Factories & Industry', icon: Factory },
  { label: 'Housing Societies', icon: Home },
  { label: 'Hotels', icon: Hotel },
  { label: 'Hospitals & Nursing Homes', icon: Hospital },
  { label: 'Weddings & Events', icon: PartyPopper },
  { label: 'Banks & Institutions', icon: Landmark },
  { label: 'Vigilance & Audits', icon: ScanEye },
]

export const reasons = [
  { title: 'Verified & trained staff', text: 'Every guard is screened before deployment and trained in access control, first response and conduct.' },
  { title: 'Active supervision', text: 'Field supervisors make surprise site checks so standards never slip between shifts.' },
  { title: 'Quick replacements', text: 'Leave or absence? A trained replacement is arranged fast, so your post is never left empty.' },
  { title: 'Transparent pricing', text: 'Clear monthly contracts with no hidden charges, tailored to your manpower and shift needs.' },
]

export const steps = [
  { title: 'Free site survey', text: 'We visit your premises and map entry points, risks and shift needs.' },
  { title: 'Custom plan', text: 'You get a clear proposal covering manpower, shifts, duties and pricing.' },
  { title: 'Deployment', text: 'Trained, uniformed staff are briefed for your site and put on duty.' },
  { title: 'Ongoing review', text: 'Regular supervision, feedback and reporting keep the service sharp.' },
]

export const siteTypes = [
  'Office / Corporate', 'Factory / Industrial', 'Housing Society', 'Hotel',
  'Hospital / Nursing Home', 'Wedding / Event', 'Other',
]
