import { useState } from 'react'
import { CircleCheck, Minus } from 'lucide-react'
import { comparison, plans } from '../data/plans'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'

function Value({ value }) {
  if (value === true) return <CircleCheck aria-label="Incluido" className="mx-auto size-5 text-nex" />
  if (value === false) return <Minus aria-label="No incluido" className="mx-auto size-4 text-snow/25" />
  return <span>{value}</span>
}

/* Comparativa: Tabla en escritorio con columna resaltable y vista por plan en móvil. */
export default function Comparison() {
  const [selected, setSelected] = useState('growth')
  const plan = plans.find((p) => p.id === selected)

  return (
    <section aria-labelledby="comparativa-title" className="py-20">
      <div className="container-x grid gap-10">
        <SectionHeader id="comparativa-title" eyebrow="Comparativa" title="Compara los planes" intro="Selecciona un plan para resaltarlo." />

        <div role="radiogroup" aria-label="Plan a resaltar" className="flex flex-wrap gap-2">
          {plans.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={selected === p.id}
              onClick={() => setSelected(p.id)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                selected === p.id ? 'border-nex bg-nex text-white' : 'border-snow/20 text-snow/75 hover:border-snow/50'
              }`}
            >
              {p.name} · ${p.price}
            </button>
          ))}
        </div>

        {/* Móvil: Lista del plan seleccionado */}
        <ul key={selected} className="fade-swap grid rounded-2xl border border-snow/10 bg-panel lg:hidden">
          {comparison.map((row) => (
            <li key={row.name} className="flex items-center justify-between gap-4 border-b border-snow/10 px-5 py-3.5 text-sm last:border-b-0">
              <span className="flex items-center gap-3 text-snow/85">
                <Icon name={row.icon} className="size-4 shrink-0 text-nex" /> {row.name}
              </span>
              <span className="text-right font-medium text-white">
                <Value value={row[selected]} />
              </span>
            </li>
          ))}
          <li className="flex items-center justify-between px-5 py-4 font-host font-bold">
            <span>Precio</span>
            <span className="text-xl text-white">USD ${plan.price}</span>
          </li>
        </ul>

        {/* Escritorio: Tabla completa */}
        <div className="hidden overflow-x-auto rounded-2xl border border-snow/10 bg-panel lg:block">
          <table className="w-full min-w-[850px] border-collapse text-center text-sm">
            <thead>
              <tr className="border-b border-snow/10">
                <th className="px-5 py-4 text-left font-host font-semibold text-ash/70">Características</th>
                {plans.map((p) => (
                  <th key={p.id} className={`px-5 py-4 font-host text-base font-bold transition-colors ${selected === p.id ? 'bg-nex text-white' : 'text-white'}`}>
                    <button type="button" onClick={() => setSelected(p.id)} className="cursor-pointer">{p.name}</button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.name} className="border-b border-snow/10 last:border-b-0">
                  <th className="px-5 py-3.5 text-left font-normal text-snow/85">
                    <span className="flex items-center gap-3">
                      <Icon name={row.icon} className="size-4 shrink-0 text-nex" /> {row.name}
                    </span>
                  </th>
                  {plans.map((p) => (
                    <td key={p.id} className={`border-l border-snow/10 px-5 py-3.5 transition-colors ${selected === p.id ? 'bg-nex/10 text-white' : 'text-snow/75'}`}>
                      <Value value={row[p.id]} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-snow/15 font-host font-bold">
                <th className="px-5 py-4 text-left text-base">Precio</th>
                {plans.map((p) => (
                  <td key={p.id} className={`border-l border-snow/10 px-5 py-4 text-lg ${selected === p.id ? 'bg-nex/10 text-white' : 'text-white'}`}>
                    <span className="text-xs text-ash/60">USD </span>${p.price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
