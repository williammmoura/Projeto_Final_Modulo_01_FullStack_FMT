import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({

  //Definir porta fixa
  server:{
    host: '0.0.0.0',
    port: 3002
  },

  plugins: [react(), eslint()],
})
