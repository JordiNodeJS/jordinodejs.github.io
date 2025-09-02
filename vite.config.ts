import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",  // Always use root path for jordinodejs.github.io deployment
  build: {
    outDir: "dist",
  },
});
