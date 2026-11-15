import { useEffect, useState } from 'react'

// Rotating quotes. Edit them in src/data/content.js
export default function Quotes({ t, lang }) {
  const [qi, setQi] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setQi((x) => (x + 1) % t.q.length), 4500)
    return () => clearInterval(id)
  }, [t.q.length])

  const q = t.q[qi]
  return (
    <section className="quotes">
      <h2 className="reveal">{t.quotes}</h2>
      <div className="q" key={qi + lang}>
        “{q[0]}”
        {q[1] && <small>{q[1]}</small>}
      </div>
      <div className="dots">
        {t.q.map((_, i) => (
          <span key={i} className={i === qi ? 'on' : ''} onClick={() => setQi(i)} />
        ))}
      </div>
    </section>
  )
}
