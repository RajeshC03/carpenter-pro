// Falling golden sawdust sparkles (pure CSS animation)
export default function Dust() {
  return (
    <div className="dust" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <i
          key={i}
          style={{
            left: ((i * 37) % 100) + '%',
            animationDelay: (i % 4) * 1.3 + 's',
            animationDuration: 8 + (i % 5) * 2 + 's',
          }}
        />
      ))}
    </div>
  )
}
