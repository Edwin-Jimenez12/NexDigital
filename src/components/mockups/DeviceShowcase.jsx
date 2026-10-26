import { MacDock, MacMenuBar, SafariToolbar } from './MacChrome'
import PhoneStatusBar from './PhoneStatusBar'

/* Captura en una Mac (barra de menús, Safari y Dock) con un teléfono superpuesto. */
export default function DeviceShowcase({ slug, name, url, statusBar }) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const base = `/images/proyectos/${slug}`
  return (
    <div className="group/mock relative pb-8 sm:pr-12">
      <div className="overflow-hidden rounded-xl border border-black/60 bg-panel shadow-2xl shadow-black/50 transition-transform duration-500 group-hover/mock:-translate-y-1">
        <MacMenuBar />
        <SafariToolbar host={host} logo={`${base}-icon.svg`} title={name} />
        <div className="relative aspect-[1440/656] overflow-hidden">
          <img src={`${base}-desktop.webp`} alt={`Captura de escritorio de ${name}`} loading="lazy" className="h-full w-full object-cover object-top" />
          <MacDock />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 hidden w-[19%] min-w-20 overflow-hidden rounded-[1.4rem] border-4 border-night bg-panel shadow-2xl shadow-black/60 ring-1 ring-snow/15 transition-transform duration-500 group-hover/mock:-translate-y-3 sm:block">
        <div className="flex aspect-[9/19.5] flex-col">
          <PhoneStatusBar {...statusBar} />
          <img src={`${base}-mobile.webp`} alt={`Captura móvil de ${name}`} loading="lazy" className="min-h-0 w-full flex-1 object-cover object-top" />
        </div>
      </div>
    </div>
  )
}
