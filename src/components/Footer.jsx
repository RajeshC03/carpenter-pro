import { PHONE, PHONE_SHOW, MAP_QUERY } from '../data/content'

export default function Footer({ t }) {
  const q = encodeURIComponent(MAP_QUERY)
  return (
    <footer className="reveal" id="visit">
      <img className="flogo" src="/images/logo.png" alt="" />
      <h3>{t.title}</h3>
      <div>📍 {t.address}</div>
      <div>📞 <a href={`tel:+${PHONE}`}>{PHONE_SHOW}</a></div>
      <div className="visit">
        <div className="visit-title"><span className="pin">📌</span> {t.visit}</div>
        <div className="map-frame">
          <iframe title="Shop location" loading="lazy" src={`https://www.google.com/maps?q=${q}&output=embed`} />
        </div>
        <div className="map-btns">
          <a className="btn g" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>🗺️ {t.viewMap}</a>
          <a className="btn b" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}>🧭 {t.directions}</a>
        </div>
      </div>
      <small>© {new Date().getFullYear()} {t.title}</small>
    </footer>
  )
}
