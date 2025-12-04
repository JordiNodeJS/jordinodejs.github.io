import { createContext } from 'react'

export type Theme = 'dark' | 'light' | 'vintage' | 'retro-pastel' | 'brutalism'

export type DesignMode = 
  | 'zen-minimalist'
  | 'interactive-3d'
  | 'bento-grid'
  | 'neo-brutalist'
  | 'glassmorphism'
  | 'scrollytelling'
  | 'terminal'
  | 'organic-nature'
  | 'magazine'
  | 'immersive-gamer'

export interface ThemeContextType {
  theme: Theme
  designMode: DesignMode
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  setDesignMode: (mode: DesignMode) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
