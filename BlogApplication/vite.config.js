import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // 👈 MUST be 0.0.0.0 for Docker networking
    host: '0.0.0.0', 
    port: 5173,
    // If you have issues with file watching in Docker Desktop, add usePolling: true
    watch: {
        usePolling: true,
    }
  }
});