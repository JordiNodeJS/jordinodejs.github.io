# Project Documentation

## Components

### Article

The `Article` component is used to display an article with a title, content, and an optional image.

#### Props

- `title` (string): The title of the article.
- `content` (string): The content of the article.
- `imageUrl` (string, optional): The URL of the image to be displayed.

```jsx
import Article from './components/Article'
;<Article
  title="Sample Article"
  content="This is the content of the sample article."
  imageUrl="https://example.com/image.jpg"
/>
```

## Tools

[iloveimg](https://www.iloveimg.com/crop-image)

[Mockups](https://shots.so/)

# 🚀 Guía de Despliegue

Este proyecto utiliza **GitHub Actions** para el despliegue automático en GitHub Pages. A continuación se detalla todo el proceso.

## 📋 Método de Despliegue Actual

### ✅ **GitHub Actions (Recomendado y Actual)**

El proyecto está configurado para desplegarse automáticamente usando GitHub Actions cada vez que se hace push a la rama `main`.

#### **Configuración:**

- **Archivo**: `.github/workflows/deploy.yml`
- **Trigger**: Automático en cada `git push origin main`
- **Destino**: GitHub Pages
- **URL**: https://jordinodejs.github.io

#### **Proceso Automático:**

1. Se detecta un push a la rama `main`
2. GitHub Actions ejecuta el workflow
3. Instala dependencias con `pnpm install --frozen-lockfile`
4. Construye el proyecto con `npm run build`
5. Despliega automáticamente a GitHub Pages

### ❌ **npm run deploy (Obsoleto)**

**⚠️ IMPORTANTE: NO usar `npm run deploy`**

Aunque el comando existe en `package.json`, puede causar conflictos con GitHub Actions. El método recomendado es usar únicamente GitHub Actions.

## 🔧 Configuración del Proyecto

### **package.json**

```json
{
  "name": "jordinodejs.github.io",
  "homepage": "https://jordinodejs.github.io",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "deploy": "gh-pages -d dist" // ⚠️ No usar
  }
}
```

### **GitHub Actions Workflow**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build project
        run: pnpm run build

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## 📝 Proceso de Despliegue Paso a Paso

### **1. Desarrollo Local**

```bash
# Clonar el repositorio
git clone https://github.com/JordiNodeJS/jordinodejs.github.io.git
cd jordinodejs.github.io

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Compilar para producción
pnpm run build
```

### **2. Realizar Cambios**

```bash
# Hacer cambios en el código
# Editar archivos en src/, public/, etc.

# Probar localmente
pnpm run build
pnpm run preview
```

### **3. Desplegar**

```bash
# Agregar cambios al staging
git add .

# Hacer commit con mensaje descriptivo
git commit -m "feat: agregar nueva funcionalidad"

# Hacer push a main (esto activa el deploy automático)
git push origin main
```

### **4. Verificar Despliegue**

1. Ve a: https://github.com/JordiNodeJS/jordinodejs.github.io/actions
2. Verifica que el workflow se ejecutó exitosamente ✅
3. Visita: https://jordinodejs.github.io para ver los cambios

## 🔍 Monitoreo y Verificación

### **GitHub Actions Dashboard**

- **URL**: https://github.com/JordiNodeJS/jordinodejs.github.io/actions
- **Estado**: Muestra si el deploy fue exitoso o falló
- **Logs**: Detalles completos del proceso de build y deploy

### **Tiempos de Despliegue**

- **Build**: ~2-3 minutos
- **Deploy**: ~1-2 minutos
- **Propagación**: ~5-10 minutos (GitHub Pages)

### **Verificación Post-Deploy**

```bash
# Verificar que el sitio está funcionando
curl -I https://jordinodejs.github.io

# Debería retornar: HTTP/2 200
```

## 🛠️ Configuración de GitHub Pages

### **Configuración del Repositorio**

1. Ve a: `Settings` > `Pages`
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (creada automáticamente por GitHub Actions)
4. **Folder**: `/ (root)`

### **Configuración de Dominio**

- **Dominio actual**: `jordinodejs.github.io`
- **HTTPS**: Habilitado automáticamente
- **Dominio personalizado**: No configurado

## 🚨 Solución de Problemas

### **Deploy Falla**

1. Revisar logs en GitHub Actions
2. Verificar que `npm run build` funciona localmente
3. Comprobar que no hay errores de TypeScript/ESLint

### **Sitio No Se Actualiza**

1. Verificar que el workflow se ejecutó exitosamente
2. Esperar 5-10 minutos para propagación
3. Limpiar caché del navegador (Ctrl+F5)

### **Conflictos con node_modules**

```bash
# Si hay problemas con node_modules en Git
git checkout -- node_modules/
git status  # Verificar que esté limpio
```

## 📊 Estructura del Proyecto

```
jordinodejs.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuración GitHub Actions
├── src/                        # Código fuente
├── public/                     # Archivos estáticos
├── dist/                       # Build output (ignorado en Git)
├── package.json               # Dependencias y scripts
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Esta documentación
```

## 🔗 Enlaces Útiles

- **Sitio Web**: https://jordinodejs.github.io
- **Repositorio**: https://github.com/JordiNodeJS/jordinodejs.github.io
- **GitHub Actions**: https://github.com/JordiNodeJS/jordinodejs.github.io/actions
- **Configuración Pages**: https://github.com/JordiNodeJS/jordinodejs.github.io/settings/pages

---

## Resources

[svgrepo](https://www.svgrepo.com/)

[sticker](https://icons8.com/icon/set/animals/stickers)

## Modes

[light mode](https://colorhunt.co/palette/fcf8e894b49fecb390df7861)

#FCF8E8 se parece al color rose-50
#94B49F se parece al color emerald-400
#ECB390 se parece al color orange-200
#DF7861 se parece al color red-300

[dark mode](https://colorhunt.co/palette/2d4356435b66a76f6feab2a0)

#2D4356 se parece al color slate-800
#435B66 se parece al color slate-700
#A76F6F se parece al color rose-400
#EAB2A0 se parece al color rose-200
