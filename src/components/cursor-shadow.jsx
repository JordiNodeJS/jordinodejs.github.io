import { useEffect, useState } from 'react'

export default function CursorShadow() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (cursorPosition.x !== 0 && cursorPosition.y !== 0) {
    return (
      <div
        className="fixed inset-0 top-0 left-0 z-20 transition duration-300 pointer-events-none max-lg:hidden max-lg:opacity-0"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgb(var(--shadow-cursor)), transparent 80%)`
        }}
      />
    )
  }
  return null
}