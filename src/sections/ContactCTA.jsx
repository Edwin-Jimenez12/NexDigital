import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { company } from '../data/company'
import { useMagnetic } from '../hooks/useMagnetic'

export default function ContactCTA() {
  const circleRef = useMagnetic(0.35)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(company.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.getSelection()?.selectAllChildren(document.getElementById('cta-email'))
    }
  }

  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden border-t border-snow/10 py-24 lg:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="container-x relative grid gap-10">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <h2 id="cta-title" className="max-w-4xl font-host text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-bold tracking-tight text-white">
            ¿Listo para llevar tu negocio al <span className="text-nex">siguiente nivel</span>?
          </h2>
          <a
            ref={circleRef}
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-40 shrink-0 place-items-center rounded-full bg-nex text-center font-host font-semibold text-white transition-[background-color,color,transform] duration-300 ease-out hover:bg-white hover:text-night sm:size-48"
          >
            <span className="grid justify-items-center gap-2">
              <FaWhatsapp aria-hidden="true" className="size-6" /> Hablemos
            </span>
          </a>
        </div>
        <p className="max-w-2xl text-lg text-ash/80">Elige el plan ideal para ti y comencemos a construir tu página web profesional hoy mismo.</p>
        <div className="flex flex-wrap items-center gap-3 border-t border-snow/10 pt-8">
          <span id="cta-email" className="font-host text-2xl font-bold break-all text-white select-all sm:text-3xl">{company.email}</span>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-snow/20 px-4 text-sm transition-colors hover:border-nex hover:text-nex"
          >
            {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
            <span aria-live="polite">{copied ? 'Correo copiado' : 'Copiar correo'}</span>
          </button>
          <span className="text-sm text-ash/60">· {company.phone} · {company.schedule}</span>
        </div>
      </div>
    </section>
  )
}
