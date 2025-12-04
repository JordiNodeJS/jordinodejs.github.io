import { motion } from 'framer-motion'
import { useRef } from 'react'
import useMotion3DEffect from '../../hooks/useMotion3DEffect'

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { springProps } = useMotion3DEffect(
    containerRef as React.RefObject<HTMLElement>,
    {
      strength: 40,
      rotateLimit: 25,
      scaleFactor: 1.1,
      zAxisMovement: 80,
      glowOnHover: true,
      glowColor: 'rgba(56, 189, 248, 0.8)'
    }
  )

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white overflow-hidden relative perspective-1000">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
        }} 
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          ref={containerRef}
          className="relative w-80 h-80 md:w-96 md:h-96 mb-12 cursor-pointer transform-style-3d"
          style={{
            rotateX: springProps.rotateX,
            rotateY: springProps.rotateY,
            scale: springProps.scale,
            z: springProps.zIndex,
          }}
        >
          {/* Holographic Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Avatar */}
          <motion.img 
            src="/assets/3d-avatar.png" 
            alt="3D Avatar"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            style={{
              transform: 'translateZ(50px)'
            }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
            DIGITAL REALITY
          </h1>
          <p className="text-xl text-cyan-200 font-mono tracking-widest">
            SYSTEM.INIT(JORGE_PORTFOLIO)
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero3D
