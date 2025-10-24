# DevTools & Context7 Integration

## 🎯 **Objetivo**
Utilizar los MCPs de Chrome DevTools y Context7 para mejorar el desarrollo, debugging y performance de aplicaciones web modernas.

## 🔧 **CHROME DEVTOOLS MCP**

### **Performance Analysis**
- Iniciar trace de performance completo con reload automático
- Analizar Core Web Vitals (LCP, FID, CLS)
- Identificar bottlenecks de rendimiento
- Generar reportes de métricas

### **Network Debugging**
- Monitorear requests HTTP/HTTPS en tiempo real
- Analizar tiempos de respuesta y errores
- Inspeccionar headers y payloads
- Detectar requests fallidos o lentos

### **Device & Network Emulation**
- Simular dispositivos móviles con CPU throttling
- Emular condiciones de red (3G, 4G, offline)
- Probar en diferentes resoluciones
- Validar responsive design

### **Interactive Testing**
- Tomar snapshots de páginas
- Interactuar con elementos DOM
- Llenar formularios automáticamente
- Simular clicks y navegación

## 📚 **CONTEXT7 MCP**

### **Documentación Inteligente**
- Acceso a documentación actualizada de librerías
- Patrones de React, Next.js, Tailwind CSS
- Mejores prácticas de performance
- Arquitectura de componentes modernos

### **Pattern Recognition**
- Detectar patrones en el código existente
- Sugerir optimizaciones basadas en documentación
- Validar implementaciones contra estándares
- Refactoring inteligente

## 🚀 **Workflows Integrados**

### **1. Performance Audit**
1. Obtener mejores prácticas de Context7
2. Iniciar trace de performance con Chrome DevTools
3. Analizar métricas y identificar problemas
4. Aplicar optimizaciones basadas en documentación

### **2. Network Debugging**
1. Monitorear requests con Chrome DevTools
2. Consultar documentación de APIs con Context7
3. Identificar problemas de conectividad
4. Implementar soluciones robustas

### **3. Mobile-First Development**
1. Emular dispositivos móviles
2. Obtener patrones responsive de Context7
3. Validar en diferentes condiciones
4. Optimizar para mobile

## 📋 **Comandos Rápidos**

### **Performance Check**
```typescript
// Iniciar análisis de performance
await mcp_chrome-devtools_performance_start_trace({
  reload: true,
  autoStop: true
});

// Analizar métricas específicas
const insights = await mcp_chrome-devtools_performance_analyze_insight({
  insightName: "LCPBreakdown"
});
```

### **Network Analysis**
```typescript
// Listar requests críticos
const requests = await mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["fetch", "xhr", "document"]
});

// Inspeccionar request específico
const request = await mcp_chrome-devtools_get_network_request({
  url: "https://api.example.com/endpoint"
});
```

### **Documentation Lookup**
```typescript
// Resolver librería
const libraryInfo = await mcp_context7_resolve-library-id({
  libraryName: "next.js"
});

// Obtener documentación específica
const docs = await mcp_context7_get-library-docs({
  context7CompatibleLibraryID: "/vercel/next.js",
  topic: "app-router",
  tokens: 5000
});
```

### **Device Emulation**
```typescript
// Simular CPU throttling (móviles)
await mcp_chrome-devtools_emulate_cpu({ throttlingRate: 4 });

// Simular red lenta
await mcp_chrome-devtools_emulate_network({ 
  throttlingOption: "Slow 3G" 
});
```

## 💡 **Mejores Prácticas**

1. **Combinar siempre** Context7 (documentación) + Chrome DevTools (validación)
2. **Emular condiciones reales** antes de optimizar
3. **Monitorear métricas continuamente** durante el desarrollo
4. **Documentar patrones** que funcionen bien
5. **Usar snapshots** para debugging visual

## 🎯 **Casos de Uso Específicos**

### **Para Proyectos React/Next.js**
- Validar Server Components
- Optimizar bundle splitting
- Implementar streaming y suspense
- Aplicar patrones de App Router

### **Para Performance**
- Auditar Core Web Vitals
- Optimizar imágenes y assets
- Implementar lazy loading
- Reducir JavaScript bundle

### **Para Debugging**
- Capturar errores de consola
- Analizar network requests
- Probar en diferentes dispositivos
- Validar accesibilidad

---

**Uso**: Escribe `/devtools-integration` en el chat de Cursor para ejecutar este comando.
