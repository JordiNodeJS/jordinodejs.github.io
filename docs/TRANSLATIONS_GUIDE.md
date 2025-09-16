# 🌍 Sistema de Traducciones del Portafolio

Este documento explica cómo funciona el sistema de internacionalización (i18n) del portafolio y cómo agregar o modificar traducciones.

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Estructura del Sistema](#estructura-del-sistema)
3. [Idiomas Soportados](#idiomas-soportados)
4. [Cómo Funciona](#cómo-funciona)
5. [Agregar Nuevas Traducciones](#agregar-nuevas-traducciones)
6. [Modificar Traducciones Existentes](#modificar-traducciones-existentes)
7. [Buenas Prácticas](#buenas-prácticas)
8. [Solución de Problemas](#solución-de-problemas)

## 🔍 Descripción General

El portafolio utiliza **react-i18next** para la internacionalización, permitiendo mostrar el contenido en múltiples idiomas. El sistema detecta automáticamente el idioma del usuario y permite cambiar entre idiomas mediante un selector.

### Características Principales:

- ✅ **Detección automática** del idioma del navegador
- ✅ **Persistencia** del idioma seleccionado en localStorage
- ✅ **Cambio dinámico** sin recargar la página
- ✅ **Fallback** al español como idioma predeterminado
- ✅ **Tipado seguro** con TypeScript

## 🏗️ Estructura del Sistema

```
src/
├── i18n/
│   ├── index.ts                 # Configuración principal de i18next
│   └── locales/                 # Archivos de traducción
│       ├── es.json             # Español (idioma base)
│       ├── en.json             # Inglés
│       ├── fr.json             # Francés
│       ├── de.json             # Alemán
│       ├── it.json             # Italiano
│       ├── pt.json             # Portugués
│       └── ca.json             # Catalán
├── hooks/
│   └── usePortfolioTranslations.ts  # Hook personalizado para traducciones
└── components/
    └── LanguageSelector.tsx     # Selector de idiomas
```

## 🌐 Idiomas Soportados

| Idioma    | Código | Archivo   | Estado                    |
| --------- | ------ | --------- | ------------------------- |
| Español   | `es`   | `es.json` | ✅ Completo (idioma base) |
| English   | `en`   | `en.json` | ✅ Completo               |
| Français  | `fr`   | `fr.json` | ✅ Completo               |
| Deutsch   | `de`   | `de.json` | ✅ Completo               |
| Italiano  | `it`   | `it.json` | ✅ Completo               |
| Português | `pt`   | `pt.json` | ✅ Completo               |
| Català    | `ca`   | `ca.json` | ✅ Completo               |

## ⚙️ Cómo Funciona

### 1. Configuración (i18n/index.ts)

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Importar traducciones
import es from './locales/es.json'
import en from './locales/en.json'
// ... otros idiomas

const resources = {
  es: { translation: es },
  en: { translation: en }
  // ... otros recursos
}

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    debug: false,

    interpolation: {
      escapeValue: false // React ya escapa valores
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'] // Guarda preferencia del usuario
    }
  })
```

### 2. Estructura de Archivos JSON

Cada archivo de idioma sigue esta estructura jerárquica:

```json
{
  "navigation": {
    "home": "Inicio",
    "experience": "Experiencia",
    "projects": "Proyectos",
    "skills": "Habilidades",
    "education": "Educación",
    "contact": "Contacto"
  },
  "hero": {
    "greeting": "¡Hola! Soy",
    "name": "JOrGE",
    "title": "Frontend React Engineer",
    "subtitle": "Desarrollador Frontend especializado en React..."
  },
  "skills": {
    "title": "Habilidades Técnicas",
    "subtitle": "Tecnologías y herramientas con las que trabajo",
    "methodologies": "Metodologías y Herramientas"
  },
  "experience": {
    "title": "Experiencia Profesional",
    "subtitle": "Mi trayectoria profesional desarrollando soluciones innovadoras",
    "companies": {
      "flipo": {
        "title": "FLiPO | Frontend React Engineer",
        "period": "Julio 2023 – Abril 2025",
        "description": "En FLiPO, startup líder en venta online de gafas modulares y graduadas, diseñé y desarrollé interfaces dinámicas en React, optimizando la experiencia de usuario y garantizando una comunicación fluida con el backend a través de integraciones API. Implementé componentes reutilizables y flujos de datos eficientes que mejoraron la usabilidad y la coherencia visual de la plataforma."
      }
    }
  },
  "education": {
    "title": "Formación Académica",
    "subtitle": "Mi trayectoria de aprendizaje continuo..."
  }
}
```

### 3. Hook Personalizado (usePortfolioTranslations.ts)

```typescript
import { useTranslation } from 'react-i18next'

export const usePortfolioTranslations = () => {
  const { t, i18n } = useTranslation()

  // Helpers organizados por secciones
  const skills = {
    title: t('skills.title'),
    subtitle: t('skills.subtitle'),
    methodologies: t('skills.methodologies')
  }

  const education = {
    title: t('education.title'),
    subtitle: t('education.subtitle')
  }

  return {
    t,
    i18n,
    skills,
    education
    // ... otras secciones
  }
}
```

### 4. Uso en Componentes

```tsx
import { usePortfolioTranslations } from '../hooks/usePortfolioTranslations'

const Skills = () => {
  const { skills } = usePortfolioTranslations()

  return (
    <section>
      <h2>{skills.title}</h2>
      <p>{skills.subtitle}</p>
    </section>
  )
}
```

## ➕ Agregar Nuevas Traducciones

### Paso 1: Agregar la clave en el idioma base (es.json)

```json
{
  "skills": {
    "title": "Habilidades Técnicas",
    "methodologies": "Metodologías y Herramientas",
    "newKey": "Nuevo texto en español"
  }
}
```

### Paso 2: Traducir a todos los idiomas

Agregar la misma clave en todos los archivos de idiomas:

**en.json:**

```json
{
  "skills": {
    "newKey": "New text in English"
  }
}
```

**fr.json:**

```json
{
  "skills": {
    "newKey": "Nouveau texte en français"
  }
}
```

### Paso 3: Actualizar el hook (opcional)

Si es una sección nueva, agregar al hook:

```typescript
const skills = {
  title: t('skills.title'),
  methodologies: t('skills.methodologies'),
  newKey: t('skills.newKey') // Nueva clave
}
```

### Paso 4: Usar en el componente

```tsx
const { skills } = usePortfolioTranslations()

return <p>{skills.newKey}</p>
```

## ✏️ Modificar Traducciones Existentes

1. **Localizar la clave:** Buscar en los archivos JSON la clave correspondiente
2. **Modificar el texto:** Cambiar el valor en el idioma deseado
3. **Verificar consistencia:** Asegurarse de que el cambio tenga sentido en contexto

### Ejemplo:

```json
// Antes
{
  "skills": {
    "title": "Habilidades Técnicas"
  }
}

// Después
{
  "skills": {
    "title": "Competencias Técnicas"
  }
}
```

## � Estructura de Experiencia Profesional

La sección de experiencia profesional tiene una estructura jerárquica específica que permite organizar la información de manera consistente en todos los idiomas:

### Estructura Jerárquica:

```json
{
  "experience": {
    "title": "Experiencia Profesional",
    "subtitle": "Mi trayectoria profesional desarrollando soluciones innovadoras",
    "location": "España",
    "viewProject": "Ver proyecto",
    "clickTooltip": "💡 Haz clic para ver logros destacados",
    "technologiesUsed": "Tecnologías utilizadas",
    "achievements": "Logros Destacados",
    "description": "Descripción:",
    "impact": "Impacto:",
    "period": "Período:",
    "technologiesAndMethodologies": "Tecnologías y Metodologías Utilizadas:",
    "frontend": "Frontend:",
    "testing": "Testing:",
    "methodologies": "Metodologías:",
    "tools": "Herramientas:",
    "featuredProjects": "Proyectos destacados:",
    "companies": {
      "flipo": {
        "title": "FLiPO | Frontend React Engineer",
        "period": "Julio 2023 – Abril 2025",
        "description": "En FLiPO, startup líder en venta online de gafas modulares y graduadas, diseñé y desarrollé interfaces dinámicas en React, optimizando la experiencia de usuario y garantizando una comunicación fluida con el backend a través de integraciones API. Implementé componentes reutilizables y flujos de datos eficientes que mejoraron la usabilidad y la coherencia visual de la plataforma."
      },
      "itacademy": {
        "title": "IT Academy BCN | Frontend React Engineer",
        "period": "2022",
        "description": "En IT Academy BCN colaboré remotamente en un equipo de 12 personas utilizando metodologías ágiles (Scrum, Kanban y sprints de 2 semanas). Participé en el desarrollo de proyectos como ITA Directory e ITA Game, enfocándome en la mejora del sistema ERP y la implementación de nuevas funcionalidades."
      }
    }
  }
}
```

### Características Importantes:

- **Estructura anidada**: Las empresas están organizadas bajo `experience.companies.{company}`
- **Información consistente**: Cada empresa tiene `title`, `period`, y `description`
- **Metadatos útiles**: Incluye tooltips, etiquetas de sección, y términos técnicos
- **Escalabilidad**: Fácil agregar nuevas empresas siguiendo el mismo patrón

### Agregar Nueva Empresa:

Para agregar una nueva experiencia laboral:

1. **Agregar en español** (`es.json`):

```json
"companies": {
  "flipo": { ... },
  "itacademy": { ... },
  "nuevaEmpresa": {
    "title": "Nueva Empresa | Frontend Developer",
    "period": "Enero 2025 – Presente",
    "description": "Descripción detallada de la experiencia..."
  }
}
```

2. **Traducir a todos los idiomas** manteniendo la misma estructura
3. **Actualizar el hook** si es necesario para acceder a los nuevos datos

## �📋 Buenas Prácticas

### ✅ Hacer:

1. **Mantener coherencia** en las claves entre idiomas
2. **Usar nombres descriptivos** para las claves (`skills.methodologies` vs `skills.m1`)
3. **Agrupar por secciones** (navigation, hero, skills, etc.)
4. **Verificar todos los idiomas** cuando se agrega una nueva clave
5. **Usar el hook personalizado** en lugar de `useTranslation` directamente
6. **Probar en diferentes idiomas** antes de hacer commit

### ❌ Evitar:

1. **Texto hardcodeado** en los componentes
2. **Claves duplicadas** o inconsistentes
3. **Traducciones automáticas** sin revisión
4. **Espacios o caracteres especiales** en las claves
5. **Modificar solo un idioma** sin actualizar los demás

## 🔧 Solución de Problemas

### Problema: "La traducción no aparece"

**Posibles causas:**

- La clave no existe en el archivo JSON
- Hay un error de sintaxis en el JSON
- La clave no está en el hook personalizado

**Solución:**

```bash
# Verificar sintaxis JSON
npm run lint

# Verificar que la clave existe
grep -r "mi.nueva.clave" src/i18n/locales/
```

### Problema: "Solo funciona en español"

**Posibles causas:**

- La clave solo existe en `es.json`
- Error en la importación de otros idiomas

**Solución:**

1. Verificar que la clave existe en todos los archivos
2. Comprobar la configuración de i18n

### Problema: "El cambio de idioma no funciona"

**Posibles causas:**

- Error en LanguageSelector
- localStorage corrupto
- Configuración incorrecta

**Solución:**

```javascript
// Limpiar localStorage
localStorage.removeItem('i18nextLng')

// Verificar configuración
console.log(i18n.language)
```

## 📝 Ejemplo Completo

### 1. Agregar nueva sección "about"

**es.json:**

```json
{
  "about": {
    "title": "Acerca de Mí",
    "description": "Soy un desarrollador apasionado..."
  }
}
```

**en.json:**

```json
{
  "about": {
    "title": "About Me",
    "description": "I'm a passionate developer..."
  }
}
```

### 2. Actualizar hook

```typescript
const about = {
  title: t('about.title'),
  description: t('about.description')
}

return {
  // ...otras secciones
  about
}
```

### 3. Usar en componente

```tsx
const About = () => {
  const { about } = usePortfolioTranslations()

  return (
    <section>
      <h2>{about.title}</h2>
      <p>{about.description}</p>
    </section>
  )
}
```

## 🚨 Texto Hardcodeado Identificado

Se ha identificado texto hardcodeado en español que necesita ser movido al sistema de traducciones:

### Skills.tsx (línea ~576):

```tsx
// ❌ PROBLEMA: Texto hardcodeado
{
  theme === 'brutalism'
    ? 'MÉTODOS EFICIENTES, RESULTADOS EXCEPCIONALES'
    : skillsTranslations.methodologies &&
      skillsTranslations.methodologies.includes('Metodologías')
    ? 'Metodologías eficientes para resultados excepcionales'
    : 'Efficient methodologies for exceptional results'
}

// ✅ SOLUCIÓN: Usar sistema de traducciones
{
  skills.efficientMethodologies
}
```

### Claves a agregar:

```json
{
  "skills": {
    "efficientMethodologies": "Metodologías eficientes para resultados excepcionales",
    "efficientMethodologiesBrutalism": "MÉTODOS EFICIENTES, RESULTADOS EXCEPCIONALES"
  }
}
```

---

## 🔄 Cambios Recientes y Estado Actual

### Últimas Actualizaciones (Septiembre 2025):

✅ **Descripción de FLiPO actualizada** - Se actualizó la descripción de la experiencia en FLiPO para reflejar mejor las responsabilidades específicas:

- Enfoque en el diseño y desarrollo de interfaces dinámicas en React
- Optimización de la experiencia de usuario
- Implementación de integraciones API
- Desarrollo de componentes reutilizables y flujos de datos eficientes

✅ **Traducciones completadas** - Todos los idiomas soportados tienen la nueva descripción:

- 🇪🇸 Español (idioma base)
- 🇺🇸 Inglés
- 🇫🇷 Francés
- 🇩🇪 Alemán
- 🇮🇹 Italiano
- 🇵🇹 Portugués
- 🇨🇦 Catalán

### Estado del Sistema:

- **📊 Cobertura de traducción**: 100% en todos los idiomas soportados
- **🏗️ Arquitectura**: Completamente basada en react-i18next con detección automática
- **🔧 Mantenimiento**: Sistema escalable y fácil de mantener
- **📱 UX**: Cambio de idioma dinámico sin recarga de página
- **💾 Persistencia**: Preferencias de idioma guardadas localmente

### Próximos Pasos Recomendados:

1. **Testing automatizado** de todas las traducciones
2. **Validación de consistencia** entre idiomas
3. **Herramientas de traducción** para futuros cambios masivos
4. **Métricas de uso** por idioma para optimizar recursos

---

Este sistema de traducciones proporciona una base sólida para mantener el portafolio multiidioma de manera eficiente y escalable. Siguiendo estas guías, puedes agregar nuevos idiomas o contenido manteniendo la consistencia y calidad en todas las traducciones.
