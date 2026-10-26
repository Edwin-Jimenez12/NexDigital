import { useMagnetic } from '../hooks/useMagnetic'

const variants = {
  primary: 'bg-nex text-white hover:bg-white hover:text-night',
  outline: 'border border-snow/30 text-snow hover:border-white hover:bg-white hover:text-night',
  dark: 'bg-night text-snow hover:bg-nex',
  light: 'border border-graphite/20 text-graphite hover:border-graphite hover:bg-graphite hover:text-snow',
  athlon: 'bg-athlon text-night hover:bg-white',
}

/* Botón o enlace con efecto magnético. Con href se renderiza como <a>. */
export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const ref = useMagnetic(0.22)
  const Tag = href ? 'a' : 'button'
  const external = href?.startsWith('http')
  return (
    <Tag
      ref={ref}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 font-host text-sm font-semibold transition-[background-color,color,border-color,transform] duration-300 ease-out ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
