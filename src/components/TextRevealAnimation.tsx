import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useState, useEffect, useMemo, useCallback } from 'react'

interface TextRevealAnimationProps {
  text: string
  className?: string
  charDelay?: number
  once?: boolean
  animationStyle?: 'scale' | 'slide' | 'fade' | 'bounce' | 'random'
  initialDelay?: number
  highlightColor?: string
  replay?: boolean
  onAnimationComplete?: () => void
}

export const TextRevealAnimation = ({
  text,
  className = '',
  charDelay = 0.08, // 80ms default delay
  once = true,
  animationStyle = 'scale',
  initialDelay = 0.1,
  highlightColor,
  replay = false,
  onAnimationComplete
}: TextRevealAnimationProps) => {
  const { theme } = useTheme()
  const [key, setKey] = useState(0)

  // Rerender when replay prop changes
  useEffect(() => {
    if (replay) {
      setKey(prevKey => prevKey + 1)
    }
  }, [replay])

  // Reset animation when text changes (e.g., language change)
  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [text])

  // Create array of characters from text - memoized to prevent recalculation
  const characters = useMemo(() => text.split(''), [text])

  // Function to get random animation style for each character - memoized
  const getRandomAnimation = useCallback((index: number) => {
    const styles = ['scale', 'slide', 'fade', 'bounce']
    // Consistent random for each character based on its position
    const randomIndex = Math.floor((index * 13) % 4)
    return styles[randomIndex]
  }, [])

  // Determine animation style for current character - memoized
  const getAnimationVariant = useCallback(
    (index: number) => {
      const style =
        animationStyle === 'random' ? getRandomAnimation(index) : animationStyle

      switch (style) {
        case 'slide':
          // Simplified slide for problematic themes
          if (theme === 'brutalism' || theme === 'vintage') {
            return {
              hidden: { opacity: 0.3, y: 5 },
              visible: { opacity: 1, y: 0 }
            }
          }
          return {
            hidden: {
              opacity: 0,
              y: 10,
              filter: 'blur(2px)'
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            }
          }
        case 'fade':
          // Simplified fade for problematic themes
          if (theme === 'brutalism' || theme === 'vintage') {
            return {
              hidden: { opacity: 0.3 },
              visible: { opacity: 1 }
            }
          }
          return {
            hidden: {
              opacity: 0,
              filter: 'blur(4px)'
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)'
            }
          }
        case 'bounce':
          // Simplified bounce for problematic themes
          if (theme === 'brutalism' || theme === 'vintage') {
            return {
              hidden: { opacity: 0.3, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }
          }
          return {
            hidden: {
              opacity: 0,
              scale: 1.2,
              y: -8
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0
            }
          }
        case 'scale':
        default:
          // Simplified animation for brutalism and vintage themes
          if (theme === 'brutalism' || theme === 'vintage') {
            return {
              hidden: {
                opacity: 0.3, // Start with some visibility to avoid complete invisibility
                scale: 0.95 // Very subtle scale change
              },
              visible: {
                opacity: 1,
                scale: 1
              }
            }
          }
          // Standard animation for other themes
          return {
            hidden: {
              opacity: 0,
              scale: 0.5,
              filter: 'blur(3px)',
              y: 5
            },
            visible: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              y: 0
            }
          }
      }
    },
    [theme, animationStyle, getRandomAnimation]
  )

  // Animation variants for each character
  const charVariants = {
    hidden: (i: number) => {
      const variant = getAnimationVariant(i)
      return variant.hidden
    },
    visible: (i: number) => ({
      ...getAnimationVariant(i).visible,
      transition: {
        delay: initialDelay + i * charDelay,
        duration: theme === 'brutalism' || theme === 'vintage' ? 0.5 : 0.3, // Longer duration for more reliable animation
        ease: 'easeOut' as const
      }
    })
  }
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: charDelay,
        delayChildren: initialDelay
      }
    }
  }
  // Apply highlighting effect for characters
  const getCharacterStyle = (char: string) => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-block',
      whiteSpace: char === ' ' ? 'pre' : 'normal'
    }

    // Add theme-specific styles
    if ((theme === 'brutalism' || theme === 'vintage') && char !== ' ') {
      // Add text shadow for brutalism
      if (theme === 'brutalism') {
        baseStyle.textShadow = '1px 1px 0 #000'
      }
      // Ensure proper rendering for both themes
      baseStyle.minHeight = '1em'
      baseStyle.willChange = 'transform, opacity'
      // Ensure text is never completely invisible
      baseStyle.opacity = 0.8
    }

    // Add highlight color if provided
    if (highlightColor && char !== ' ') {
      baseStyle.color = highlightColor
    }

    return baseStyle
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      key={key} // Force re-render when key changes
      onAnimationComplete={() => onAnimationComplete?.()}
      style={{
        // Ensure container doesn't clip text, especially for brutalism theme
        overflow: 'visible',
        // Force centering when text-center class is present
        ...(className?.includes('text-center')
          ? {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              textAlign: 'center'
            }
          : {
              display: 'inline-block',
              width: 'auto'
            }),
        ...(theme === 'brutalism' && {
          width: className?.includes('text-center') ? '100%' : 'auto'
        })
      }}
    >
      <span
        style={{
          display: 'inline-block',
          textAlign: 'inherit'
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            custom={index}
            variants={charVariants}
            style={{
              ...getCharacterStyle(char),
              // Ensure each character is properly displayed
              ...(theme === 'brutalism' && {
                position: 'relative',
                zIndex: 1
              })
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  )
}
