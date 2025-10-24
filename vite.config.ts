import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Always use root path for jordinodejs.github.io deployment
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps for production
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true // Remove debugger statements
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          i18n: ['react-i18next', 'i18next']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false // Disable compressed size reporting to reduce warnings
  },
  esbuild: {
    drop: ['console', 'debugger'] // Remove console and debugger in production
  }
})
