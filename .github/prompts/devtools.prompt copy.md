# Depuración de UI con DevTools MCPs

Cuando se trate de depurar o comprobar funcionalidades de la UI, utiliza **conjuntamente** los MCPs de Chrome DevTools (`cursor-browser-extension`) y Next.js DevTools (`next-devtools`):

## Flujo de trabajo recomendado:

1. **Inicialización Next.js** (si aplica):

   - Usa `nextjs_index` para descubrir el servidor Next.js en ejecución
   - Usa `nextjs_call` para obtener errores de compilación/runtime antes de probar en el navegador

2. **Navegación y captura inicial**:

   - Usa `browser_navigate` para cargar la página
   - Usa `browser_snapshot` para obtener el estado accesible de la página (mejor que screenshot)
   - Usa `browser_console_messages` para capturar errores del navegador

3. **Análisis combinado**:

   - **Next.js DevTools**: Detecta errores específicos de Next.js (hidratación, SSR, routing, cache)
   - **Chrome DevTools**: Valida diseño visual, responsividad, interacciones, y comportamiento del DOM

4. **Interacción y pruebas**:

   - Usa `browser_click`, `browser_type`, `browser_fill_form` para interactuar con la UI
   - Monitorea `browser_network_requests` para verificar llamadas API
   - Verifica `browser_console_messages` después de cada interacción

5. **Verificación post-cambios**:
   - Vuelve a usar `nextjs_call` para verificar que no hay nuevos errores de Next.js
   - Usa `browser_snapshot` para confirmar el estado final de la UI

## Casos de uso específicos:

- **Problemas de hidratación**: Usa `nextjs_call` para errores de Next.js + `browser_console_messages` para errores del cliente
- **Errores de renderizado**: Combina `nextjs_call` (errores de servidor) con `browser_snapshot` (estado visual)
- **Problemas de routing**: `nextjs_call` para rutas de Next.js + `browser_navigate` para probar navegación
- **Validación de diseño**: `browser_snapshot` + `browser_take_screenshot` para capturas visuales

**IMPORTANTE**: Siempre usa ambos MCPs de forma complementaria, no como alternativas. Next.js DevTools para errores del framework, Chrome DevTools para comportamiento del navegador y UI.
