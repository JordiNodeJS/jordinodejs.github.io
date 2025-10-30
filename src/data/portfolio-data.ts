// ============================================================================
// ARCHIVO CENTRAL DE DATOS DEL PORTAFOLIO
// ============================================================================
// 🎯 AGREGAR NUEVOS PROYECTOS Y EXPERIENCIAS AQUÍ
// Las traducciones se gestionan manualmente en los archivos JSON de idiomas
// ============================================================================

import type {
  ProjectData,
  ExperienceData,
  EducationData,
  Achievement
} from '../types'

// Re-exportar tipos
export type { ProjectData, ExperienceData, EducationData, Achievement }

// ============================================================================
// 🚀 PROYECTOS - Ordenados por relevancia e impacto
// ============================================================================
export const PROJECTS_DATA: ProjectData[] = [
  // Proyectos destacados y más recientes
  {
    id: 'astro-5-agosto',
    status: 'done',
    imgCover: 'img-project/mudanzasandy-frame.webp',
    link: 'https://github.com/JordiNodeJS/Mudanzas-Andy',
    demo: 'https://mudanzasandy.es',
    tags: ['astro', 'typescript', 'tailwind'],
    featured: true
  },
  {
    id: 'remove-bg-001',
    status: 'in production',
    imgCover: 'img-project/remove-bg.png',
    link: 'https://github.com/JordiNodeJS/remove-background',
    demo: 'http://ec2-3-254-74-19.eu-west-1.compute.amazonaws.com:3000/',
    tags: [
      'typescript',
      'nextjs',
      'express',
      'bun',
      'monorepo',
      'clerk',
      'tailwindcss',
      'ai',
      'imgly/background-removal-node'
    ],
    featured: true
  },
  {
    id: '9b681b4d',
    status: 'in production',
    imgCover: 'img-project/itacademy.png',
    link: 'https://github.com/IT-Academy-BCN/ita-directory',
    demo: 'https://ita-directory-app.vercel.app',
    tags: [
      'javascript',
      'react',
      'tailwindcss',
      'vite',
      'Redux Toolkit',
      'Vitest/Jest',
      'React Testing Library',
      'Styled Components',
      'UseForms'
    ],
    featured: true
  },
  {
    id: 'interior-design-landing',
    status: 'done',
    imgCover: 'img-project/interior-design-mockup.jpg',
    link: 'https://github.com/JordiNodeJS/webcode-interior-design',
    demo: 'https://interior-design.webcode.es/',
    tags: ['nextjs', 'typescript', 'bootstrap', 'scss'],
    featured: true
  },

  // Proyectos en desarrollo
  {
    id: '9b68cc3d',
    status: 'in production',
    imgCover: 'img-project/itagame.png',
    link: 'https://github.com/IT-Academy-BCN/ita-game',
    tags: ['javascript', 'react', 'tailwindcss', 'vite']
  },

  // Proyectos completos
  {
    id: '9b68aa3d',
    status: 'done',
    imgCover: 'img-project/generatelow.png',
    link: 'https://github.com/JordiNodeJS/generate-low-placeholder',
    demo: 'https://generate-low-placeholder.netlify.app/',
    tags: ['javascript', 'react', 'tailwindcss', 'cloudinary', 'vite']
  },
  {
    id: 'a3203tra',
    status: 'done',
    imgCover: 'img-project/freeforever.png',
    link: 'https://github.com/JordiNodeJS/freeforever',
    tags: [
      'html',
      'javascript',
      'css',
      'React',
      'tailwind',
      'Firebase',
      'Firestore'
    ]
  },
  {
    id: 'd4613430',
    status: 'done',
    imgCover: 'img-project/weather.png',
    link: 'https://github.com/JordiNodeJS/weather-app',
    tags: ['html', 'javascript', 'css', 'api']
  },
  {
    id: '781d5bab',
    status: 'done',
    imgCover: 'img-project/game.png',
    link: 'https://github.com/JordiNodeJS/AdivinaPro',
    tags: ['html', 'javascript', 'bootstrap']
  },
  {
    id: 'a3203cfa',
    status: 'done',
    imgCover: 'img-project/slider.png',
    link: 'https://jordinodejs.github.io/Image-Slideshow-Effect-OnlyJS/',
    tags: ['html', 'javascript', 'css']
  },

  // Proyectos legacy/retirados
  {
    id: '9b68qa3d',
    status: 'retired',
    imgCover: 'img-project/kings-league-project.png',
    link: 'https://github.com/JordiNodeJS/kings-league-project',
    tags: ['javascript', 'react', 'tailwindcss', 'git actions', 'vite']
  }
]

// ============================================================================
// 💼 EXPERIENCIAS - Ordenadas cronológicamente (más reciente primero)
// ============================================================================
export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    id: 'flipo',
    company: 'FLiPO',
    period: 'Julio 2023 – Abril 2025',
    location: 'España',
    clickable: true,
    achievements: [
      {
        title: 'Optimización de la Usabilidad del ERP',
        description:
          'Rediseñé y ajusté la interfaz para simplificar flujos de trabajo y mejorar la navegación del sistema.',
        impact:
          'Logré que los usuarios interactuaran de manera más intuitiva, reduciendo la curva de aprendizaje y aumentando la eficiencia operativa.',
        icon: '🎯'
      },
      {
        title: 'Depuración y Refactorización del Código',
        description:
          'Identifiqué áreas problemáticas y apliqué las mejores prácticas de programación para mejorar la legibilidad y calidad del código.',
        impact:
          'Refactoricé módulos críticos, eliminando redundancias y creando una base de código más estable y fácil de mantener.',
        icon: '🔧'
      },
      {
        title: 'Implementación de Nuevas Funcionalidades',
        description:
          'Diseñé e integré nuevas características al ERP, liderando el análisis de necesidades y usando metodologías ágiles para asegurar una integración fluida.',
        impact:
          'Incrementé la eficiencia operativa del sistema en un 30%, aportando soluciones innovadoras que respondieron directamente a las demandas de los usuarios.',
        icon: '⚡'
      },
      {
        title: 'Optimización del Rendimiento',
        description:
          'Realicé ajustes para reducir los tiempos de carga, optimizar consultas y gestionar de forma eficiente los recursos del ERP.',
        impact:
          'Mejoré significativamente la performance general del sistema, lo que se tradujo en una experiencia de usuario más ágil y confiable.',
        icon: '📈'
      },
      {
        title: 'Integración de Pasarela de Pago (Stripe, TPV y ERP)',
        description:
          'Lideré la implementación y optimización de la interfaz y lógica de pagos, trabajando en conjunto con el equipo de Backend, Tech Lead y Project Manager.',
        impact:
          'Agilidad Financiera: Permitió recibir pagos al instante en el momento de la entrega del pedido. Ventaja Competitiva: Fortaleció la posición de la empresa en el mercado al ofrecer una solución robusta y eficiente de gestión financiera.',
        icon: '💳'
      },
      {
        title: 'Implementación de Estrategia de Git (Feature Branching)',
        description:
          "Introduje y motivé al equipo a seguir una estrategia de ramificación basada en 'feature branching', adaptada a equipos medianos.",
        impact:
          'Esta metodología mejoró la organización del código y potenció la colaboración en el desarrollo, reduciendo conflictos y facilitando la integración de nuevas funcionalidades.',
        icon: '🌿'
      }
    ]
  },
  {
    id: 'itacademy',
    company: 'IT Academy BCN',
    period: '2022',
    location: 'España',
    clickable: true,
    technologies: {
      frontend:
        'JavaScript, TypeScript, React.js, Redux, Context API, Hooks, Styled Components',
      testing: 'Vitest',
      methodologies: 'Agile (Scrum, Kanban, sprints de 2 semanas), POO',
      tools: 'Git, GitHub, Sonar, Docker'
    },
    projects: {
      'ita-directory':
        'ITA Directory: Proyecto para estudiantes de Barcelona Activa - IT Academy',
      'ita-game':
        'ITA Game: Plataforma de gamificación para alumnos de academia de código'
    },
    achievements: [
      {
        title: 'Optimización del ERP y Mejoras en UI/UX',
        description:
          'Implementé ajustes estratégicos en la interfaz y experiencia de usuario, simplificando los flujos de navegación y reduciendo la curva de aprendizaje.',
        impact:
          'Mejoré significativamente la usabilidad del ERP, lo que facilitó las tareas diarias y aumentó la satisfacción de los usuarios.',
        icon: '🎨'
      },
      {
        title: 'Depuración y Refactorización de Código',
        description:
          'Identifiqué y solucioné áreas críticas en el código, eliminando redundancias y aplicando prácticas recomendadas de programación orientada a objetos.',
        impact:
          'Elevé la calidad y mantenibilidad del código, reduciendo el número de errores y facilitando futuras actualizaciones.',
        icon: '🔧'
      },
      {
        title: 'Optimización del Rendimiento de Consultas a la API',
        description:
          'Realicé ajustes específicos en la lógica de programación para optimizar la ejecución y eficiencia de las consultas.',
        impact:
          'Se notó una reducción en los tiempos de respuesta, lo que mejoró la performance general del sistema y la experiencia del usuario.',
        icon: '⚡'
      },
      {
        title: 'Implementación de Flujo de Trabajo con Git/GitHub (CI/CD)',
        description:
          'Establecí un proceso de integración y despliegue continuo a través de Git y GitHub, consolidando un flujo de trabajo ágil para el equipo.',
        impact:
          'Esto aceleró la entrega de nuevas funcionalidades y mejoras, al mismo tiempo que garantizó una mayor estabilidad en cada despliegue.',
        icon: '🚀'
      },
      {
        title: 'Colaboración en Equipo Remoto (12 personas)',
        description:
          'Trabajé efectivamente en un equipo distribuido de 12 personas utilizando metodologías ágiles como Scrum y Kanban con sprints de 2 semanas.',
        impact:
          'Contribuí al desarrollo exitoso de proyectos como ITA Directory e ITA Game, mejorando las habilidades de trabajo colaborativo del equipo.',
        icon: '👥'
      }
    ]
  },
  {
    id: 'aulaMagna',
    company: 'Aula Magna Business School SLU',
    period: '2022',
    location: 'España',
    clickable: true,
    achievements: [
      {
        title: 'Diseño Web de Eventos',
        description:
          'Desarrollé diseños web específicos para eventos, enfocándome en la presentación visual y funcionalidad específica para cada ocasión.',
        impact:
          'Creé experiencias web atractivas que mejoraron la presencia digital de los eventos y aumentaron la participación de los asistentes.',
        icon: '🎪'
      },
      {
        title: 'Mejora de Usabilidad Web',
        description:
          'Trabajé en equipo para identificar y resolver problemas de usabilidad, optimizando la navegación y accesibilidad del sitio web.',
        impact:
          'Logré una experiencia de usuario más fluida y accesible, reduciendo la tasa de abandono y mejorando la satisfacción del usuario.',
        icon: '🔧'
      },
      {
        title: 'Optimización de UX/UI',
        description:
          'Implementé mejoras en la experiencia e interfaz de usuario, aplicando principios de diseño centrado en el usuario.',
        impact:
          'Mejoré significativamente la interacción del usuario con la plataforma, creando interfaces más intuitivas y atractivas.',
        icon: '🎨'
      }
    ]
  }
]

// ============================================================================
// 🎓 EDUCACIÓN - Ordenada cronológicamente (más reciente primero)
// ============================================================================
export const EDUCATION_DATA: EducationData[] = [
  {
    id: 'edu5cc7',
    center: 'BootCamp IT Academy',
    link: 'https://www.barcelonactiva.cat/es/itacademy',
    start_date: '01/09/2015',
    end_date: '30/06/2019',
    duration: '18 semanas',
    tags: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'ReactJS',
      'MUI',
      'TailwindCSS',
      'Bootstrap',
      'Chakra',
      'Styled-Components',
      'Git',
      'GitHub',
      'TypeScript'
    ],
    featured: true,
    certificate: {
      available: true
    }
  },
  {
    id: 'edu7fcc',
    center: 'Center CIFO La Violeta',
    link: 'https://serveiocupacio.gencat.cat/es/soc/com-ens-organitzem/centres-propis-formacio-cifo-cfpa/centres-dinnovacio-i-formacio-ocupacional-cifo/cifo-barcelona-la-violeta/index.html',
    start_date: '01/09/2018',
    end_date: '30/06/2019',
    duration: '600 horas',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'Netlify',
      'Vercel',
      'Render',
      'Fly.io'
    ],
    featured: true,
    certificate: {
      available: true
    }
  },
  {
    id: 'edu5ucc',
    center: 'SINENSIA IT SOLUTIONS',
    start_date: '01/09/2018',
    end_date: '30/06/2019',
    duration: '60 horas',
    tags: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'],
    featured: false,
    certificate: {
      available: true
    }
  }
]

// ============================================================================
// 🌍 CONFIGURACIÓN DE IDIOMAS
// ============================================================================
export { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../types'

// ============================================================================
// 🛠️ UTILIDADES PARA ESTRUCTURA DE TRADUCCIONES
// ============================================================================
// Estas funciones se han eliminado ya que ahora los datos estructurales
// están separados de las traducciones. Todos los textos se manejan
// exclusivamente a través de los archivos JSON de idiomas.
