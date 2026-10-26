import { clients } from '../data/company'
import { services } from '../data/services'
import Marquee from '../components/Marquee'

export default function Clients() {
  return (
    <section aria-labelledby="clientes-title" className="bg-snow text-graphite">
      <Marquee
        items={services.map((s) => s.title)}
        className="border-y border-graphite/10 bg-nex py-4 font-host text-lg font-bold text-white sm:text-xl"
      />
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="reveal grid gap-3">
          <h2 id="clientes-title" className="font-host text-3xl font-bold tracking-tight">Empresas que confían en nosotros</h2>
          <p className="text-graphite/70">Trabajamos junto a marcas que apuestan por el diseño, la estrategia y la innovación para crecer en digital.</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {clients.map((c, i) => (
            <li
              key={c.name}
              className="reveal grid h-28 place-items-center rounded-2xl border border-graphite/10 bg-white p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-graphite/10"
              style={{ '--delay': `${i * 70}ms`, background: c.bg }}
            >
              <img src={c.logo} alt={c.name} loading="lazy" className="max-h-14 w-auto max-w-full object-contain grayscale-[30%] transition duration-300 hover:grayscale-0" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
