import React from 'react'
import { motion } from 'framer-motion'

// Optimized Motion div with throttled updates
export const OptimizedMotionDiv = React.memo(motion.div)

// Optimized wrapper to prevent unnecessary re-renders of static components
export const StaticWrapper: React.FC<{ children: React.ReactNode }> =
  React.memo(({ children }) => {
    return <>{children}</>
  })

StaticWrapper.displayName = 'StaticWrapper'

export default {
  OptimizedMotionDiv,
  StaticWrapper
}
