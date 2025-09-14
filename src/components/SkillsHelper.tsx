// Helper functions for the Skills component

// Helper function to determine skill level for tech stack items
export const getLevelNameForTechStack = (
  techName: string
): 'beginner' | 'intermediate' | 'advanced' | 'expert' => {
  // Map tech names to appropriate skill levels
  const advancedTechs: string[] = [
    'React',
    'JavaScript',
    'CSS/SASS',
    'TailwindCSS'
  ]
  const intermediateTechs: string[] = [
    'TypeScript',
    'Next.js',
    'Redux',
    'Vite',
    'Astro'
  ]
  const expertTechs: string[] = [] // You can add any techs you consider expert level

  if (expertTechs.includes(techName)) return 'expert'
  if (advancedTechs.includes(techName)) return 'advanced'
  if (intermediateTechs.includes(techName)) return 'intermediate'
  return 'beginner'
}

// Helper function to provide descriptions for tech stack items
// Now uses translations instead of hardcoded descriptions
export const getDescriptionForTech = (
  techName: string,
  techStackDescriptions: Record<string, string>
): string => {
  return (
    techStackDescriptions[techName] ||
    `${techName} development and implementation`
  )
}

// Helper function to get English equivalent of skill levels
export const getSkillLevelText = (level: number): string => {
  if (level === 75) return 'B2'
  if (level === 60) return 'B1' // Nivel de inglés B1
  if (level >= 85) return 'Advanced'
  if (level >= 65) return 'Intermediate'
  if (level >= 40) return 'Basic'
  return 'Intermediate'
}
