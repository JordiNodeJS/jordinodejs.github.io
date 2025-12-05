import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface HeroBackgroundProps {
  themeStyle: {
    marqueeText: string
  }
}

const MarqueeRow = ({
  children,
  baseVelocity = 100,
  className
}: {
  children: string
  baseVelocity: number
  className: string
}) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, v => `${parseFloat(v.toString())}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  // Split text into characters for individual animation
  const text = children
  const repetitions = 4 // Number of times to repeat the text

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className={`flex flex-nowrap ${className}`} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} className="flex mr-8">
            {text.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: charIndex * 0.1 // Stagger effect
                }}
                className="inline-block will-change-transform"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            {/* Add a spacer after each repetition */}
            <span className="inline-block w-8"></span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const HeroBackground = ({ themeStyle }: HeroBackgroundProps) => {
  const { t } = useTranslation()
  const text = t('hero.neoTitle', 'WEBCODE.ES')

  return (
    <div className="absolute inset-0 flex flex-col justify-between py-10 overflow-hidden pointer-events-none opacity-10 select-none">
      <MarqueeRow
        baseVelocity={-2}
        className={`text-9xl font-black ${themeStyle.marqueeText}`}
      >
        {text}
      </MarqueeRow>
      <MarqueeRow
        baseVelocity={2}
        className={`text-9xl font-black ${themeStyle.marqueeText}`}
      >
        {text}
      </MarqueeRow>
      <MarqueeRow
        baseVelocity={-1}
        className={`text-9xl font-black ${themeStyle.marqueeText}`}
      >
        {text}
      </MarqueeRow>
      <MarqueeRow
        baseVelocity={1}
        className={`text-9xl font-black ${themeStyle.marqueeText}`}
      >
        {text}
      </MarqueeRow>
      <MarqueeRow
        baseVelocity={-2}
        className={`text-9xl font-black ${themeStyle.marqueeText}`}
      >
        {text}
      </MarqueeRow>
    </div>
  )
}

export default HeroBackground
