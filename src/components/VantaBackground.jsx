import { useEffect, useRef } from 'react'

export default function VantaBackground({ theme }) {
  const vantaRef = useRef(null)
  const vantaEffectRef = useRef(null)
  useEffect(() => {
    if (!vantaEffectRef.current) {
      if (typeof window.VANTA !== 'undefined') {
        vantaEffectRef.current = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color: theme === 'dark' ? 0x222222 : 0xf0f0f0,
          color2: 0x7ed321,
          backgroundColor: theme === 'dark' ? 0x111111 : 0xffffff,
          size: 3,
          spacing: 20,
          showLines: true
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
      className="fixed top-0 left-0 w-full h-screen -z-10 opacity-70"
      style={{ position: 'fixed', zIndex: -1 }}
    ></div>
  )
}
