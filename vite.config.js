import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/LaBaG-React/",
  build: {
    outDir: "dist"
  },
  plugins: [react()]
});
