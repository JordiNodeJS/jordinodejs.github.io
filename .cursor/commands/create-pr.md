# Create & Manage PR

## 🎯 **Objetivo**
Crear y gestionar Pull Requests usando GitHub CLI con etiquetas, revisores y configuración completa.

## 🚀 **Crear PR Básica**

### **1. Crear PR Simple**
```bash
# Crear PR desde rama actual a main
gh pr create --title "Título de la PR" --body "Descripción de la PR"

# Crear PR con título y descripción en una línea
gh pr create --title "feat: Add new feature" --body "Implement new functionality for user management"
```

### **2. Crear PR con Archivo de Descripción**
```bash
# Crear PR usando archivo de descripción
gh pr create --title "Título de la PR" --body-file pr_description.md

# Crear PR con template
gh pr create --title "Título de la PR" --body-file .github/pull_request_template.md
```

## 🏷️ **Etiquetar PR**

### **1. Agregar Etiquetas**
```bash
# Agregar etiqueta a PR actual
gh pr edit --add-label "enhancement"

# Agregar múltiples etiquetas
gh pr edit --add-label "bug,enhancement,documentation"

# Etiquetas comunes
gh pr edit --add-label "bug"           # Para bugs
gh pr edit --add-label "enhancement"   # Para mejoras
gh pr edit --add-label "documentation" # Para documentación
gh pr edit --add-label "dependencies"  # Para dependencias
gh pr edit --add-label "performance"  # Para optimizaciones
```

### **2. Remover Etiquetas**
```bash
# Remover etiqueta específica
gh pr edit --remove-label "bug"

# Ver etiquetas actuales
gh pr view --json labels --jq '.labels[].name'
```

## 👥 **Asignar Revisores**

### **1. Asignar Revisores**
```bash
# Asignar revisor específico
gh pr edit --add-reviewer "username"

# Asignar múltiples revisores
gh pr edit --add-reviewer "user1,user2,user3"

# Asignar equipo como revisor
gh pr edit --add-reviewer "@team-name"
```

### **2. Asignar Asignados**
```bash
# Asignar a usuario específico
gh pr edit --add-assignee "username"

# Asignar múltiples usuarios
gh pr edit --add-assignee "user1,user2"
```

## 📋 **Configuración Avanzada**

### **1. PR con Milestone**
```bash
# Crear PR con milestone
gh pr create --title "Título" --body "Descripción" --milestone "v1.0.0"
```

### **2. PR con Proyecto**
```bash
# Agregar a proyecto
gh pr edit --add-project "Project Name"
```

### **3. PR con Draft**
```bash
# Crear PR como draft
gh pr create --title "Título" --body "Descripción" --draft
```

## 🔍 **Verificar y Listar**

### **1. Listar PRs**
```bash
# Listar PRs abiertas
gh pr list

# Listar PRs con filtros
gh pr list --state open --author "username"
gh pr list --label "bug,enhancement"
gh pr list --assignee "username"
```

### **2. Ver Detalles de PR**
```bash
# Ver PR actual
gh pr view

# Ver PR específica
gh pr view 123

# Ver PR con formato JSON
gh pr view --json title,body,labels,assignees
```

## 📝 **Templates de PR**

### **1. Template Básico**
```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## Cambios Realizados
- Cambio 1
- Cambio 2
- Cambio 3

## Testing
- [ ] Tests unitarios pasan
- [ ] Tests de integración pasan
- [ ] Testing manual realizado

## Screenshots (si aplica)
[Agregar screenshots aquí]

## Checklist
- [ ] Código sigue las convenciones del proyecto
- [ ] Documentación actualizada
- [ ] No hay console.logs
- [ ] Performance verificada
```

### **2. Template para Features**
```markdown
## 🎯 Objetivo
Descripción del objetivo de la feature.

## ✨ Funcionalidades
- Funcionalidad 1
- Funcionalidad 2

## 🧪 Testing
- [ ] Tests unitarios
- [ ] Tests de integración
- [ ] Testing manual

## 📸 Screenshots
[Agregar screenshots]

## 🔗 Enlaces
- Issue relacionada: #123
- Documentación: [enlace]
```

## 🚀 **Workflow Completo**

### **1. Crear PR Completa**
```bash
# 1. Crear archivo de descripción
cat > pr_description.md << EOF
## 🎯 Objetivo
Implementar nueva funcionalidad de usuario.

## ✨ Cambios
- Agregar formulario de registro
- Implementar validación
- Agregar tests

## 🧪 Testing
- [ ] Tests unitarios pasan
- [ ] Testing manual realizado
- [ ] Performance verificada
EOF

# 2. Crear PR
gh pr create --title "feat: Add user registration form" --body-file pr_description.md

# 3. Agregar etiquetas
gh pr edit --add-label "enhancement,feature"

# 4. Asignar revisor
gh pr edit --add-reviewer "username"

# 5. Asignar asignado
gh pr edit --add-assignee "username"
```

### **2. Actualizar PR**
```bash
# Actualizar descripción
gh pr edit --body "Nueva descripción"

# Agregar más etiquetas
gh pr edit --add-label "ready-for-review"

# Cambiar título
gh pr edit --title "Nuevo título"
```

## 📊 **Comandos Útiles**

### **1. Ver Estado de PR**
```bash
# Ver estado actual
gh pr status

# Ver checks de PR
gh pr checks

# Ver diff de PR
gh pr diff
```

### **2. Interactuar con PR**
```bash
# Abrir PR en navegador
gh pr view --web

# Ver logs de checks
gh pr checks --watch

# Ver comentarios
gh pr view --json comments
```

## 💡 **Tips y Mejores Prácticas**

### **1. Convenciones de Títulos**
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Documentación
- `style:` - Formato, espacios
- `refactor:` - Refactoring
- `test:` - Tests
- `chore:` - Tareas de mantenimiento

### **2. Etiquetas Recomendadas**
- `bug` - Corrección de bugs
- `enhancement` - Mejoras
- `documentation` - Documentación
- `dependencies` - Dependencias
- `performance` - Optimizaciones
- `ready-for-review` - Lista para revisión
- `needs-testing` - Necesita testing

### **3. Flujo de Trabajo**
1. **Crear rama** para la feature
2. **Hacer commits** con mensajes descriptivos
3. **Crear PR** con descripción detallada
4. **Agregar etiquetas** apropiadas
5. **Asignar revisores** y asignados
6. **Esperar review** y hacer cambios
7. **Mergear** cuando esté aprobada

---

**Uso**: Escribe `/create-pr` en el chat de Cursor para ejecutar este comando.
