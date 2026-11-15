export default function Process({ t }) {
  return (
    <section>
      <h2 className="reveal">{t.x.proc}</h2>
      <div className="steps">
        {t.x.steps.map(([title, desc], i) => (
          <div className="step reveal" key={i} style={{ '--d': i * 100 + 'ms' }}>
            <span className="num">{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
