import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

interface ProgressiveTextRevealProps {
  text: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

const ProgressiveTextReveal: React.FC<ProgressiveTextRevealProps> = React.memo(
  ({ text, duration = 3000, className = '', style = {} }) => {
    const { theme } = useTheme()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      let animationFrame: number
      const startTime = Date.now()

      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min((elapsed / duration) * 100, 100)

        setProgress(newProgress)

        if (newProgress < 100) {
          animationFrame = requestAnimationFrame(updateProgress)
        }
      }

      animationFrame = requestAnimationFrame(updateProgress)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, [duration])
    const getProgressiveStyle = useCallback(() => {
      const baseOpacity = 0.2
      const targetOpacity = 1
      const opacity = Math.min(
        baseOpacity + (progress / 100) * (targetOpacity - baseOpacity),
        targetOpacity
      )

      const baseBlur = 4
      const blur = Math.max(baseBlur - (progress / 100) * baseBlur, 0)

      switch (theme) {
        case 'dark': {
          const darkBrightness = 0.5 + (progress / 100) * 0.5
          const darkContrast = 0.8 + (progress / 100) * 0.4
          const darkShadowIntensity = 0.1 + (progress / 100) * 0.3
          return {
            filter: `blur(${blur}px) brightness(${darkBrightness}) contrast(${darkContrast}) saturate(${
              1 + (progress / 100) * 0.2
            })`,
            opacity,
            textShadow: `
            0 4px 12px rgba(59, 130, 246, ${darkShadowIntensity}),
            0 0 20px rgba(96, 165, 250, ${darkShadowIntensity * 0.6}),
            0 8px 32px rgba(147, 51, 234, ${darkShadowIntensity * 0.4})
          `,
            transform: `scale(${0.98 + (progress / 100) * 0.02})`
          }
        }

        case 'light': {
          const lightContrast = 0.6 + (progress / 100) * 0.4
          const lightSaturation = 0.8 + (progress / 100) * 0.3
          const lightShadowIntensity = 0.03 + (progress / 100) * 0.07
          return {
            filter: `blur(${blur}px) contrast(${lightContrast}) saturate(${lightSaturation})`,
            opacity,
            textShadow: `
            0 2px 8px rgba(0, 0, 0, ${lightShadowIntensity}),
            0 4px 16px rgba(59, 130, 246, ${lightShadowIntensity * 0.8}),
            0 1px 3px rgba(147, 51, 234, ${lightShadowIntensity * 0.6})
          `,
            transform: `scale(${0.99 + (progress / 100) * 0.01})`
          }
        }

        case 'retro-pastel': {
          const pastelSaturation = 0.4 + (progress / 100) * 0.6
          const pastelBrightness = 0.9 + (progress / 100) * 0.1
          const pastelShadowIntensity = 0.15 + (progress / 100) * 0.25
          return {
            filter: `blur(${blur}px) saturate(${pastelSaturation}) brightness(${pastelBrightness}) contrast(${
              1 + (progress / 100) * 0.1
            })`,
            opacity,
            textShadow: `
            0 3px 8px rgba(255, 182, 193, ${pastelShadowIntensity}),
            0 0 15px rgba(255, 218, 185, ${pastelShadowIntensity * 0.7}),
            0 6px 20px rgba(251, 113, 133, ${pastelShadowIntensity * 0.5})
          `,
            transform: `scale(${0.97 + (progress / 100) * 0.03})`
          }
        }

        default:
          return { opacity }
      }
    }, [progress, theme])
    const getGradientIntensity = useCallback(() => {
      // En lugar de generar clases dinámicas que podrían no estar en el bundle de Tailwind,
      // usamos gradientes estáticos que se intensifican con la opacidad y otros efectos
      switch (theme) {
        case 'dark': {
          return 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
        }

        case 'light': {
          return 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
        }

        case 'retro-pastel': {
          return 'bg-gradient-to-r from-pink-300 via-rose-200 to-orange-200'
        }

        default: {
          return className.split(' ').find(c => c.includes('bg-gradient')) || ''
        }
      }
    }, [theme, className])

    return (
      <motion.div
        className={`${className} ${
          theme !== 'brutalism' && theme !== 'vintage'
            ? getGradientIntensity()
            : className
        }`}
        style={{
          ...style,
          ...getProgressiveStyle()
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <style>
          {`
            .progressive-text-reveal {
              background: linear-gradient(90deg, 
                currentColor ${progress}%, 
                rgba(100,100,100,0.3) ${progress}%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: none !important;
              display: block;
              width: 100%;
            }
          `}
        </style>
        <span className="progressive-text-reveal">{text}</span>
      </motion.div>
    )
  }
)

ProgressiveTextReveal.displayName = 'ProgressiveTextReveal'

export default ProgressiveTextReveal
