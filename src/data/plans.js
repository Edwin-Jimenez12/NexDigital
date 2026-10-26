/* Planes y comparativa. Fuente única para la página de planes y el asistente. */
export const plans = [
  {
    id: 'launch',
    name: 'Launch',
    icon: 'Send',
    audience: 'Ideal para emprendedores',
    price: 99,
    pages: 2,
    delivery: '5 a 7 días hábiles después de la aprobación del prototipo.',
    benefits: [
      '1 sitio web de hasta 2 páginas.',
      'Adaptado para celulares, tablets y computadoras.',
      'Enlace a WhatsApp.',
      'Formulario de contacto.',
      'Enlaces a redes sociales.',
      'Publicación del sitio web.',
      '1 ronda de cambios después de entrega.',
    ],
  },
  {
    id: 'start',
    name: 'Start',
    icon: 'Rocket',
    audience: 'Ideal para pequeños negocios',
    price: 149,
    pages: 4,
    delivery: '7 a 10 días hábiles después de la aprobación del prototipo.',
    benefits: [
      'Todo lo del plan Launch.',
      '1 sitio web de hasta 4 páginas.',
      'Mapa de ubicación.',
      'Galería de imágenes.',
      'Hasta 2 rondas de cambios después de entrega.',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: 'ChartNoAxesCombined',
    audience: 'Ideal para negocios en crecimiento',
    price: 199,
    pages: 7,
    featured: true,
    delivery: '10 a 15 días después de la aprobación del prototipo.',
    benefits: [
      'Todo lo del plan Start.',
      '1 sitio web de hasta 7 páginas.',
      'Efectos visuales.',
      'Sección de preguntas frecuentes.',
      'Hasta 2 formularios de contacto.',
      'Optimización de velocidad.',
      'Hasta 3 rondas de cambios después de entrega.',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    icon: 'Gem',
    audience: 'Ideal para empresas consolidadas',
    price: 299,
    pages: 10,
    delivery: '2 a 3 semanas después de la aprobación del prototipo.',
    benefits: [
      'Todo lo del plan Growth.',
      '1 sitio web de hasta 10 páginas.',
      'Hasta 4 formularios.',
      'Mejor rendimiento y velocidad de carga.',
      'Hasta 4 rondas de cambios después de entrega.',
    ],
  },
]

export const paymentNote = 'Pago único: Abono de 50% y 50% al finalizar el proyecto.'

export const comparison = [
  { name: 'Sitio web', icon: 'Monitor', launch: 'Hasta 2 páginas', start: 'Hasta 4 páginas', growth: 'Hasta 7 páginas', business: 'Hasta 10 páginas' },
  { name: 'WhatsApp', icon: 'MessageCircle', launch: true, start: true, growth: true, business: true },
  { name: 'Formulario de contacto', icon: 'Mail', launch: '1', start: '1', growth: 'Hasta 2', business: 'Hasta 4' },
  { name: 'Redes sociales', icon: 'Share2', launch: true, start: true, growth: true, business: true },
  { name: 'Mapa de ubicación', icon: 'MapPin', launch: false, start: true, growth: true, business: true },
  { name: 'Galería de imágenes', icon: 'Images', launch: false, start: true, growth: true, business: true },
  { name: 'Efectos visuales', icon: 'Sparkles', launch: false, start: false, growth: true, business: true },
  { name: 'Preguntas frecuentes', icon: 'CircleHelp', launch: false, start: false, growth: true, business: true },
  { name: 'Optimización de velocidad', icon: 'Gauge', launch: false, start: false, growth: true, business: true },
  { name: 'Rondas de cambios', icon: 'RefreshCcw', launch: '1', start: '2', growth: '3', business: '4' },
  { name: 'Tiempo de entrega', icon: 'Clock3', launch: '5 a 7 días', start: '7 a 10 días', growth: '10 a 15 días', business: '2 a 3 semanas' },
]

export const customProject = {
  title: 'Proyecto personalizado',
  text: 'Para proyectos que requieran funcionalidades específicas o un desarrollo fuera del alcance de los planes anteriores.',
  features: [
    'Paneles administrativos',
    'Sistemas internos',
    'Gestión de usuarios',
    'Funcionalidades desarrolladas a medida',
    'Integraciones con servicios externos',
  ],
}

/*
  Asistente para elegir plan: cada respuesta suma "páginas" y requisitos;
  se recomienda el plan más pequeño que los cubre.
*/
export const advisorQuestions = [
  {
    id: 'pages',
    question: '¿Cuántas secciones o páginas necesita tu sitio?',
    options: [
      { label: '1 o 2', value: 2 },
      { label: '3 o 4', value: 4 },
      { label: '5 a 7', value: 7 },
      { label: '8 a 10', value: 10 },
    ],
  },
  {
    id: 'extras',
    question: '¿Qué más te gustaría incluir?',
    options: [
      { label: 'Lo básico: WhatsApp y redes', value: 'launch' },
      { label: 'Mapa y galería de imágenes', value: 'start' },
      { label: 'Efectos visuales y preguntas frecuentes', value: 'growth' },
      { label: 'Varios formularios y máximo rendimiento', value: 'business' },
    ],
  },
  {
    id: 'stage',
    question: '¿En qué etapa está tu negocio?',
    options: [
      { label: 'Estoy empezando', value: 'launch' },
      { label: 'Pequeño negocio', value: 'start' },
      { label: 'En crecimiento', value: 'growth' },
      { label: 'Empresa consolidada', value: 'business' },
    ],
  },
]
