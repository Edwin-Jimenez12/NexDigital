/*
  Proyectos en los que ha participado Nex Digital.
  Imágenes en public/images/proyectos/<slug>-desktop.webp, -mobile.webp e -icon.svg
  (`screenshots: false` muestra una tarjeta de marca en lugar del mockup)
*/
export const projects = [
  {
    slug: 'fill-d-gap',
    name: 'Fill D Gap',
    category: 'Recursos humanos · Reclutamiento',
    url: 'https://filldgap.com/',
    color: '#E9478F',
    statusBar: { bg: '#FFFFFF', fg: '#111111' },
    summary: 'Comunidad de profesionales independientes que conecta talento experto con empresas que necesitan cubrir vacantes temporales.',
    tags: ['Diseño en Figma', 'Desarrollo web', 'Formularios con Supabase'],
  },
  {
    slug: 'punto-cero',
    name: 'Punto Cero',
    category: 'Agencia creativa · Marketing digital',
    url: 'https://punto0.pages.dev/planes',
    color: '#F04A4A',
    statusBar: { bg: '#FFFFFF', fg: '#111111' },
    summary: 'Sitio de una agencia creativa panameña que ayuda a marcas y negocios a mejorar su presencia digital.',
    tags: ['Sitio web', 'Sección de planes', 'Diseño responsivo'],
  },
  {
    slug: 'athlonx',
    name: 'AthlonX',
    category: 'Empresa del grupo Nex Digital',
    url: 'https://athlonx.world/',
    color: '#88DF44',
    statusBar: { bg: '#000000', fg: '#FFFFFF' },
    summary: 'El rendimiento se construye. Nuestra propia marca, diseñada y desarrollada por Nex Digital.',
    tags: ['Marca propia', 'Diseño y desarrollo', 'En funcionamiento'],
    // Sin capturas todavía: se muestra una tarjeta de marca. Al agregar athlonx-desktop.webp y
    // athlonx-mobile.webp en public/images/proyectos/, cambia esto a true.
    screenshots: false,
    logo: '/images/AthlonX/athlonx.svg',
  },
]
