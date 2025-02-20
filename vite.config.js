import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/LaBaG-JavaScript/", // 設定正確的 GitHub Pages 路徑
  build: {
    outDir: "dist"
  },
  plugins: [react()],
})
