import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 檢查是否是 GitHub Pages 環境
const isGitHubPages = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isGitHubPages ? "/LaBaG-JavaScript/" : "/", // 部署用倉庫名稱，本地開發用 "/"
  build: {
    outDir: "dist"
  },
  plugins: [react()]
});
