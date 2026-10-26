import { reasons } from '../data/company'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { useSpotlight } from '../hooks/useSpotlight'

export default function Reasons() {
  const onPointerMove = useSpotlight()
  return (
    <section id="conocenos" aria-labelledby="conocenos-title" className="py-24 lg:py-32">
      <div className="container-x grid gap-14">
        <SectionHeader
          id="conocenos-title"
          eyebrow="Conócenos"
          title="¿Por qué elegir Nex Digital?"
          intro="Combinamos diseño, tecnología y estrategia para crear sitios web que no solo se ven bien, sino que también generan resultados."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              onPointerMove={onPointerMove}
              className="reveal group relative grid content-start gap-5 overflow-hidden rounded-2xl border border-snow/10 bg-panel p-7 transition-colors duration-300 hover:border-nex/50"
              style={{ '--delay': `${i * 80}ms` }}
            >
              <div className="card-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="relative grid size-14 place-items-center rounded-xl bg-nex/15 text-nex transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Icon name={r.icon} className="size-7" />
              </span>
              <div className="relative grid gap-2">
                <h3 className="font-host text-xl font-bold text-white">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ash/75">{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
