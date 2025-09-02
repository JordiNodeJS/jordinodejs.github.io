// ============================================================================
// ARCHIVO CENTRAL DE DATOS DEL PORTAFOLIO
// ============================================================================
// 🎯 AGREGAR NUEVOS PROYECTOS Y EXPERIENCIAS AQUÍ
// Las traducciones se gestionan manualmente en los archivos JSON de idiomas
// ============================================================================

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  status: "in production" | "done" | "retired";
  imgCover: string;
  link: string;
  demo?: string;
  tags: string[];
  featured?: boolean;
}

export interface ExperienceData {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  location?: string;
  links?: string[];
  technologies?: {
    frontend?: string;
    testing?: string;
    methodologies?: string;
    tools?: string;
  };
  projects?: Record<string, string>;
  achievements?: Achievement[];
  clickable?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  impact: string;
  icon?: string;
}

export interface EducationData {
  id: string;
  center: string;
  link?: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  tags: string[];
  duration?: string;
  featured?: boolean;
  certificate?: {
    available: boolean;
    url?: string;
  };
}

// ============================================================================
// 🚀 PROYECTOS - Ordenados por relevancia e impacto
// ============================================================================
export const PROJECTS_DATA: ProjectData[] = [
  // Proyectos destacados y más recientes
  {
    id: "astro-5-agosto",
    title: "Mudanzas Andy",
    description: "Diseñé la identidad visual y la experiencia de usuario de mudanzasandy.es, una web estática para empresa de mudanzas. Trabajo completo: diseño responsive, sistema de colores centralizado, maquetación accesible y optimización de imágenes y rendimiento.",
    status: "done",
    imgCover: "img-project/mudanzasandy-frame.webp",
    link: "https://github.com/JordiNodeJS/Mudanzas-Andy",
    demo: "https://mudanzasandy.es",
    tags: ["astro", "typescript", "tailwind"],
    featured: true
  },
  {
    id: "remove-bg-001",
    title: "Eliminador de Fondos",
    description: "Aplicación web que elimina automáticamente el fondo de imágenes usando inteligencia artificial. Permite subir imágenes, procesarlas en el backend y descargar la versión sin fondo. Ejemplo educativo de monorepo moderno con Next.js y Express usando Bun.",
    status: "in production",
    imgCover: "img-project/remove-bg.png",
    link: "https://github.com/JordiNodeJS/remove-background",
    demo: "http://ec2-3-254-74-19.eu-west-1.compute.amazonaws.com:3000/",
    tags: ["typescript", "nextjs", "express", "bun", "monorepo", "clerk", "tailwindcss", "ai", "imgly/background-removal-node"],
    featured: true
  },
  {
    id: "9b681b4d",
    title: "Directorio IT Academy",
    description: "Trabajando bajo metodologías ágiles como SCRUM, solucionando errores, realizando pruebas, implementando nuevas funcionalidades y documentación en conjunto con el backend.",
    status: "in production",
    imgCover: "img-project/itacademy.png",
    link: "https://github.com/IT-Academy-BCN/ita-directory",
    demo: "https://ita-directory-app.vercel.app",
    tags: ["javascript", "react", "tailwindcss", "vite", "Redux Toolkit", "Vitest/Jest", "React Testing Library", "Styled Components", "UseForms"],
    featured: true
  },
  
  // Proyectos en desarrollo
  {
    id: "9b68cc3d",
    title: "Ita-Game",
    description: "Gamificación de una plataforma de estudio utilizando React y Tailwind.",
    status: "in production",
    imgCover: "img-project/itagame.png",
    link: "https://github.com/IT-Academy-BCN/ita-game",
    tags: ["javascript", "react", "tailwindcss", "vite"]
  },
  
  // Proyectos completos
  {
    id: "9b68aa3d",
    title: "Generador de Placeholders para Imágenes",
    description: "La aplicación consiste en generar una imagen de muy baja resolución, respetando el contorno de la imagen original, con el propósito de ser utilizada como placeholder o sustituto temporal.",
    status: "done",
    imgCover: "img-project/generatelow.png",
    link: "https://github.com/JordiNodeJS/generate-low-placeholder",
    demo: "https://generate-low-placeholder.netlify.app/",
    tags: ["javascript", "react", "tailwindcss", "cloudinary", "vite"]
  },
  {
    id: "a3203tra",
    title: "FreeForEver",
    description: "UX/UI y funcionalidades para la arquitectura.",
    status: "done",
    imgCover: "img-project/freeforever.png",
    link: "https://github.com/JordiNodeJS/freeforever",
    tags: ["html", "javascript", "css", "React", "tailwind", "Firebase", "Firestore"]
  },
  {
    id: "d4613430",
    title: "App sobre el Tiempo",
    description: "El propósito de esta aplicación fue construir una interfaz entre el cliente y una API de terceros.",
    status: "done",
    imgCover: "img-project/weather.png",
    link: "https://github.com/JordiNodeJS/weather-app",
    tags: ["html", "javascript", "css", "api"]
  },
  {
    id: "781d5bab",
    title: "Adivina",
    description: "Juego básico creado en javascript cuyo objetivo de aprendizaje fue la manipulación del DOM del documento HTML para presentar los resultados.",
    status: "done",
    imgCover: "img-project/game.png",
    link: "https://github.com/JordiNodeJS/AdivinaPro",
    tags: ["html", "javascript", "bootstrap"]
  },
  {
    id: "a3203cfa",
    title: "Efecto de Carrusel de Imágenes Solo JS",
    description: "Un ejemplo de botón de un carrusel automático.",
    status: "done",
    imgCover: "img-project/slider.png",
    link: "https://jordinodejs.github.io/Image-Slideshow-Effect-OnlyJS/",
    tags: ["html", "javascript", "css"]
  },
  
  // Proyectos legacy/retirados
  {
    id: "9b68qa3d",
    title: "Proyecto King League",
    description: "Proyecto open source, donde colaboré corrigiendo algunos errores, documentación y github actions.",
    status: "retired",
    imgCover: "img-project/kings-league-project.png",
    link: "https://github.com/JordiNodeJS/kings-league-project",
    tags: ["javascript", "react", "tailwindcss", "git actions", "vite"]
  }
];

// ============================================================================
// 💼 EXPERIENCIAS - Ordenadas cronológicamente (más reciente primero)
// ============================================================================
export const EXPERIENCES_DATA: ExperienceData[] = [
  {
    id: "flipo",
    company: "FLiPO",
    title: "FLiPO | Frontend React Engineer",
    period: "Julio 2023 – Abril 2025",
    description: "Durante mi tiempo en FLiPO, una startup líder en venta online de gafas modulares y graduadas, contribuí significativamente al desarrollo y mejora del ERP interno, implementando soluciones innovadoras que impactaron directamente en la eficiencia operativa de la empresa.",
    location: "España",
    clickable: true,
    achievements: [
      {
        title: "Optimización de la Usabilidad del ERP",
        description: "Rediseñé y ajusté la interfaz para simplificar flujos de trabajo y mejorar la navegación del sistema.",
        impact: "Logré que los usuarios interactuaran de manera más intuitiva, reduciendo la curva de aprendizaje y aumentando la eficiencia operativa.",
        icon: "🎯"
      },
      {
        title: "Depuración y Refactorización del Código",
        description: "Identifiqué áreas problemáticas y apliqué las mejores prácticas de programación para mejorar la legibilidad y calidad del código.",
        impact: "Refactoricé módulos críticos, eliminando redundancias y creando una base de código más estable y fácil de mantener.",
        icon: "🔧"
      },
      {
        title: "Implementación de Nuevas Funcionalidades",
        description: "Diseñé e integré nuevas características al ERP, liderando el análisis de necesidades y usando metodologías ágiles para asegurar una integración fluida.",
        impact: "Incrementé la eficiencia operativa del sistema en un 30%, aportando soluciones innovadoras que respondieron directamente a las demandas de los usuarios.",
        icon: "⚡"
      },
      {
        title: "Optimización del Rendimiento",
        description: "Realicé ajustes para reducir los tiempos de carga, optimizar consultas y gestionar de forma eficiente los recursos del ERP.",
        impact: "Mejoré significativamente la performance general del sistema, lo que se tradujo en una experiencia de usuario más ágil y confiable.",
        icon: "📈"
      },
      {
        title: "Integración de Pasarela de Pago (Stripe, TPV y ERP)",
        description: "Lideré la implementación y optimización de la interfaz y lógica de pagos, trabajando en conjunto con el equipo de Backend, Tech Lead y Project Manager.",
        impact: "Agilidad Financiera: Permitió recibir pagos al instante en el momento de la entrega del pedido. Ventaja Competitiva: Fortaleció la posición de la empresa en el mercado al ofrecer una solución robusta y eficiente de gestión financiera.",
        icon: "💳"
      },
      {
        title: "Implementación de Estrategia de Git (Feature Branching)",
        description: "Introduje y motivé al equipo a seguir una estrategia de ramificación basada en 'feature branching', adaptada a equipos medianos.",
        impact: "Esta metodología mejoró la organización del código y potenció la colaboración en el desarrollo, reduciendo conflictos y facilitando la integración de nuevas funcionalidades.",
        icon: "🌿"
      }
    ]
  },
  {
    id: "itacademy",
    company: "IT Academy BCN",
    title: "IT Academy BCN | Frontend React Engineer",
    period: "2022",
    description: "En IT Academy BCN colaboré remotamente en un equipo de 12 personas utilizando metodologías ágiles (Scrum, Kanban y sprints de 2 semanas). Participé en el desarrollo de proyectos como ITA Directory e ITA Game, enfocándome en la mejora del sistema ERP y la implementación de nuevas funcionalidades.",
    location: "España",
    clickable: true,
    technologies: {
      frontend: "JavaScript, TypeScript, React.js, Redux, Context API, Hooks, Styled Components",
      testing: "Vitest",
      methodologies: "Agile (Scrum, Kanban, sprints de 2 semanas), POO",
      tools: "Git, GitHub, Sonar, Docker"
    },
    projects: {
      itaDirectory: "ITA Directory: Proyecto para estudiantes de Barcelona Activa - IT Academy",
      itaGame: "ITA Game: Plataforma de gamificación para alumnos de academia de código"
    },
    achievements: [
      {
        title: "Optimización del ERP y Mejoras en UI/UX",
        description: "Implementé ajustes estratégicos en la interfaz y experiencia de usuario, simplificando los flujos de navegación y reduciendo la curva de aprendizaje.",
        impact: "Mejoré significativamente la usabilidad del ERP, lo que facilitó las tareas diarias y aumentó la satisfacción de los usuarios.",
        icon: "🎨"
      },
      {
        title: "Depuración y Refactorización de Código",
        description: "Identifiqué y solucioné áreas críticas en el código, eliminando redundancias y aplicando prácticas recomendadas de programación orientada a objetos.",
        impact: "Elevé la calidad y mantenibilidad del código, reduciendo el número de errores y facilitando futuras actualizaciones.",
        icon: "🔧"
      },
      {
        title: "Optimización del Rendimiento de Consultas a la API",
        description: "Realicé ajustes específicos en la lógica de programación para optimizar la ejecución y eficiencia de las consultas.",
        impact: "Se notó una reducción en los tiempos de respuesta, lo que mejoró la performance general del sistema y la experiencia del usuario.",
        icon: "⚡"
      },
      {
        title: "Implementación de Flujo de Trabajo con Git/GitHub (CI/CD)",
        description: "Establecí un proceso de integración y despliegue continuo a través de Git y GitHub, consolidando un flujo de trabajo ágil para el equipo.",
        impact: "Esto aceleró la entrega de nuevas funcionalidades y mejoras, al mismo tiempo que garantizó una mayor estabilidad en cada despliegue.",
        icon: "🚀"
      },
      {
        title: "Colaboración en Equipo Remoto (12 personas)",
        description: "Trabajé efectivamente en un equipo distribuido de 12 personas utilizando metodologías ágiles como Scrum y Kanban con sprints de 2 semanas.",
        impact: "Contribuí al desarrollo exitoso de proyectos como ITA Directory e ITA Game, mejorando las habilidades de trabajo colaborativo del equipo.",
        icon: "👥"
      }
    ]
  },
  {
    id: "aulaMagna",
    company: "Aula Magna Business School SLU",
    title: "Aula Magna Business School SLU | Web Designer",
    period: "2022",
    description: "En Aula Magna Business School me especialicé en el diseño web de eventos, trabajando en equipo para mejorar la usabilidad web y la experiencia de usuario (UX/UI), creando soluciones visuales atractivas y funcionales.",
    location: "España",
    clickable: true,
    achievements: [
      {
        title: "Diseño Web de Eventos",
        description: "Desarrollé diseños web específicos para eventos, enfocándome en la presentación visual y funcionalidad específica para cada ocasión.",
        impact: "Creé experiencias web atractivas que mejoraron la presencia digital de los eventos y aumentaron la participación de los asistentes.",
        icon: "🎪"
      },
      {
        title: "Mejora de Usabilidad Web",
        description: "Trabajé en equipo para identificar y resolver problemas de usabilidad, optimizando la navegación y accesibilidad del sitio web.",
        impact: "Logré una experiencia de usuario más fluida y accesible, reduciendo la tasa de abandono y mejorando la satisfacción del usuario.",
        icon: "🔧"
      },
      {
        title: "Optimización de UX/UI",
        description: "Implementé mejoras en la experiencia e interfaz de usuario, aplicando principios de diseño centrado en el usuario.",
        impact: "Mejoré significativamente la interacción del usuario con la plataforma, creando interfaces más intuitivas y atractivas.",
        icon: "🎨"
      }
    ]
  }
];

// ============================================================================
// 🎓 EDUCACIÓN - Ordenada cronológicamente (más reciente primero)
// ============================================================================
export const EDUCATION_DATA: EducationData[] = [
  {
    id: "edu5cc7",
    center: "BootCamp IT Academy",
    link: "https://www.barcelonactiva.cat/es/itacademy",
    title: "Front-End React Developer",
    description: "Front-End React Developer en Bootcamp IT Academy: Un programa de 18 semanas donde se enseñaron habilidades como HTML, CSS, SASS, JavaScript, ReactJS, entre otros. Además, se utilizaron diferentes herramientas como Vite y Create React App, y se trabajó con librerías como Bootstrap, Mantine y MUI. Se realizó un proyecto que implicó el uso de GitHub, Typescript, Node, entre otros. También se aprendió a desplegar en diferentes plataformas, como GitHub Pages, Vercel, Netlify, Render.com y Fly.io.",
    start_date: "01/09/2015",
    end_date: "30/06/2019",
    duration: "18 semanas",
    tags: ["HTML", "CSS", "SASS", "JavaScript", "ReactJS", "MUI", "TailwindCSS", "Bootstrap", "Chakra", "Styled-Components", "Git", "GitHub", "TypeScript"],
    featured: true,
    certificate: {
      available: true
    }
  },
  {
    id: "edu7fcc",
    center: "Center CIFO La Violeta",
    link: "https://serveiocupacio.gencat.cat/es/soc/com-ens-organitzem/centres-propis-formacio-cifo-cfpa/centres-dinnovacio-i-formacio-ocupacional-cifo/cifo-barcelona-la-violeta/index.html",
    title: "Desarrollo de aplicaciones web Full Stack",
    description: "Desarrollo web Full Stack en CIFO La Violeta: Este curso de 600 horas permitió al estudiante adquirir habilidades en programación web en el entorno cliente y servidor, así como el desarrollo de documentos web utilizando lenguajes de marcado. También se enseñó sobre usabilidad y accesibilidad en el entorno cliente, acceso a datos en aplicaciones web en el entorno servidor y la implementación de aplicaciones web en entornos de internet, intranet y extranet. Se utilizaron diferentes herramientas de despliegue, como Heroku, Vercel, Netlify y GitHub Pages.",
    start_date: "01/09/2018",
    end_date: "30/06/2019",
    duration: "600 horas",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Netlify", "Vercel", "Render", "Fly.io"],
    featured: true,
    certificate: {
      available: true
    }
  },
  {
    id: "edu5ucc",
    center: "SINENSIA IT SOLUTIONS",
    title: "Desarrollo de aplicaciones web ANGULAR",
    description: "Desarrollo de Aplicaciones Web con Angular en SINENSIA IT SOLUTIONS: Un curso de 60 horas donde se enseñó el desarrollo de aplicaciones web utilizando Angular.",
    start_date: "01/09/2018",
    end_date: "30/06/2019",
    duration: "60 horas",
    tags: ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"],
    featured: false,
    certificate: {
      available: true
    }
  }
];

// ============================================================================
// 🌍 CONFIGURACIÓN DE IDIOMAS
// ============================================================================
export const SUPPORTED_LANGUAGES = ["es", "en", "fr", "de", "it", "pt", "ca"] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// ============================================================================
// 🛠️ UTILIDADES PARA ESTRUCTURA DE TRADUCCIONES
// ============================================================================

/**
 * Extrae los datos de proyectos en formato compatible con las traducciones
 */
export const getProjectsForTranslation = (): Record<string, { title: string; description: string }> => {
  return PROJECTS_DATA.reduce((acc, project) => ({
    ...acc,
    [project.id]: {
      title: project.title,
      description: project.description
    }
  }), {});
};

/**
 * Extrae los datos de experiencias en formato compatible con las traducciones
 */
export const getExperiencesForTranslation = (): Record<string, {
  title: string;
  period: string;
  description: string;
  frontend?: string;
  testing?: string;
  methodologies?: string;
  tools?: string;
  projects?: Record<string, string>;
}> => {
  return EXPERIENCES_DATA.reduce((acc, exp) => ({
    ...acc,
    [exp.id]: {
      title: exp.title,
      period: exp.period,
      description: exp.description,
      ...exp.technologies,
      ...(exp.projects && { projects: exp.projects })
    }
  }), {});
};

/**
 * Extrae los logros de las experiencias en formato compatible con las traducciones
 */
export const getAchievementsForTranslation = (): Record<string, Achievement[]> => {
  return EXPERIENCES_DATA
    .filter(exp => exp.achievements && exp.clickable)
    .reduce((acc, exp) => ({
      ...acc,
      [exp.company]: exp.achievements!.map(({ title, description, impact }) => ({
        title,
        description,
        impact
      }))
    }), {});
};

/**
 * Extrae los datos de educación en formato compatible con las traducciones
 */
export const getEducationForTranslation = () => {
  return EDUCATION_DATA.map(({ id, center, link, title, description, start_date, end_date, tags }) => ({
    id,
    center,
    link,
    title,
    description,
    start_date,
    end_date,
    tags
  }));
};