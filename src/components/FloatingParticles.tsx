import React, { useEffect, useState, useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const FloatingParticles = React.memo(() => {
  const [particles, setParticles] = useState<Particle[]>([])

  // Memoize particles to prevent unnecessary recalculations
  const memoizedParticles = useMemo(() => {
    const newParticles: Particle[] = []
    // Reduced from 15 to 8 particles for better performance
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5, // Smaller particles
        duration: Math.random() * 25 + 20, // Slower animation
        delay: Math.random() * 8
      })
    }
    return newParticles
  }, [])

  useEffect(() => {
    setParticles(memoizedParticles)
  }, [memoizedParticles])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(110vh) scale(0.5);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-10vh) scale(0.5);
              opacity: 0;
            }
          }
          .floating-particle {
            animation: floatUp linear infinite;
            will-change: transform, opacity;
          }
        `}
      </style>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="floating-particle absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-sm"
          style={
            {
              '--size': `${particle.size}px`,
              width: `var(--size)`,
              height: `var(--size)`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
})

FloatingParticles.displayName = 'FloatingParticles'

export default FloatingParticles
