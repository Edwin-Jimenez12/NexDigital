import Menu from '../components/Menu'
import Bottom from '../components/Bottom'
import PlanCards from '../sections/PlanCards'
import CustomProject from '../sections/CustomProject'
import Comparison from '../sections/Comparison'
import PlanFinder from '../sections/PlanFinder'

function Plans() {
  return (
    <>
      <Menu />
      <main>
        <section aria-labelledby="planes-title" className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
          <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-nex/20 blur-[120px]" aria-hidden="true" />
          <div className="container-x relative grid justify-items-center gap-5 text-center">
            <span className="hero-in eyebrow" style={{ '--i': 0 }}>Planes</span>
            <h1 id="planes-title" className="hero-in max-w-3xl font-host text-[clamp(2.6rem,6vw,4.8rem)] leading-[1] font-bold tracking-tight text-white" style={{ '--i': 1 }}>
              Elige el plan ideal para <span className="text-nex">tu negocio</span>
            </h1>
            <p className="hero-in max-w-2xl text-lg text-ash/80" style={{ '--i': 2 }}>
              Soluciones web diseñadas para adaptarse a cada etapa de tu negocio. Todos nuestros planes incluyen diseño profesional, tecnología moderna y un enfoque en resultados.
            </p>
          </div>
        </section>
        <PlanCards />
        <CustomProject />
        <Comparison />
        <PlanFinder />
      </main>
      <Bottom />
    </>
  )
}

export default Plans
