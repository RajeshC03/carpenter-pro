import { WORKS } from '../data/content'

// Scrolling strip of services
export default function Marquee({ lang }) {
  return (
    <div className="marq">
      <div>
        {[0, 1].map((k) =>
          WORKS.map((w, i) => (
            <span key={k + '-' + i}>
              {w[0]} {lang === 'kn' ? w[1] : w[2]}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
