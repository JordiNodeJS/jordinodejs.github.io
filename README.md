# 🚀 Portfolio Moderno con Animaciones

Un portfolio impresionante y moderno construido con React, TypeScript, Framer Motion y TailwindCSS.

## ✨ Características Implementadas

### 🎨 Diseño y UX

- ✅ **Diseño moderno** con efectos de vidrio (glass morphism)
- ✅ **Tema oscuro/claro** con transiciones suaves
- ✅ **Animaciones impresionantes** usando Framer Motion
- ✅ **Responsive design** optimizado para todos los dispositivos
- ✅ **Partículas flotantes** de fondo para un efecto visual único
- ✅ **Pantalla de carga** animada para una experiencia pulida

### 🔧 Tecnologías

- ✅ **React 18** con TypeScript
- ✅ **Vite** como build tool
- ✅ **Framer Motion** para animaciones
- ✅ **TailwindCSS v3** para estilos
- ✅ **Lucide React** para iconos
- ✅ **Bun** como package manager

### 🚀 Funcionalidades

- ✅ **Navegación suave** entre secciones
- ✅ **Efectos hover** interactivos en proyectos y tarjetas
- ✅ **Barras de progreso animadas** para habilidades
- ✅ **Timeline animado** para experiencia
- ✅ **Formulario de contacto** funcional
- ✅ **Botón scroll-to-top** con animaciones
- ✅ **Carga de datos** desde archivos JSON locales

## 📁 Componentes Principales

- **Navigation**: Barra de navegación con efecto glass y menú móvil
- **Hero**: Sección principal con animaciones de entrada y avatar giratorio
- **Projects**: Grid de proyectos con hover effects y filtros por tecnología
- **Skills**: Barras de progreso animadas con niveles de competencia
- **Experience**: Timeline interactivo con tarjetas alternadas
- **Education**: Tarjetas de formación académica con estadísticas
- **Contact**: Formulario funcional con información de contacto
- **ThemeToggle**: Botón para cambiar entre tema oscuro y claro
- **LoadingScreen**: Pantalla de carga con animaciones
- **FloatingParticles**: Partículas de fondo animadas

## 🚀 Instalación y Uso

```bash
# Instalar dependencias con Bun
bun install

# Iniciar servidor de desarrollo
bun dev

# Construir para producción
bun run build

# Vista previa de producción
bun run preview
```

## 🚀 Despliegue Automático a GitHub Pages

### Resumen de despliegue (actualizado)

- Workflow principal: `.github/workflows/deploy.yml`.
- Triggers: `push` a la rama `main` y `workflow_dispatch` (ejecución manual desde Actions).
- Nota: mergear una PR hacia `main` genera un push en `main`, por lo que también dispara el workflow.

### Qué hace el workflow

- Instala dependencias con Bun.
- Construye la aplicación (por ejemplo `bun run build`).
- Sube el artefacto y despliega a GitHub Pages.
- URL de producción: `https://jordinodejs.github.io`

### Seguridad y comportamiento en ramas

- El job de despliegue contiene una guarda para ejecutarse sólo cuando la referencia es `main`:

  if: github.ref == 'refs/heads/main'

  Esto evita intentos de despliegue desde ramas de trabajo (feature branches) que pueden ser rechazados por las protecciones del environment `github-pages`.

- Si necesitas permitir despliegues desde otras ramas o desde ejecuciones manuales en feature branches, ajusta las reglas del Environment en GitHub: `Settings` → `Environments` → `github-pages`.

### Cómo dispararlo

- Opción A (recomendada): push a `main` desde tu repo local:

```bash
git add .
git commit -m "chore: cambios"
git push origin main
```

- Opción B: Actions → `Deploy to GitHub Pages` → `Run workflow` → seleccionar `main` → `Run`.

### Qué revisar si falla

- Ver los logs de la ejecución en Actions (build y deploy).
- Si ves un rechazo por "environment protection", revisa las reglas del environment `github-pages`.
- Para reintentos puedes usar "Re-run jobs" en la ejecución correspondiente.

## 🌐 Internacionalización (i18n)

El portfolio ahora utiliza **i18n** para la gestión de idiomas y traducciones. Todo el contenido textual y los datos de secciones como Skills, Experience, Education y Contact están centralizados en archivos de localización:

- `src/i18n/locales/es.json` — Español
- `src/i18n/locales/en.json` — Inglés
- (y otros idiomas disponibles)

Puedes agregar o modificar textos y datos directamente en estos archivos para personalizar el contenido en cada idioma.

### 🛠️ Migración de datos

- Los antiguos archivos JSON en `src/db/` han sido migrados a los archivos de localización.
- Ahora toda la información de habilidades, experiencia, educación y textos de UI se gestiona desde los archivos de localización.

## 📝 Personalización

Edita los archivos de localización en `src/i18n/locales/` para personalizar el contenido y las traducciones:

- `es.json`: Español
- `en.json`: Inglés
- (otros idiomas disponibles)

Ejemplo de estructura para la sección Skills:

```json
"skills": {
  "title": "Habilidades Técnicas",
  "subtitle": "Tecnologías y herramientas con las que trabajo",
  "competenceLevel": "Nivel de Competencia",
  "techStack": "Stack Tecnológico",
  "methodologies": "Metodologías y Herramientas",
  "categories": {
    "frontend": "Frontend",
    "backend": "Backend",
    "tools": "Herramientas",
    "databases": "Bases de Datos"
  }
}
```

## 🔄 Estado Actual del Proyecto

### ✅ Despliegue Automático Configurado

- **GitHub Actions**: Configurado y funcionando
- **URL Producción**: https://jordinodejs.github.io
- **Última actualización**: Enero 2025
- **Deploy automático**: Activado con push a `main`

### 🚀 Workflow Optimizado

1. **Desarrollo**: `bun dev` (servidor local)
2. **Testing**: Playwright automático en CI/CD
3. **Deploy**: Automático con `git push origin main`
4. **Resultado**: Portfolio actualizado en menos de 2 minutos

---

⭐ **Portfolio completamente funcional, multilenguaje y con despliegue automático!**

🚀 **Servidor corriendo en:** http://localhost:5173/
