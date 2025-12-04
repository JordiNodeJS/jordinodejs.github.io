import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const HeroScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={targetRef} className="h-[150vh] relative bg-sky-100 overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Landscape Elements */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }} className="absolute bottom-0 left-0 right-0 h-64 bg-emerald-200 rounded-t-[50%] scale-150 translate-y-20" />
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }} className="absolute bottom-0 left-0 right-0 h-32 bg-emerald-400 rounded-t-[30%] scale-125 translate-y-10" />
        
        {/* Clouds */}
        <motion.div 
          animate={{ x: [0, 100, 0] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-12 bg-white rounded-full opacity-80 blur-sm" 
        />
         <motion.div 
          animate={{ x: [0, -150, 0] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-40 right-40 w-48 h-16 bg-white rounded-full opacity-60 blur-sm" 
        />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div style={{ y, opacity, scale }}>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 tracking-tight">
              The Journey
            </h1>
            <p className="text-2xl text-slate-600 mb-12 font-medium">
              Scroll to explore my world
            </p>
          </motion.div>

          <motion.img 
            src="/assets/scroll-char.png" 
            alt="Character"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
            }}
            className="w-64 h-64 md:w-96 md:h-96 object-contain mt-8 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroScroll
