# Merge & Squash PR

## 🎯 **Objetivo**
Mergear Pull Requests usando GitHub CLI con diferentes estrategias de merge (squash, merge, rebase) y configuración completa.

## 🔀 **Estrategias de Merge**

### **1. Squash and Merge (Recomendado)**
```bash
# Mergear con squash (combina todos los commits en uno)
gh pr merge --squash

# Mergear con squash y mensaje personalizado
gh pr merge --squash --subject "feat: Add new feature"

# Mergear con squash y eliminar rama
gh pr merge --squash --delete-branch
```

### **2. Merge Commit**
```bash
# Mergear creando merge commit
gh pr merge --merge

# Mergear con merge commit y eliminar rama
gh pr merge --merge --delete-branch
```

### **3. Rebase and Merge**
```bash
# Mergear con rebase (mantiene commits individuales)
gh pr merge --rebase

# Mergear con rebase y eliminar rama
gh pr merge --rebase --delete-branch
```

## ⚙️ **Configuración Avanzada**

### **1. Merge con Mensaje Personalizado**
```bash
# Squash con mensaje personalizado
gh pr merge --squash --subject "feat: Implement user authentication" --body "Add complete user authentication system with JWT tokens and password hashing"

# Merge con mensaje personalizado
gh pr merge --merge --subject "feat: Add new feature" --body "Detailed description of the changes"
```

### **2. Merge Automático**
```bash
# Mergear automáticamente cuando esté listo
gh pr merge --auto

# Mergear con squash automático
gh pr merge --squash --auto
```

## 🔍 **Verificar Antes de Mergear**

### **1. Verificar Estado de PR**
```bash
# Ver estado de PR actual
gh pr status

# Ver checks de PR
gh pr checks

# Ver si PR está lista para merge
gh pr view --json mergeable,mergeStateStatus
```

### **2. Verificar Reviews**
```bash
# Ver reviews de PR
gh pr view --json reviews

# Ver si hay reviews pendientes
gh pr view --json reviewDecision
```

### **3. Verificar Checks**
```bash
# Ver todos los checks
gh pr checks

# Ver checks específicos
gh pr checks --watch

# Ver logs de checks fallidos
gh pr checks --log-failed
```

## 🚀 **Workflow Completo de Merge**

### **1. Pre-Merge Checklist**
```bash
# 1. Verificar que PR está lista
gh pr view --json mergeable,mergeStateStatus,reviewDecision

# 2. Verificar que todos los checks pasan
gh pr checks

# 3. Verificar que no hay conflictos
gh pr view --json mergeable
```

### **2. Merge con Squash (Recomendado)**
```bash
# 1. Verificar estado
gh pr status

# 2. Mergear con squash
gh pr merge --squash --delete-branch

# 3. Verificar que se mergeó correctamente
gh pr list --state merged
```

### **3. Merge con Merge Commit**
```bash
# 1. Verificar estado
gh pr status

# 2. Mergear con merge commit
gh pr merge --merge --delete-branch

# 3. Verificar merge
gh pr view --json mergedAt
```

## 📋 **Comandos de Verificación**

### **1. Verificar PR Lista para Merge**
```bash
# Verificar que PR puede ser mergeada
gh pr view --json mergeable,mergeStateStatus,reviewDecision,checks

# Verificar checks específicos
gh pr checks --required
```

### **2. Verificar Reviews**
```bash
# Ver reviews aprobadas
gh pr view --json reviews --jq '.reviews[] | select(.state == "APPROVED")'

# Ver reviews pendientes
gh pr view --json reviews --jq '.reviews[] | select(.state == "PENDING")'
```

### **3. Verificar Conflictos**
```bash
# Verificar si hay conflictos
gh pr view --json mergeable

# Ver diff de PR
gh pr diff
```

## 🎯 **Casos de Uso Específicos**

### **1. Feature PR (Recomendado: Squash)**
```bash
# Para features, usar squash para mantener historial limpio
gh pr merge --squash --delete-branch --subject "feat: Add user authentication system"
```

### **2. Bug Fix PR (Recomendado: Squash)**
```bash
# Para bug fixes, usar squash
gh pr merge --squash --delete-branch --subject "fix: Resolve login validation issue"
```

### **3. Hotfix PR (Recomendado: Merge)**
```bash
# Para hotfixes, usar merge commit para preservar contexto
gh pr merge --merge --delete-branch
```

### **4. Documentation PR (Recomendado: Squash)**
```bash
# Para documentación, usar squash
gh pr merge --squash --delete-branch --subject "docs: Update API documentation"
```

## 🔧 **Comandos de Limpieza**

### **1. Limpiar Ramas Después del Merge**
```bash
# Eliminar rama local después del merge
git branch -d feature-branch

# Eliminar rama remota (si no se eliminó automáticamente)
git push origin --delete feature-branch
```

### **2. Sincronizar con Main**
```bash
# Cambiar a main
git checkout main

# Pull de cambios
git pull origin main

# Limpiar ramas locales
git branch --merged | grep -v main | xargs -n 1 git branch -d
```

## 📊 **Verificar Merge Exitoso**

### **1. Verificar que PR se Mergeó**
```bash
# Ver PRs mergeadas recientemente
gh pr list --state merged --limit 5

# Ver detalles de PR mergeada
gh pr view --json mergedAt,mergeCommit
```

### **2. Verificar Commits en Main**
```bash
# Ver commits recientes en main
git log --oneline -5

# Ver commit de merge
git show --stat HEAD
```

## 💡 **Mejores Prácticas**

### **1. Estrategia de Merge por Tipo**
- **Features**: Squash (historial limpio)
- **Bug Fixes**: Squash (historial limpio)
- **Hotfixes**: Merge (preservar contexto)
- **Documentation**: Squash (historial limpio)
- **Dependencies**: Squash (historial limpio)

### **2. Antes de Mergear**
- ✅ Verificar que todos los checks pasan
- ✅ Verificar que hay reviews aprobadas
- ✅ Verificar que no hay conflictos
- ✅ Verificar que la descripción es clara
- ✅ Verificar que las etiquetas son correctas

### **3. Después del Merge**
- ✅ Verificar que la rama se eliminó
- ✅ Sincronizar con main
- ✅ Verificar que el deploy funciona
- ✅ Limpiar ramas locales

## 🚨 **Solución de Problemas**

### **1. PR No Se Puede Mergear**
```bash
# Verificar conflictos
gh pr view --json mergeable

# Verificar checks
gh pr checks

# Verificar reviews
gh pr view --json reviewDecision
```

### **2. Checks Fallidos**
```bash
# Ver logs de checks fallidos
gh pr checks --log-failed

# Re-ejecutar checks
gh pr checks --watch
```

### **3. Conflictos de Merge**
```bash
# Ver conflictos
gh pr diff

# Resolver conflictos localmente
git checkout feature-branch
git merge main
# Resolver conflictos
git add .
git commit -m "Resolve merge conflicts"
git push origin feature-branch
```

---

**Uso**: Escribe `/merge-pr` en el chat de Cursor para ejecutar este comando.

---

**Nota**: Asegúrate de tener permisos para mergear en el repositorio y que la PR esté lista para merge.
