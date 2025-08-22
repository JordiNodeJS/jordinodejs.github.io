# SPECIFICATIONS

Este documento lista las especificaciones (specs) del proyecto y explica cómo ejecutarlas localmente y en CI.

## Resumen

- Framework de tests: Playwright (configurado en `playwright.config.ts`).
- Ubicación de specs: `src/tests/` (archivos `.spec.ts`).
- Ejecutar localmente (recomendado usar Bun cuando sea posible, pero Playwright se ejecuta con node/npm/pnpm según tu entorno).

## Lista de spec files relevantes

Los siguientes spec files están en `src/tests/`:

- debug-mobile-navigation.spec.ts
- debug-navigation.spec.ts
- experience-cards-modal-test.spec.ts
- experience-mobile-corrected.spec.ts
- experience-mobile-fixed-v2.spec.ts
- experience-mobile-fixed.spec.ts
- experience-mobile-navigation-fixed.spec.ts
- experience-mobile-spanish.spec.ts
- experience-mobile.spec.ts
- experience-modal-final-test.spec.ts
- hero-component-test.spec.ts
- hero-fixes-verification.spec.ts
- mobile-experience-final-test.spec.ts
- mobile-navigation-analysis.spec.ts
- navigation-blocking-debug.spec.ts
- navigation-fix-final-verification.spec.ts
- navigation-fix-verification.spec.ts
- navigation-offset-solution-test.spec.ts
- navigation-scroll-offset-test.spec.ts
- navigation-success-verification.spec.ts
- quick-modal-test.spec.ts
- simple-hero-test.spec.ts
- smooth-hover-verification.spec.ts
- test-report-hero-components.md
- text-reveal-animation-test.spec.ts
- verify-skills-translations.spec.ts

> Nota: la lista puede cambiar conforme se agreguen nuevos tests. Revisa `src/tests/` para la lista completa.

## Ejecutar tests localmente

Requisitos previos:

- Node.js (si usas Playwright con npm/yarn)
- Bun (recomendado para dev y build del proyecto)
- Playwright instalado en el entorno de Node.js si vas a ejecutar los tests con `npx playwright`.

Opciones para ejecutar:

1. Usando Playwright con npm/yarn (Node.js)

```bash
# instalar dependencias si no están instaladas (usar npm o yarn según tu flujo)
npm install

# instalar playwright browsers
npx playwright install --with-deps

# ejecutar todas las specs
npx playwright test

# ejecutar un spec en particular
npx playwright test src/tests/hero-component-test.spec.ts
```

2. Usando Bun (solo para dev/build, Playwright puede requerir Node.js para test runner)

```bash
# instalar dependencias con bun (mantener bun.lock)
bun install

# iniciar app en modo dev
bun dev

# luego, en otra terminal, ejecutar Playwright (Node.js) para correr las specs
# (Playwright necesita instalación vía npm/yarn en la mayoría de setups)
npx playwright test
```

## Ejecutar un spec individual

```bash
npx playwright test src/tests/hero-component-test.spec.ts -g "nombre del test"
```

## Integración CI

El pipeline de GitHub Actions está configurado para ejecutar Playwright y desplegar cuando corresponda. Revisa `.github/workflows/` para detalles del workflow. En CI se instalan los navegadores de Playwright y se ejecutan las specs en headless.

## Notas y recomendaciones

- Si encuentras fallos intermitentes, intenta ejecutar el spec localmente con `npx playwright test -u` para actualizar snapshots o con `--retries=2`.
- Para debug visual, ejecuta con `npx playwright test --headed --project=chromium`.
- El proyecto usa Bun como package manager y runtime para desarrollo; sin embargo, Playwright puede necesitar Node.js para su CLI y runner en algunos entornos.

---

Última actualización: Agosto 2025
