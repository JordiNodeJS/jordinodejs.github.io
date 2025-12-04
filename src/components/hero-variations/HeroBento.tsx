import { motion } from 'framer-motion'
import { Github, Linkedin, MapPin, Music } from 'lucide-react'

const HeroBento = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-900 p-4 md:p-8">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 w-full max-w-6xl h-[800px] md:h-[600px]"
      >
        
        {/* Profile Card - Large */}
        <motion.div variants={item} className="col-span-2 row-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="z-10">
            <h1 className="text-4xl font-bold mb-2">Jorge</h1>
            <p className="text-gray-500">Frontend Engineer</p>
          </div>
          <div className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500">
             <img src="/assets/bento-desk.png" alt="Workspace" className="w-full h-full object-cover rounded-tl-3xl shadow-lg" />
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div variants={item} className="bg-emerald-50 rounded-3xl p-6 flex flex-col justify-center items-center border border-emerald-100">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse mb-2" />
          <span className="font-medium text-emerald-800">Open to work</span>
        </motion.div>

        {/* Location */}
        <motion.div variants={item} className="bg-blue-50 rounded-3xl p-6 flex flex-col justify-center items-center border border-blue-100">
          <MapPin className="w-8 h-8 text-blue-500 mb-2" />
          <span className="font-medium text-blue-800">Remote / Spain</span>
        </motion.div>

        {/* Stack Marquee (Simulated) */}
        <motion.div variants={item} className="col-span-2 bg-slate-900 text-white rounded-3xl p-6 flex items-center overflow-hidden relative">
          <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] text-2xl font-mono opacity-80">
            REACT • TYPESCRIPT • TAILWIND • NEXT.JS • NODE.JS • FRAMER MOTION • 
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="bg-white rounded-3xl p-6 flex justify-center items-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
          <Github className="w-8 h-8" />
        </motion.div>

        <motion.div variants={item} className="bg-white rounded-3xl p-6 flex justify-center items-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
          <Linkedin className="w-8 h-8 text-blue-600" />
        </motion.div>

        {/* Spotify / Music */}
        <motion.div variants={item} className="col-span-2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-6 text-white flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Music className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs opacity-80">Now Listening</p>
            <p className="font-medium">Lofi Coding Beats</p>
          </div>
          <div className="ml-auto flex gap-1 items-end h-4">
            <motion.div animate={{ height: [4, 16, 8, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-white/80 rounded-full" />
            <motion.div animate={{ height: [8, 4, 12, 6, 8] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-white/80 rounded-full" />
            <motion.div animate={{ height: [12, 8, 4, 10, 12] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-white/80 rounded-full" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default HeroBento
