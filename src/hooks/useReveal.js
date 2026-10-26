import { useEffect } from 'react'
import { useLocation } from 'react-router'

/* Agrega .is-visible a cada elemento .reveal cuando entra en pantalla (se reinicia al cambiar de página). */
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
