import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import SiteBuilder from './SiteBuilder'
import { useSpotlight } from '../hooks/useSpotlight'

const words = ['impulsan', 'hacen crecer', 'dan confianza a']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const onPointerMove = useSpotlight()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="inicio" aria-labelledby="hero-title" onPointerMove={onPointerMove} className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" aria-hidden="true" />
      <div className="spotlight pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-nex/20 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="grid gap-7">
          <span className="hero-in eyebrow" style={{ '--i': 0 }}>Desarrollo web profesional</span>
          <h1 id="hero-title" className="hero-in font-host text-[clamp(2.7rem,6.4vw,5.2rem)] leading-[1] font-bold tracking-tight text-white" style={{ '--i': 1 }}>
            Páginas web que{' '}
            <span className="relative inline-block text-nex">
              <span key={index} className="word-in inline-block">{words[index]}</span>
            </span>{' '}
            tu negocio
          </h1>
          <p className="hero-in max-w-xl text-lg text-ash/85" style={{ '--i': 2 }}>
            Diseñamos y desarrollamos sitios web modernos, rápidos y adaptados a todos los dispositivos para que tu negocio crezca en internet.
          </p>
          <div className="hero-in flex flex-wrap gap-3" style={{ '--i': 3 }}>
            <Button href="/planes">
              Ver planes y precios <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href="/#proyectos" variant="outline">
              Ver proyectos
            </Button>
          </div>
          <ul className="hero-in flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash/70" style={{ '--i': 4 }}>
            <li>Desde USD $99</li>
            <li>Prototipo antes de desarrollar</li>
            <li>Pago 50% y 50%</li>
          </ul>
        </div>

        <div className="hero-in" style={{ '--i': 3 }}>
          <SiteBuilder />
        </div>
      </div>
    </section>
  )
}
