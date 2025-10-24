# Cursor Commands - DevTools & Context7 Integration

## 📋 **Comandos Disponibles**

### **1. `/devtools-integration`**
Comando principal que integra Chrome DevTools y Context7 para desarrollo web moderno.

**Incluye:**
- Performance analysis
- Network debugging
- Device emulation
- Interactive testing
- Documentation lookup

### **2. `/performance-audit`**
Auditoría completa de performance con métricas detalladas.

**Incluye:**
- Core Web Vitals analysis
- Performance metrics
- Optimization recommendations
- Before/after comparison

### **3. `/network-debug`**
Debugging de problemas de red y conectividad.

**Incluye:**
- Request monitoring
- Error analysis
- Network optimization
- API debugging

### **4. `/mobile-test`**
Testing completo para dispositivos móviles.

**Incluye:**
- Device emulation
- Touch interactions
- Responsive design validation
- Mobile performance testing

### **5. `/dev`**
Testing básico de página y UI en el navegador.

**Incluye:**
- Navegación a páginas
- Screenshots y snapshots
- Testing de interacciones
- Validación responsive
- Verificación de errores

## 🚀 **Cómo Usar**

### **Método 1: Comando Directo**
1. Abre el chat de Cursor (Ctrl+L)
2. Escribe `/` seguido del nombre del comando
3. Selecciona el comando de la lista
4. Ejecuta las instrucciones

### **Método 2: Menú de Comandos**
1. Presiona `Ctrl+Shift+P`
2. Busca "Cursor: Run Command"
3. Selecciona el comando deseado

## 🔧 **Prerrequisitos**

### **MCPs Requeridos**
- **Chrome DevTools MCP**: Para debugging y performance
- **Context7 MCP**: Para documentación inteligente

### **Configuración**
1. Asegúrate de que los MCPs estén configurados
2. Ten una URL de aplicación para testing
3. Verifica que la aplicación esté corriendo

## 📊 **Workflows Recomendados**

### **Desarrollo Diario**
1. `/dev` - Probar página básica
2. `/devtools-integration` - Análisis general
3. `/performance-audit` - Validar performance
4. `/mobile-test` - Probar en móvil

### **Debugging**
1. `/network-debug` - Identificar problemas de red
2. `/performance-audit` - Analizar bottlenecks
3. `/devtools-integration` - Aplicar soluciones

### **Testing**
1. `/mobile-test` - Validar responsive design
2. `/performance-audit` - Verificar métricas
3. `/network-debug` - Probar conectividad

## 💡 **Tips de Uso**

### **Para Máxima Eficiencia**
- Combina múltiples comandos en secuencia
- Usa `/devtools-integration` como punto de partida
- Aplica `/performance-audit` después de cambios importantes
- Ejecuta `/mobile-test` antes de deploy

### **Para Debugging**
- Empieza con `/network-debug` para problemas de conectividad
- Usa `/performance-audit` para problemas de rendimiento
- Aplica `/mobile-test` para problemas de responsive design

### **Para Optimización**
- Ejecuta `/performance-audit` para identificar bottlenecks
- Usa `/devtools-integration` para aplicar mejoras
- Valida con `/mobile-test` en diferentes dispositivos

### **Para Testing Básico**
- Usa `/dev` para verificar funcionalidad básica
- Aplica `/dev` antes de testing avanzado
- Ejecuta `/dev` después de cambios en UI

## 🎯 **Casos de Uso Específicos**

### **Proyectos React/Next.js**
- Usar `/devtools-integration` para validar Server Components
- Aplicar `/performance-audit` para optimizar bundle
- Ejecutar `/mobile-test` para validar responsive

### **APIs y Backend**
- Usar `/network-debug` para debugging de APIs
- Aplicar `/performance-audit` para optimizar responses
- Ejecutar `/mobile-test` para validar mobile APIs

### **E-commerce**
- Usar `/performance-audit` para optimizar checkout
- Aplicar `/mobile-test` para validar mobile shopping
- Ejecutar `/network-debug` para optimizar payments

## 📈 **Métricas de Éxito**

### **Performance**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Bundle size < 500KB

### **Mobile**
- Touch targets > 44px
- Readable text > 16px
- Loading time < 3s en 3G
- Responsive design en todos los dispositivos

### **Network**
- Success rate > 99%
- Average response time < 500ms
- Error rate < 1%
- Cache hit rate > 80%

## 🔄 **Actualizaciones**

Los comandos se actualizan automáticamente cuando modificas los archivos en `.cursor/commands/`.

Para agregar nuevos comandos:
1. Crea un nuevo archivo `.md` en `.cursor/commands/`
2. Sigue la estructura de los comandos existentes
3. Documenta el comando en este README

---

**Desarrollado para maximizar la productividad en desarrollo web moderno con Cursor, Chrome DevTools y Context7.**
