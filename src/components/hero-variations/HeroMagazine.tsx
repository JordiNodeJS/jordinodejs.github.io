import { motion } from 'framer-motion'

const HeroMagazine = () => {
  return (
    <section className="min-h-screen bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 h-screen flex flex-col justify-center relative">
        
        {/* Giant Background Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-5">
          <h1 className="text-[20vw] font-black tracking-tighter leading-none text-center">
            PORT<br/>FOLIO
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column - Title */}
          <div className="md:col-span-4 flex flex-col justify-between h-full py-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] mb-4 border-b-2 border-black inline-block pb-1">ISSUE 01 — 2025</p>
              <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-6">
                The <br/> <span className="text-red-600">Dev</span> <br/> Edit.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:block"
            >
              <p className="text-xl font-medium max-w-xs leading-relaxed">
                Curating code with style. <br/>
                Where aesthetics meet function.
              </p>
            </motion.div>
          </div>

          {/* Center/Right - Image */}
          <div className="md:col-span-8 relative">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative aspect-[3/4] md:aspect-[16/9] overflow-hidden"
            >
              <img 
                src="/assets/magazine-editorial.png" 
                alt="Editorial Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 bg-white p-4 max-w-xs shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Featured</p>
                <h3 className="text-2xl font-bold leading-tight">Jorge: Redefining the Frontend Landscape</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroMagazine
