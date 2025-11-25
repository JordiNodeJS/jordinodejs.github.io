---
trigger: always_on
---

# Instrucciones para Codificar Mejor

````markdown
# Instrucciones para asistentes de IA / GitHub Copilot

Este repo es un portfolio moderno: React + TypeScript + Vite + Tailwind. El objetivo de este archivo es proporcionar a agentes automatizados (Copilot/AGENTs) conocimientos prácticos, comandos y patrones específicos del proyecto para que sean productivos inmediatamente.

Principales puntos rápidos

- **Lenguaje / herramientas**: TypeScript, React 19, Vite, Tailwind, Framer Motion, i18next. (Ver `package.json`)
- **Requisitos**: `node >= 18`, usa `pnpm` (archivo `package.json` declara `pnpm@>=8`).
- **Scripts clave**: `pnpm dev` (dev), `pnpm build` (ejecuta `tsc -b && vite build`), `pnpm preview`, `pnpm lint`.
- **Deploy**: Deploy automatizado con GitHub Actions (`.github/workflows/deploy.yml`). Evitar usar manualmente `npm run deploy`.

Arquitectura y responsabilidades (qué archivos leer primero)

- `src/`: UI, componentes y hooks. Subcarpetas importantes: `components/`, `hooks/`, `contexts/`, `i18n/`, `data/`.
- `contexts/ThemeContext.tsx`: patrón de contexto para temas (modo light/dark) y preferencias — útil para cambios visuales globales.
- `hooks/*`: utilidades de interacción visual (p. ej. `use3DMouseEffect.ts`, `useMotion3DEffect.ts`) — modifica con cuidado (impactan animaciones y performance).
- `i18n/locales/*.json`: traducciones; agregar claves allí para textos multilanguage.
- `vite.config.ts` + `tsconfig*.json`: configuración de bundling y paths. Respeta `tsc -b` build step antes de `vite build`.

Build / test / debug flows (commands to run)

- Instalar dependencias (recomendado):
  ```bash
  pnpm install
  ```
````

- Desarrollo local:
  ```bash
  pnpm dev
  # abrir http://localhost:5173 (por defecto)
  ```
- Build de producción:
  ```bash
  pnpm build
  pnpm preview
  ```
- Lint:
  ```bash
  pnpm lint
  ```
- Playwright (tests / verificación de despliegue):
  ```bash
  pnpm exec playwright test
  ```

Deploy / CI notes

- CI uses GitHub Actions: `.github/workflows/deploy.yml`. The workflow performs `npm ci` then `npm run build` — locally prefer `pnpm` but CI uses `npm ci` in the current workflow.
- Do not rely on `package.json` `deploy` script for production; prefer the CI workflow or the specialized scripts under `scripts/` (`build-vercel.js`, `deploy-to-github-pages.js`).

Project-specific conventions & examples

- React components: PascalCase filenames in `src/components/` (e.g. `Hero.tsx`, `Skills.tsx`). Vite handles automatic JSX runtime — do not add redundant `import React from 'react'`.
- Theme & preferences: centralize cross-cutting UI state in `contexts/ThemeContext.tsx` and `PreferencesManager.tsx`.
- i18n: use `i18n/index.ts` + `react-i18next` and locale json files. Add translation keys to `i18n/locales/*.json` and use the `usePortfolioTranslations` hook when available.
- Animation / perf: many components use `framer-motion` and custom motion hooks. When changing animations, run full `pnpm build` and audit performance (Playwright + DevTools) because animations affect LCP and rendering.

Integration points & external dependencies

- Third-party libs: `framer-motion`, `react-i18next`, `lucide-react`, `tailwindcss`.
- Playwright + @playwright/test are present for browser tests. There is a `playwright-report/` artifact folder.
- `scripts/` contains deploy/build helpers (Vercel/GH-Pages) — check these before modifying CI.

When editing code, recommended quick checklist for agents

1. Run `pnpm install` if deps changed. 2. Run `pnpm build` to catch TS errors (`tsc -b`) and bundling regressions. 3. Run `pnpm lint` to respect repo ESLint rules. 4. If UI changes: `pnpm preview` + spot-check pages and `pnpm exec playwright test` for automated checks.

Files to reference when unsure

- `package.json` (scripts, engines)
- `.github/workflows/deploy.yml` (deploy flow)
- `vite.config.ts`, `tsconfig.json` (build config)
- `src/contexts/ThemeContext.tsx`, `src/hooks/` (project patterns)
- `src/i18n/locales/*.json` (translations)
- `tailwind.config.js` (design tokens / classes)

Edits and Pull Requests

- Keep changes minimal and focused. If touching styles/animations, mention performance testing in PR description. Use descriptive commit messages (conventional commits encouraged but not required).

Si algo no está claro o quieres que añada ejemplos concretos (p. ej. un snippet de `ThemeContext` o cómo añadir una nueva traducción), dime qué sección expando.

```

```
