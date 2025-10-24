# Merge & Squash PR

## 🎯 **Objetivo**
Mergear Pull Requests usando GitHub CLI con diferentes estrategias de merge.

## 🚀 **Comandos Principales**

### **1. Squash Merge (Recomendado para Features)**
```bash
# Mergear con squash y eliminar rama (más común)
gh pr merge --squash --delete-branch

# Con mensaje personalizado
gh pr merge --squash --delete-branch --subject "feat: Add new feature"
```

### **2. Merge Commit (Para Hotfixes)**
```bash
# Mergear con merge commit
gh pr merge --merge --delete-branch
```

### **3. Rebase Merge (Para Commits Individuales)**
```bash
# Mergear con rebase
gh pr merge --rebase --delete-branch
```

## 🚀 **Workflow Rápido**

### **1. Verificar Estado**
```bash
# Ver estado de PR actual
gh pr status

# Ver checks de PR
gh pr checks
```

### **2. Mergear PR**
```bash
# Opción 1: Squash merge (recomendado para features)
gh pr merge --squash --delete-branch

# Opción 2: Merge commit (para hotfixes)
gh pr merge --merge --delete-branch
```

### **3. Verificar Merge**
```bash
# Ver PRs mergeadas recientemente
gh pr list --state merged --limit 3

# Ver commits recientes
git log --oneline -3
```

## 🎯 **Ejemplos por Tipo de PR**

### **Feature PR (Recomendado: Squash)**
```bash
gh pr merge --squash --delete-branch --subject "feat: Add user authentication system"
```

### **Bug Fix PR (Recomendado: Squash)**
```bash
gh pr merge --squash --delete-branch --subject "fix: Resolve login validation issue"
```

### **Hotfix PR (Recomendado: Merge)**
```bash
gh pr merge --merge --delete-branch
```

### **Documentation PR (Recomendado: Squash)**
```bash
gh pr merge --squash --delete-branch --subject "docs: Update API documentation"
```

## 🔧 **Limpieza Después del Merge**

### **Sincronizar con Main**
```bash
# Cambiar a main
git checkout main

# Pull de cambios
git pull origin main

# Limpiar ramas locales (opcional)
git branch --merged | grep -v main | xargs -n 1 git branch -d
```

## 💡 **Tips Importantes**

### **1. Estrategia de Merge por Tipo**
- **Features**: Squash (historial limpio)
- **Bug Fixes**: Squash (historial limpio)
- **Hotfixes**: Merge (preservar contexto)
- **Documentation**: Squash (historial limpio)

### **2. Problemas Comunes**
- **Checks fallidos**: Verificar si son críticos antes de mergear
- **Estado UNSTABLE**: Común en feature branches, se puede mergear
- **Rama no se elimina**: Se elimina automáticamente con `--delete-branch`

### **3. Verificación Rápida**
```bash
# Verificar que el merge fue exitoso
gh pr list --state merged --limit 3
git log --oneline -3
```

## 🚨 **Solución de Problemas**

### **PR No Se Puede Mergear**
```bash
# Verificar conflictos
gh pr view --json mergeable

# Verificar checks
gh pr checks

# Verificar reviews
gh pr view --json reviewDecision
```

### **Checks Fallidos**
```bash
# Ver logs de checks fallidos
gh pr checks --log-failed

# Re-ejecutar checks
gh pr checks --watch
```

### **Conflictos de Merge**
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
