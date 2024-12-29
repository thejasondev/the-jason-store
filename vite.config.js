import { defineConfig } from "vite";

export default defineConfig({
  base: import.meta.env.GITHUB_PAGES ? "/the-jason-store/" : "/",
  build: {
    // rollupOptions es opcional porque "index.html" es el valor predeterminado
    rollupOptions: {
      input: "index.html",
    },
  },
});
