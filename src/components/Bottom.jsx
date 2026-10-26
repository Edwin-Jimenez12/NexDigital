import { ArrowUpRight, Clock5, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { company, nav } from '../data/company'
import { plans } from '../data/plans'
import { athlonx } from '../data/athlonx'

function Bottom() {
  const year = new Date().getFullYear()
  const contacts = [
    { label: company.phone, icon: FaWhatsapp, href: company.whatsapp },
    { label: company.email, icon: Mail, href: company.emailLink },
    { label: company.location, icon: MapPin, href: company.mapLink },
    { label: company.schedule, icon: Clock5 },
  ]
  const social = [
    { label: 'Instagram', icon: FaInstagram, href: company.instagram },
    { label: 'Facebook', icon: FaFacebook, href: company.facebook },
    { label: 'WhatsApp', icon: FaWhatsapp, href: company.whatsapp },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-snow/10 bg-black font-inter text-snow">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="grid content-start gap-5">
          <img src="/logo.svg" alt="Nex Digital" className="h-11 w-auto self-start justify-self-start" />
          <p className="max-w-xs text-sm text-ash/70">{company.description}</p>
          <ul className="flex gap-2">
            {social.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-snow/15 transition-colors hover:border-nex hover:bg-nex"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-4">
          <h2 className="font-host text-lg font-bold">Planes</h2>
          <ul className="grid gap-2 text-sm text-ash/75">
            {plans.map((p) => (
              <li key={p.id}>
                <a href="/planes" className="hover:text-white">Plan {p.name}</a>
              </li>
            ))}
            <li>
              <a href="/planes#personalizado" className="hover:text-white">Proyecto personalizado</a>
            </li>
          </ul>
        </div>

        <div className="grid content-start gap-4">
          <h2 className="font-host text-lg font-bold">Navegación</h2>
          <ul className="grid gap-2 text-sm text-ash/75">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-4">
          <h2 className="font-host text-lg font-bold">Contacto</h2>
          <ul className="grid gap-3 text-sm text-ash/80">
            {contacts.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
                    <Icon aria-hidden="true" className="size-4 shrink-0 text-nex" /> {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="size-4 shrink-0 text-nex" /> {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-snow/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-ash/60">
          <p>© {year} Nex Digital. Todos los derechos reservados.</p>
          <a href={athlonx.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-athlon">
            AthlonX es una empresa de Nex Digital <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/terminos-y-condiciones" className="hover:text-white">Términos y condiciones</a>
            <a href="/politica-de-privacidad" className="hover:text-white">Política de privacidad</a>
            <span className="flex items-center gap-2">
              <span className="rounded bg-snow px-2 py-1.5"><img src="/images/yappy-color-landscape.svg" alt="Yappy" className="h-4 w-auto" /></span>
              <span className="rounded bg-snow px-2 py-1.5"><img src="/images/Paypal.svg" alt="PayPal" className="h-4 w-auto" /></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Bottom
