// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from any device (including Docker containers)
    port: 3000,        // Always use port 3000
    strictPort: true,  // Prevents switching to another port if 3000 is unavailable
  },
});
