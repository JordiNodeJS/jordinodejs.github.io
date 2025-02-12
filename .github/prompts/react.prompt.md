# Prompt de React Ampliado: Mejores Prácticas

Este prompt está diseñado para asegurar que al desarrollar con React se sigan las mejores prácticas en cuanto a legibilidad, rendimiento, accesibilidad y mantenibilidad. Considera lo siguiente:

- Componentes Funcionales y Hooks:  
  Utiliza componentes funcionales en lugar de clases. Emplea hooks (como useState, useEffect, useCallback, etc.) de forma coherente para gestionar el estado, los efectos secundarios y la memoización.

- Estructura y Modularidad:  
  Organiza el código en módulos lógicos: componentes, páginas, layouts y utilidades. Los componentes deben ser compactos y reutilizables, evitando la sobrecarga de lógica en un solo lugar.

- Accesibilidad y Semántica:  
  Utiliza etiquetas HTML semánticas y asegúrate de que todos los elementos interactivos (botones, enlaces, formularios) tengan los atributos necesarios (como aria-label, role) para mejorar la experiencia de todos los usuarios.

- Optimización del Rendimiento:  
  Evita renders innecesarios mediante el uso de React.memo, useCallback y useMemo. Desestructura las props de los componentes para facilitar su lectura y optimización.

- Estilo de Código Consistente:  
  Asegúrate de seguir las reglas definidas en [/.eslintrc.cjs](.eslintrc.cjs) y [/.prettierrc.cjs](.prettierrc.cjs). Considera también la integración de Tailwind CSS para la coherencia visual en todos los componentes.

- Documentación y Comentarios:  
  Documenta el propósito de cada componente y función, ya sea mediante comentarios o en la documentación del proyecto, para facilitar el trabajo en equipo y el mantenimiento a largo plazo.

- Testing e Integración Continua:  
  Integra pruebas unitarias y de integración para asegurar el correcto funcionamiento del componente en diferentes escenarios.

Utiliza este prompt como guía para desarrollar componentes de React que sean fáciles de mantener, optimizados y accesibles.