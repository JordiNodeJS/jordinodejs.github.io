import { useEffect, useState } from 'react'

export default function VantaBackground({ theme }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const [xOffset, setXOffset] = useState(0.3)

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      const newOffset = 0.3 - scrollProgress * 0.6
      setXOffset(newOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.HALO({
          el: '#vanta-background',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: theme === 'dark' ? 0x4ade80 : 0x059669, // Verde más intenso para modo claro
          backgroundColor: theme === 'dark' ? 0x111827 : 0xFFFBF5,
          amplitudeFactor: 2.0,
          size: 1.5,
          xOffset,
          yOffset: 0.0,
          colorMode: 'lerpGradient', // Usar gradiente para mejorar la transición de colores
          blurFactor: 0.6, // Reducir el desenfoque para hacer el color más visible
          opacity: theme === 'dark' ? 0.6 : 0.75, // Mayor opacidad en modo claro
          ringFactor: 1.2, // Aumentar el factor de anillo para modo claro
          color2: theme === 'dark' ? 0x10b981 : 0x047857 // Color secundario para el gradiente
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        baseColor: theme === 'dark' ? 0x4ade80 : 0x059669,
        backgroundColor: theme === 'dark' ? 0x111827 : 0xFFFBF5,
        amplitudeFactor: 2.0,
        size: 1.5,
        colorMode: 'lerpGradient',
        blurFactor: 0.6,
        opacity: theme === 'dark' ? 0.6 : 0.75,
        ringFactor: 1.2,
        color2: theme === 'dark' ? 0x10b981 : 0x047857,
        xOffset
      })
    }
  }, [theme, xOffset])

  return (
    <div
      id="vanta-background"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
