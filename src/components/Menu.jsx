import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { company, nav } from '../data/company'
import { useScrolled } from '../hooks/useScrolled'
import Button from './Button'

function Menu() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        open ? 'bg-night' : scrolled ? 'border-b border-snow/10 bg-night/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Principal" className="container-x flex h-20 items-center justify-between gap-6">
        <a href="/#inicio" onClick={() => setOpen(false)} className="shrink-0">
          <img src="/logo.svg" alt="Nex Digital" className="hidden h-10 w-auto sm:block" />
          <img src="/n.svg" alt="Nex Digital" className="h-9 w-auto sm:hidden" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`group relative rounded-full px-3 py-2 font-host text-[15px] font-semibold transition-colors ${
                  item.label === 'AthlonX' ? 'text-athlon hover:text-white' : 'text-snow/75 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-nex transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={company.whatsapp} className="hidden sm:inline-flex">
            Hablemos <FaWhatsapp aria-hidden="true" className="size-4" />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-11 place-items-center rounded-full border border-snow/20 text-snow lg:hidden"
          >
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        className={`fixed inset-0 top-20 bg-night transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="container-x relative flex h-full flex-col justify-between pt-6 pb-10">
          <ul className="grid gap-1">
            {nav.map((item, i) => (
              <li
                key={item.label}
                className={`transition-[opacity,transform] duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1.5 font-host text-4xl font-bold tracking-tight ${item.label === 'AthlonX' ? 'text-athlon' : 'text-white'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="grid gap-4">
            <Button href={company.whatsapp} className="w-full">
              Hablemos por WhatsApp <FaWhatsapp aria-hidden="true" className="size-4" />
            </Button>
            <p className="text-center text-sm text-ash/60">{company.email}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menu
