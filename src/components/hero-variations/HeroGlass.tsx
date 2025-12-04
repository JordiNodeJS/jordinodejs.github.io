import { motion } from 'framer-motion'

const HeroGlass = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-slate-900 text-white overflow-hidden relative">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 animate-gradient-xy" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Future Ready.
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Designing interfaces that feel like magic. Translucent layers, depth, and light.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-lg transition-all">
              Projects
            </button>
            <button className="px-6 py-3 bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-md rounded-lg transition-all shadow-lg shadow-blue-500/20">
              Contact
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-xl" />
          <img 
            src="/assets/glass-hologram.png" 
            alt="Holographic Avatar" 
            className="w-80 h-80 md:w-[30rem] md:h-[30rem] object-contain drop-shadow-[0_0_15px_rgba(100,200,255,0.4)]" 
          />
        </motion.div>

      </div>
    </section>
  )
}

export default HeroGlass
