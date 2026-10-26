import { ArrowUpRight, Check } from 'lucide-react'
import { athlonx } from '../data/athlonx'
import Button from '../components/Button'
import { useSpotlight } from '../hooks/useSpotlight'

/* AthlonX como empresa del grupo Nex Digital. */
export default function AthlonX() {
  const onPointerMove = useSpotlight()
  return (
    <section id="athlonx" aria-labelledby="athlonx-title" className="pt-24 lg:pt-32">
      <div className="container-x">
        <div
          onPointerMove={onPointerMove}
          className="reveal group relative overflow-hidden rounded-[2rem] border border-athlon/20 bg-[#070B07] p-8 sm:p-12 lg:p-16"
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'radial-gradient(420px circle at var(--x) var(--y), rgb(136 223 68 / 0.16), transparent 60%)' }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -right-24 -bottom-32 size-[420px] rounded-full bg-athlon/20 blur-[120px]" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-host text-xs font-semibold tracking-[0.22em] text-athlon uppercase">Una empresa de Nex Digital</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-athlon/30 bg-athlon/10 px-3 py-1 text-xs text-athlon">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={3} /> {athlonx.status}
                </span>
              </div>
              <h2 id="athlonx-title" className="font-host text-5xl leading-none font-bold tracking-tight text-white sm:text-7xl">
                {athlonx.name}
              </h2>
              <p className="font-host text-2xl font-semibold text-athlon sm:text-3xl">“{athlonx.motto}”</p>
              <p className="max-w-xl text-ash/80">{athlonx.description}</p>
              <div>
                <Button href={athlonx.url} variant="athlon">
                  Visitar AthlonX <ArrowUpRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>

            {/* Ecosistema: Nex Digital → AthlonX */}
            <div className="grid justify-items-center gap-4">
              <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-snow/10 bg-night/80 p-5 backdrop-blur">
                <img src="/n.svg" alt="" className="h-10 w-auto" />
                <div>
                  <p className="font-host font-bold text-white">Nex Digital</p>
                  <p className="text-xs text-ash/60">Desarrollo web profesional</p>
                </div>
              </div>
              <div className="relative h-16 w-px overflow-hidden bg-snow/10" aria-hidden="true">
                <span className="absolute inset-x-0 h-6 animate-[flow_2s_linear_infinite] bg-gradient-to-b from-transparent via-athlon to-transparent" />
              </div>
              <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-athlon/30 bg-black/70 p-5 shadow-lg shadow-athlon/10 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                <img src={athlonx.logo} alt="Logo de AthlonX" className="h-12 w-auto" />
                <div>
                  <p className="font-host font-bold text-white">{athlonx.name}</p>
                  <p className="text-xs text-athlon/80">{athlonx.motto}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
