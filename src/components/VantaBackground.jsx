import { useEffect, useState } from 'react'

export default function VantaBackground({ theme }) {
  const [vantaEffect, setVantaEffect] = useState(null)

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
          xOffset: 0.0,
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
        baseColor: theme === 'dark' ? 0x111827 : 0xf3f4f6,
        backgroundColor: theme === 'dark' ? 0x111827 : 0xf3f4f6,
        opacity: theme === 'dark' ? 0.3 : 0.15
      })
    }
  }, [theme])

  return null
}
