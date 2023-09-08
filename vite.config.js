import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert() ],
  server: {
    https: true,
    port: 8001, // Set your desired port number here
    proxy: {
          '/api': 'https://localhost:8001', // Forward requests to your Express backend
        },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
