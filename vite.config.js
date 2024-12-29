import { defineConfig } from "vite";

export default defineConfig({
  base: import.meta.env.GITHUB_PAGES ? '/thejasonstore/' : '/',

    rollupOptions: {
      input: "index.html",
    },
  });