# Arquitectura de la Aplicación Portfolio React

## Resumen

Esta aplicación de portfolio está construida con React 19, TypeScript y Vite 6, siguiendo patrones modernos de desarrollo y arquitectura escalable.

## Diagrama de Arquitectura

El diagrama visual creado con Excalidraw muestra las relaciones entre todos los componentes de la aplicación. Los elementos están organizados por capas y codificados por colores:

### Leyenda de Colores

- 🔵 **Azul claro**: Punto de entrada (`main.tsx`)
- 🟣 **Morado**: Contexto y estado global (`ThemeProvider`)
- 🟢 **Verde**: Componente principal (`App.tsx`)
- 🔵 **Azul**: Secciones de página (Hero, Experience, Projects, etc.)
- 🟠 **Naranja**: Componentes de layout/UI global
- 🟢 **Verde claro**: Hooks personalizados
- 🌸 **Rosa**: Componentes auxiliares
- 🟡 **Amarillo**: Internacionalización

## Estructura de Componentes

### 1. Punto de Entrada
- **main.tsx**: Inicializa la aplicación con React StrictMode, ThemeProvider e i18n

### 2. Contexto Global
- **ThemeProvider**: Maneja el estado global de temas (5 temas disponibles)
  - Dark, Light, Vintage, Retro-Pastel, Brutalism
  - Persistencia en localStorage
  - Detección de preferencias del sistema

### 3. Componente Principal
- **App.tsx**: Orquesta toda la aplicación
  - Gestiona el título dinámico de la página
  - Configura el scroll suave entre secciones
  - Renderiza todos los componentes hijos

### 4. Componentes de Layout
- **LoadingScreen**: Pantalla de carga inicial
- **FloatingParticles**: Partículas animadas de fondo
- **Navigation**: Barra de navegación responsive con detección de scroll

### 5. Secciones de Página
- **Hero**: Presentación principal con animaciones de texto
- **Experience**: Timeline de experiencia laboral
- **Projects**: Grid de proyectos con efectos hover
- **Skills**: Tarjetas 3D de habilidades técnicas
- **Education**: Formación académica
- **Footer**: Enlaces y información de contacto
- **ScrollToTop**: Botón flotante para volver arriba

### 6. Hooks Personalizados
- **useTheme**: Acceso al contexto de temas
- **usePortfolioData**: Obtención de datos con i18n
- **useScrollToSection**: Navegación suave entre secciones
- **useMotion3D**: Efectos 3D con seguimiento del mouse
- **useUserPreferences**: Gestión de preferencias de usuario
- **useBrutalismEffects**: Efectos específicos del tema brutalism

### 7. Componentes Auxiliares
- **ThemeToggle**: Selector de temas
- **TextRevealAnimation**: Animaciones de revelado de texto
- **Skill3DCard**: Tarjetas 3D para habilidades
- **LanguageSelector**: Selector de idioma

### 8. Servicios
- **i18next**: Sistema de internacionalización
  - 7 idiomas soportados: ES, EN, CA, FR, DE, IT, PT
  - Carga dinámica de traducciones
  - Detección automática del idioma del navegador

## Flujo de Datos

1. **i18next** → Traducciones → Componentes
2. **ThemeContext** → Estado de tema → Todos los componentes
3. **usePortfolioDataFromLocales** → Datos → Componentes
4. **LocalStorage** → Preferencias → Tema/Idioma
5. **Framer Motion** → Animaciones → Componentes UI

## Patrones de Arquitectura

### Context API
- Gestión de estado global para temas
- Evita prop drilling
- Persistencia automática

### Custom Hooks
- Encapsulación de lógica reutilizable
- Separación de concerns
- Fácil testing y mantenimiento

### Componentes Auxiliares
- Funcionalidad específica y reutilizable
- Composición sobre herencia
- Responsabilidad única

### Separación de Capas
- **Presentación**: Componentes React
- **Lógica**: Custom hooks
- **Estado**: Context API
- **Datos**: i18n y localStorage
- **Estilos**: Tailwind CSS + Framer Motion

## Características Técnicas

### Tecnologías Principales
- **React 19**: Última versión con mejoras de rendimiento
- **TypeScript**: Tipado estático para mayor robustez
- **Vite 6**: Build tool rápido y moderno
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animaciones fluidas y performantes

### Funcionalidades
- ✅ 7 idiomas soportados
- ✅ 5 temas dinámicos
- ✅ Efectos 3D con mouse
- ✅ Diseño responsive
- ✅ CI/CD con GitHub Actions
- ✅ Optimización de rendimiento
- ✅ Accesibilidad (a11y)
- ✅ SEO optimizado

### Rendimiento
- Code splitting automático
- Lazy loading de componentes
- Optimización de imágenes
- Caching inteligente
- Bundle size optimizado

## Escalabilidad

La arquitectura está diseñada para ser escalable:

1. **Modular**: Cada componente tiene responsabilidad única
2. **Extensible**: Fácil agregar nuevos temas, idiomas o secciones
3. **Mantenible**: Código limpio y bien documentado
4. **Testeable**: Hooks y componentes fáciles de testear
5. **Performante**: Optimizaciones de rendimiento integradas

## Próximos Pasos

- [ ] Implementar tests unitarios
- [ ] Agregar más animaciones
- [ ] Optimizar para Core Web Vitals
- [ ] Implementar PWA features
- [ ] Agregar modo offline

---

*Diagrama creado con Excalidraw - Última actualización: 2025-06-13* 