# Cursor DevTools & Context7 Integration Prompt

## 🎯 **Objetivo Principal**
Utilizar los MCPs de Chrome DevTools y Context7 para mejorar el desarrollo, debugging y performance de aplicaciones web modernas.

---

## 🔧 **CHROME DEVTOOLS MCP - Debugging Avanzado**

### **Capacidades Clave**
- **Performance Profiling**: Análisis de Core Web Vitals y métricas de rendimiento
- **Network Monitoring**: Inspección de requests, respuestas y tiempos de carga
- **Console Debugging**: Captura de errores, warnings y logs en tiempo real
- **DOM Interaction**: Snapshots, clicks, formularios y navegación automatizada
- **Device Emulation**: Simulación de CPU throttling y condiciones de red

### **Casos de Uso Prioritarios**

#### **1. Performance Analysis**
```typescript
// Iniciar análisis de performance completo
await mcp_chrome-devtools_performance_start_trace({
  reload: true,
  autoStop: true
});

// Analizar métricas específicas
const insights = await mcp_chrome-devtools_performance_analyze_insight({
  insightName: "LCPBreakdown" // o "DocumentLatency"
});
```

#### **2. Network Debugging**
```typescript
// Monitorear requests críticos
const requests = await mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["fetch", "xhr", "document"],
  pageSize: 50
});

// Inspeccionar request específico
const request = await mcp_chrome-devtools_get_network_request({
  url: "https://api.example.com/endpoint"
});
```

#### **3. Device & Network Emulation**
```typescript
// Simular dispositivos móviles
await mcp_chrome-devtools_emulate_cpu({ throttlingRate: 4 });

// Simular red lenta
await mcp_chrome-devtools_emulate_network({ 
  throttlingOption: "Slow 3G" 
});
```

#### **4. Interactive Testing**
```typescript
// Tomar snapshot de la página
const snapshot = await mcp_chrome-devtools_take_snapshot();

// Interactuar con elementos
await mcp_chrome-devtools_click({ uid: "button-element-uid" });
await mcp_chrome-devtools_fill({ 
  uid: "input-element-uid", 
  value: "test data" 
});
```

---

## 📚 **CONTEXT7 MCP - Documentación Inteligente**

### **Capacidades Clave**
- **Documentación Actualizada**: Acceso a docs oficiales de librerías modernas
- **Pattern Recognition**: Detección de patrones en React, Next.js, Tailwind
- **Best Practices**: Implementación de mejores prácticas actualizadas
- **Architecture Analysis**: Análisis de arquitectura de componentes

### **Flujo de Trabajo Estándar**

#### **1. Resolver Librería**
```typescript
const libraryInfo = await mcp_context7_resolve-library-id({
  libraryName: "next.js" // o "react", "tailwind", "typescript"
});
```

#### **2. Obtener Documentación Específica**
```typescript
const docs = await mcp_context7_get-library-docs({
  context7CompatibleLibraryID: "/vercel/next.js",
  topic: "app-router", // o "server-components", "routing", etc.
  tokens: 5000
});
```

### **Casos de Uso Prioritarios**

#### **A) Análisis de Arquitectura**
- Validar patrones de componentes React/Next.js
- Optimizar estructura de carpetas y archivos
- Implementar Server Components correctamente

#### **B) Performance Optimization**
- Aplicar mejores prácticas de RSC (React Server Components)
- Implementar streaming y suspense
- Optimizar bundle splitting y lazy loading

#### **C) Modern Patterns**
- Migrar a App Router de Next.js
- Implementar Server Actions
- Aplicar patrones de estado modernos

---

## 🚀 **Workflows Integrados**

### **Workflow 1: Performance Audit Completo**
1. **Context7**: Obtener mejores prácticas de performance
2. **Chrome DevTools**: Iniciar trace de performance
3. **Análisis**: Identificar bottlenecks y métricas
4. **Optimización**: Aplicar mejoras basadas en documentación

### **Workflow 2: Debugging de Network Issues**
1. **Chrome DevTools**: Monitorear requests problemáticos
2. **Context7**: Consultar documentación de APIs
3. **Análisis**: Identificar problemas de conectividad
4. **Solución**: Implementar retry logic y error handling

### **Workflow 3: Mobile-First Development**
1. **Chrome DevTools**: Emular dispositivos móviles
2. **Context7**: Obtener patrones responsive
3. **Testing**: Validar en diferentes condiciones
4. **Optimización**: Aplicar mobile-first patterns

---

## 📋 **Checklist de Implementación**

### **Antes de Empezar**
- [ ] Verificar que los MCPs estén configurados correctamente
- [ ] Tener una URL de aplicación para testing
- [ ] Identificar librerías principales del proyecto

### **Durante el Desarrollo**
- [ ] Usar Context7 para documentación antes de implementar
- [ ] Emplear Chrome DevTools para validar performance
- [ ] Monitorear network requests en tiempo real
- [ ] Probar en diferentes condiciones de red

### **Después de Implementar**
- [ ] Ejecutar performance audit completo
- [ ] Validar Core Web Vitals
- [ ] Verificar que no hay errores en console
- [ ] Documentar cambios y mejoras aplicadas

---

## 🎯 **Comandos Rápidos**

### **Performance Quick Check**
```bash
# Iniciar trace y obtener métricas
await mcp_chrome-devtools_performance_start_trace({reload: true, autoStop: true})
```

### **Network Debug**
```bash
# Listar requests y analizar
await mcp_chrome-devtools_list_network_requests({resourceTypes: ["fetch", "xhr"]})
```

### **Documentation Lookup**
```bash
# Obtener docs de Next.js
await mcp_context7_resolve-library-id({libraryName: "next.js"})
```

---

## 💡 **Tips y Mejores Prácticas**

1. **Siempre combinar** Context7 (documentación) + Chrome DevTools (validación)
2. **Emular condiciones reales** antes de optimizar
3. **Monitorear métricas continuamente** durante el desarrollo
4. **Documentar patrones** que funcionen bien en tu proyecto
5. **Usar snapshots** para debugging visual de problemas específicos

---

*Este prompt está diseñado para maximizar el uso de los MCPs de Chrome DevTools y Context7 en el desarrollo de aplicaciones web modernas.*
