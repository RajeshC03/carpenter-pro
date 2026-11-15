import { useState } from 'react'
import { PHONE } from '../data/content'

// Enquiry form -> WhatsApp / SMS / Call
export default function Enquiry({ t }) {
  const [f, setF] = useState({ name: '', mobile: '', place: '', mode: 'Indoor', type: 'Carpentry', det: '' })
  const [err, setErr] = useState(false)

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const ok = f.name.trim() && f.place.trim() && /^\d{10}$/.test(f.mobile.trim())
  const msg = `New Enquiry / ಹೊಸ ವಿಚಾರಣೆ\nName: ${f.name}\nMobile: ${f.mobile}\nPlace: ${f.place}\nMode: ${f.mode}\nType: ${f.type}\nDetails: ${f.det}`
  const guard = (e) => {
    if (!ok) { e.preventDefault(); setErr(true) } else setErr(false)
  }

  const radio = (k, v, label) => (
    <label>
      <input type="radio" name={k} checked={f[k] === v} onChange={() => setF({ ...f, [k]: v })} />
      {label}
    </label>
  )

  return (
    <section id="enquiry">
      <h2 className="reveal">{t.enq}</h2>
      <form className="reveal" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div>
            <label>{t.name}</label>
            <input value={f.name} onChange={set('name')} />
          </div>
          <div>
            <label>{t.mobile}</label>
            <input
              value={f.mobile}
              inputMode="numeric"
              maxLength={10}
              onChange={(e) => setF({ ...f, mobile: e.target.value.replace(/\D/g, '') })}
            />
          </div>
        </div>

        <label>{t.place}</label>
        <input value={f.place} onChange={set('place')} />

        <label>{t.mode}</label>
        <div className="opt">
          {radio('mode', 'Indoor', t.indoor)}
          {radio('mode', 'Outdoor', t.outdoor)}
        </div>

        <label>{t.type}</label>
        <div className="opt">
          {radio('type', 'Carpentry', t.carp)}
          {radio('type', 'Mortar', t.mortar)}
        </div>

        <label>{t.det}</label>
        <textarea rows={4} value={f.det} onChange={set('det')} />

        {err && <div className="err">{t.err}</div>}

        <div className="btns">
          <a className="btn g" target="_blank" rel="noopener noreferrer" onClick={guard}
             href={`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`}>💬 {t.wa}</a>
          <a className="btn b" onClick={guard}
             href={`sms:+${PHONE}${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?'}body=${encodeURIComponent(msg)}`}>✉️ {t.sms}</a>
          <a className="btn" href={`tel:+${PHONE}`}>📞 {t.call}</a>
        </div>
      </form>
    </section>
  )
}
