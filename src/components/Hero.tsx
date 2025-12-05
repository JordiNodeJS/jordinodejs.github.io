import { motion, useReducedMotion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import HeroBackground from './HeroBackground'

const Hero = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()
  // Spin configuration for the badge (turntable effect)
  const spinTurns = 8 // number of full rotations
  const spinDuration = 3 // seconds

  // Define theme-specific styles for the brutalist layout
  const themeStyles = {
    light: {
      bg: 'bg-[#ffeaa7]',
      text: 'text-black',
      accent: 'bg-[#ff6b6b]',
      border: 'border-black',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
      secondary: 'bg-[#4ecdc4]',
      badgeHover: 'hover:bg-white hover:text-black',
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
      badgeHover: 'hover:bg-black hover:text-white',
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
      badgeHover: 'hover:bg-[#eee8d5] hover:text-[#5b4636]',
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
      badgeHover: 'hover:bg-[#fffffe] hover:text-[#001858]',
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
      badgeHover: 'hover:bg-[#ff6b6b] hover:text-[#ffffff]',
      buttonHover: 'hover:bg-[#ff6b6b] hover:text-black',
      marqueeText: 'text-black',
      buttonBg: 'bg-black',
      buttonText: 'text-[#ffffff]'
    }
  }

  const currentStyle = themeStyles[theme] || themeStyles.light

  const titleText = t('hero.neoTitle', 'WEBCODE.ES')
  const titleMain = titleText.includes('.')
    ? titleText.substring(0, titleText.lastIndexOf('.'))
    : titleText
  const titleExt = titleText.includes('.')
    ? titleText.substring(titleText.lastIndexOf('.'))
    : ''

  return (
    <section
      id="hero"
      className={`min-h-screen pb-20 md:pb-6 ${currentStyle.bg} ${currentStyle.text} overflow-hidden relative font-mono transition-colors duration-500`}
    >
      {/* Marquee Background */}
      <HeroBackground themeStyle={currentStyle} />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen gap-12 px-6 pt-40 mx-auto">
        <motion.div
          initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="relative z-20"
        >
          <div
            className={`absolute inset-0 ${currentStyle.accent} border-4 ${currentStyle.border} translate-x-4 translate-y-4`}
          />
          <motion.div
            className={`relative border-4 ${currentStyle.border} bg-white p-2 w-64 h-64 md:w-80 md:h-80 hover:rotate-2 transition-transform duration-300`}
            initial="rest"
            whileHover="hover"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/assets/neo-portrait-user.png"
                alt="Brutalist Portrait Front"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <motion.div
                className="absolute inset-0 w-full h-full bg-white"
                variants={{
                  rest: { x: 0 },
                  hover: { x: '100%' }
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <img
                  src="/assets/neo-portrait-profile.png"
                  alt="Brutalist Portrait Profile"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <motion.a
              href="https://webcode.es"
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute -top-6 -right-6 ${currentStyle.secondary} ${
                currentStyle.badgeHover || ''
              } border-4 ${
                currentStyle.border
              } rounded-full w-24 h-24 flex items-center justify-center font-black text-center text-xs leading-tight p-2 transition-colors duration-200 transform-gpu will-change-transform origin-center`}
              initial={shouldReduceMotion ? undefined : { rotate: 0 }}
              animate={
                shouldReduceMotion ? undefined : { rotate: 360 * spinTurns }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: spinDuration, ease: 'easeOut' }
              }
            >
              {t('hero.neoBadge', 'WEB CODE')
                .split(' ')
                .map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`bg-white border-4 ${currentStyle.border} p-8 ${currentStyle.shadow} max-w-2xl text-center relative z-10`}
        >
          <h1 className="mb-4 text-5xl font-black leading-none text-black md:text-7xl">
            {titleMain}
            <span className="text-[#ff6b6b]">{titleExt}</span>
          </h1>
          <p
            className={`text-xl font-bold ${currentStyle.secondary} text-black inline-block px-4 py-2 mb-6 border-2 ${currentStyle.border} transform -rotate-1`}
          >
            {t('hero.neoSubtitle', 'CREATING DIGITAL CHAOS & ORDER')}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className={`block ${currentStyle.buttonBg} ${
                currentStyle.buttonText
              } font-bold py-4 px-8 border-2 border-transparent ${
                currentStyle.buttonHover
              } ${
                currentStyle.buttonHover.includes('border')
                  ? ''
                  : 'hover:border-black'
              } transition-all shadow-[4px_4px_0px_0px_#4ecdc4] hover:shadow-[8px_8px_0px_0px_#4ecdc4] hover:-translate-y-1`}
            >
              {t('hero.neoCta', 'VIEW PROJECTS')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
