import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@variables': path.resolve(__dirname, './src/styles/variables.sass'),
      '@images': path.resolve(__dirname, './src/assets'),
    },
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`,
  // },
})
