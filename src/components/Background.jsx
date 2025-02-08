import { useEffect, useRef, useState } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import * as THREE from 'three'

export default function Background({ theme }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 800.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: theme === 'dark' ? 0x3498db : 0x2c3e50,
          color2: theme === 'dark' ? 0x2980b9 : 0x34495e,
          backgroundColor: theme === 'dark' ? 0x1a1a1a : 0xffffff,
          size: 3,
          spacing: 35.0,
          showLines: true,
          points: 25
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, theme])

  return (
    <div ref={vantaRef} className="fixed inset-0 -z-10" aria-hidden="true" />
  )
}
