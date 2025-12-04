import { motion } from 'framer-motion'

const HeroZen = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Typography */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-serif font-light tracking-tight leading-tight mb-6"
            >
              Less <br />
              <span className="italic font-normal">is</span> <br />
              More.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-light text-gray-600 max-w-md"
            >
              Jorge. Frontend Engineer. <br/>
              Crafting digital clarity.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[32rem] overflow-hidden">
               <img 
                src="/assets/zen-user.jpg" 
                alt="Minimalist Portrait" 
                className="w-full h-full object-cover grayscale contrast-[1.2] brightness-110 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -right-8 top-0 w-px bg-black hidden md:block"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroZen
