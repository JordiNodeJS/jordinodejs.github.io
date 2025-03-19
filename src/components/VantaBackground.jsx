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
          baseColor: theme === 'dark' ? 0x4ade80 : 0x10b981,
          backgroundColor: theme === 'dark' ? 0x111827 : 0xFFF8DC,
          amplitudeFactor: 2.5,
          size: 1.75,
          xOffset,
          yOffset: 0.0,
          opacity: 0.6
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
        baseColor: theme === 'dark' ? 0x4ade80 : 0x10b981,
        backgroundColor: theme === 'dark' ? 0x111827 : 0xFFF8DC,
        amplitudeFactor: 2.5,
        size: 1.75,
        opacity: 0.6,
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
