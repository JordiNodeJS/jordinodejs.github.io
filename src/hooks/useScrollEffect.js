import { useState, useEffect } from 'react'

const useScrollEffect = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const isScrollingUp = currentScroll < prevScrollY
      
      // Detectar el inicio del scroll - activamos con un umbral bajo
      if (currentScroll > 5 && !hasStartedScrolling) {
        setHasStartedScrolling(true)
      }
      
      // Revertir la animación cuando volvemos al inicio
      if (currentScroll <= 5 && hasStartedScrolling && isScrollingUp) {
        setHasStartedScrolling(false)
      }
      
      // Calcular el progreso del scroll (0 a 1)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(currentScroll / totalHeight, 1)
      
      setScrollProgress(progress)
      setPrevScrollY(currentScroll)
    }

    // Añadir el event listener para el scroll
    window.addEventListener('scroll', handleScroll)
    
    // Inicializar
    handleScroll()
    
    // Limpiar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasStartedScrolling, prevScrollY])

  return { scrollProgress, hasStartedScrolling }
}

export default useScrollEffect