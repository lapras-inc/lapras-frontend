import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from './package.json'
import { resolve } from 'path'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/stylesheets";
        `,
      },
    },
  },
  build: {
    lib: {
      name,
      entry: 'src/main.ts',
    },
    rollupOptions: {
      external: ['svelte-jsoneditor/dist/jsoneditor.js', 'vue', 'vue-demi'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
})
