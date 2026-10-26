import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/services'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import Button from '../components/Button'

/* Servicios: lista seleccionable a la izquierda y detalle animado a la derecha. */
export default function Services() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)
  const index = services.indexOf(current)

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-snow py-24 text-graphite lg:py-32">
      <div className="container-x grid gap-14">
        <SectionHeader id="servicios-title" eyebrow="Servicios" title="Soluciones web para impulsar tu presencia digital" light />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <ul role="tablist" aria-label="Servicios" className="grid gap-2">
            {services.map((s, i) => {
              const selected = s.id === active
              return (
                <li key={s.id} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls="panel-servicio"
                    onClick={() => setActive(s.id)}
                    onMouseEnter={() => setActive(s.id)}
                    className={`group flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      selected ? 'border-nex bg-white shadow-lg shadow-nex/10' : 'border-graphite/10 hover:border-graphite/30'
                    }`}
                  >
                    <span className="font-host text-sm font-semibold text-graphite/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors ${selected ? 'bg-nex text-white' : 'bg-nex/10 text-nex'}`}>
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <span className="flex-1 font-host text-lg font-bold sm:text-xl">{s.title}</span>
                    <ArrowRight aria-hidden="true" className={`size-5 transition-transform duration-300 ${selected ? 'translate-x-0 text-nex' : '-translate-x-2 opacity-0 group-hover:opacity-60'}`} />
                  </button>
                </li>
              )
            })}
          </ul>

          <div
            id="panel-servicio"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="relative overflow-hidden rounded-3xl bg-night p-8 text-snow sm:p-10"
          >
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-nex/30 blur-[90px]" aria-hidden="true" />
            <div key={current.id} className="fade-swap relative grid h-full content-between gap-10">
              <div className="flex items-start justify-between gap-6">
                <span className="grid size-16 place-items-center rounded-2xl bg-nex text-white shadow-lg shadow-nex/40">
                  <Icon name={current.icon} className="size-8" />
                </span>
                <span className="font-host text-7xl leading-none font-bold text-snow/10">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="grid gap-4">
                <h3 className="font-host text-3xl font-bold text-white sm:text-4xl">{current.title}</h3>
                <p className="max-w-md text-lg text-ash/85">{current.text}</p>
                <ul className="grid gap-2 pt-2">
                  {current.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-snow/90">
                      <Check aria-hidden="true" className="size-4 text-nex" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button href="/planes">
                  Ver planes y precios <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
