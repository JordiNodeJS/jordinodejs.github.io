# Mobile Testing

## 🎯 **Objetivo**
Probar aplicaciones web en condiciones móviles reales utilizando Chrome DevTools para emular dispositivos, simular condiciones de red y validar responsive design.

## 📱 **Emulación de Dispositivos**

### **1. Configurar Dispositivo Móvil**
```typescript
// Redimensionar ventana para móvil
await mcp_chrome-devtools_resize_page({
  width: 375,  // iPhone X
  height: 812
});

// O para tablet
await mcp_chrome-devtools_resize_page({
  width: 768,  // iPad
  height: 1024
});
```

### **2. CPU Throttling (Dispositivos Móviles)**
```typescript
// Simular CPU de móvil (4x más lento)
await mcp_chrome-devtools_emulate_cpu({
  throttlingRate: 4
});

// Simular CPU de tablet (2x más lento)
await mcp_chrome-devtools_emulate_cpu({
  throttlingRate: 2
});
```

### **3. Condiciones de Red Móvil**
```typescript
// Simular 3G lento
await mcp_chrome-devtools_emulate_network({
  throttlingOption: "Slow 3G"
});

// Simular 4G rápido
await mcp_chrome-devtools_emulate_network({
  throttlingOption: "Fast 4G"
});
```

## 🔍 **Testing Interactivo**

### **1. Tomar Screenshots**
```typescript
// Screenshot completo de la página
await mcp_chrome-devtools_take_screenshot({
  fullPage: true,
  format: "png"
});

// Screenshot de elemento específico
await mcp_chrome-devtools_take_screenshot({
  uid: "mobile-menu-uid",
  format: "png"
});
```

### **2. Interactuar con Elementos**
```typescript
// Tomar snapshot para ver elementos
const snapshot = await mcp_chrome-devtools_take_snapshot();

// Hacer click en botones móviles
await mcp_chrome-devtools_click({
  uid: "mobile-menu-button"
});

// Llenar formularios móviles
await mcp_chrome-devtools_fill({
  uid: "mobile-email-input",
  value: "test@example.com"
});
```

### **3. Testing de Formularios**
```typescript
// Llenar múltiples campos
await mcp_chrome-devtools_fill_form({
  elements: [
    { uid: "name-input", value: "John Doe" },
    { uid: "email-input", value: "john@example.com" },
    { uid: "phone-input", value: "+1234567890" }
  ]
});
```

## 📊 **Métricas Móviles**

### **Performance en Móvil**
```typescript
// Iniciar trace de performance en móvil
await mcp_chrome-devtools_performance_start_trace({
  reload: true,
  autoStop: true
});

// Analizar métricas específicas de móvil
const mobileInsights = await mcp_chrome-devtools_performance_analyze_insight({
  insightName: "LCPBreakdown"
});
```

### **Network en Móvil**
```typescript
// Monitorear requests en condiciones móviles
const mobileRequests = await mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["document", "stylesheet", "script", "image"]
});
```

## 🎯 **Casos de Uso Móviles**

### **1. Touch Interactions**
- **Swipe**: Validar gestos de deslizamiento
- **Pinch/Zoom**: Probar zoom en imágenes
- **Tap**: Verificar botones y enlaces
- **Long Press**: Probar menús contextuales

### **2. Responsive Design**
- **Breakpoints**: Probar en diferentes tamaños
- **Orientation**: Validar portrait/landscape
- **Viewport**: Verificar meta viewport
- **Touch Targets**: Validar tamaño de botones

### **3. Performance Móvil**
- **Loading Time**: Tiempo de carga en 3G
- **Battery Usage**: Optimizar consumo
- **Memory Usage**: Gestionar memoria
- **CPU Usage**: Optimizar procesamiento

## 📚 **Consultar Documentación Móvil**

### **Mobile Best Practices**
```typescript
// Obtener documentación de mobile
const mobileDocs = await mcp_context7_resolve-library-id({
  libraryName: "responsive-design"
});

// Obtener mejores prácticas de mobile
const mobileBestPractices = await mcp_context7_get-library-docs({
  context7CompatibleLibraryID: "/mdn/responsive-design",
  topic: "mobile-first",
  tokens: 4000
});
```

## 🚀 **Workflow de Testing Móvil**

### **1. Configuración Inicial**
```typescript
// Configurar dispositivo móvil
await mcp_chrome-devtools_resize_page({ width: 375, height: 812 });
await mcp_chrome-devtools_emulate_cpu({ throttlingRate: 4 });
await mcp_chrome-devtools_emulate_network({ throttlingOption: "Slow 3G" });
```

### **2. Testing de Performance**
```typescript
// Iniciar análisis de performance
await mcp_chrome-devtools_performance_start_trace({
  reload: true,
  autoStop: true
});
```

### **3. Testing Interactivo**
```typescript
// Tomar snapshot y interactuar
const snapshot = await mcp_chrome-devtools_take_snapshot();
await mcp_chrome-devtools_click({ uid: "mobile-menu" });
```

### **4. Validación Visual**
```typescript
// Tomar screenshots para validación
await mcp_chrome-devtools_take_screenshot({
  fullPage: true,
  format: "png"
});
```

## 📋 **Checklist de Testing Móvil**

### **Dispositivos a Probar**
- [ ] iPhone SE (375x667)
- [ ] iPhone X (375x812)
- [ ] iPhone 12 Pro (390x844)
- [ ] iPad (768x1024)
- [ ] iPad Pro (1024x1366)

### **Condiciones de Red**
- [ ] WiFi (Fast 4G)
- [ ] 4G (Fast 4G)
- [ ] 3G (Slow 3G)
- [ ] 2G (Slow 3G)
- [ ] Offline

### **Interacciones a Validar**
- [ ] Touch targets (mínimo 44px)
- [ ] Swipe gestures
- [ ] Pinch/zoom
- [ ] Orientation changes
- [ ] Keyboard interactions

### **Performance Móvil**
- [ ] LCP < 2.5s en 3G
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 500KB
- [ ] Images optimized

## 🎯 **Métricas de Éxito Móvil**

### **Core Web Vitals Móviles**
- **LCP**: < 2.5s (3G)
- **FID**: < 100ms
- **CLS**: < 0.1

### **Métricas Adicionales**
- **TTI**: < 3.8s
- **TBT**: < 200ms
- **Bundle Size**: < 500KB
- **Image Optimization**: WebP/AVIF

### **UX Móvil**
- **Touch Targets**: > 44px
- **Readable Text**: > 16px
- **Contrast Ratio**: > 4.5:1
- **Loading Time**: < 3s en 3G

## 📊 **Reporte de Testing Móvil**

### **Dispositivos Probados**
- [ ] iPhone SE: ✅/❌
- [ ] iPhone X: ✅/❌
- [ ] iPad: ✅/❌

### **Problemas Encontrados**
- [ ] Touch targets pequeños
- [ ] Texto no legible
- [ ] Performance lenta
- [ ] Layout breaks

### **Optimizaciones Aplicadas**
- [ ] Aumentado tamaño de botones
- [ ] Mejorado contraste de texto
- [ ] Optimizado imágenes
- [ ] Implementado lazy loading

---

**Uso**: Escribe `/mobile-test` en el chat de Cursor para ejecutar este comando.
