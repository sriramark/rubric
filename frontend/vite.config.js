import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite only inlines `import.meta.env.VITE_*`. The project requires the
// REACT_APP_MOVIE_API_URL name, so substitute it explicitly at build time.
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_MOVIE_API_URL': JSON.stringify(
      process.env.REACT_APP_MOVIE_API_URL || ''
    ),
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
