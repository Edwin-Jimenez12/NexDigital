import { useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'

/*
  Demo interactiva del hero: El visitante elige un tipo de negocio y un dispositivo
  y la mini página de ejemplo se transforma. Son ejemplos, no clientes reales.
*/
const presets = [
  {
    id: 'restaurante',
    label: 'Restaurante',
    brand: 'Sabor Criollo',
    title: 'Cocina panameña con sabor de casa',
    cta: 'Reservar mesa',
    accent: '#E4572E',
    bg: '#FFF7F0',
    ink: '#2B1A12',
    cards: ['Menú', 'Reservas', 'Ubicación'],
  },
  {
    id: 'barberia',
    label: 'Barbería',
    brand: 'Barbería Central',
    title: 'Tu mejor corte, sin esperas',
    cta: 'Agendar cita',
    accent: '#D4A24C',
    bg: '#141414',
    ink: '#F5F1E8',
    cards: ['Servicios', 'Galería', 'Horarios'],
  },
  {
    id: 'clinica',
    label: 'Clínica',
    brand: 'Clínica Vital',
    title: 'Cuidamos de tu salud y la de tu familia',
    cta: 'Agendar consulta',
    accent: '#12A594',
    bg: '#F2FBF9',
    ink: '#0F2E2A',
    cards: ['Especialidades', 'Doctores', 'Contacto'],
  },
  {
    id: 'tienda',
    label: 'Tienda',
    brand: 'Moda Istmo',
    title: 'La nueva colección ya llegó',
    cta: 'Ver catálogo',
    accent: '#8B5CF6',
    bg: '#F7F5FF',
    ink: '#1E1638',
    cards: ['Catálogo', 'Ofertas', 'Envíos'],
  },
]

function MiniSite({ preset, mobile }) {
  const { brand, title, cta, accent, bg, ink, cards } = preset
  return (
    <div key={preset.id + mobile} className="fade-swap flex h-full flex-col" style={{ background: bg, color: ink }}>
      <div className="flex items-center justify-between px-[6%] py-[4%]">
        <span className="font-host text-[clamp(10px,1.6vw,15px)] font-bold">{brand}</span>
        {mobile ? (
          <span className="grid gap-[3px]">
            <span className="block h-[2px] w-4 rounded" style={{ background: ink }} />
            <span className="block h-[2px] w-4 rounded" style={{ background: ink }} />
          </span>
        ) : (
          <span className="flex gap-3 text-[clamp(8px,1vw,11px)] opacity-70">
            {cards.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </span>
        )}
      </div>
      <div className={`grid flex-1 items-center gap-[5%] px-[6%] ${mobile ? '' : 'grid-cols-[1.2fr_1fr]'}`}>
        <div className="grid gap-[0.6em]">
          <p className={`font-host leading-[1.05] font-bold ${mobile ? 'text-[clamp(16px,4.6vw,24px)]' : 'text-[clamp(14px,2.6vw,30px)]'}`}>{title}</p>
          <span
            className="justify-self-start rounded-full px-[1.2em] py-[0.6em] text-[clamp(8px,1vw,12px)] font-semibold text-white"
            style={{ background: accent }}
          >
            {cta}
          </span>
        </div>
        <div
          className={`rounded-xl ${mobile ? 'aspect-[16/10]' : 'aspect-square'}`}
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}55)` }}
        />
      </div>
      <div className={`grid gap-[3%] px-[6%] pt-[4%] pb-[6%] ${mobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
        {cards.map((c) => (
          <div key={c} className="rounded-lg px-[8%] py-[6%] text-[clamp(8px,1vw,12px)] font-semibold" style={{ background: `${accent}18`, color: ink }}>
            <span className="mb-[0.4em] block h-[0.5em] w-[0.5em] rounded-full" style={{ background: accent }} />
            {c}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SiteBuilder() {
  const [presetId, setPresetId] = useState(presets[0].id)
  const [mobile, setMobile] = useState(false)
  const preset = presets.find((p) => p.id === presetId)

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Tipo de negocio" className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={p.id === presetId}
              onClick={() => setPresetId(p.id)}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                p.id === presetId ? 'border-nex bg-nex text-white' : 'border-snow/20 text-snow/75 hover:border-snow/50 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div role="radiogroup" aria-label="Dispositivo" className="flex rounded-full border border-snow/15 p-1">
          {[
            { value: false, label: 'Escritorio', Icon: Monitor },
            { value: true, label: 'Celular', Icon: Smartphone },
          ].map(({ value, label, Icon }) => (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={mobile === value}
              aria-label={label}
              onClick={() => setMobile(value)}
              className={`grid size-8 cursor-pointer place-items-center rounded-full transition-colors ${mobile === value ? 'bg-snow text-night' : 'text-snow/70 hover:text-white'}`}
            >
              <Icon aria-hidden="true" className="size-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid place-items-center">
        <div
          className={`overflow-hidden border border-snow/15 bg-panel shadow-2xl shadow-nex/20 transition-[width,border-radius] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobile ? 'w-[min(52%,240px)] rounded-[1.6rem] border-[6px] border-black' : 'w-full rounded-xl'
          }`}
        >
          {!mobile && (
            <div className="flex items-center gap-1.5 border-b border-snow/10 bg-panel-2 px-3 py-2">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
              <span className="mx-auto rounded-md bg-snow/10 px-6 py-0.5 text-[10px] text-snow/60">
                {preset.brand.toLowerCase().replace(/\s+/g, '')}.com
              </span>
            </div>
          )}
          <div className={mobile ? 'aspect-[9/17]' : 'aspect-[16/10]'}>
            <MiniSite preset={preset} mobile={mobile} />
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-ash/50">Ejemplo interactivo: Elige un tipo de negocio y un dispositivo.</p>
    </div>
  )
}
