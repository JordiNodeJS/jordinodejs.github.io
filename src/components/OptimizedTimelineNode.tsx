import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface OptimizedTimelineNodeProps {
  index: number;
  isCardHovered: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const OptimizedTimelineNode: React.FC<OptimizedTimelineNodeProps> = React.memo(({
  index,
  isCardHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isNodeHovered, setIsNodeHovered] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });
  
  const nodeRef = useRef<HTMLDivElement>(null);

  // Combinar refs
  const combinedRef = (el: HTMLDivElement) => {
    ref.current = el;
    nodeRef.current = el;
  };

  return (
    <motion.div
      ref={combinedRef}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.3,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative z-20"
    >
      <motion.div
        className="w-6 h-6 bg-primary-500 rounded-full border-4 dark:border-slate-900 border-white relative overflow-hidden shadow-lg shadow-primary-500/50"
        animate={
          isCardHovered || isNodeHovered
            ? { scale: 1.3, rotate: 180 }
            : { scale: 1, rotate: 0 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseEnter={() => {
          setIsNodeHovered(true);
          onMouseEnter?.();
        }}
        onMouseLeave={() => {
          setIsNodeHovered(false);
          onMouseLeave?.();
        }}
      >
        {/* Solo renderizar animaciones infinitas si está en viewport */}
        {isIntersecting && (
          <>
            {/* Pulsing effect */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.9, 0.4, 0.9],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="absolute inset-0 bg-primary-400 rounded-full"
            />

            {/* Ripple effect */}
            <motion.div
              animate={{
                scale: [1, 3],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1.5 + index * 0.3,
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-primary-300 rounded-full"
            />

            {/* Inner glow */}
            <motion.div
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-1 bg-white rounded-full opacity-80"
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
});

OptimizedTimelineNode.displayName = 'OptimizedTimelineNode';

export default OptimizedTimelineNode;