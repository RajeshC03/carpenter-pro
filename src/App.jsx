import { useState } from 'react'
import { T } from './data/content'
import useReveal from './hooks/useReveal'
import Dust from './components/Dust'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Works from './components/Works'
import Process from './components/Process'
import Enquiry from './components/Enquiry'
import Quotes from './components/Quotes'
import Footer from './components/Footer'
import Floating from './components/Floating'

export default function App() {
  const [lang, setLang] = useState('kn')
  const t = T[lang]
  useReveal()
  return (
    <div className="wrap">
      <Dust />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Marquee lang={lang} />
      <Stats t={t} />
      <Works t={t} lang={lang} />
      <Process t={t} />
      <Enquiry t={t} />
      <Quotes t={t} lang={lang} />
      <Footer t={t} />
      <Floating />
    </div>
  )
}
