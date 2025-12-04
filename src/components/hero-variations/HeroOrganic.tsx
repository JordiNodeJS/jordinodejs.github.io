import { motion } from 'framer-motion'

const HeroOrganic = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-[#f0f4f8] text-[#2d3748] overflow-hidden relative">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#c3dafe] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#fed7d7] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-40 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#2d3748] mb-6 leading-tight">
            Growth <br/> & <span className="italic text-[#4a5568]">Creation.</span>
          </h1>
          <p className="text-xl text-[#718096] mb-8 max-w-md">
            Building digital ecosystems that breathe. Natural interfaces for human connection.
          </p>
          <button className="px-8 py-3 bg-[#4a5568] text-white rounded-full hover:bg-[#2d3748] transition-colors shadow-lg hover:shadow-xl">
            Explore Work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
             {/* Mask Image */}
             <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img 
                  src="/assets/organic-nature.png" 
                  alt="Organic Portrait" 
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#9ae6b4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroOrganic
