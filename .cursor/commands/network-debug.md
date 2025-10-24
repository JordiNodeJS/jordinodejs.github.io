# Network Debug

## 🎯 **Objetivo**
Debuggear problemas de red y conectividad utilizando Chrome DevTools para identificar y solucionar issues de API, requests fallidos y problemas de performance de red.

## 🔍 **Análisis de Network**

### **1. Monitorear Requests**
```typescript
// Listar todos los requests
const allRequests = await mcp_chrome-devtools_list_network_requests();

// Filtrar por tipo de recurso
const apiRequests = await mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["fetch", "xhr"]
});

// Filtrar por tamaño de página
const requests = await mcp_chrome-devtools_list_network_requests({
  pageSize: 50
});
```

### **2. Inspeccionar Request Específico**
```typescript
// Obtener detalles de request específico
const request = await mcp_chrome-devtools_get_network_request({
  url: "https://api.example.com/endpoint"
});
```

### **3. Analizar Errores de Red**
```typescript
// Capturar console messages para errores de red
const consoleMessages = await mcp_chrome-devtools_list_console_messages();
```

## 🚨 **Problemas Comunes**

### **Requests Fallidos**
- **404 Not Found**: Verificar URLs y endpoints
- **500 Internal Server Error**: Revisar backend y logs
- **CORS Issues**: Configurar headers correctos
- **Timeout**: Aumentar timeouts o optimizar queries

### **Performance de Red**
- **Slow Requests**: Identificar endpoints lentos
- **Large Payloads**: Optimizar datos enviados
- **Too Many Requests**: Implementar batching
- **Blocking Requests**: Optimizar orden de carga

### **Caching Issues**
- **Stale Data**: Verificar cache headers
- **No Cache**: Implementar estrategias de cache
- **Cache Miss**: Optimizar cache keys
- **Cache Invalidation**: Configurar TTL correcto

## 🔧 **Herramientas de Debug**

### **1. Emular Condiciones de Red**
```typescript
// Simular red lenta
await mcp_chrome-devtools_emulate_network({
  throttlingOption: "Slow 3G"
});

// Simular offline
await mcp_chrome-devtools_emulate_network({
  throttlingOption: "Offline"
});
```

### **2. CPU Throttling**
```typescript
// Simular dispositivo móvil
await mcp_chrome-devtools_emulate_cpu({
  throttlingRate: 4
});
```

### **3. Interactuar con la Página**
```typescript
// Tomar snapshot para debugging visual
const snapshot = await mcp_chrome-devtools_take_snapshot();

// Llenar formularios para testing
await mcp_chrome-devtools_fill({
  uid: "input-uid",
  value: "test data"
});

// Hacer click en botones
await mcp_chrome-devtools_click({
  uid: "button-uid"
});
```

## 📚 **Consultar Documentación**

### **API Documentation**
```typescript
// Obtener documentación de API
const apiDocs = await mcp_context7_resolve-library-id({
  libraryName: "fetch-api"
});

// Obtener mejores prácticas de networking
const networkDocs = await mcp_context7_get-library-docs({
  context7CompatibleLibraryID: "/mdn/fetch-api",
  topic: "error-handling",
  tokens: 3000
});
```

## 🎯 **Checklist de Debug**

### **Antes de Debuggear**
- [ ] Verificar que la aplicación esté corriendo
- [ ] Tener URLs de endpoints disponibles
- [ ] Configurar network throttling
- [ ] Preparar datos de test

### **Durante el Debug**
- [ ] Monitorear requests en tiempo real
- [ ] Identificar requests problemáticos
- [ ] Analizar headers y payloads
- [ ] Verificar códigos de respuesta

### **Después del Debug**
- [ ] Documentar problemas encontrados
- [ ] Implementar soluciones
- [ ] Validar fixes
- [ ] Actualizar documentación

## 🚀 **Soluciones Automáticas**

### **1. Retry Logic**
```typescript
// Implementar retry automático para requests fallidos
const retryRequest = async (url: string, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
```

### **2. Error Handling**
```typescript
// Manejo robusto de errores de red
const handleNetworkError = (error: Error) => {
  if (error.name === 'TypeError') {
    // Network error
    console.error('Network error:', error.message);
  } else if (error.name === 'AbortError') {
    // Request cancelled
    console.error('Request cancelled');
  } else {
    // Other errors
    console.error('Unknown error:', error);
  }
};
```

### **3. Request Optimization**
```typescript
// Optimizar requests con batching
const batchRequests = async (urls: string[]) => {
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.allSettled(promises);
  return responses;
};
```

## 📊 **Métricas de Red**

### **Tiempos de Respuesta**
- **DNS Lookup**: Tiempo de resolución DNS
- **TCP Connection**: Tiempo de conexión TCP
- **TLS Handshake**: Tiempo de handshake SSL
- **Request/Response**: Tiempo de transferencia

### **Tamaños de Datos**
- **Request Size**: Tamaño de datos enviados
- **Response Size**: Tamaño de datos recibidos
- **Compression Ratio**: Eficiencia de compresión
- **Cache Hit Rate**: Porcentaje de cache hits

## 🎯 **Reporte de Network**

### **Problemas Identificados**
- [ ] Requests fallidos: [número]
- [ ] Requests lentos: [número]
- [ ] Errores de CORS: [número]
- [ ] Timeouts: [número]

### **Optimizaciones Aplicadas**
- [ ] Implementado retry logic
- [ ] Configurado error handling
- [ ] Optimizado payloads
- [ ] Configurado caching

### **Métricas Mejoradas**
- **Tiempo promedio de respuesta**: [valor]ms
- **Tasa de éxito**: [valor]%
- **Tamaño promedio de payload**: [valor]KB
- **Cache hit rate**: [valor]%

---

**Uso**: Escribe `/network-debug` en el chat de Cursor para ejecutar este comando.
