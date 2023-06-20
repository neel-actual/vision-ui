import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'vision-ui',
      fileName: (format) => `vision-ui.${format}.js`
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
