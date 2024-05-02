import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://VictorGabriel2022.github.io/react-rickandmorty/",
  plugins: [react()],
})
