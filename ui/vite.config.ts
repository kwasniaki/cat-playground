import path from 'node:path';
import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
} satisfies UserConfig;
