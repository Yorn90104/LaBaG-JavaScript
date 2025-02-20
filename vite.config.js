import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 設定 GitHub Pages 正確的 Base 路徑
export default defineConfig({
  build: {
    outDir: "dist"
  },
  plugins: [react()]
});
