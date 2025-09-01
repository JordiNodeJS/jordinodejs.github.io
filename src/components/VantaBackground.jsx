import { useEffect, useRef } from 'react'

export default function VantaBackground({ theme }) {
  const vantaRef = useRef(null)
  const vantaEffectRef = useRef(null)
  useEffect(() => {
    if (!vantaEffectRef.current) {
      if (typeof window.VANTA !== 'undefined') {
        vantaEffectRef.current = window.VANTA.HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: theme === 'dark' ? 0x0a0a0a : 0xffffff,
          backgroundColor: theme === 'dark' ? 0x0a0a0a : 0xffffff,
          amplitudeFactor: 2.0,
          size: 1.5,
          xOffset: 0.25,
          yOffset: 0.05
        })
      }
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy()
        vantaEffectRef.current = null
      }
    }
  }, [theme])

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 opacity-80"
      style={{ position: 'fixed', zIndex: -1 }}
    ></div>
  )
}
