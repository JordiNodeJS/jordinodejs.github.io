# 🚀 Documentación de Despliegue

## Resumen Ejecutivo

Este proyecto utiliza **GitHub Actions** para despliegue automático en GitHub Pages. El proceso es completamente automatizado y se activa con cada push a la rama `main`.

## 🔄 Flujo de Despliegue

```mermaid
graph TD
    A[Desarrollador hace cambios] --> B[git add .]
    B --> C[git commit -m "mensaje"]
    C --> D[git push origin main]
    D --> E[GitHub Actions se activa]
    E --> F[Instala dependencias]
    F --> G[Ejecuta npm run build]
    G --> H[Despliega a GitHub Pages]
    H --> I[Sitio actualizado en jordinodejs.github.io]
```

## 📋 Métodos de Despliegue

### ✅ Método Actual: GitHub Actions

**Archivo**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build project
      run: npm run build

    - name: Setup Pages
      uses: actions/configure-pages@v4

    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'

    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

### ❌ Método Obsoleto: npm run deploy

**⚠️ NO USAR**: Puede causar conflictos con GitHub Actions

```bash
# ❌ NO ejecutar esto
npm run deploy
```

## 🛠️ Configuración Técnica

### package.json
```json
{
  "name": "jordinodejs.github.io",
  "homepage": "https://jordinodejs.github.io",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## 📝 Proceso Paso a Paso

### 1. Desarrollo Local
```bash
# Clonar repositorio
git clone https://github.com/JordiNodeJS/jordinodejs.github.io.git
cd jordinodejs.github.io

# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Servidor en: http://localhost:5173
```

### 2. Testing Local
```bash
# Build de producción
npm run build

# Preview del build
npm run preview
# Preview en: http://localhost:4173
```

### 3. Despliegue
```bash
# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: nueva funcionalidad"

# Push (activa deploy automático)
git push origin main
```

### 4. Monitoreo
- **GitHub Actions**: https://github.com/JordiNodeJS/jordinodejs.github.io/actions
- **Sitio Web**: https://jordinodejs.github.io

## 🔍 Verificación y Monitoreo

### Estados del Workflow

| Estado | Descripción | Acción |
|--------|-------------|---------|
| ✅ Success | Deploy exitoso | Verificar sitio web |
| ❌ Failure | Error en el proceso | Revisar logs |
| 🟡 In Progress | Ejecutándose | Esperar finalización |
| ⏸️ Cancelled | Cancelado manualmente | Reiniciar si necesario |

### Logs Importantes

```bash
# En GitHub Actions, buscar estos logs:
✅ Install dependencies
✅ Build project  
✅ Upload artifact
✅ Deploy to GitHub Pages
```

### Verificación Post-Deploy

```bash
# Verificar respuesta HTTP
curl -I https://jordinodejs.github.io
# Esperado: HTTP/2 200

# Verificar contenido específico
curl -s https://jordinodejs.github.io | grep "⚡"
# Debería encontrar el emoticono en el HTML
```

## 🚨 Solución de Problemas

### Error: Build Fails

**Síntomas**: GitHub Actions falla en el paso "Build project"

**Soluciones**:
```bash
# 1. Verificar build local
npm run build

# 2. Revisar errores TypeScript
npm run lint

# 3. Verificar dependencias
npm ci
```

### Error: Deploy Fails

**Síntomas**: Build exitoso pero deploy falla

**Soluciones**:
1. Verificar permisos en GitHub Settings > Pages
2. Comprobar que la rama `gh-pages` existe
3. Revisar configuración de GitHub Actions

### Error: Sitio No Se Actualiza

**Síntomas**: Deploy exitoso pero sitio muestra versión anterior

**Soluciones**:
```bash
# 1. Esperar propagación (5-10 minutos)
# 2. Limpiar caché del navegador
Ctrl + F5 (Windows/Linux)
Cmd + Shift + R (Mac)

# 3. Verificar en modo incógnito
```

### Error: node_modules en Git

**Síntomas**: Git muestra cambios en node_modules

**Solución**:
```bash
# Descartar cambios en node_modules
git checkout -- node_modules/

# Verificar .gitignore incluye node_modules
echo "node_modules/" >> .gitignore
```

## 📊 Métricas de Despliegue

### Tiempos Promedio
- **Checkout**: ~10 segundos
- **Setup Node.js**: ~15 segundos  
- **Install dependencies**: ~45 segundos
- **Build project**: ~60 segundos
- **Deploy**: ~30 segundos
- **Total**: ~2.5 minutos

### Recursos Utilizados
- **Runner**: ubuntu-latest
- **Node.js**: v18
- **RAM**: ~2GB
- **Storage**: ~10GB

## 🔧 Configuración Avanzada

### Variables de Entorno

```yaml
# En .github/workflows/deploy.yml
env:
  NODE_ENV: production
  CI: true
```

### Configuración de Caché

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'  # Acelera instalación de dependencias
```

### Configuración de Permisos

```yaml
permissions:
  contents: read    # Leer código del repositorio
  pages: write      # Escribir en GitHub Pages
  id-token: write   # Autenticación con GitHub
```

## 📈 Optimizaciones

### Build Performance
```bash
# Usar npm ci en lugar de npm install (más rápido en CI)
npm ci

# Build con optimizaciones
npm run build
```

### Caché Strategy
- **Node modules**: Cached por GitHub Actions
- **Build artifacts**: Subidos una sola vez
- **Dependencies**: Reutilizadas entre builds

## 🔗 Enlaces de Referencia

- **Sitio Web**: https://jordinodejs.github.io
- **Repositorio**: https://github.com/JordiNodeJS/jordinodejs.github.io
- **GitHub Actions**: https://github.com/JordiNodeJS/jordinodejs.github.io/actions
- **GitHub Pages Settings**: https://github.com/JordiNodeJS/jordinodejs.github.io/settings/pages
- **Documentación GitHub Actions**: https://docs.github.com/en/actions
- **Documentación GitHub Pages**: https://docs.github.com/en/pages

## 📋 Checklist de Despliegue

### Antes del Deploy
- [ ] Código funciona localmente (`npm run dev`)
- [ ] Build exitoso (`npm run build`)
- [ ] Preview funciona (`npm run preview`)
- [ ] Tests pasan (si existen)
- [ ] Commit con mensaje descriptivo

### Durante el Deploy
- [ ] GitHub Actions se ejecuta automáticamente
- [ ] Todos los pasos del workflow son exitosos
- [ ] No hay errores en los logs

### Después del Deploy
- [ ] Sitio web carga correctamente
- [ ] Funcionalidades principales funcionan
- [ ] Cambios son visibles
- [ ] No hay errores en consola del navegador

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0.0 