/* Encabezado de sección con etiqueta, título y descripción opcional. */
export default function SectionHeader({ eyebrow, title, intro, id, light = false, center = false }) {
  return (
    <header className={`reveal grid gap-4 ${center ? 'justify-items-center text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className={`max-w-3xl font-host text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl ${light ? 'text-graphite' : 'text-white'}`}>
        {title}
      </h2>
      {intro && <p className={`max-w-2xl text-lg ${light ? 'text-graphite/70' : 'text-ash/80'}`}>{intro}</p>}
    </header>
  )
}
