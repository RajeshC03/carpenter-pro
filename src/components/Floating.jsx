import { PHONE } from '../data/content'

// Always-visible WhatsApp + Call buttons (bottom-right)
export default function Floating() {
  return (
    <div className="fab">
      <a style={{ background: '#16a34a' }} target="_blank" rel="noopener noreferrer" href={`https://wa.me/${PHONE}`} aria-label="WhatsApp">💬</a>
      <a style={{ background: '#c2335a' }} href={`tel:+${PHONE}`} aria-label="Call">📞</a>
    </div>
  )
}
