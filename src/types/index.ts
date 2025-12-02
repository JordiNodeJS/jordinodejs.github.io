// ============================================================================
// TIPOS PRINCIPALES DEL PORTAFOLIO
// ============================================================================

export interface Presentation {
  name: string
  title: string
  description: string
}

/**
 * Interfaz para datos estructurales de proyectos (sin texto traducible)
 */
export interface ProjectData {
  id: string
  status: 'in production' | 'done' | 'retired'
  imgCover: string
  screenshots?: string[]
  video?: string
  link: string
  demo?: string
  tags: string[]
  featured?: boolean
}

/**
 * Interfaz unificada para proyectos del portafolio (con traducciones)
 * Basada en la estructura real de datos en portfolio-data.ts
 */
export interface Project {
  id: string
  title: string
  description: string
  status: 'in production' | 'done' | 'retired'
  imgCover: string
  screenshots?: string[]
  video?: string
  link: string
  demo?: string
  tags: string[]
  featured?: boolean
}

/**
 * Interfaz para logros/achievements
 */
export interface Achievement {
  title: string
  description: string
  impact: string
  icon?: string
}

/**
 * Interfaz para datos estructurales de experiencias (sin texto traducible)
 */
export interface ExperienceData {
  id: string
  company: string
  period: string
  location?: string
  links?: string[]
  technologies?: {
    frontend?: string
    testing?: string
    methodologies?: string
    tools?: string
  }
  projects?: Record<string, string>
  achievements?: Achievement[]
  clickable?: boolean
}

/**
 * Interfaz unificada para experiencias laborales
 * Simplificada pero manteniendo funcionalidad completa
 */
export interface Experience {
  id: string
  company: string
  title: string
  period: string
  description: string
  location?: string
  links?: string[]
  technologies?: {
    frontend?: string
    testing?: string
    methodologies?: string
    tools?: string
  }
  projects?: Record<string, string>
  achievements?: Achievement[]
  clickable?: boolean
}

/**
 * Interfaz para datos estructurales de educación (sin texto traducible)
 */
export interface EducationData {
  id: string
  center: string
  link?: string
  start_date: string
  end_date: string
  tags: string[]
  duration?: string
  featured?: boolean
  certificate?: {
    available: boolean
    url?: string
  }
}

/**
 * Interfaz unificada para educación
 * Extendida para incluir propiedades adicionales del portafolio
 */
export interface Education {
  id: string
  center: string
  link?: string
  title: string
  description: string
  start_date: string
  end_date: string
  tags: string[]
  duration?: string
  featured?: boolean
  certificate?: {
    available: boolean
    url?: string
  }
}

export interface ContactInfo {
  email?: string
  github?: string
  linkedin?: string
  portfolio?: string
}

export interface Skill {
  id: string
  name: string
  level: number
  category:
    | 'frontend'
    | 'backend'
    | 'database'
    | 'devops'
    | 'tools'
    | 'testing'
    | 'other'
  icon?: string
  description?: string
  keywords?: string[]
}

// ============================================================================
// TIPOS PARA COMPATIBILIDAD CON EL SISTEMA EXISTENTE
// ============================================================================

/**
 * Tipo para compatibilidad con useCentralizedPortfolioData
 * @deprecated Use Experience instead
 */
export type ExperienceType = {
  company: string
  experience: string
  links?: string[]
  period?: string
  location?: string
}

/**
 * Interfaz para datos del portafolio completo
 */
export interface DatabaseData {
  presentation?: Presentation
  projects?: Project[]
  skills?: Skill[]
  experiences?: Experience[]
  education?: Education[]
}

// ============================================================================
// TIPOS DE CONFIGURACIÓN
// ============================================================================

export const SUPPORTED_LANGUAGES = [
  'es',
  'en',
  'fr',
  'de',
  'it',
  'pt',
  'ca'
] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]
