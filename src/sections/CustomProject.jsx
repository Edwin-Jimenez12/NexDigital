import { CircleCheckBig, Puzzle } from 'lucide-react'
import { customProject } from '../data/plans'
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '../config/whatsapp'
import Button from '../components/Button'

export default function CustomProject() {
  return (
    <section id="personalizado" aria-labelledby="personalizado-title" className="py-10">
      <div className="container-x">
        <div className="reveal grid gap-8 rounded-3xl border border-snow/10 bg-gradient-to-br from-panel-2 to-night p-8 sm:p-10 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-nex/15 text-nex">
              <Puzzle aria-hidden="true" className="size-7" />
            </span>
            <div className="grid gap-2">
              <h2 id="personalizado-title" className="font-host text-3xl font-bold text-white">{customProject.title}</h2>
              <p className="text-ash/75">{customProject.text}</p>
            </div>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {customProject.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-snow/85">
                <CircleCheckBig aria-hidden="true" className="size-4 shrink-0 text-nex" /> {f}
              </li>
            ))}
          </ul>
          <Button href={createWhatsAppLink(WHATSAPP_MESSAGES.custom)}>Cotización personalizada</Button>
        </div>
      </div>
    </section>
  )
}
