/*
  Barra de estado de iPhone (hora, notch, señal, wifi y batería) dibujada en SVG
  para que escale con el tamaño del teléfono del mockup.
  `bg` debe coincidir con el color superior de la captura móvil.
*/
export default function PhoneStatusBar({ bg = '#000000', fg = '#FFFFFF', notch = '#060D17' }) {
  return (
    <svg viewBox="0 0 390 47" className="block w-full" aria-hidden="true">
      <rect width="390" height="47" fill={bg} />
      {/* Notch */}
      <path d="M118 0h154v14c0 15-10 26-26 26h-102c-16 0-26-11-26-26z" fill={notch} />
      <g fill={fg}>
        <text x="58" y="31" fontFamily="-apple-system, 'SF Pro Text', 'Geist', system-ui, sans-serif" fontSize="17" fontWeight="600" textAnchor="middle">
          9:41
        </text>
        {/* Señal */}
        <rect x="292" y="24" width="3.5" height="6" rx="1" />
        <rect x="297.5" y="21" width="3.5" height="9" rx="1" />
        <rect x="303" y="18" width="3.5" height="12" rx="1" />
        <rect x="308.5" y="15" width="3.5" height="15" rx="1" />
        {/* Wifi */}
        <path d="M327 29.5l-3.2-3.4a4.6 4.6 0 0 1 6.4 0z" />
        <path d="M321.6 23.8l-2.2-2.3a10.8 10.8 0 0 1 15.2 0l-2.2 2.3a7.6 7.6 0 0 0-10.8 0z" />
        <path d="M317.2 19.2l-2.2-2.3a17 17 0 0 1 24 0l-2.2 2.3a13.9 13.9 0 0 0-19.6 0z" />
        {/* Batería */}
        <rect x="344" y="16.5" width="24" height="12" rx="3.5" fill="none" stroke={fg} strokeOpacity="0.45" strokeWidth="1.2" />
        <rect x="346" y="18.5" width="20" height="8" rx="2" />
        <path d="M369.6 20.5v4c1-.3 1.6-1.1 1.6-2s-.6-1.7-1.6-2z" fillOpacity="0.45" />
      </g>
    </svg>
  )
}
