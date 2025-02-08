import { useEffect, useState } from 'react'

export default function VantaBackground({ theme }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const [xOffset, setXOffset] = useState(0.3)

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      const newOffset = 0.3 - scrollProgress * 0.6 // This will go from 0.3 to -0.3
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
          baseColor: theme === 'dark' ? 0x111827 : 0xf3f4f6,
          backgroundColor: theme === 'dark' ? 0x111827 : 0xf3f4f6,
          amplitudeFactor: 1.5,
          size: 1.0,
          xOffset: xOffset,
          yOffset: 0.0,
          opacity: theme === 'dark' ? 0.3 : 0.15
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
        baseColor: theme === 'dark' ? 0x34d399 : 0x065f46,
        backgroundColor: theme === 'dark' ? 0x111827 : 0xf3f4f6,
        opacity: theme === 'dark' ? 0.3 : 0.15,
        xOffset: xOffset
      })
    }
  }, [theme, xOffset])

  return null
}
