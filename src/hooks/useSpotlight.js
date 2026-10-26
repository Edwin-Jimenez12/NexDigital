import { useCallback } from 'react'

/* Devuelve un manejador que guarda la posición del cursor en --x / --y del elemento. */
export function useSpotlight() {
  return useCallback((e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }, [])
}
