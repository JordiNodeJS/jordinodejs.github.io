import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  // Define theme-specific styles for the brutalist layout
  const themeStyles = {
    light: {
      bg: 'bg-[#ffeaa7]',
      text: 'text-black',
      accent: 'bg-[#ff6b6b]',
      border: 'border-black',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
      secondary: 'bg-[#4ecdc4]',
      buttonHover: 'hover:bg-white hover:text-black',
      marqueeText: 'text-black',
      buttonBg: 'bg-black',
      buttonText: 'text-slate-50'
    },
    dark: {
      bg: 'bg-slate-900',
      text: 'text-white',
      accent: 'bg-purple-600',
      border: 'border-white',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]',
      secondary: 'bg-cyan-500',
      buttonHover: 'hover:bg-white hover:text-black',
      marqueeText: 'text-white',
      buttonBg: 'bg-white',
      buttonText: 'text-black'
    },
    vintage: {
      bg: 'bg-[#fdf6e3]',
      text: 'text-[#5b4636]',
      accent: 'bg-[#cb4b16]',
      border: 'border-[#5b4636]',
      shadow: 'shadow-[8px_8px_0px_0px_#5b4636]',
      secondary: 'bg-[#859900]',
      buttonHover: 'hover:bg-[#eee8d5] hover:text-[#5b4636]',
      marqueeText: 'text-[#93a1a1]',
      buttonBg: 'bg-[#5b4636]',
      buttonText: 'text-[#fdf6e3]'
    },
    'retro-pastel': {
      bg: 'bg-[#fef6e4]',
      text: 'text-[#001858]',
      accent: 'bg-[#f582ae]',
      border: 'border-[#001858]',
      shadow: 'shadow-[8px_8px_0px_0px_#001858]',
      secondary: 'bg-[#8bd3dd]',
      buttonHover: 'hover:bg-[#fffffe] hover:text-[#001858]',
      marqueeText: 'text-[#172c66]',
      buttonBg: 'bg-[#001858]',
      buttonText: 'text-[#fffffe]'
    },
    brutalism: {
      bg: 'bg-[#ffeaa7]',
      text: 'text-black',
      accent: 'bg-[#ff6b6b]',
      border: 'border-black',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
      secondary: 'bg-[#4ecdc4]',
      buttonHover: 'hover:bg-[#ff6b6b] hover:text-black',
      marqueeText: 'text-black',
      buttonBg: 'bg-black',
      buttonText: 'text-[#ffffff]'
    }
  }

  const currentStyle = themeStyles[theme] || themeStyles.light

  const titleText = t('hero.neoTitle', 'WEBCODE.ES')
  const titleMain = titleText.includes('.') ? titleText.substring(0, titleText.lastIndexOf('.')) : titleText
  const titleExt = titleText.includes('.') ? titleText.substring(titleText.lastIndexOf('.')) : ''

  return (
    <section className={`min-h-screen ${currentStyle.bg} ${currentStyle.text} overflow-hidden relative font-mono transition-colors duration-500`}>
      {/* Marquee Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex flex-col justify-between py-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`whitespace-nowrap text-9xl font-black ${currentStyle.marqueeText} ${i % 2 === 0 ? 'animate-[marquee_20s_linear_infinite]' : 'animate-[marquee_20s_linear_infinite_reverse]'}`}>
            {t('hero.neoTitle', 'WEBCODE.ES')} {t('hero.neoTitle', 'WEBCODE.ES')} {t('hero.neoTitle', 'WEBCODE.ES')}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-40 flex flex-col items-center justify-center gap-12 min-h-screen">
        
        <motion.div 
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="relative z-20"
        >
          <div className={`absolute inset-0 ${currentStyle.accent} border-4 ${currentStyle.border} translate-x-4 translate-y-4`} />
          <div className={`relative border-4 ${currentStyle.border} bg-white p-2 w-64 h-64 md:w-80 md:h-80 hover:rotate-2 transition-transform duration-300`}>
            <img src="/assets/neo-portrait-user.png" alt="Brutalist Portrait" className="w-full h-full object-cover" />
            <div className={`absolute -top-6 -right-6 ${currentStyle.secondary} border-4 ${currentStyle.border} rounded-full w-24 h-24 flex items-center justify-center font-black animate-bounce text-center text-xs leading-tight p-2`}>
              {t('hero.neoBadge', 'WEB CODE').split(' ').map((word, i) => (
                <span key={i}>{word}<br/></span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`bg-white border-4 ${currentStyle.border} p-8 ${currentStyle.shadow} max-w-2xl text-center relative z-10`}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-4 text-black">
            {titleMain}<span className="text-[#ff6b6b]">{titleExt}</span>
          </h1>
          <p className={`text-xl font-bold ${currentStyle.secondary} text-black inline-block px-4 py-2 mb-6 border-2 ${currentStyle.border} transform -rotate-1`}>
            {t('hero.neoSubtitle', 'CREATING DIGITAL CHAOS & ORDER')}
          </p>
          <div className="flex justify-center gap-4">
             <button className={`block ${currentStyle.buttonBg} ${currentStyle.buttonText} font-bold py-4 px-8 border-2 border-transparent ${currentStyle.buttonHover} ${currentStyle.buttonHover.includes('border') ? '' : 'hover:border-black'} transition-all shadow-[4px_4px_0px_0px_#4ecdc4] hover:shadow-[8px_8px_0px_0px_#4ecdc4] hover:-translate-y-1`}>
              {t('hero.neoCta', 'VIEW PROJECTS')}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
