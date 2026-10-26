import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeader from '../components/SectionHeader'
import DeviceShowcase from '../components/mockups/DeviceShowcase'
import Button from '../components/Button'

/* Tarjeta de marca para proyectos que aún no tienen capturas. */
function BrandPanel({ name, logo, color, summary }) {
  return (
    <div
      className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border bg-black p-8"
      style={{ borderColor: `${color}40` }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 size-80 -translate-x-1/2 rounded-full blur-[110px]" style={{ background: `${color}40` }} aria-hidden="true" />
      <div className="relative grid justify-items-center gap-5 text-center">
        <img src={logo} alt={`Logo de ${name}`} className="h-24 w-auto sm:h-32" />
        <p className="font-host text-4xl font-bold text-white sm:text-5xl">{name}</p>
        <p className="font-host text-lg font-semibold" style={{ color }}>{summary.split('.')[0]}.</p>
      </div>
    </div>
  )
}

/* Proyectos: Selector a la izquierda y vista en Mac + teléfono a la derecha. */
export default function Projects() {
  const [active, setActive] = useState(projects[0].slug)
  const current = projects.find((p) => p.slug === active)

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="relative overflow-hidden bg-black py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 -left-40 size-[520px] rounded-full blur-[140px] transition-colors duration-700" style={{ background: `${current.color}33` }} aria-hidden="true" />
      <div className="container-x relative grid gap-14">
        <SectionHeader
          id="proyectos-title"
          eyebrow="Nuestras colaboraciones"
          title="Diseñamos experiencias digitales que marcan la diferencia"
          intro="Cada proyecto refleja nuestro compromiso con la calidad, el diseño moderno y soluciones que impulsan negocios reales."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="grid gap-6">
            <ul role="tablist" aria-label="Proyectos" className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:overflow-visible">
              {projects.map((p, i) => {
                const selected = p.slug === active
                return (
                  <li key={p.slug} role="presentation" className="shrink-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(p.slug)}
                      className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-300 lg:px-5 lg:py-4 ${
                        selected ? 'border-snow/25 bg-panel' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={`/images/proyectos/${p.slug}-icon.svg`} alt="" className="size-10 shrink-0 rounded-xl" />
                      <span className="grid">
                        <span className="font-host text-lg font-bold whitespace-nowrap text-white lg:text-2xl">{p.name}</span>
                        <span className="hidden text-xs text-ash/60 lg:block">{p.category}</span>
                      </span>
                      <span className="ml-auto hidden font-host text-sm text-snow/30 lg:block">{String(i + 1).padStart(2, '0')}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div key={current.slug} className="fade-swap grid gap-4 rounded-2xl border border-snow/10 bg-panel/60 p-6">
              <p className="text-ash/85">{current.summary}</p>
              {current.note && <p className="text-xs font-semibold tracking-wide text-nex uppercase">{current.note}</p>}
              <ul className="flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <li key={t} className="rounded-full border border-snow/15 px-3 py-1 text-xs text-snow/80">{t}</li>
                ))}
              </ul>
              <div>
                <Button href={current.url} variant="outline">
                  Visitar página <ArrowUpRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          <div key={current.slug + '-mock'} className="fade-swap min-w-0">
            {current.screenshots === false ? <BrandPanel {...current} /> : <DeviceShowcase {...current} />}
          </div>
        </div>
      </div>
    </section>
  )
}
