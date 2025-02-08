# Instrucciones para Codificar Mejor

Este repositorio utiliza React, Vite, Tailwind CSS y cuenta con configuraciones de ESLint y Prettier para mantener la calidad del código. Algunas recomendaciones para mejorar la codificación son las siguientes:

1. **Consistencia y Calidad de Código**

   - Sigue las reglas definidas en [/.eslintrc.cjs](.eslintrc.cjs) para evitar errores comunes y mantener la consistencia.
   - Aplica el formateo automático de [/.prettierrc.cjs](.prettierrc.cjs) para asegurar un estilo de código uniforme.
   - Utiliza nombres descriptivos para variables, funciones y componentes. Por ejemplo, los componentes en React deben estar en PascalCase y los archivos relacionados deben tener nombres coherentes (por ej., `Article.jsx` en [src/components/Article.jsx](src/components/Article.jsx)).

2. **Componentes y Estructura de Archivos**

   - Los componentes funcionales deben ser compactos y enfocados, utilizando hooks y prop drilling cuando sea necesario.
   - Organiza el código en módulos lógicos ubicados en la carpeta [src/](src/). Separa componentes, páginas, layouts, utilidades, etc.
   - Prefiere el uso de componentes reutilizables y bien documentados.

3. **Accesibilidad y Semántica**

   - Asegúrate de usar atributos accesibles, como `alt` en imágenes, y emplea etiquetas semánticas (por ejemplo, `<article>`, `<header>`, `<footer>`).
   - Valida que los links tengan atributos `target="_blank"` y `rel="noopener noreferrer"` para mayor seguridad cuando sea necesario.

4. **Generación de código**

   - Evita "// ...existing about content..." y complétalo con el código existente.

5. **Integración de Tailwind CSS**

   - Utiliza las clases utilitarias de Tailwind definidas en [tailwind.config.cjs](tailwind.config.cjs) para mantener la coherencia del estilo.
   - Revisa las paletas y modos (light/dark) definidos en la documentación del proyecto, por ejemplo en [README.md](README.md).

6. **Control de Versiones y Despliegue**

   - Sigue las buenas prácticas de commit, escribiendo mensajes claros y concisos.
   - Asegúrate de que las instrucciones para precompilar y desplegar estén actualizadas en el `package.json` y la documentación asociada en [README.md](README.md).

7. **Pruebas y Documentación**

   - Integra y ejecuta pruebas unitarias y de integración según la estructura y herramientas disponibles en el proyecto.
   - Mantén la documentación actualizada para que otros desarrolladores comprendan la arquitectura y el propósito de cada módulo.
