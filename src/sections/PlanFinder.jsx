import { useState } from 'react'
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { advisorQuestions, plans } from '../data/plans'
import { createWhatsAppLink } from '../config/whatsapp'
import Button from '../components/Button'
import Icon from '../components/Icon'

const order = plans.map((p) => p.id)

/* Recomienda el plan más pequeño que cubre las páginas y extras elegidos. */
function recommend(answers) {
  const byPages = plans.find((p) => p.pages >= answers.pages)?.id ?? 'business'
  const byExtras = answers.extras
  return plans[Math.max(order.indexOf(byPages), order.indexOf(byExtras))]
}

/* Asistente de 3 pasos para elegir plan, con enlace a WhatsApp con el resumen. */
export default function PlanFinder({ id = 'asistente' }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const done = step >= advisorQuestions.length
  const question = advisorQuestions[step]

  const choose = (value) => {
    setAnswers((a) => ({ ...a, [question.id]: value }))
    setStep((s) => s + 1)
  }
  const reset = () => {
    setAnswers({})
    setStep(0)
  }

  const plan = done ? recommend(answers) : null
  const labelOf = (qid) => advisorQuestions.find((q) => q.id === qid).options.find((o) => o.value === answers[qid])?.label
  const message = plan
    ? `Hola, usé el asistente de planes de su página. Necesito ${labelOf('pages')} páginas, quiero incluir: ${labelOf('extras')}. Mi negocio: ${labelOf('stage')}. Me recomendó el Plan ${plan.name}.`
    : ''

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-24 lg:py-32">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-nex p-8 text-white sm:p-12 lg:p-14">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid content-start gap-4">
              <span className="font-host text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">Asistente de planes</span>
              <h2 id={`${id}-title`} className="font-host text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl">¿No estás seguro de qué plan elegir?</h2>
              <p className="text-white/85">Responde 3 preguntas y te recomendamos la mejor opción para tu negocio. Luego puedes hablar con un asesor con tu resumen listo.</p>
              {!done && (
                <div className="flex gap-1.5 pt-2" aria-hidden="true">
                  {advisorQuestions.map((q, i) => (
                    <span key={q.id} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? 'bg-white' : 'bg-white/25'}`} />
                  ))}
                </div>
              )}
            </div>

            <div className="min-h-[300px] rounded-3xl bg-night p-6 text-snow shadow-2xl shadow-black/30 sm:p-8">
              {!done ? (
                <div key={question.id} className="fade-swap grid gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-ash/60">Pregunta {step + 1} de {advisorQuestions.length}</p>
                    {step > 0 && (
                      <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex cursor-pointer items-center gap-1 text-xs text-ash/70 hover:text-white">
                        <ArrowLeft aria-hidden="true" className="size-3.5" /> Atrás
                      </button>
                    )}
                  </div>
                  <h3 className="font-host text-2xl font-bold text-white">{question.question}</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {question.options.map((o) => (
                      <li key={o.label}>
                        <button
                          type="button"
                          onClick={() => choose(o.value)}
                          className={`group flex h-full w-full cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-nex hover:bg-nex/10 ${
                            answers[question.id] === o.value ? 'border-nex bg-nex/10' : 'border-snow/15'
                          }`}
                        >
                          {o.label}
                          <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-nex opacity-0 transition-opacity group-hover:opacity-100" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="fade-swap grid gap-5">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-nex uppercase">
                    <Sparkles aria-hidden="true" className="size-4" /> Te recomendamos
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-nex/15 text-nex">
                      <Icon name={plan.icon} className="size-7" />
                    </span>
                    <div>
                      <h3 className="font-host text-3xl font-bold text-white">Plan {plan.name}</h3>
                      <p className="text-sm text-ash/70">{plan.audience}</p>
                    </div>
                    <p className="ml-auto font-host text-3xl font-bold text-white">
                      <span className="text-sm font-medium text-ash/60">USD </span>${plan.price}
                    </p>
                  </div>
                  <p className="text-sm text-ash/75">Entrega: {plan.delivery}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button href={createWhatsAppLink(message)}>
                      Hablar con un asesor <FaWhatsapp aria-hidden="true" className="size-4" />
                    </Button>
                    <Button href="/planes#planes" variant="outline">Ver detalle</Button>
                    <button type="button" onClick={reset} className="inline-flex cursor-pointer items-center gap-1.5 px-2 text-sm text-ash/70 hover:text-white">
                      <RotateCcw aria-hidden="true" className="size-4" /> Empezar de nuevo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
