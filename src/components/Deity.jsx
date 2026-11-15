import { useState } from 'react'

// Shows /images/<file>; if the picture is missing, shows the emoji instead.
export default function Deity({ file, fallback, name }) {
  const [bad, setBad] = useState(false)
  return (
    <div className="god">
      <div className="orb">
        <span className="ring" />
        {bad ? fallback : <img src={`/images/${file}`} alt={name} onError={() => setBad(true)} />}
      </div>
      <p>{name}</p>
    </div>
  )
}
