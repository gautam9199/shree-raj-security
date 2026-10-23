import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Sectors from './components/Sectors.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import CtaBand from './components/CtaBand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <WhyUs />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
