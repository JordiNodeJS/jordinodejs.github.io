import { useState, useEffect } from 'react'

const useScrollEffect = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detectar el inicio del scroll - activamos con un umbral bajo
      if (window.scrollY > 5 && !hasStartedScrolling) {
        setHasStartedScrolling(true)
      }
      
      // Calcular el progreso del scroll (0 a 1)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = Math.min(currentScroll / totalHeight, 1)
      
      setScrollProgress(progress)
    }

    // Añadir el event listener para el scroll
    window.addEventListener('scroll', handleScroll)
    
    // Inicializar
    handleScroll()
    
    // Limpiar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasStartedScrolling])

  return { scrollProgress, hasStartedScrolling }
}

export default useScrollEffect