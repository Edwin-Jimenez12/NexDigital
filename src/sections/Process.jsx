import { useEffect, useRef, useState } from 'react'
import { process } from '../data/company'
import { paymentNote } from '../data/plans'
import SectionHeader from '../components/SectionHeader'

/* Proceso de trabajo con una línea que se llena según el avance del scroll. */
export default function Process() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const total = r.height + window.innerHeight * 0.4
      const value = (window.innerHeight * 0.7 - r.top) / total
      setProgress(Math.min(1, Math.max(0, value)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const reached = Math.round(progress * process.length)

  return (
    <section aria-labelledby="proceso-title" className="py-24 lg:py-32">
      <div className="container-x grid gap-14">
        <SectionHeader
          id="proceso-title"
          eyebrow="Cómo trabajamos"
          title="De la idea a tu sitio publicado"
          intro={`Un proceso claro, sin sorpresas. ${paymentNote}`}
        />
        <ol ref={ref} className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-snow/10 lg:block" />
          <span
            aria-hidden="true"
            className="absolute top-6 left-0 hidden h-px origin-left bg-nex transition-transform duration-300 lg:block"
            style={{ width: '100%', transform: `scaleX(${progress})` }}
          />
          <span aria-hidden="true" className="absolute top-0 bottom-0 left-6 w-px bg-snow/10 lg:hidden" />
          <span
            aria-hidden="true"
            className="absolute top-0 left-6 w-px origin-top bg-nex transition-transform duration-300 lg:hidden"
            style={{ height: '100%', transform: `scaleY(${progress})` }}
          />
          {process.map((step, i) => {
            const done = i < reached
            return (
              <li key={step.title} className="relative grid content-start grid-cols-[3rem_1fr] gap-5 lg:grid-cols-1">
                <span
                  className={`relative z-10 grid size-12 place-items-center rounded-full border font-host font-bold transition-colors duration-500 ${
                    done ? 'border-nex bg-nex text-white' : 'border-snow/20 bg-night text-snow/60'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="grid gap-2">
                  <h3 className="font-host text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ash/75">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
