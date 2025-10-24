# Create PR with GitHub CLI

## 🎯 **Objetivo**
Crear Pull Requests automáticamente con GitHub CLI, etiquetándolas según el contexto de desarrollo y asignándolas al propietario del repositorio.

## 🚀 **Comando Principal**

### **1. Crear PR Básica**
```bash
# Crear PR con título y descripción automática
gh pr create --title "feat: Add new feature" --body "Description of changes" --assignee @me
```

### **2. Crear PR con Etiquetas Contextuales**
```bash
# PR para features
gh pr create --title "feat: Add user authentication" --body "Implement JWT-based authentication system" --assignee @me --label "enhancement,feature"

# PR para bug fixes
gh pr create --title "fix: Resolve login validation issue" --body "Fix email validation regex pattern" --assignee @me --label "bug,fix"

# PR para documentación
gh pr create --title "docs: Update API documentation" --body "Update API endpoints documentation" --assignee @me --label "documentation"

# PR para refactoring
gh pr create --title "refactor: Optimize database queries" --body "Optimize SQL queries for better performance" --assignee @me --label "refactoring,performance"
```

## 🏷️ **Sistema de Etiquetas por Contexto**

### **Por Tipo de Cambio**
```bash
# Features
--label "enhancement,feature,new-feature"

# Bug Fixes  
--label "bug,fix,bugfix"

# Documentation
--label "documentation,docs,readme"

# Refactoring
--label "refactoring,code-quality,cleanup"

# Performance
--label "performance,optimization,speed"

# Dependencies
--label "dependencies,updates,maintenance"

# Security
--label "security,security-fix,vulnerability"

# UI/UX
--label "ui,ux,design,frontend"

# Backend
--label "backend,api,database"

# Testing
--label "testing,tests,test-coverage"
```

### **Por Prioridad**
```bash
# Alta prioridad
--label "priority:high,urgent,critical"

# Media prioridad
--label "priority:medium,normal"

# Baja prioridad
--label "priority:low,minor"
```

### **Por Estado**
```bash
# En desarrollo
--label "status:in-progress,development"

# Listo para review
--label "status:ready-for-review,review"

# Necesita testing
--label "status:needs-testing,testing"

# Listo para merge
--label "status:ready-to-merge,merge-ready"
```

## 📝 **Templates de Descripción**

### **1. Template para Features**
```markdown
## 🎯 **Objetivo**
[Descripción del objetivo de la feature]

## ✨ **Cambios Implementados**
- [ ] Cambio 1
- [ ] Cambio 2
- [ ] Cambio 3

## 🧪 **Testing**
- [ ] Tests unitarios
- [ ] Tests de integración
- [ ] Tests manuales

## 📸 **Screenshots** (si aplica)
[Adjuntar screenshots si hay cambios visuales]

## 🔗 **Enlaces Relacionados**
- Issue: #[número]
- Documentación: [enlace]
```

### **2. Template para Bug Fixes**
```markdown
## 🐛 **Problema**
[Descripción del problema]

## 🔧 **Solución**
[Descripción de la solución implementada]

## 🧪 **Testing**
- [ ] Reproducir el bug
- [ ] Verificar la solución
- [ ] Tests de regresión

## 📋 **Checklist**
- [ ] Código revisado
- [ ] Tests pasando
- [ ] Documentación actualizada
```

### **3. Template para Refactoring**
```markdown
## 🔄 **Refactoring**
[Descripción del refactoring]

## 📊 **Métricas**
- Líneas de código: [antes] → [después]
- Complejidad ciclomática: [antes] → [después]
- Performance: [mejoras]

## 🧪 **Testing**
- [ ] Tests existentes pasando
- [ ] Nuevos tests agregados
- [ ] Performance testing
```

## 🎨 **Comandos por Contexto de Desarrollo**

### **1. Desarrollo Frontend**
```bash
# Componente nuevo
gh pr create --title "feat: Add UserProfile component" --body "Add reusable UserProfile component with avatar and user info" --assignee @me --label "frontend,component,ui"

# Styling/CSS
gh pr create --title "style: Update button styles" --body "Update button component styles for better UX" --assignee @me --label "frontend,styling,css"

# Responsive design
gh pr create --title "feat: Add mobile responsiveness" --body "Implement responsive design for mobile devices" --assignee @me --label "frontend,responsive,mobile"
```

### **2. Desarrollo Backend**
```bash
# API endpoint
gh pr create --title "feat: Add user authentication API" --body "Implement JWT-based authentication endpoints" --assignee @me --label "backend,api,authentication"

# Database changes
gh pr create --title "feat: Add user table migration" --body "Add user table with proper indexes and constraints" --assignee @me --label "backend,database,migration"

# Performance optimization
gh pr create --title "perf: Optimize database queries" --body "Optimize slow database queries for better performance" --assignee @me --label "backend,performance,optimization"
```

### **3. DevOps/Deployment**
```bash
# CI/CD
gh pr create --title "ci: Add automated testing pipeline" --body "Add GitHub Actions workflow for automated testing" --assignee @me --label "devops,ci-cd,automation"

# Docker
gh pr create --title "feat: Add Docker configuration" --body "Add Dockerfile and docker-compose for containerization" --assignee @me --label "devops,docker,containerization"

# Infrastructure
gh pr create --title "infra: Update server configuration" --body "Update server configuration for better performance" --assignee @me --label "devops,infrastructure,configuration"
```

## 🔍 **Comandos de Verificación**

### **1. Verificar Estado del Repo**
```bash
# Ver estado actual
git status

# Ver ramas
git branch -a

# Ver commits pendientes
git log --oneline -5
```

### **2. Verificar PRs Existentes**
```bash
# Ver PRs abiertas
gh pr list

# Ver PRs asignadas a mí
gh pr list --assignee @me

# Ver PRs por etiqueta
gh pr list --label "enhancement"
```

## 🚀 **Workflow Completo**

### **1. Preparar PR**
```bash
# 1. Verificar estado
git status

# 2. Hacer commit si es necesario
git add .
git commit -m "feat: Add new feature"

# 3. Push de la rama
git push origin feature-branch
```

### **2. Crear PR**
```bash
# Crear PR con contexto específico
gh pr create --title "feat: Add user authentication" --body "Implement JWT-based authentication system with login/logout functionality" --assignee @me --label "enhancement,feature,authentication"
```

### **3. Verificar PR Creada**
```bash
# Ver PR creada
gh pr view

# Ver URL de la PR
gh pr view --web
```

## 💡 **Tips y Mejores Prácticas**

### **1. Títulos Descriptivos**
- ✅ `feat: Add user authentication system`
- ✅ `fix: Resolve login validation issue`
- ✅ `docs: Update API documentation`
- ❌ `Update code`
- ❌ `Fix bug`

### **2. Descripciones Detalladas**
- Incluir contexto del cambio
- Explicar el problema resuelto
- Mencionar testing realizado
- Adjuntar screenshots si es necesario

### **3. Etiquetas Consistentes**
- Usar etiquetas predefinidas
- Combinar etiquetas por contexto
- Evitar etiquetas duplicadas

### **4. Asignación Automática**
- Siempre asignar al propietario (`@me`)
- Considerar asignar a reviewers específicos
- Usar `--reviewer` para code review

## 🎯 **Ejemplos de Uso Rápido**

### **Feature PR**
```bash
gh pr create --title "feat: Add dark mode toggle" --body "Add dark/light mode toggle with theme persistence" --assignee @me --label "enhancement,ui,feature"
```

### **Bug Fix PR**
```bash
gh pr create --title "fix: Resolve memory leak in component" --body "Fix memory leak in UserProfile component by properly cleaning up event listeners" --assignee @me --label "bug,fix,memory"
```

### **Documentation PR**
```bash
gh pr create --title "docs: Add deployment guide" --body "Add comprehensive deployment guide with step-by-step instructions" --assignee @me --label "documentation,deployment,guide"
```

---

**Uso**: Escribe `/create-pr` en el chat de Cursor para ejecutar este comando.

---

**Nota**: Asegúrate de tener GitHub CLI instalado y autenticado (`gh auth login`) antes de usar estos comandos.
