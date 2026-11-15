import { PHONE } from '../data/content'
import Deity from './Deity'

export default function Hero({ t }) {
  return (
    <header className="hero" id="top">
      {/* <div className="sub">🙏 {t.tribute} 🙏</div> */}
      <div className="gods">
        <Deity file="vishwakarma.jpg" fallback="🔨" name={t.g1} />
        <Deity file="kalikamba.jpg" fallback="🔱" name={t.g2} />
      </div>
      <h1>{t.title}</h1>
      <div className="sub">{t.tag}</div>
      <div className="cta">
        <a className="btn" href="#enquiry">📝 {t.x.ctaQuote}</a>
        <a className="btn g" target="_blank" rel="noopener noreferrer"
           href={`https://wa.me/${PHONE}`}>💬 {t.x.ctaWa}</a>
      </div>
    </header>
  )
}
