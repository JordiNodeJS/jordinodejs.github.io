import { useEffect, useState, useRef } from 'react'

export default function VantaBackground({ theme }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const [xOffset, setXOffset] = useState(0.3)
  const [amplitudeFactor, setAmplitudeFactor] = useState(
    3.0 + (0.3 - xOffset) * 2
  )
  const [, setSize] = useState(2.0 + (0.3 - xOffset) * 0.5)
  const [yOffset, setYOffset] = useState(0)
  const vantaRef = useRef(null)

  const calculateAmplitudeFactor = xOffset => 3.0 + (0.3 - xOffset) * 2
  const calculateSize = xOffset => 2.0 + (0.3 - xOffset) * 0.5

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      const newOffset = 0.3 - scrollProgress * 0.6 // This will go from 0.3 to -0.3
      const newYOffset = -(scrollProgress * 0.2) // Ahora irá de 0 a -0.3 máximo
      setXOffset(newOffset)
      setYOffset(newYOffset)
      setAmplitudeFactor(calculateAmplitudeFactor(newOffset))
      setSize(calculateSize(newOffset))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: theme === 'dark' ? 0x059669 : 0x059669, // Verde más intenso
          backgroundColor: theme === 'dark' ? 0x111827 : 0xffffff,
          amplitudeFactor: calculateAmplitudeFactor(0.3), // Aumentado para más intensidad
          size: 2, // Aumentado para más visibilidad
          xOffset, // Aumentado para más visibilidad
          yOffset,
          opacity: theme === 'dark' ? 0.2 : 0.6 // Mayor opacidad
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.HALO({
          el: vantaRef.current,
          baseColor: theme === 'dark' ? 0x059669 : 0x059669, // Verde más intenso
          backgroundColor: theme === 'dark' ? 0x000000 : 0xffffff,
          opacity: theme === 'dark' ? 0.8 : 0.6 // Mayor opacidad
        })
      )
    }
  }, [theme])

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        xOffset,
        yOffset,
        amplitudeFactor
      })
    }
  }, [xOffset, yOffset, amplitudeFactor, vantaEffect])

  return (
    <div
      id="vanta-background"
      className="fixed top-0 left-0 w-full h-full -z-10"
      ref={vantaRef}
    />
  )
}
