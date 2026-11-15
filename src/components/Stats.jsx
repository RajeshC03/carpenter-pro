import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data/content'

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / 1500, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <b ref={ref}>{n}{suffix}</b>
}

export default function Stats({ t }) {
  return (
    <div className="stats">
      {STATS.map(([n, s], i) => (
        <div className="stat reveal" key={i} style={{ '--d': i * 100 + 'ms' }}>
          <Counter to={n} suffix={s} />
          <span>{t.x.stats[i]}</span>
        </div>
      ))}
    </div>
  )
}
