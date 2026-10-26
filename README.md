# Nex Digital

Sitio web de Nex Digital: desarrollo web profesional en Ciudad de Panamá. Incluye AthlonX, plataforma del grupo Nex Digital.

**Stack:** React · Vite · Tailwind CSS v4 · React Router · Lucide React · React Icons

## Comandos

```bash
yarn install
yarn dev     # desarrollo
yarn build   # genera dist/ para publicar
yarn lint
```

## Estructura

```
src/
├─ data/          contenido editable: empresa, servicios, proyectos, planes, AthlonX
├─ sections/      secciones de las páginas (Hero, Servicios, Proyectos, AthlonX, Planes…)
├─ components/    Menu, Bottom (footer), Button, Icon, mockups de Mac y teléfono…
├─ hooks/         useReveal, useMagnetic, useSpotlight, useScrolled
├─ pages/         Home, Plans, términos y privacidad
└─ config/        whatsapp.js (número y mensajes)
public/images/proyectos/  capturas (<slug>-desktop.webp, -mobile.webp) e iconos (-icon.svg)
```

## Cómo actualizar

- **Precios y planes:** `src/data/plans.js` (alimenta las tarjetas, la comparativa y el asistente).
- **Nuevo proyecto:** agrega un objeto en `src/data/projects.js` y sus imágenes en `public/images/proyectos/`.
- **AthlonX:** `src/data/athlonx.js`.
- **Iconos:** los nombres usados en `src/data` se registran en `src/components/Icon.jsx`.
