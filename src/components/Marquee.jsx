/* Cinta en movimiento continuo; el contenido se duplica para que el bucle no tenga cortes. */
export default function Marquee({ items, className = '' }) {
  const row = (hidden) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap">
          {item}
          <span aria-hidden="true" className="size-2 rotate-45 bg-nex" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
