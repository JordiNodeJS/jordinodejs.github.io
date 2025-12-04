import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { type DesignMode } from '../contexts/ThemeContextDef'
import { Palette, X, Layout, Box, Terminal, Leaf, BookOpen, Gamepad2, Monitor, Grid, Layers } from 'lucide-react'

const DesignSwitcher = () => {
  const { designMode, setDesignMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const designs: { id: DesignMode; name: string; icon: any; description: string }[] = [
    { id: 'zen-minimalist', name: 'Zen Minimalist', icon: Layout, description: 'Clean, whitespace, typography focus' },
    { id: 'interactive-3d', name: 'Interactive 3D', icon: Box, description: ' immersive 3D elements and physics' },
    { id: 'bento-grid', name: 'Bento Grid', icon: Grid, description: 'Structured, modular grid layout' },
    { id: 'neo-brutalist', name: 'Neo-Brutalist', icon: Layers, description: 'Bold, raw, high contrast' },
    { id: 'glassmorphism', name: 'Glassmorphism', icon: Monitor, description: 'Translucent, ethereal, depth' },
    { id: 'scrollytelling', name: 'Scrollytelling', icon: BookOpen, description: 'Narrative driven scroll experience' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, description: 'Hacker style command line interface' },
    { id: 'organic-nature', name: 'Organic Nature', icon: Leaf, description: 'Soft, flowing, natural shapes' },
    { id: 'magazine', name: 'Magazine', icon: Palette, description: 'High-fashion editorial aesthetic' },
    { id: 'immersive-gamer', name: 'Gamer HUD', icon: Gamepad2, description: 'Sci-fi game interface style' },
  ]

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full shadow-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        title="Switch Design"
      >
        <Layout className="w-6 h-6" />
      </motion.button>

      {/* Modal/Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed bottom-20 left-6 z-50 w-80 md:w-96 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-800/50">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Palette className="w-4 h-4 text-primary-400" />
                  Design Switcher
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-2 space-y-1 custom-scrollbar">
                {designs.map((design) => {
                  const Icon = design.icon
                  const isActive = designMode === design.id
                  return (
                    <motion.button
                      key={design.id}
                      className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-all ${
                        isActive
                          ? 'bg-primary-600/20 border border-primary-500/50'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                      onClick={() => {
                        setDesignMode(design.id)
                        // Optional: Close on select or keep open
                        // setIsOpen(false) 
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-primary-500 text-white' : 'bg-slate-800 text-gray-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`font-medium ${isActive ? 'text-primary-300' : 'text-gray-200'}`}>
                          {design.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {design.description}
                        </div>
                      </div>
                      {isActive && (
                        <div className="ml-auto self-center w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default DesignSwitcher
