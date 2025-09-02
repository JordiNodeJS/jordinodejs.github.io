# Guía de Migración: npm a pnpm

## 📋 Resumen Ejecutivo

Este documento describe las lecciones aprendidas durante la migración del proyecto jordinodejs.github.io de npm a pnpm, incluyendo los problemas encontrados, soluciones implementadas y recomendaciones para futuras migraciones.

**Estado del proyecto**: Migración revertida debido a problemas de compatibilidad y estabilidad.

## 🎯 Motivación para la Migración

- **Velocidad**: pnpm es significativamente más rápido que npm
- **Eficiencia de espacio**: Utiliza enlaces duros para evitar duplicación de dependencias
- **Mejor manejo de monorepos**: Soporte nativo mejorado
- **Compatibilidad**: Mantiene compatibilidad con package.json de npm

## 🔍 Análisis Inicial Realizado

### ✅ Verificaciones Previas Exitosas
1. **Estructura del proyecto**: Compatible con pnpm
2. **Scripts de package.json**: Funcionan sin modificación
3. **GitHub Actions**: Soporte nativo para pnpm disponible
4. **GitHub Pages**: Compatible con cualquier gestor de paquetes

### ⚠️ Puntos de Atención Identificados
- Versiones de pnpm en diferentes entornos
- Compatibilidad de lockfiles
- Configuración de CI/CD

## 🚀 Plan de Migración Implementado

### Fase 1: Preparación
- [x] Verificar versión de pnpm local
- [x] Actualizar pnpm a la versión más reciente
- [x] Backup del estado actual

### Fase 2: Migración Local
- [x] Eliminación de `package-lock.json` y `node_modules/`
- [x] Instalación con `pnpm install`
- [x] Verificación de build local

### Fase 3: Actualización de CI/CD
- [x] Modificación del workflow de GitHub Actions
- [x] Actualización de configuración de cache

### Fase 4: Limpieza y Pruebas
- [x] Actualización de `.gitignore`
- [x] Pruebas de deployment

## ⚠️ Problemas Encontrados

### 1. 🔴 Actualización Automática de Dependencias

**Problema**: pnpm actualizó automáticamente `framer-motion` de `12.16.0` a `12.23.12`

**Síntomas**:
```typescript
// Error en TypeScript
Property 'ease' does not exist on type...
Type '"easeInOut"' is not assignable to type 'Easing'
```

**Causa Raíz**: 
- pnpm interpreta `^12.16.0` de manera más agresiva que npm
- Cambios breaking en la API de framer-motion entre versiones

**Solución Aplicada**:
```bash
pnpm add framer-motion@12.16.0 --save-exact
```

**Lección Aprendida**: 
- Siempre usar versiones exactas para dependencias críticas
- Verificar cambios de versiones antes de proceder

### 2. 🔴 Orden Incorrecto en GitHub Actions

**Problema**: Error "Unable to locate executable file: pnpm"

**Síntomas específicos**:
- Workflow falla en el step "Setup Node.js"
- Error: `Error: Unable to locate executable file: pnpm. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable.`
- El job se detiene antes de llegar a "Install dependencies"

**Causa Raíz**: 
- `actions/setup-node@v4` intenta configurar el cache de pnpm antes de que pnpm esté instalado
- El parámetro `cache: 'pnpm'` requiere que pnpm ya esté disponible en el PATH

**Configuración Incorrecta que causó el fallo**:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'pnpm'  # ❌ pnpm no está disponible aún

- name: Setup pnpm
  uses: pnpm/action-setup@v2
  with:
    version: 8
```

**Configuración Correcta implementada**:
```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v2
  with:
    version: 8  # Instala pnpm primero

- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'pnpm'  # ✅ Ahora pnpm está disponible
```

**Secuencia completa del workflow corregido**:
1. `actions/checkout@v4` - Descarga el código
2. `pnpm/action-setup@v2` - Instala pnpm globalmente
3. `actions/setup-node@v4` - Configura Node.js y cache de pnpm
4. `pnpm install --frozen-lockfile` - Instala dependencias
5. `pnpm run build` - Construye el proyecto
6. Pasos de deployment a GitHub Pages

**Lecciones Aprendidas**: 
- **Orden crítico**: Las herramientas deben instalarse antes de configurar su cache
- **Dependencias explícitas**: `setup-node` con `cache: 'pnpm'` depende de que pnpm esté instalado
- **Testing de workflows**: Probar cada cambio en el workflow antes del deployment final
- **Logs específicos**: El error "Unable to locate executable file" indica problema de PATH/instalación

### 3. 🔴 Fallos de Deployment en GitHub Pages

**Problema**: Workflow completa exitosamente pero deployment falla

**Síntomas observados**:
- GitHub Actions muestra "Success" pero la página no se actualiza
- Página devuelve errores 404 o carga versión anterior
- Logs muestran warnings sobre archivos faltantes

**Causas identificadas**:
1. **pnpm-lock.yaml faltante**: Si está en `.gitignore`, las dependencias no se instalan correctamente
2. **Cambios de configuración**: `vite.config.ts` con `base` incorrecto para dominio raíz
3. **Permisos de Pages**: Configuración incorrecta de permisos en el workflow

**Solución para pnpm-lock.yaml**:
```bash
# Verificar que pnpm-lock.yaml NO esté en .gitignore
grep -v "pnpm-lock.yaml" .gitignore > .gitignore.tmp
mv .gitignore.tmp .gitignore

# Asegurar que el lockfile esté versionado
git add pnpm-lock.yaml
git commit -m "Add pnpm-lock.yaml to version control"
```

**Configuración de permisos en deploy.yml**:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:  # ✅ Permisos explícitos
      contents: read
      pages: write
      id-token: write

    environment:  # ✅ Environment correcto
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
```

**Verificación post-deployment**:
```bash
# Verificar que la página carga correctamente
curl -I https://jordinodejs.github.io  # Debe devolver HTTP/2 200

# Verificar assets estáticos
curl -I https://jordinodejs.github.io/assets/index-[hash].js
```

### 4. 🟡 Configuración de .gitignore

**Problema**: `pnpm-lock.yaml` estaba siendo ignorado

**Causa**: Línea `pnpm-lock.yaml` en `.gitignore`

**Solución**: Eliminar la exclusión para que el lockfile sea versionado

**Estado problemático en .gitignore**:
```
# ... otros archivos ...
pnpm-lock.yaml  # ❌ Esto impide que se versione el lockfile
```

**Estado corregido**:
```
# ... otros archivos ...
# pnpm-lock.yaml eliminado de .gitignore  # ✅ Ahora se versiona correctamente
```

## 🔄 Proceso de Reversión

### Motivos para la Reversión
1. **Problemas de compatibilidad**: Framer Motion requería atención especial
2. **Percepción de usuario**: "La página no está funcionando"
3. **Principio de estabilidad**: Priorizar funcionamiento sobre optimización

### Comando de Reversión
```bash
git reset --hard d0cf432  # Commit: "✨ Portfolio moderno optimizado - Estado funcional completo"
git push --force-with-lease origin main
```

## 📚 Lecciones Aprendidas

### ✅ Buenas Prácticas
1. **Testing exhaustivo**: Verificar funcionalidad completa antes de deployment
2. **Versionado exacto**: Usar versiones exactas para dependencias críticas
3. **Documentación**: Mantener registro detallado de cambios
4. **Backup strategy**: Siempre tener un punto de retorno identificado

### ❌ Errores a Evitar
1. **Asumir compatibilidad total**: Verificar cada dependencia individualmente
2. **Orden de configuración**: Respetar dependencias en workflows
3. **Ignorar warnings**: Los warnings de TypeScript pueden indicar problemas reales
4. **Migración sin testing**: Nunca migrar sin pruebas completas

## 🚀 Recomendaciones para Futuras Migraciones

### Pre-migración
- [ ] Crear rama dedicada para la migración
- [ ] Documentar todas las versiones actuales de dependencias
- [ ] Ejecutar suite completa de tests
- [ ] Identificar dependencias críticas que podrían tener breaking changes

### Durante la Migración
- [ ] Usar versiones exactas inicialmente
- [ ] Verificar build después de cada paso
- [ ] Probar funcionalidad core antes de proceder
- [ ] Mantener comunicación con stakeholders

### Post-migración
- [ ] Ejecutar tests de integración completos
- [ ] Verificar deployment en staging
- [ ] Monitorear métricas de rendimiento
- [ ] Mantener período de observación antes de considerar exitosa

## 🛠️ Configuraciones Recomendadas

### package.json para pnpm
```json
{
  "packageManager": "pnpm@8.15.0",
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

### .npmrc recomendado
```
auto-install-peers=true
strict-peer-dependencies=false
prefer-frozen-lockfile=true
```

### GitHub Actions Template
```yaml
name: Deploy with pnpm

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'pnpm'

    - name: Install dependencies
      run: pnpm install --frozen-lockfile

    - name: Build project
      run: pnpm run build

    # ... resto de pasos de deployment
```

## 📊 Criterios de Éxito para Futuras Migraciones

### Técnicos
- [ ] Build exitoso sin warnings
- [ ] Tests pasando al 100%
- [ ] Performance igual o mejor
- [ ] Deployment exitoso

### Funcionales
- [ ] Todas las funcionalidades core operativas
- [ ] UI/UX sin degradación
- [ ] Animaciones funcionando correctamente
- [ ] Navegación fluida

### Operacionales
- [ ] CI/CD funcionando sin errores
- [ ] Métricas de deployment estables
- [ ] No regresiones en producción

## 🔮 Conclusiones

La migración a pnpm es técnicamente viable y ofrece beneficios reales, pero requiere:

1. **Planificación meticulosa**: Cada dependencia debe ser evaluada
2. **Testing exhaustivo**: No solo build, sino funcionalidad completa
3. **Estrategia de rollback**: Siempre tener un plan B
4. **Comunicación clara**: Mantener a todos informados del progreso

**Recomendación**: Intentar la migración nuevamente en una ventana de mantenimiento con más tiempo para testing y validación completa.

---

**Documento creado**: 2025-09-02  
**Autor**: Proceso de migración jordinodejs.github.io  
**Versión**: 1.0  
**Estado**: Lecciones aprendidas - Listo para siguiente intento