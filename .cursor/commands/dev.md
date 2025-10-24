# Test Page & UI

## 🎯 **Objetivo**
Probar la página web y la interfaz de usuario en el navegador utilizando Chrome DevTools para validar funcionalidad, diseño y experiencia de usuario.

## 🔍 **Testing Básico de Página**

### **1. Navegar a la Página**
```typescript
// Navegar a la URL de la aplicación
await mcp_chrome-devtools_navigate_page({
  url: "http://localhost:3000" // o la URL de tu aplicación
});
```

### **2. Tomar Screenshot**
```typescript
// Capturar screenshot completo de la página
await mcp_chrome-devtools_take_screenshot({
  fullPage: true,
  format: "png"
});
```

### **3. Tomar Snapshot de Elementos**
```typescript
// Obtener snapshot de todos los elementos de la página
const snapshot = await mcp_chrome-devtools_take_snapshot();
```

## 🖱️ **Testing de Interacciones**

### **1. Hacer Click en Elementos**
```typescript
// Hacer click en botones
await mcp_chrome-devtools_click({
  uid: "button-element-uid"
});

// Hacer doble click
await mcp_chrome-devtools_click({
  uid: "element-uid",
  dblClick: true
});
```

### **2. Llenar Formularios**
```typescript
// Llenar un campo de texto
await mcp_chrome-devtools_fill({
  uid: "input-uid",
  value: "Texto de prueba"
});

// Llenar múltiples campos
await mcp_chrome-devtools_fill_form({
  elements: [
    { uid: "name-input", value: "Juan Pérez" },
    { uid: "email-input", value: "juan@ejemplo.com" }
  ]
});
```

### **3. Hover sobre Elementos**
```typescript
// Pasar el mouse sobre un elemento
await mcp_chrome-devtools_hover({
  uid: "hover-element-uid"
});
```

## 📱 **Testing Responsive**

### **1. Cambiar Tamaño de Ventana**
```typescript
// Probar en móvil
await mcp_chrome-devtools_resize_page({
  width: 375,
  height: 812
});

// Probar en tablet
await mcp_chrome-devtools_resize_page({
  width: 768,
  height: 1024
});

// Probar en desktop
await mcp_chrome-devtools_resize_page({
  width: 1920,
  height: 1080
});
```

### **2. Screenshots Responsive**
```typescript
// Screenshot en móvil
await mcp_chrome-devtools_resize_page({ width: 375, height: 812 });
await mcp_chrome-devtools_take_screenshot({ fullPage: true });

// Screenshot en tablet
await mcp_chrome-devtools_resize_page({ width: 768, height: 1024 });
await mcp_chrome-devtools_take_screenshot({ fullPage: true });
```

## 🎨 **Testing de UI**

### **1. Validar Elementos Visibles**
```typescript
// Tomar snapshot y verificar elementos
const snapshot = await mcp_chrome-devtools_take_snapshot();

// Buscar elementos específicos en el snapshot
// (revisar manualmente los elementos disponibles)
```

### **2. Probar Navegación**
```typescript
// Navegar a diferentes páginas
await mcp_chrome-devtools_navigate_page({
  url: "http://localhost:3000/about"
});

await mcp_chrome-devtools_navigate_page({
  url: "http://localhost:3000/contact"
});
```

### **3. Probar Formularios**
```typescript
// Llenar y enviar formularios
await mcp_chrome-devtools_fill_form({
  elements: [
    { uid: "name", value: "Test User" },
    { uid: "email", value: "test@example.com" },
    { uid: "message", value: "Mensaje de prueba" }
  ]
});

// Hacer click en botón de envío
await mcp_chrome-devtools_click({
  uid: "submit-button"
});
```

## 🔍 **Verificación de Errores**

### **1. Revisar Console**
```typescript
// Obtener mensajes de consola
const consoleMessages = await mcp_chrome-devtools_list_console_messages();
```

### **2. Verificar Network**
```typescript
// Listar requests de la página
const requests = await mcp_chrome-devtools_list_network_requests();
```

## 📋 **Checklist de Testing**

### **Funcionalidad Básica**
- [ ] Página carga correctamente
- [ ] Todos los elementos son visibles
- [ ] Botones funcionan
- [ ] Enlaces navegan correctamente
- [ ] Formularios se pueden llenar

### **Responsive Design**
- [ ] Se ve bien en móvil (375px)
- [ ] Se ve bien en tablet (768px)
- [ ] Se ve bien en desktop (1920px)
- [ ] Elementos no se superponen
- [ ] Texto es legible

### **Interacciones**
- [ ] Hover effects funcionan
- [ ] Click en botones responde
- [ ] Formularios se envían
- [ ] Navegación funciona
- [ ] No hay errores en consola

## 🚀 **Workflow Rápido**

### **1. Cargar Página**
```typescript
await mcp_chrome-devtools_navigate_page({
  url: "http://localhost:3000"
});
```

### **2. Verificar Carga**
```typescript
const snapshot = await mcp_chrome-devtools_take_snapshot();
const screenshot = await mcp_chrome-devtools_take_screenshot({ fullPage: true });
```

### **3. Probar Interacciones**
```typescript
// Hacer click en elementos principales
// Llenar formularios si los hay
// Navegar entre páginas
```

### **4. Verificar Responsive**
```typescript
// Probar en diferentes tamaños
// Tomar screenshots
// Verificar que todo funciona
```

## 💡 **Tips de Testing**

1. **Siempre tomar screenshot** antes y después de cambios
2. **Probar en múltiples tamaños** de pantalla
3. **Verificar que no hay errores** en consola
4. **Probar todas las interacciones** principales
5. **Documentar problemas** encontrados

---

**Uso**: Escribe `/dev` en el chat de Cursor para ejecutar este comando.
