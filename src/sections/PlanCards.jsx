import { useState } from 'react'
import { ChevronDown, CircleCheckBig, Clock5 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { paymentNote, plans } from '../data/plans'
import { createWhatsAppLink } from '../config/whatsapp'
import Icon from '../components/Icon'
import { useSpotlight } from '../hooks/useSpotlight'

function PlanCard({ plan, index }) {
  const [open, setOpen] = useState(false)
  const onPointerMove = useSpotlight()
  const featured = plan.featured
  return (
    <article
      onPointerMove={onPointerMove}
      className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 sm:p-7 ${
        featured ? 'border-nex bg-nex/10' : 'border-snow/10 bg-panel hover:border-snow/30'
      }`}
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className="card-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      {featured && (
        <span className="absolute top-5 right-5 rounded-full bg-nex px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">Recomendado</span>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative grid cursor-pointer gap-4 text-left md:pointer-events-none md:cursor-default"
      >
        <span className="grid size-14 place-items-center rounded-2xl bg-nex/15 text-nex">
          <Icon name={plan.icon} className="size-7" />
        </span>
        <div>
          <h3 className="font-host text-2xl font-bold text-white">Plan {plan.name}</h3>
          <p className="text-sm text-ash/70">{plan.audience}</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <p className="font-host text-5xl leading-none font-bold text-white">
            <span className="align-top text-base font-semibold text-ash/70">USD </span>${plan.price}
          </p>
          <ChevronDown aria-hidden="true" className={`size-6 text-nex transition-transform md:hidden ${open ? 'rotate-180' : ''}`} />
        </div>
        <p className="text-xs text-ash/60">{paymentNote}</p>
      </button>

      <div className={`relative grid transition-[grid-template-rows,opacity] duration-500 md:grid-rows-[1fr] md:opacity-100 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="grid gap-5 pt-6">
            <ul className="grid gap-3 border-t border-snow/10 pt-6">
              {plan.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-snow/85">
                  <CircleCheckBig aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-nex" /> {b}
                </li>
              ))}
            </ul>
            <p className="flex gap-3 rounded-xl bg-nex/10 p-3 text-xs text-snow/85">
              <Clock5 aria-hidden="true" className="size-4 shrink-0 text-nex" />
              <span>
                <b className="font-semibold">Tiempo estimado de entrega:</b> {plan.delivery}
              </span>
            </p>
          </div>
        </div>
      </div>

      <a
        href={createWhatsAppLink(`Hola, quisiera contratar el Plan ${plan.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full font-host text-sm font-semibold transition-colors md:mt-auto md:translate-y-0 ${
          featured ? 'bg-nex text-white hover:bg-white hover:text-night' : 'border border-snow/20 text-white hover:border-nex hover:bg-nex'
        }`}
      >
        Elegir Plan {plan.name} <FaWhatsapp aria-hidden="true" className="size-4" />
      </a>
    </article>
  )
}

export default function PlanCards() {
  return (
    <section id="planes" aria-label="Planes" className="pb-10">
      <div className="container-x grid gap-4 md:grid-cols-2 xl:grid-cols-4 [&>article]:md:min-h-full">
        {plans.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} index={i} />
        ))}
      </div>
    </section>
  )
}
