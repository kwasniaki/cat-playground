import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default {
  server: {
    port: 3000,
  },
  plugins: [react()],
} satisfies UserConfig;
