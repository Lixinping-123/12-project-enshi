import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/12-project-enshi/',
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
