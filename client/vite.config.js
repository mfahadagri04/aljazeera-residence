import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TypeAnimation } from 'react-type-animation';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: []
    }
  },
  optimizeDeps: {
    include: ['react-type-animation'] // Explicitly include the package
  }
});