# Performance Audit

## 🎯 **Objetivo**
Realizar una auditoría completa de performance utilizando Chrome DevTools y Context7 para identificar y solucionar problemas de rendimiento.

## 📊 **Métricas a Analizar**

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: Tiempo de carga del elemento más grande
- **FID (First Input Delay)**: Tiempo de respuesta a la primera interacción
- **CLS (Cumulative Layout Shift)**: Estabilidad visual de la página

### **Métricas Adicionales**
- **FCP (First Contentful Paint)**: Primer contenido visible
- **TTI (Time to Interactive)**: Tiempo hasta interactividad
- **TBT (Total Blocking Time)**: Tiempo total de bloqueo

## 🔧 **Proceso de Auditoría**

### **1. Iniciar Análisis**
```typescript
// Iniciar trace de performance con reload
await mcp_chrome-devtools_performance_start_trace({
  reload: true,
  autoStop: true
});
```

### **2. Analizar Métricas Específicas**
```typescript
// Analizar LCP breakdown
const lcpInsights = await mcp_chrome-devtools_performance_analyze_insight({
  insightName: "LCPBreakdown"
});

// Analizar document latency
const docLatency = await mcp_chrome-devtools_performance_analyze_insight({
  insightName: "DocumentLatency"
});
```

### **3. Monitorear Network**
```typescript
// Listar requests que afectan performance
const requests = await mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["document", "stylesheet", "script", "image"]
});
```

### **4. Emular Condiciones Reales**
```typescript
// Simular CPU de móvil
await mcp_chrome-devtools_emulate_cpu({ throttlingRate: 4 });

// Simular red lenta
await mcp_chrome-devtools_emulate_network({ 
  throttlingOption: "Slow 3G" 
});
```

## 📚 **Consultar Documentación**

### **Obtener Mejores Prácticas**
```typescript
// Resolver librería para performance
const perfDocs = await mcp_context7_resolve-library-id({
  libraryName: "next.js"
});

// Obtener documentación de optimización
const optimizationDocs = await mcp_context7_get-library-docs({
  context7CompatibleLibraryID: "/vercel/next.js",
  topic: "performance",
  tokens: 5000
});
```

## 🎯 **Checklist de Optimización**

### **JavaScript**
- [ ] Code splitting implementado
- [ ] Lazy loading de componentes
- [ ] Tree shaking activado
- [ ] Bundle size optimizado

### **CSS**
- [ ] Critical CSS inline
- [ ] CSS no crítico cargado asíncronamente
- [ ] Purge CSS configurado
- [ ] Minificación activada

### **Imágenes**
- [ ] Formato WebP/AVIF
- [ ] Lazy loading implementado
- [ ] Responsive images
- [ ] Optimización de tamaño

### **Network**
- [ ] HTTP/2 habilitado
- [ ] Compression activada
- [ ] CDN configurado
- [ ] Caching headers correctos

## 🚀 **Acciones Automáticas**

### **1. Identificar Problemas**
- Analizar métricas de performance
- Identificar recursos lentos
- Detectar layout shifts
- Encontrar JavaScript bloqueante

### **2. Aplicar Soluciones**
- Implementar code splitting
- Optimizar imágenes
- Configurar lazy loading
- Aplicar mejores prácticas

### **3. Validar Mejoras**
- Re-ejecutar performance audit
- Comparar métricas antes/después
- Verificar Core Web Vitals
- Confirmar mejoras en mobile

## 📈 **Reporte de Resultados**

### **Métricas Antes**
- LCP: [valor]ms
- FID: [valor]ms
- CLS: [valor]
- Bundle size: [valor]KB

### **Métricas Después**
- LCP: [valor]ms (mejora: [%])
- FID: [valor]ms (mejora: [%])
- CLS: [valor] (mejora: [%])
- Bundle size: [valor]KB (reducción: [%])

### **Recomendaciones**
- [ ] Implementar Server Components
- [ ] Optimizar imágenes
- [ ] Configurar CDN
- [ ] Aplicar lazy loading

---

**Uso**: Escribe `/performance-audit` en el chat de Cursor para ejecutar este comando.
