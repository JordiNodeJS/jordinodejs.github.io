# Ejemplos de Uso - Comandos de GitHub

## 🚀 **Ejemplos Rápidos de Uso**

### **1. Crear PR para Feature**
```bash
# Comando básico
gh pr create --title "feat: Add user authentication" --body "Implement JWT-based authentication system" --assignee @me --label "enhancement,feature"

# Con descripción detallada
gh pr create --title "feat: Add dark mode toggle" --body "## 🎯 Objetivo
Add dark/light mode toggle with theme persistence

## ✨ Cambios Implementados
- [x] Add theme toggle component
- [x] Implement theme persistence
- [x] Update CSS variables for themes

## 🧪 Testing
- [x] Tested on desktop
- [x] Tested on mobile
- [x] Verified theme persistence" --assignee @me --label "enhancement,ui,feature"
```

### **2. Crear PR para Bug Fix**
```bash
gh pr create --title "fix: Resolve memory leak in UserProfile" --body "## 🐛 Problema
Memory leak in UserProfile component due to uncleaned event listeners

## 🔧 Solución
- Properly clean up event listeners in useEffect
- Add cleanup function for component unmount
- Optimize re-renders with useCallback

## 🧪 Testing
- [x] Verified memory usage before/after
- [x] Tested component unmounting
- [x] No memory leaks detected" --assignee @me --label "bug,fix,memory"
```

### **3. Crear PR para Documentación**
```bash
gh pr create --title "docs: Add deployment guide" --body "## 📚 Documentación
Add comprehensive deployment guide

## 📋 Contenido
- Step-by-step deployment instructions
- Environment variables setup
- Troubleshooting common issues
- Best practices for production

## 🔗 Enlaces
- Deployment checklist
- Environment setup guide
- Troubleshooting section" --assignee @me --label "documentation,deployment,guide"
```

### **4. Mergear PR con Squash**
```bash
# Verificar estado primero
gh pr status

# Mergear con squash
gh pr merge --squash --delete-branch --subject "feat: Add user authentication system"
```

### **5. Mergear PR con Merge Commit**
```bash
# Para hotfixes o cambios importantes
gh pr merge --merge --delete-branch
```

## 🎯 **Workflows Completos**

### **Workflow 1: Feature Development**
```bash
# 1. Crear rama
git checkout -b feature/user-auth

# 2. Hacer cambios y commit
git add .
git commit -m "feat: Add user authentication system"

# 3. Push rama
git push origin feature/user-auth

# 4. Crear PR
gh pr create --title "feat: Add user authentication system" --body "Implement JWT-based authentication with login/logout functionality" --assignee @me --label "enhancement,feature,authentication"

# 5. Después de review, mergear
gh pr merge --squash --delete-branch --subject "feat: Add user authentication system"
```

### **Workflow 2: Bug Fix**
```bash
# 1. Crear rama para bug fix
git checkout -b fix/login-validation

# 2. Arreglar bug y commit
git add .
git commit -m "fix: Resolve login validation issue"

# 3. Push rama
git push origin fix/login-validation

# 4. Crear PR
gh pr create --title "fix: Resolve login validation issue" --body "Fix email validation regex pattern that was causing false positives" --assignee @me --label "bug,fix,validation"

# 5. Mergear rápidamente (bug fix)
gh pr merge --squash --delete-branch --subject "fix: Resolve login validation issue"
```

### **Workflow 3: Documentation Update**
```bash
# 1. Crear rama para docs
git checkout -b docs/update-readme

# 2. Actualizar documentación
git add .
git commit -m "docs: Update README with new features"

# 3. Push rama
git push origin docs/update-readme

# 4. Crear PR
gh pr create --title "docs: Update README with new features" --body "Update README to include new authentication features and setup instructions" --assignee @me --label "documentation,readme,update"

# 5. Mergear
gh pr merge --squash --delete-branch --subject "docs: Update README with new features"
```

## 🔍 **Comandos de Verificación**

### **Verificar Estado del Repo**
```bash
# Estado actual
git status

# Ramas disponibles
git branch -a

# Commits recientes
git log --oneline -5
```

### **Verificar PRs**
```bash
# PRs abiertas
gh pr list

# PRs asignadas a mí
gh pr list --assignee @me

# PRs por etiqueta
gh pr list --label "enhancement"

# Estado de PR específica
gh pr view --json mergeable,mergeStateStatus
```

### **Verificar Checks**
```bash
# Ver todos los checks
gh pr checks

# Ver checks fallidos
gh pr checks --log-failed

# Ver reviews
gh pr view --json reviews
```

## 💡 **Tips y Mejores Prácticas**

### **Títulos de PR**
- ✅ `feat: Add user authentication system`
- ✅ `fix: Resolve login validation issue`
- ✅ `docs: Update API documentation`
- ✅ `refactor: Optimize database queries`
- ❌ `Update code`
- ❌ `Fix bug`

### **Descripciones de PR**
- Incluir contexto del cambio
- Explicar el problema resuelto
- Mencionar testing realizado
- Adjuntar screenshots si es necesario
- Usar markdown para formato

### **Etiquetas Consistentes**
- **enhancement**: Para nuevas features
- **bug**: Para bug fixes
- **documentation**: Para cambios en docs
- **refactoring**: Para mejoras de código
- **performance**: Para optimizaciones
- **security**: Para cambios de seguridad

### **Estrategias de Merge**
- **Squash**: Para features y bug fixes (historial limpio)
- **Merge**: Para hotfixes (preservar contexto)
- **Rebase**: Para cambios complejos (mantener commits)

## 🚨 **Solución de Problemas**

### **PR No Se Puede Crear**
```bash
# Verificar que estás en la rama correcta
git branch

# Verificar que hay commits
git log --oneline -3

# Verificar que la rama está en el remoto
git push origin feature-branch
```

### **PR No Se Puede Mergear**
```bash
# Verificar conflictos
gh pr view --json mergeable

# Verificar checks
gh pr checks

# Verificar reviews
gh pr view --json reviewDecision
```

### **Conflicto de Ramas**
```bash
# Resolver conflictos localmente
git checkout feature-branch
git merge main
# Resolver conflictos
git add .
git commit -m "Resolve merge conflicts"
git push origin feature-branch
```

---

**Recuerda**: Siempre verificar el estado de la PR antes de mergear y limpiar las ramas después del merge.
