# Shree Raj Security Service: website (demo)

Modern redesign of shreerajsecurity.in, built with React 19, Vite 6 and Tailwind CSS 4.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live

- `src/data/site.js`: all content (contact details, services, industries, reasons, steps). Edit text here.
- `src/components/`: one component per homepage section, plus shared `ui.jsx` (Button, Container, headings) and `Reveal.jsx` (scroll animation).
- `src/index.css`: Tailwind theme tokens (navy `ink-*` and `gold-*` colours, fonts, animations).
- `public/emblem.svg`: placeholder shield emblem. Replace it with the real logo file.

## Next steps toward the full site

- Add React Router for separate pages (About, each service, Gallery, Careers).
- Send the quote form to a backend or email service (it currently opens WhatsApp).
- Add real photos, client logos and testimonials.
