import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  PROJECTS_DATA,
  EXPERIENCES_DATA,
  EDUCATION_DATA
} from '../data/portfolio-data'
import type { Project, ExperienceType, Education } from '../types'

/**
 * Hook personalizado que centraliza los datos del portafolio
 * 🎯 VENTAJAS:
 * - Un solo lugar para agregar proyectos y experiencias
 * - Traducciones automáticas con fallback
 * - Consistencia entre componentes
 * - Fácil mantenimiento
 */
export const useCentralizedPortfolioData = () => {
  const { t, i18n } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [education, setEducation] = useState<Education[]>([])

  useEffect(() => {
    // Transformar datos de proyectos con traducciones automáticas
    const transformedProjects: Project[] = PROJECTS_DATA.map(projectData => {
      // Obtener traducciones desde los archivos JSON (sin fallback)
      const translatedTitle = t(`projects.items.${projectData.id}.title`)
      const translatedDescription = t(
        `projects.items.${projectData.id}.description`
      )

      return {
        id: projectData.id,
        title: translatedTitle,
        description: translatedDescription,
        status: projectData.status,
        imgCover: projectData.imgCover,
        link: projectData.link,
        demo: projectData.demo,
        tags: projectData.tags,
        featured: projectData.featured
      }
    })

    // Transformar datos de experiencias con traducciones automáticas
    const transformedExperiences: ExperienceType[] = EXPERIENCES_DATA.map(
      expData => {
        // Obtener traducciones desde los archivos JSON (sin fallback)
        const translatedTitle = t(`experience.companies.${expData.id}.title`)
        const translatedDescription = t(
          `experience.companies.${expData.id}.description`
        )

        return {
          company: translatedTitle,
          experience: translatedDescription,
          links: expData.links || [],
          period: expData.period,
          location: expData.location
        }
      }
    )

    // Transformar datos de educación con traducciones automáticas
    const transformedEducation: Education[] = EDUCATION_DATA.map(eduData => {
      // Obtener traducciones desde los archivos JSON (sin fallback)
      const translatedTitle = t(`educationTranslations.${eduData.id}.title`)
      const translatedDescription = t(
        `educationTranslations.${eduData.id}.description`
      )
      const translatedCenter = t(`educationTranslations.${eduData.id}.center`, {
        defaultValue: eduData.center
      })

      return {
        id: eduData.id,
        center: translatedCenter,
        link: eduData.link,
        title: translatedTitle,
        description: translatedDescription,
        start_date: eduData.start_date,
        end_date: eduData.end_date,
        tags: eduData.tags
      }
    })

    setProjects(transformedProjects)
    setExperiences(transformedExperiences)
    setEducation(transformedEducation)
  }, [t, i18n.language])

  // Función para obtener logros de una empresa específica
  const getAchievements = (companyName: string) => {
    const experienceData = EXPERIENCES_DATA.find(
      exp => exp.company === companyName
    )

    if (!experienceData?.achievements) {
      return []
    }

    return experienceData.achievements.map((achievement, index) => ({
      title: achievement.title,
      description: achievement.description,
      impact: achievement.impact,
      icon: achievement.icon || getDefaultIcon(companyName, index)
    }))
  }

  // Función para obtener información de una empresa
  const getCompanyInfo = (companyName: string) => {
    const experienceData = EXPERIENCES_DATA.find(
      exp => exp.company === companyName
    )

    if (!experienceData) {
      return { title: '', period: '', description: '' }
    }

    const translatedTitle = t(`experience.companies.${experienceData.id}.title`)
    const translatedDescription = t(
      `experience.companies.${experienceData.id}.description`
    )

    return {
      title: translatedTitle,
      period: experienceData.period,
      description: translatedDescription,
      technologies: experienceData.technologies,
      projects: experienceData.projects
    }
  }

  // Función para verificar si una empresa es clickeable
  const isCompanyClickable = (companyName: string) => {
    const experienceData = EXPERIENCES_DATA.find(
      exp => exp.company === companyName
    )
    return experienceData?.clickable || false
  }

  // Función para obtener el nombre simplificado de la empresa
  const getSimpleCompanyName = (fullCompanyName: string) => {
    const experienceData = EXPERIENCES_DATA.find(exp =>
      exp.company.includes(fullCompanyName)
    )
    return experienceData?.company || fullCompanyName
  }

  // Función helper para iconos por defecto
  const getDefaultIcon = (companyName: string, index: number): string => {
    const iconMaps: Record<string, string[]> = {
      FLiPO: ['🎯', '🔧', '⚡', '📈', '💳', '🌿', '🤝'],
      'IT Academy BCN': ['🎨', '🔧', '⚡', '🚀', '👥', '📝', '🎓'],
      'Aula Magna Business School SLU': ['🎪', '🔧', '🎨', '✨']
    }

    const icons = iconMaps[companyName] || ['✨', '💡', '🚀', '⭐']
    return icons[index] || '✨'
  }

  return {
    projects,
    experiences,
    education,
    getAchievements,
    getCompanyInfo,
    isCompanyClickable,
    getSimpleCompanyName,

    // Datos originales por si se necesitan
    rawProjectsData: PROJECTS_DATA,
    rawExperiencesData: EXPERIENCES_DATA,
    rawEducationData: EDUCATION_DATA
  }
}
