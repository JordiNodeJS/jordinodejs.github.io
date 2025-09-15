# 🚀 Sistema Centralizado de Datos del Portafolio

## 🎯 Problema Resuelto

**Antes**: Para agregar un proyecto o experiencia necesitabas modificar múltiples archivos:
- ❌ `Projects.tsx` → datos técnicos hardcodeados
- ❌ `Experience.tsx` → múltiples funciones de mapeo
- ❌ `es.json` → traducciones en español
- ❌ `en.json, fr.json, de.json...` → traducciones para cada idioma
- ❌ `/public/img-project/` → imagen física

**Ahora**: Solo necesitas modificar:
- ✅ `src/data/portfolio-data.ts` → **TODO EN UN SOLO LUGAR**
- ✅ Traducciones manuales en archivos JSON (es.json, en.json, etc.)

## 📁 Estructura del Sistema

```
src/
├── data/
│   └── portfolio-data.ts          ← 🎯 AGREGAR DATOS AQUÍ
├── hooks/
│   └── useCentralizedPortfolioData.ts  ← Hook que consume los datos
└── i18n/locales/
    ├── es.json                    ← Traducciones en español
    ├── en.json                    ← Traducciones en inglés
    └── ...                        ← Otros idiomas
```

## 🔥 Cómo Agregar un Nuevo Proyecto

### 1. Agrega los datos en `portfolio-data.ts`

```typescript
export const PROJECTS_DATA: ProjectData[] = [
  // ... proyectos existentes ...
  {
    id: "mi-nuevo-proyecto",
    title: "Mi Proyecto Increíble",
    description: "Descripción detallada de mi nuevo proyecto...",
    status: "in production",
    imgCover: "img-project/mi-nuevo-proyecto.png",
    link: "https://github.com/usuario/mi-proyecto",
    demo: "https://mi-proyecto.vercel.app",
    tags: ["react", "typescript", "tailwind"],
    featured: true
  }
];
```

### 2. Agrega la imagen

```bash
# Coloca la imagen en:
public/img-project/mi-nuevo-proyecto.png
```

### 3. Actualiza las traducciones manualmente

Agrega las traducciones en los archivos correspondientes:

**en.json:**
```json
"items": {
  "mi-nuevo-proyecto": {
    "title": "My Amazing Project",
    "description": "Detailed description of my new project..."
  }
}
```

**es.json:**
```json
"items": {
  "mi-nuevo-proyecto": {
    "title": "Mi Proyecto Increíble", 
    "description": "Descripción detallada de mi nuevo proyecto..."
  }
}
```

### 4. ¡Listo! 🎉

El proyecto aparecerá automáticamente en:
- ✅ Componente Projects
- ✅ Todos los idiomas (tras actualizar manualmente las traducciones)
- ✅ Con imagen asociada

## 💼 Cómo Agregar una Nueva Experiencia

### 1. Agrega los datos en `portfolio-data.ts`

```typescript
export const EXPERIENCES_DATA: ExperienceData[] = [
  // ... experiencias existentes ...
  {
    id: "nuevaEmpresa",
    company: "Nueva Empresa",
    title: "Nueva Empresa | Frontend Developer",
    period: "2025 - Presente",
    description: "Mi experiencia en la nueva empresa...",
    location: "España",
    clickable: true,
    technologies: {
      frontend: "React, Vue, TypeScript",
      testing: "Jest, Cypress",
      methodologies: "Agile, Scrum",
      tools: "Git, Docker"
    },
    achievements: [
      {
        title: "Logro Destacado",
        description: "Descripción del logro...",
        impact: "Impacto generado...",
        icon: "🚀"
      }
    ]
  }
];
```

### 2. Actualiza las traducciones manualmente

Agrega las traducciones en los archivos JSON correspondientes para cada idioma.

### 3. ¡Listo! 🎉

La experiencia aparecerá automáticamente en:
- ✅ Timeline de experiencias
- ✅ Modal de logros (si clickable: true)
- ✅ Todos los idiomas (tras actualizar las traducciones)

## 🎓 Cómo Agregar Nueva Formación/Educación

### 1. Agrega los datos en `portfolio-data.ts`

```typescript
export const EDUCATION_DATA: EducationData[] = [
  // ... formación existente ...
  {
    id: "nueva-formacion",
    center: "Nueva Institución Educativa",
    link: "https://institucion.edu",
    title: "Nuevo Curso Especializado",
    description: "Descripción detallada del curso y competencias adquiridas...",
    start_date: "01/01/2025",
    end_date: "31/12/2025",
    duration: "12 meses",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    featured: true,
    certificate: {
      available: true,
      url: "https://certificado.pdf"
    }
  }
];
```

### 2. Actualiza las traducciones manualmente

Agrega las traducciones en los archivos JSON para cada idioma.

### 3. ¡Listo! 🎉

La formación aparecerá automáticamente en:
- ✅ Sección de educación
- ✅ Todos los idiomas (tras actualizar las traducciones)
- ✅ Con etiquetas de tecnologías

## 🛠️ Comandos Útiles

```bash
# Desarrollo normal
npm run dev

# Construir proyecto
npm run build

# Vista previa del build
npm run preview
```

## 🎨 Personalización Avanzada

### Agregar nuevo idioma

1. Agrega el idioma a `SUPPORTED_LANGUAGES` en `portfolio-data.ts`
2. Crea el archivo JSON correspondiente en `src/i18n/locales/`
3. Agrega las traducciones manualmente

### Modificar campos de datos

1. Actualiza las interfaces `ProjectData` y `ExperienceData` 
2. Modifica el hook `useCentralizedPortfolioData.ts`
3. Actualiza los componentes que consumen los datos
4. Actualiza las traducciones en los archivos JSON

## 🔄 Migración de Componentes

### Para usar el nuevo sistema en un componente:

```typescript
// Antes
import { usePortfolioData } from "../hooks/usePortfolioData";

// Después
import { useCentralizedPortfolioData } from "../hooks/useCentralizedPortfolioData";

function MyComponent() {
  // Antes
  const { data, skills } = usePortfolioData();
  
  // Después
  const { 
    projects, 
    experiences,
    education, // 🎓 NUEVO: Datos de educación centralizados
    getAchievements,
    isCompanyClickable 
  } = useCentralizedPortfolioData();
  
  // ... resto del componente
}
```

## 🎯 Ventajas del Sistema

✅ **Un solo lugar para datos**: Todo en `portfolio-data.ts`  
✅ **Traducciones automáticas**: Se generan para todos los idiomas  
✅ **Consistencia**: Mismos datos en todos los componentes  
✅ **Fácil mantenimiento**: Cambios centralizados  
✅ **Tipado fuerte**: TypeScript para evitar errores  
✅ **Fallback inteligente**: Si falta traducción, usa datos originales  
✅ **Escalable**: Fácil agregar nuevos idiomas o campos  
✅ **Educación integrada**: Formación académica centralizada  
✅ **Datos unificados**: Proyectos, experiencias y educación en un sistema  

## 🐛 Troubleshooting

### Error al generar traducciones
```bash
# Verifica que portfolio-data.ts no tenga errores de sintaxis
npm run lint

# Reinstala dependencias si es necesario
npm install
```

### Datos no aparecen
```bash
# Verifica que el componente use el nuevo hook
# Mira la consola para errores de carga
npm run dev
```

### Traducciones no se actualizan
```bash
# Regenera las traducciones
npm run generate-translations

# Reinicia el servidor de desarrollo
npm run dev
```

---

## 💡 Ejemplo Completo: Agregar Proyecto

```typescript
// 1. portfolio-data.ts
{
  id: "mi-app-clima",
  title: "App del Clima",
  description: "Aplicación que muestra el clima en tiempo real con geolocalización y pronóstico de 7 días.",
  status: "in production",
  imgCover: "img-project/clima-app.png",
  link: "https://github.com/usuario/clima-app",
  demo: "https://clima-app.netlify.app",
  tags: ["react", "api", "geolocation", "tailwind"],
  featured: true
}
```

```bash
# 2. Terminal
npm run generate-translations
```

```
# 3. Resultado automático en todos los archivos de idioma
✅ es.json → "App del Clima", "Aplicación que muestra..."
✅ en.json → "Weather App", "Application that shows..."
✅ fr.json → "App Météo", "Application qui affiche..."
✅ de.json → "Wetter-App", "Anwendung, die das Wetter..."
```

¡Y eso es todo! 🎉