import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // componentのscssで共通でimportするstyleの指定
        additionalData: `@import "@/stylesheets";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    // library mode でビルド
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "lapras-frontend",
      fileName: "lapras-frontend",
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          // vue-cliでのbuild時の命名に合わせる
          if (assetInfo.name === 'style.css') return 'lapras-frontend.css';
          return assetInfo.name ?? '';
        }
      },
    },
  },
});
