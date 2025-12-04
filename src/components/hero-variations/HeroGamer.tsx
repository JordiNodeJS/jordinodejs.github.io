import { motion } from 'framer-motion'
import { Zap, Crosshair, Cpu } from 'lucide-react'

const HeroGamer = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-cyan-400 overflow-hidden relative font-mono selection:bg-cyan-500 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="container mx-auto px-6 relative z-10 h-screen flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Left HUD */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 space-y-6"
        >
          <div className="border border-cyan-500/30 bg-slate-900/50 p-6 backdrop-blur-sm relative group hover:border-cyan-400 transition-colors">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
            
            <h2 className="text-sm text-cyan-600 mb-2 tracking-widest">PLAYER_PROFILE</h2>
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tighter">JORGE</h1>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[85%] shadow-[0_0_10px_#06b6d4]" />
            </div>
            <div className="flex justify-between text-xs text-cyan-300 mt-1">
              <span>LVL. 25</span>
              <span>XP: 85%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-cyan-500/20 bg-slate-900/30 p-4 flex items-center gap-3 hover:bg-cyan-900/20 transition-colors">
              <Cpu className="w-6 h-6 text-purple-400" />
              <div>
                <div className="text-xs text-gray-400">CLASS</div>
                <div className="font-bold text-white">ENGINEER</div>
              </div>
            </div>
            <div className="border border-cyan-500/20 bg-slate-900/30 p-4 flex items-center gap-3 hover:bg-cyan-900/20 transition-colors">
              <Zap className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="text-xs text-gray-400">SPECIALTY</div>
                <div className="font-bold text-white">REACT.JS</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Character */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="relative z-10 border-2 border-cyan-500/50 rounded-full p-2 w-80 h-80 md:w-96 md:h-96">
             <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin" />
             <img 
              src="/assets/gamer-avatar.png" 
              alt="Avatar" 
              className="w-full h-full object-cover rounded-full opacity-90"
            />
          </div>
        </motion.div>

        {/* Right HUD - Stats */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 space-y-4 hidden md:block"
        >
          <div className="border-l-2 border-cyan-500/50 pl-4 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>CREATIVITY</span>
                <span className="text-cyan-300">92</span>
              </div>
              <div className="h-2 bg-slate-800 w-full">
                <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ delay: 0.5, duration: 1 }} className="h-full bg-cyan-500" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>LOGIC</span>
                <span className="text-cyan-300">95</span>
              </div>
              <div className="h-2 bg-slate-800 w-full">
                <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ delay: 0.7, duration: 1 }} className="h-full bg-cyan-500" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>SPEED</span>
                <span className="text-cyan-300">88</span>
              </div>
              <div className="h-2 bg-slate-800 w-full">
                <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ delay: 0.9, duration: 1 }} className="h-full bg-cyan-500" />
              </div>
            </div>
          </div>
          
          <button className="w-full mt-8 border border-cyan-400 text-cyan-400 py-3 hover:bg-cyan-400 hover:text-black transition-all font-bold tracking-widest flex items-center justify-center gap-2 group">
            <Crosshair className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            INITIATE_CONTACT
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroGamer
