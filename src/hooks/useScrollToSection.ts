import { useCallback } from "react";

/**
 * Hook personalizado para manejar navegación con offset de la barra de navegación
 * Soluciona el problema de que los títulos de sección se oculten detrás de la navegación fija
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      // Calcular la altura de la navegación dinámicamente
      const navigation = document.querySelector("nav");
      const navHeight = navigation?.getBoundingClientRect().height || 80;

      // Obtener la posición del elemento relativa al documento
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Calcular la posición de desplazamiento con el offset de la navegación
      const offsetPosition = absoluteElementTop - navHeight;

      // Scroll suave a la posición con offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToSection };
};

export default useScrollToSection;