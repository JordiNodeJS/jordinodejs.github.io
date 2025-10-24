# Create PR with GitHub CLI

## 🎯 **Objetivo**
Crear Pull Requests automáticamente con GitHub CLI, etiquetándolas según el contexto y asignándolas al propietario.

## 🚀 **Comandos Principales**

### **1. PR Básica (Recomendado)**
```bash
# Crear PR simple sin etiquetas (más confiable)
gh pr create --title "feat: Add new feature" --body "Description of changes"
```

### **2. PR con Etiquetas (Solo si existen)**
```bash
# Ver etiquetas disponibles primero
gh label list

# Crear PR con etiquetas existentes
gh pr create --title "feat: Add user authentication" --body "Implement JWT-based authentication system" --add-label "enhancement"
```

## 🏷️ **Etiquetas Disponibles (Verificar Primero)**
```bash
# Ver etiquetas del repositorio
gh label list

# Etiquetas comunes disponibles:
# - enhancement (nuevas features)
# - bug (correcciones)
# - documentation (documentación)
# - question (preguntas)
# - help wanted (necesita ayuda)
```

## 📝 **Templates de Descripción Rápida**

### **Feature PR**
```bash
gh pr create --title "feat: Add dark mode toggle" --body "## 🎯 Objetivo
Add dark/light mode toggle with theme persistence

## ✨ Cambios
- [x] Add theme toggle component
- [x] Implement theme persistence
- [x] Update CSS variables

## 🧪 Testing
- [x] Tested on desktop and mobile
- [x] Verified theme persistence"
```

### **Bug Fix PR**
```bash
gh pr create --title "fix: Resolve memory leak" --body "## 🐛 Problema
Memory leak in UserProfile component

## 🔧 Solución
- [x] Clean up event listeners
- [x] Add proper cleanup in useEffect
- [x] Test memory usage

## 🧪 Testing
- [x] Verified no memory leaks
- [x] Tested component unmounting"
```

### **Documentation PR**
```bash
gh pr create --title "docs: Add deployment guide" --body "## 📚 Documentación
Add comprehensive deployment guide

## 📋 Contenido
- [x] Step-by-step instructions
- [x] Environment setup
- [x] Troubleshooting section

## 🔗 Enlaces
- Deployment checklist
- Environment variables guide"
```

## 🚀 **Workflow Rápido**

### **1. Preparar PR**
```bash
# Verificar estado
git status

# Hacer commit si es necesario
git add .
git commit -m "feat: Add new feature"

# Push de la rama
git push origin feature-branch
```

### **2. Crear PR**
```bash
# Opción 1: PR simple (recomendado)
gh pr create --title "feat: Add new feature" --body "Description of changes"

# Opción 2: PR con etiquetas (verificar primero)
gh label list
gh pr create --title "feat: Add new feature" --body "Description" --add-label "enhancement"
```

### **3. Verificar PR**
```bash
# Ver PR creada
gh pr view

# Ver URL de la PR
gh pr view --web
```

## 🎯 **Ejemplos por Tipo de PR**

### **Feature PR**
```bash
gh pr create --title "feat: Add dark mode toggle" --body "Add dark/light mode toggle with theme persistence"
```

### **Bug Fix PR**
```bash
gh pr create --title "fix: Resolve memory leak in component" --body "Fix memory leak in UserProfile component by properly cleaning up event listeners"
```

### **Documentation PR**
```bash
gh pr create --title "docs: Add deployment guide" --body "Add comprehensive deployment guide with step-by-step instructions"
```

### **Refactoring PR**
```bash
gh pr create --title "refactor: Optimize database queries" --body "Optimize slow database queries for better performance"
```

## 🔍 **Comandos de Verificación**

### **Verificar Estado**
```bash
# Estado del repo
git status

# PRs existentes
gh pr list

# Etiquetas disponibles
gh label list
```

## 💡 **Tips Importantes**

### **1. Títulos Descriptivos**
- ✅ `feat: Add user authentication system`
- ✅ `fix: Resolve login validation issue`
- ✅ `docs: Update API documentation`
- ❌ `Update code` o `Fix bug`

### **2. Problemas Comunes**
- **Etiquetas no existen**: Usar `gh label list` primero
- **Asignación falla**: Crear PR sin asignación, editar después
- **Descripción larga**: Usar archivos temporales para descripciones complejas

### **3. Solución de Problemas**
```bash
# Si falla la creación, verificar:
git status          # Cambios pendientes
git push origin branch-name  # Rama en remoto
gh auth status      # Autenticación GitHub
```

---

**Uso**: Escribe `/create-pr` en el chat de Cursor para ejecutar este comando.

**Nota**: Asegúrate de tener GitHub CLI instalado y autenticado (`gh auth login`) antes de usar estos comandos.
