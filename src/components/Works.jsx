import { useState } from 'react'
import { WORKS } from '../data/content'

// The last 3 items in WORKS are mortar work; the rest are carpentry.
const isMortar = (i) => i >= WORKS.length - 3

export default function Works({ t, lang }) {
  const [tab, setTab] = useState('all')
  const tabs = [['all', t.x.all], ['carp', t.x.carp], ['mortar', t.x.mortar]]
  return (
    <section id="works">
      <h2 className="reveal">{t.works}</h2>
      <div className="tabs">
        {tabs.map(([k, label]) => (
          <button key={k} className={'tab' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>
      <div className="grid">
        {WORKS.map((w, i) => {
          const show = tab === 'all' || (tab === 'mortar') === isMortar(i)
          return show && (
            <div className="card pop" key={i} style={{ '--d': (i % 4) * 70 + 'ms' }}>
              <div className="ic">{w[0]}</div>
              <h3>{lang === 'kn' ? w[1] : w[2]}</h3>
              <div className="note">{lang === 'kn' ? w[2] : w[1]}</div>
              <div className="price">{t.rate}: {w[3]}</div>
            </div>
          )
        })}
      </div>
      <p className="blink-note">{t.worksNote}</p>
    </section>
  )
}
