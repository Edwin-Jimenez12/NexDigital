import { FaApple } from 'react-icons/fa6'
import { Code2, Compass, Folder, Mail, MessageCircle, Music, PenTool, Settings, Trash2 } from 'lucide-react'

/*
  Piezas de macOS dibujadas en SVG para el mockup de escritorio.
  Todas usan un viewBox de 1440 px de ancho, igual que las capturas, para escalar juntas.
*/

const font = "-apple-system, 'SF Pro Text', 'Geist', system-ui, sans-serif"

/* Barra de menús superior de macOS */
export function MacMenuBar({ app = 'Safari' }) {
  const menus = ['Archivo', 'Edición', 'Visualización', 'Historial', 'Marcadores', 'Ventana', 'Ayuda']
  let x = 112
  return (
    <svg viewBox="0 0 1440 26" className="block w-full" aria-hidden="true">
      <rect width="1440" height="26" fill="#151718" />
      <FaApple x="18" y="5" width="16" height="16" color="#F2F2F2" />
      <g fontFamily={font} fontSize="13" fill="#F2F2F2">
        <text x="48" y="18" fontWeight="700">{app}</text>
        {menus.map((m) => {
          const t = <text key={m} x={x} y="18">{m}</text>
          x += m.length * 7 + 20
          return t
        })}
        <text x="1422" y="18" textAnchor="end">vie 9:41</text>
      </g>
      {/* Wifi y batería */}
      <g fill="#F2F2F2">
        <path d="M1318 18.5l-2.6-2.7a3.7 3.7 0 0 1 5.2 0z" />
        <path d="M1313.6 13.9l-1.8-1.9a8.7 8.7 0 0 1 12.4 0l-1.8 1.9a6.1 6.1 0 0 0-8.8 0z" />
        <path d="M1310 10.2l-1.8-1.9a13.8 13.8 0 0 1 19.6 0l-1.8 1.9a11.2 11.2 0 0 0-16 0z" />
        <rect x="1334" y="8" width="22" height="11" rx="3" fill="none" stroke="#F2F2F2" strokeOpacity="0.5" strokeWidth="1.1" />
        <rect x="1336" y="10" width="16" height="7" rx="1.5" />
        <path d="M1357.5 11.5v4c.9-.3 1.4-1 1.4-2s-.5-1.7-1.4-2z" fillOpacity="0.5" />
      </g>
    </svg>
  )
}

/* Barra de herramientas de Safari: Semáforo, navegación, pestaña con favicon y dirección */
export function SafariToolbar({ host, logo, title }) {
  return (
    <svg viewBox="0 0 1440 52" className="block w-full" aria-hidden="true">
      <rect width="1440" height="52" fill="#2A2C2F" />
      <rect y="51" width="1440" height="1" fill="#0B0C0D" />
      <circle cx="24" cy="26" r="6.5" fill="#FF5F57" />
      <circle cx="46" cy="26" r="6.5" fill="#FEBC2E" />
      <circle cx="68" cy="26" r="6.5" fill="#28C840" />
      <g fill="none" stroke="#9A9DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="104" y="17" width="22" height="18" rx="3.5" />
        <path d="M112 17v18" />
        <path d="M156 19l-7 7 7 7" />
        <path d="M178 19l7 7-7 7" strokeOpacity="0.45" />
      </g>

      {/* Campo de dirección */}
      <rect x="430" y="10" width="580" height="32" rx="9" fill="#3B3E42" />
      {logo ? (
        <image href={logo} x={720 - host.length * 3.9 - 34} y="18" width="16" height="16" preserveAspectRatio="xMidYMid meet" />
      ) : (
        <path d={`M${720 - host.length * 3.9 - 28} 25v-3a4 4 0 0 1 8 0v3`} fill="none" stroke="#C9CBCE" strokeWidth="1.6" />
      )}
      <text x="720" y="31" textAnchor="middle" fontFamily={font} fontSize="14" fill="#E6E7E8">
        {host}
      </text>
      <path d="M990 20a6 6 0 1 1-1.8 4.3M990 16v4h-4" fill="none" stroke="#9A9DA1" strokeWidth="1.8" strokeLinecap="round" />

      <g fill="none" stroke="#9A9DA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1340 30v-14M1334 21l6-6 6 6M1333 25v9h14v-9" />
        <path d="M1380 19v14M1373 26h14" />
        <rect x="1408" y="18" width="14" height="14" rx="3" />
        <path d="M1404 22v-5a3 3 0 0 1 3-3h10" />
      </g>
      <title>{title}</title>
    </svg>
  )
}

const dockApps = [
  { Icon: Folder, from: '#5AC8FA', to: '#1E7CF2' },
  { Icon: Compass, from: '#3EB6FF', to: '#0A6CF0', active: true },
  { Icon: Mail, from: '#68B8FF', to: '#2575F5' },
  { Icon: MessageCircle, from: '#6EE27A', to: '#25B33B' },
  { Icon: Music, from: '#FF6B81', to: '#F5304E' },
  { Icon: PenTool, from: '#B794FF', to: '#7B4DFF' },
  { Icon: Code2, from: '#4FA8F5', to: '#1565C0', active: true },
  { Icon: Settings, from: '#B5B8BD', to: '#6C7076' },
]

/* Dock de macOS flotando sobre la parte inferior de la pantalla */
export function MacDock() {
  const size = 46
  const gap = 10
  const pad = 10
  const width = pad * 2 + dockApps.length * (size + gap) + 18 + size
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[1.6%] left-1/2 -translate-x-1/2 overflow-hidden rounded-[9%/24%] border border-white/25 bg-white/20 shadow-lg shadow-black/30 backdrop-blur-md"
      style={{ width: `${(width / 1440) * 100}%` }}
    >
      <svg viewBox={`0 0 ${width} ${size + pad * 2}`} className="block w-full">
        <defs>
          {dockApps.map((a, i) => (
            <linearGradient key={i} id={`dock-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={a.from} />
              <stop offset="1" stopColor={a.to} />
            </linearGradient>
          ))}
        </defs>
        {dockApps.map(({ Icon, active }, i) => {
          const x = pad + i * (size + gap)
          return (
            <g key={i}>
              <rect x={x} y={pad - 2} width={size} height={size} rx="11" fill={`url(#dock-${i})`} />
              <Icon x={x + 11} y={pad + 9} width={size - 22} height={size - 22} color="#FFFFFF" strokeWidth={2.2} />
              {active && <circle cx={x + size / 2} cy={size + pad + 4} r="2" fill="#FFFFFF" fillOpacity="0.85" />}
            </g>
          )
        })}
        <rect x={pad + dockApps.length * (size + gap) + 4} y={pad + 4} width="1.5" height={size - 12} fill="#FFFFFF" fillOpacity="0.4" />
        <g transform={`translate(${pad + dockApps.length * (size + gap) + 18} 0)`}>
          <rect y={pad - 2} width={size} height={size} rx="11" fill="#E4E6E9" />
          <Trash2 x="11" y={pad + 9} width={size - 22} height={size - 22} color="#6B6F75" strokeWidth={2} />
        </g>
      </svg>
    </div>
  )
}
