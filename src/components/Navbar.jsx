import { PHONE } from '../data/content'

export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <img src="/images/logo.png" alt="Padmanarayana logo" />
        <span>{t.title}</span>
      </a>
      <ul>
        <li><a className="l" href="#works">{t.x.navWorks}</a></li>
        <li><a className="l" href="#enquiry">{t.x.navEnq}</a></li>
        <li><a className="l" href="#visit">{t.x.navLoc}</a></li>
      </ul>
      <div className="acts">
        <button className="lang" onClick={() => setLang(lang === 'kn' ? 'en' : 'kn')}>🌐 {t.lang}</button>
        <a className="btn callbtn" href={`tel:+${PHONE}`}>📞</a>
      </div>
    </nav>
  )
}
