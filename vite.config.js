import { defineConfig } from "vite";

export default defineConfig({
  base: import.meta.env.VITE_GITHUB_PAGES === "true" ? "/thejasonstore/" : "/",
  rollupOptions: {
    input: "index.html",
  },
});
