import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vue(), dts()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ["cjs", "es"],
      name: "ButtonPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
