import React, { useState, useEffect } from 'react'

interface ProgressiveTextRevealProps {
  text: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

const ProgressiveTextReveal: React.FC<ProgressiveTextRevealProps> = React.memo(
  ({ text, className = '', style = {} }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      // Simple delayed visibility without complex animations or filters
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 100)

      return () => clearTimeout(timer)
    }, [])

    return (
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={style}
      >
        {text}
      </div>
    )
  }
)

ProgressiveTextReveal.displayName = 'ProgressiveTextReveal'

export default ProgressiveTextReveal
