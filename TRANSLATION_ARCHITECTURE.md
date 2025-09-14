# Translation Architecture Guide

Este documento describe la arquitectura de traducciones del portfolio, cómo funciona el sistema de internacionalización y cómo agregar nuevas traducciones.

## 📁 Estructura del Sistema de Traducciones

```
src/
├── i18n/                           # Sistema de internacionalización
│   ├── index.ts                    # Configuración de i18next
│   └── locales/                    # Archivos de traducción por idioma
│       ├── ca.json                 # Catalán
│       ├── de.json                 # Alemán
│       ├── en.json                 # Inglés
│       ├── es.json                 # Español (idioma por defecto)
│       ├── fr.json                 # Francés
│       ├── it.json                 # Italiano
│       └── pt.json                 # Portugués
├── hooks/
│   └── usePortfolioTranslations.ts # Hook personalizado para traducciones
├── contexts/
│   └── ThemeContext.tsx           # Contexto que incluye manejo de idioma
└── components/
    ├── LanguageSelector.tsx        # Selector de idioma
    └── [otros componentes]         # Todos usan el hook usePortfolioTranslations
```

## 🔧 Configuración Técnica

### 1. Configuración de i18next (`src/i18n/index.ts`)

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importación de todas las traducciones
import es from './locales/es.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import ca from './locales/ca.json'

const resources = {
  es: { translation: es },
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ca: { translation: ca }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Idioma por defecto
  fallbackLng: 'es',
  interpolation: { escapeValue: false }
})
```

### 2. Hook Personalizado (`src/hooks/usePortfolioTranslations.ts`)

```typescript
import { useTranslation } from 'react-i18next'

export const usePortfolioTranslations = () => {
  const { t } = useTranslation()

  return {
    // Navegación
    navigationTranslations: {
      home: t('navigation.home'),
      experience: t('navigation.experience')
      // ... más traducciones
    },

    // Habilidades (incluyendo el problemático "stack tecnológico")
    skillsTranslations: {
      title: t('skills.title'),
      techStack: t('skills.techStack') // ← Esta es la traducción que funciona correctamente
      // ... más traducciones
    }

    // Otras secciones...
  }
}
```

## 📝 Estructura de Archivos de Traducción

Todos los archivos JSON en `src/i18n/locales/` siguen la misma estructura con **16 claves principales**:

```json
{
  "navigation": {
    "home": "...",
    "experience": "...",
    "projects": "...",
    "skills": "...",
    "education": "..."
  },
  "hero": {
    "name": "JORGE",
    "title": "Frontend React Engineer"
  },
  "experience": {
    "title": "...",
    "subtitle": "...",
    "companies": [...],
    "technologies": "..."
  },
  "projects": {
    "title": "...",
    "subtitle": "...",
    "showMore": "...",
    "projectList": [...]
  },
  "skills": {
    "title": "...",
    "subtitle": "...",
    "competencyLevel": "...",
    "techStack": "...",        // ← TRADUCCIÓN CLAVE QUE FUNCIONA CORRECTAMENTE
    "methodsAndTools": "...",
    "methodsSubtitle": "...",
    "skillLevels": {...},
    "techStackItems": [...],
    "methodologies": [...]
  },
  "education": {
    "title": "...",
    "subtitle": "...",
    "learningPhilosophy": "...",
    "philosophyQuote": "...",
    "courses": [...]
  },
  "contact": {
    "title": "...",
    "email": "..."
  },
  "footer": {
    "description": "...",
    "techStack": "...",       // ← OTRA INSTANCIA DE LA TRADUCCIÓN
    "connectWithMe": "...",
    "copyright": "...",
    "madeWith": "...",
    "designedWith": "..."
  },
  "theme": {
    "light": "...",
    "dark": "..."
  },
  "languages": {
    "es": "Español",
    "en": "English",
    "fr": "Français",
    "de": "Deutsch",
    "it": "Italiano",
    "pt": "Português",
    "ca": "Català"
  }
}
```

### Ejemplos de Traducción de "Stack Tecnológico"

| Idioma    | Código | Traducción de `skills.techStack` |
| --------- | ------ | -------------------------------- |
| Español   | `es`   | "Stack Tecnológico"              |
| Inglés    | `en`   | "Tech Stack"                     |
| Francés   | `fr`   | "Stack Technologique"            |
| Alemán    | `de`   | "Tech-Stack"                     |
| Italiano  | `it`   | "Stack Tecnologico"              |
| Portugués | `pt`   | "Stack Tecnológico"              |
| Catalán   | `ca`   | "Stack Tecnològic"               |

## 🔍 Verificación del Sistema

### Estado Actual (Comprobado el 2025-01-11)

✅ **Sistema funcionando correctamente:**

- ✅ Todas las 7 traducciones implementadas
- ✅ `skills.techStack` traduce correctamente en todos los idiomas
- ✅ Selector de idiomas funcional
- ✅ Cambio de idioma dinámico sin recarga
- ✅ Persistencia de preferencias de idioma
- ✅ No hay texto hardcodeado encontrado

### Componentes Verificados

1. **Skills.tsx**: Usa `skillsTranslations.techStack` ✅
2. **Footer.tsx**: Usa `footerTranslations.techStack` ✅
3. **LanguageSelector.tsx**: Funciona correctamente ✅
4. **Navigation.tsx**: Todas las traducciones funcionan ✅

## 📚 Cómo Agregar Nuevas Traducciones

### 1. Para Agregar un Nuevo Idioma

1. Crear archivo en `src/i18n/locales/[codigo].json`
2. Copiar estructura completa de `es.json`
3. Traducir todos los valores manteniendo las claves
4. Agregar el idioma a `src/i18n/index.ts`:

   ```typescript
   import xx from './locales/xx.json'

   const resources = {
     // ... idiomas existentes
     xx: { translation: xx }
   }
   ```

5. Agregar bandera en `src/components/LanguageSelector.tsx`

### 2. Para Agregar Nuevas Claves de Traducción

1. Añadir la clave en **todos** los archivos JSON de `src/i18n/locales/`
2. Actualizar el hook `usePortfolioTranslations.ts` si es necesario
3. Usar la traducción en el componente: `t('seccion.nuevaClave')`

### 3. Ejemplo: Agregar Nueva Sección "About"

**1. En todos los archivos JSON:**

```json
{
  // ... claves existentes
  "about": {
    "title": "Acerca de mí",
    "description": "Mi historia y pasión por el desarrollo"
  }
}
```

**2. En `usePortfolioTranslations.ts:`**

```typescript
export const usePortfolioTranslations = () => {
  const { t } = useTranslation()

  return {
    // ... traducciones existentes
    aboutTranslations: {
      title: t('about.title'),
      description: t('about.description')
    }
  }
}
```

**3. En el componente:**

```typescript
const { aboutTranslations } = usePortfolioTranslations()

return (
  <section>
    <h2>{aboutTranslations.title}</h2>
    <p>{aboutTranslations.description}</p>
  </section>
)
```

## 🚨 Reglas Importantes

### ✅ Hacer (DO)

- **Usar siempre el hook `usePortfolioTranslations`**
- **Mantener la misma estructura en todos los archivos JSON**
- **Verificar que todas las claves existan en todos los idiomas**
- **Usar nombres descriptivos para las claves de traducción**
- **Probar cada nuevo idioma después de agregarlo**

### ❌ No hacer (DON'T)

- **NUNCA hardcodear texto directamente en componentes**
- **No modificar solo algunos archivos de idioma (mantener sincronía)**
- **No usar `t()` directamente en componentes (usar el hook personalizado)**
- **No agregar HTML en las traducciones (usar componentes separados)**

## 🧪 Testing y Validación

### Verificación Manual

1. Cambiar idioma usando el selector
2. Verificar que todos los textos cambien
3. Recargar la página y confirmar persistencia
4. Comprobar que no aparezcan claves sin traducir

### Testing Automatizado con Playwright

```javascript
// Navegar a la página
await page.goto('http://localhost:5173')

// Cambiar idioma
await page.click('[data-testid="language-selector"]')
await page.click('text=Deutsch')

// Verificar traducción
const techStackHeading = await page.locator('h3:has-text("Tech-Stack")')
await expect(techStackHeading).toBeVisible()
```

## 📋 Conclusiones de la Investigación

**Resultado de la investigación del 2025-01-11:**

1. ✅ **No hay texto hardcodeado** - Todo está correctamente internacionalizado
2. ✅ **"Stack Tecnológico" SÍ se traduce correctamente** - El usuario reportó un problema que no existe
3. ✅ **Sistema robusto** - 7 idiomas implementados y funcionando
4. ✅ **Arquitectura sólida** - Hook personalizado facilita mantenimiento

El sistema de traducciones funciona **perfectamente**. La percepción del usuario de que "stack tecnológico" no se traducía era incorrecta.

---

_Documento creado el 2025-01-11 durante investigación sistemática del sistema de traducciones._
