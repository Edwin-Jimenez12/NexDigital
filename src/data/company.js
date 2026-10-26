import { createWhatsAppLink, WHATSAPP_DISPLAY, WHATSAPP_MESSAGES } from '../config/whatsapp'

export const EMAIL = 'nexdigitaldev@gmail.com'

export const company = {
  name: 'Nex Digital',
  tagline: 'Desarrollo web profesional',
  description: 'Desarrollamos páginas web modernas, rápidas y funcionales que ayudan a tu negocio a crecer en internet.',
  email: EMAIL,
  emailLink: `mailto:${EMAIL}?subject=${encodeURIComponent('Consulta desde la página de Nex Digital')}&body=${encodeURIComponent(
    'Hola, visité la página web de Nex Digital y quisiera recibir información sobre sus servicios.',
  )}`,
  phone: WHATSAPP_DISPLAY,
  whatsapp: createWhatsAppLink(WHATSAPP_MESSAGES.general),
  location: 'Ciudad de Panamá, Panamá',
  mapLink: 'https://maps.app.goo.gl/f2dmNyEu5aKRCsqD8',
  schedule: 'Lun-Vie: 9:00 am - 6:00 pm',
  instagram: 'https://www.instagram.com/nexdigital.dev',
  // Agrega aquí el enlace de Facebook cuando esté disponible; mientras esté vacío no se muestra
  facebook: '',
}

export const nav = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Conócenos', href: '/#conocenos' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'AthlonX', href: '/#athlonx' },
  { label: 'Planes', href: '/planes' },
]

export const clients = [
  { name: 'Fill D Gap', logo: '/images/FillDGap/fillDGapLogo.svg' },
  { name: 'Punto Cero', logo: '/images/PuntoCero/logo.webp' },
  { name: 'AthlonX', logo: '/images/AthlonX/athlonx.svg', bg: '#000000' },
]

export const reasons = [
  { icon: 'Goal', title: 'Enfocados en resultados', text: 'Creamos sitios pensados para atraer clientes y hacer crecer tu negocio.' },
  { icon: 'CodeXml', title: 'Tecnología moderna', text: 'Utilizamos las mejores herramientas para garantizar velocidad, seguridad y calidad.' },
  { icon: 'MessagesSquare', title: 'Comunicación clara', text: 'Te acompañamos en todo el proceso, resolvemos tus dudas y te mantenemos informado.' },
  { icon: 'PencilRuler', title: 'A tu medida', text: 'Cada proyecto es único, por eso nos adaptamos a tus necesidades y objetivos.' },
]

/* Proceso de trabajo, basado en las condiciones de los planes */
export const process = [
  { title: 'Conversemos', text: 'Nos cuentas tu idea por WhatsApp y te ayudamos a elegir el plan adecuado.' },
  { title: 'Prototipo', text: 'Diseñamos un prototipo interactivo para que veas tu página antes de desarrollarla.' },
  { title: 'Desarrollo', text: 'Con el prototipo aprobado, construimos tu sitio adaptado a celulares, tablets y computadoras.' },
  { title: 'Publicación', text: 'Publicamos tu sitio web y lo dejamos listo para recibir visitas.' },
  { title: 'Ajustes', text: 'Incluye rondas de cambios después de la entrega, según tu plan.' },
]
